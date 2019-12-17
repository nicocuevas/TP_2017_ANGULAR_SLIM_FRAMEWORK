<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

include (dirname(__FILE__).'/../../settings.php');

require_once (dirname(__FILE__).'/../Entity/_Entities.php');
require_once (dirname(__FILE__).'/../Repository/_Repositories.php');

require_once (dirname(__FILE__).'/../Middleware/CommonMiddleware.php');
require_once (dirname(__FILE__).'/../Api/_Endpoints.php');

use AppParking\Entity\Lot;
// Add route callbacks



$app->get('/api/test', function ($request, $response) use ($entityManager){

    $user = NULL;
   /* $em = $entityManager;
                $pk = $em->getRepository('AppParking\Entity\Parking')
                                  ->findById(1,false);

                $sct = $em->getRepository('AppParking\Entity\SectionType')
                                  ->findById(1,false);
                
                $sc =  $em->getRepository('AppParking\Entity\Section')
                                  ->findById(3,false);

                $lt =  $em->getRepository('AppParking\Entity\Lot')
                                  ->findAllObjects(4);*/
                
                
                /*$pk->addSection($sc);
                $em->persist($pk);
                $em->flush();*/
            $em = $entityManager;
                /*$lt = $em->getRepository('AppParking\Entity\Vehicle')
                                  ->findAllObjects(
                                    1,
                                    10,
                                    ['field'=>'plate','type'=>'desc'],
                                    ['field'=>'plate','value'=>'']);*/

             /* $lt = $em->getRepository('AppParking\Entity\RentLot')
                                  ->findAllObjects(1,50,['field'=>'rentlot.id','type'=>'desc'],
                                    ['filters'=>[['field'=>'vehicle.id','value'=>'14','type'=>'eq'],
                                    ['field'=>'rentStatus.id','value'=>'2','type'=>'eq']]]);*/


              $queryFilters = array('where'=>[
                'filters'=>[
                    ["field"=>'rentlot.startTime', "value"=>'2017-11-01', "type"=>'gte', "format"=>'date'],
                    ["field"=>'rentlot.startTime', "value"=>'2017-12-31', "type"=>'lte', "format"=>'date'],
                ]]);

              
              /*$l = $em->getRepository('AppParking\Entity\RentLot')
                                  ->findAllObjects(['page'=>0,'limit'=>100,'where'=>null,'orderBy'=>null]);*/
              $l = $em->getRepository('AppParking\Entity\RentLot')
                                  ->generateLotsReportData($queryFilters);


              /*$queryFilters = ['limit'=>1000];
              $l = $em->getRepository('AppParking\Entity\RentLot')
                      ->findAll();
              foreach ($l as $value) {
                $value->setStartTime($value->getCreatedAt());
                $em->persist($value);
                $em->flush($value);
              }*/
              
            return $response->withJson($l, 200);


});

$app->group('/api/info', function () use ($app, $entityManager){

        $app->get('/', function ($request, $response, $args) use ($app, $entityManager) {
          $routes = $app->getContainer()->router->getRoutes();
        // And then iterate over $routes
        $url = [];
        foreach ($routes as $route) {
            $url[] =  ['pattern'=>$route->getPattern(),
            'name' => $route->getName(),
            'groups' => $route->getGroups(),
            'methods' => $route->getMethods(),
            'arguments' => $route->getArguments()];

        }
          return $response->withJson($url, 200);
        });
    });

// Run application
$app->run();