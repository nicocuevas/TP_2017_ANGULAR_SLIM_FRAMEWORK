<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
require_once "vendor/autoload.php";

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
use Doctrine\Common\Annotations\AnnotationReader;
// Load entity configuration from PHP file annotations
// This is the most versatile mode, I advise using it!
// If you don't like it, Doctrine also supports YAML or XML
$isDevMode = true;
$paths = array(dirname(__FILE__)."/src");

// Set up database connection data
$conn = array(
    'driver'   => 'pdo_mysql',
    'host'     => '127.0.0.1',
    'dbname'   => 'parking',
    'user'     => 'root',
    'password' => ''
);
$cache = new \Doctrine\Common\Cache\ArrayCache();
$reader = new AnnotationReader();
$driver = new \Doctrine\ORM\Mapping\Driver\AnnotationDriver($reader, $paths);
$config = Setup::createAnnotationMetadataConfiguration($paths, $isDevMode, null, null, false);
$config->setMetadataCacheImpl( $cache );
$config->setQueryCacheImpl( $cache );
$config->setMetadataDriverImpl( $driver );
$entityManager = EntityManager::create($conn, $config);
//-- This I had to add to support the Mysql enum type.
$platform = $entityManager->getConnection()->getDatabasePlatform();
$platform->registerDoctrineTypeMapping('enum', 'string');


// API CONF
define('API_ROUTE', '/api');
define('PUBLIC_FILES_PATH', dirname(__FILE__)."/src/public/files/");
define('ALLOW_MULTIPLE_USER_GROUPS', FALSE);


$api_config = [
    'settings' => [
        'displayErrorDetails' => true,
        'addContentLengthHeader' => false
    ],
];

$container = new \Slim\Container($api_config);

$app = new \Slim\App($container);

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Credentials', 'true')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});