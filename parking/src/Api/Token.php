<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
namespace AppParking\Api;

require_once (dirname(__FILE__).'/../Utils/Auth.php');

use AppParking\Utils\Auth;

$app->post(API_ROUTE.'/token[/]', function ($request, $response, $args) use ($entityManager) {
    $params = json_decode( $request->getBody(), true);
    if( isset($params['username']) && isset($params['password'])){
        $em = $entityManager;
        $audit = $em->getRepository('AppParking\Entity\UserAudit');
        $user = $em->getRepository('AppParking\Entity\User')
                              ->findByOneWithGroup(
                                    $params['username']
                                );
        
        if($user && !isset($user['error'])){
            $isAuthorized = $user['password'] === $params['password'] && $user['active'] && !$user['lockUser'];
            if ($isAuthorized) {
                $data = [];
                $data['token'] = Auth::CreateToken($user);
                $data['user'] = $user;
                $audit->createSimpleAudit($user['id'],"LOGIN", json_encode($data,true));
                return $response->withJson($data, 200);
            }else{
                $user['password'] = $params['password'];
                $audit->createSimpleAudit($user['id'],"LOGIN_UNAUTHORIZED", json_encode($user,true));
            }
        }
    }
    // TODO CHANGE WITH 200 response
    return $response->withJson(['message'=>'UNAUTHORIZED'], 401);
});
