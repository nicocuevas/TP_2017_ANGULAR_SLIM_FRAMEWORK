<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
namespace AppParking\Middleware;

use AppParking\Utils\Auth;
use Exception;


class CommonMiddleware
{
    public function __invoke($request, $response, $next)
    {
        // check token && get params
        if($request->hasHeader('Authorization')){

            if($request->isGet()){
                $params = $request->getQueryParams();
            }else{
                $params = json_decode($request->getBody(), true);
            }
            $varyHeader = $request->getHeader('Authorization');
            try{
                $token = Auth::check($varyHeader[0]) ? Auth::GetData($varyHeader[0]): NULL;
            }catch (Exception $e) {
                $msg = str_replace(" ","_",strtoupper($e->getMessage()));
                return $response->withJson(['message'=>$msg], 401);
            }
            
            // TODO CHECK token expiration time
            $request = $request->withAttribute('user', $token->data );
            $request = $request->withAttribute('params', $params);
        
            $response = $next($request, $response);
        }else{
            return $response->withJson(['message'=>'UNAUTHORIZED'], 401);
        }

        return $response;
    }
}


class CommonMiddlewareUnsafe
{
    public function __invoke($request, $response, $next)
    {
        // check token && get params

        if($request->isGet()){
            $params = $request->getQueryParams();
        }else{
            $params = json_decode($request->getBody(), true);
        }
        
        $request = $request->withAttribute('params', $params);
        
        $response = $next($request, $response);


        return $response;
    }
}