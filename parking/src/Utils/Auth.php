<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
namespace AppParking\Utils;

use Firebase\JWT\JWT;
use Exception;


class Auth
{
    private static $secret_key = 'Sdw1sruoee&!T!T9x8@';
    private static $encrypt = ['HS256'];
    private static $aud = null;
    
    public static function CreateToken($data)
    {
        $time = time();
        $token = array(
            'exp' => $time + (60*60*24),
            'aud' => self::Aud(),
            'data' => $data
        );

        return JWT::encode($token, self::$secret_key);
    }
    
    public static function Check($token)
    {
        if(empty($token))
        {
            throw new Exception("Invalid token supplied.");
        }
        
        try{
            $decode = JWT::decode(
                $token,
                self::$secret_key,
                self::$encrypt
            );
        }catch (\Firebase\JWT\SignatureInvalidException $e) {
            throw new Exception("Invalid token supplied.");
        }
        
        
        if($decode->aud !== self::Aud())
        {
            throw new Exception("Invalid user logged in.");
        }
        
        return true;
    }
    
    public static function GetData($token)
    {
        return JWT::decode(
            $token,
            self::$secret_key,
            self::$encrypt
        );
    }
    
    private static function Aud()
    {
        $aud = '';
        
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $aud = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $aud = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $aud = $_SERVER['REMOTE_ADDR'];
        }
        
        $aud .= @$_SERVER['HTTP_USER_AGENT'];
        $aud .= gethostname();
        
        return sha1($aud);
    }
}