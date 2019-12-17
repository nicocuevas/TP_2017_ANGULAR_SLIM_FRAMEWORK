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

    $app->group('/user', function () use ($app, $entityManager){
        
        $app->get('/all[/]', function ($request, $response, $args) use ($entityManager) {

            $params = $request->getAttribute('params');

            $query = EndpointTrait::getRequestParams($params);

            $list = $entityManager->getRepository('AppParking\Entity\User')
                                  ->findAllObjects($query);
            if(isset($list['error'])){
               return $response->withJson(['response'=>'nok','message'=>$list['error']], 200);
            }
            return $response->withJson($list, 200);
        });

        $app->get('/{id}', function ($request, $response, $args) use ($entityManager) {
            $obj = NULL;
            if(isset($args['id'])){
                $obj = $entityManager->getRepository('AppParking\Entity\User')
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
            $user = $request->getAttribute('user');
            $em = $entityManager;
            $audit = $em->getRepository('AppParking\Entity\UserAudit');

            if($params){
                $em = $entityManager->getRepository('AppParking\Entity\User');
                $obj = $em->create($params);
                if(isset($obj['error'])){
                   $audit->createSimpleAudit($user->id,"CREATE_USER_FAIL", json_encode(["params"=>$params],true));
                   return $response->withJson(['response'=>'nok','message'=>$obj['error']], 200);
                }
                $audit->createSimpleAudit($user->id,"CREATE_USER", json_encode(["params"=>$params],true));
            }else{
                $audit->createSimpleAudit($user->id,"CREATE_USER_FAIL", json_encode(["params"=>$params],true));
                return $response->withJson(['response'=>'nok'], 400);
            }
            
            return $response->withJson(['response'=>'ok','message'=>'object created'], 201);
        });

        $app->put('/{id}[/]', function ($request, $response, $args) use ($entityManager){
            $obj = NULL;
            $params = $request->getAttribute('params');
            $user = $request->getAttribute('user');
            $em = $entityManager;
            $audit = $em->getRepository('AppParking\Entity\UserAudit');

            if(isset($args['id']) && $params){
                $em = $entityManager->getRepository('AppParking\Entity\User');
                $obj = $em->update($args['id'], $params);
                if(isset($obj['error'])){
                   $audit->createSimpleAudit($user->id,"UPDATE_USER_FAIL", json_encode(["id"=>$args['id'],"params"=>$params],true));
                   return $response->withJson(['response'=>'nok','message'=>$obj['error']], 200);
                }
                $audit->createSimpleAudit($user->id,"UPDATE_USER", json_encode(["id"=>$args['id'],"params"=>$params],true));
            }else{
                $audit->createSimpleAudit($user->id,"UPDATE_USER_FAIL", json_encode(["id"=>$args['id'],"params"=>$params],true));
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
