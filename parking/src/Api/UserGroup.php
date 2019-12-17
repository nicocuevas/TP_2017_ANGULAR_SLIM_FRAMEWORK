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

    $app->group('/user-group', function () use ($app, $entityManager){
        
        $app->get('[/{page}/{limit}]', function ($request, $response, $args) use ($entityManager) {
            $groupList = $entityManager->getRepository('AppParking\Entity\UserGroup')
                                  ->findAllGroups();
            return $response->withJson($groupList, 200);
        });

        $app->get('/{id}[/]', function ($request, $response, $args) use ($entityManager) {
            $group = NULL;
            if(isset($args['id'])){
                $user = $entityManager->getRepository('AppParking\Entity\UserGroup')
                              ->find($args['id']);
            }
            return $response->withJson($user->getArrayData(), 200);
        });

    });
})->add(new CommonMiddleware());