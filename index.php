<?php

session_cache_limiter(false);
session_start();

// Activate autloading
require 'vendor/autoload.php';

// Initiate app
$app = new \Slim\Slim(array(
    'mode' => getenv('MODE'),
    'view' => new \Slim\Views\Twig(),
));

// Settings for production
$app->configureMode('production', function () use ($app) {
    $app->config(array(
        'debug' => false,
        'log.enabled' => false,
    ));
});

// Settings for development
$app->configureMode('development', function () use ($app) {
    $app->config(array(
        'debug' => true,
        'log.enabled' => true,
        'log.writer' => new \Slim\Logger\DateTimeFileWriter(),
    ));
});

// Custom view settings
$app->view()->parserOptions = array(
    'debug' => true,
    'cache' => dirname(__FILE__) . '/cache',
    'strict_variables' => false,
);
$app->view()->parserExtensions = array(
    new \Slim\Views\TwigExtension(),
);

// Routes
$app->get('/', function () use ($app) {
    $app->render('pages/home.html.twig', array(
        'body_id' => 'home',
        'html_title' => 'Bijles wiskunde A, B, C en D',
        'html_description' => 'Kan je wel wat bijles wiskunde gebruiken? Neem dan contact op met De Bijlesformule.',
        'header_class' => 'hero',
        'js_min' => file_get_contents('includes/script.min.js'),
    ));
});

$app->get('/eindhoven', function () use ($app) {
    $app->render('pages/eindhoven.html.twig', array(
        'body_id' => 'eindhoven',
        'html_title' => 'Bijles wiskunde A, B, C en D in Eindhoven',
        'html_description' => 'De Bijlesformule geeft wiskundebijles in Eindhoven. Kan je wel wat bijles wiskunde gebruiken? Neem dan contact op met De Bijlesformule.',
        'header_class' => 'normal',
        'js_min' => file_get_contents('includes/script.min.js'),
    ));
});

$app->get('/over-mij', function () use ($app) {
    $app->render('pages/over-mij.html.twig', array(
        'body_id' => 'about-us',
        'html_title' => 'Over mij',
        'header_class' => 'normal',
        'js_min' => file_get_contents('includes/script.min.js'),
    ));
});

$app->get('/pakketten', function () use ($app) {

    $app->render('pages/pakketten.html.twig', array(
        'body_id' => 'pricing',
        'html_title' => 'Pakketten',
        'header_class' => 'normal',
        'js_min' => file_get_contents('includes/script.min.js'),
        'default_rate' => 25,
        'packages' => array(
            array(
                'name' => 'Pakket A',
                'class' => 'first',
                'price' => 135,
                'hours' => 6,
            ),
            array(
                'name' => 'Pakket B',
                'class' => 'featured',
                'price' => 240,
                'hours' => 12,
            ),
            array(
                'name' => 'Pakket C',
                'class' => 'last',
                'price' => 420,
                'hours' => 24,
            ),
        ),
    ));
});

$app->get('/contact', function () use ($app) {

    $question = $app->request->get('vraag');

    switch($question){
        case 'kennismakingsgesprek':
            $message = 'Zou je contact met mij kunnen opnemen om een kennismakingsgesprek in te plannen?';
            break;
        case 'Pakket A':
        case 'Pakket B':
        case 'Pakket C':
            $message = 'Graag zou ik ' . $question . ' willen gebruiken.'
                . ' Wanneer is het mogelijk om de eerste bijles te houden?';
            break;
        case 'beschikbaarheid':
            $message = 'Op welke dagen zou jij bijles kunnen geven?';
            break;
        default:
            $message = '';
    }

    $app->render('pages/contact.html.twig', array(
        'body_id' => 'contact-us',
        'html_title'=> 'Contact',
        'header_class' => 'normal',
        'js_min' => file_get_contents('includes/script.min.js'),
        'message' => $message,
    ));
});

$app->get('/bedankt-voor-uw-vraag', function() use ($app){
    $app->render('pages/bedankt.html.twig', array(
        'body_id' => '',
        'html_title' => 'Bedankt voor uw vraag',
        'header_class' => 'normal',
        'js_min' => file_get_contents('includes/script.min.js'),
    ));
});

$app->run();