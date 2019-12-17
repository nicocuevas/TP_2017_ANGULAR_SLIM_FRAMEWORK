<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
namespace AppParking\Api;

use AppParking\Middleware\CommonMiddleware;
use AppParking\Api\Reusable\EndpointTrait;

$app->group(API_ROUTE, function () use ($app, $entityManager) {

    $app->group('/section', function () use ($app, $entityManager){
        
        $app->get('/all[/]', function ($request, $response, $args) use ($entityManager) {

            $params = $request->getAttribute('params');

            $query = EndpointTrait::getRequestParams($params);

            $list = $entityManager->getRepository('AppParking\Entity\Section')
                                  ->findAllObjects($query);
            if(isset($list['error'])){
               return $response->withJson(['response'=>'nok','message'=>$list['error']], 200);
            }
            return $response->withJson($list, 200);
        });

        $app->get('/{id}[/]', function ($request, $response, $args) use ($entityManager) {
            $obj = NULL;
            if(isset($args['id'])){
                $obj = $entityManager->getRepository('AppParking\Entity\Section')
                              ->findById($args['id']);
                if(isset($obj['error'])){
                   return $response->withJson(['response'=>'nok','message'=>$obj['error']], 200);
                }
            }else{
                return $response->withJson(['response'=>'nok'], 400);
            }

            return $response->withJson($obj[0], 200);
        });

        $app->post('[/]', function ($request, $response, $args) use ($entityManager){
            $obj = NULL;
            $params = $request->getAttribute('params');
            if($params){
                $em = $entityManager->getRepository('AppParking\Entity\Section');
                $obj = $em->create($params);
                if(isset($obj['error'])){
                   return $response->withJson(['response'=>'nok','message'=>$obj['error']], 200);
                }
            }else{
                return $response->withJson(['response'=>'nok'], 400);
            }
            
            return $response->withJson(['response'=>'ok','message'=>'object created'], 201);
        });

        $app->put('/{id}[/]', function ($request, $response, $args) use ($entityManager){
            $obj = NULL;
            $params = $request->getAttribute('params');
            if(isset($args['id']) && $params){
                $em = $entityManager->getRepository('AppParking\Entity\Section');
                $obj = $em->update($args['id'], $params);
                if(isset($obj['error'])){
                   return $response->withJson(['response'=>'nok','message'=>$obj['error']], 200);
                }
            }else{
                return $response->withJson(['response'=>'nok'], 400);
            }
            

            return $response->withJson(['response'=>'ok','message'=>'object updated'], 200);
        });
        
        $app->patch('[/]', function ($request, $response, $args) use ($entityManager){

            return $response->withJson(['response'=>'ok','message'=>'not implemented yet'], 200);
        });

        $app->delete('/{id}[/]', function ($request, $response, $args) use ($entityManager){

            return $response->withJson(['response'=>'ok','message'=>'not implemented yet'], 200);
        });

        // TODO : Add info endpoint

    });
})->add(new CommonMiddleware());
