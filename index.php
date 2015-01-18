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
    $app->render('home.html.twig', array(
        'body_id' => 'home',
        'header_class' => 'hero',
    ));
});

$app->get('/over-mij', function () use ($app) {
    $app->render('over-mij.html.twig', array(
        'body_id' => 'about-us',
        'header_class' => 'normal',
    ));
});

$app->get('/pakketen', function () use ($app) {
    $app->render('pakketen.html.twig', array(
        'body_id' => 'pricing',
        'header_class' => 'normal',
    ));
});

$app->get('/contact', function () use ($app) {
    $app->render('contact.html.twig', array(
        'body_id' => 'contact-us',
        'header_class' => 'normal',
    ));
});

$app->post('/contact', function () use ($app) {
    $mandrill = new Mandrill();

    // TODO: render view

    /*/
    $name = 'Pietje';
    $text = 'Hoi, kan ik bijles krijgen?';

    $message = array(
        'html' => "<p>$name</p><p>$text</p>",
        'subject' => 'Contactformulier | ' . $name,
        'from_email' => 'info@wiskundebijl.es',
        'from_name' => 'Wiskundebijl.es',
        'to' => array(
            array(
                'email' => 'mail@markbiesheuvel.nl',
                'name' => 'Mark Biesheuvel',
                'type' => 'to'
            )
        ),
        'headers' => array('Reply-To' => 'mail@markbiesheuvel.nl'),
        'important' => false,
        'tags' => array('contact-form'),
        'track_opens' => false,
        'track_clicks' => false,
        'auto_text' => true,
    );

    $result = $mandrill->messages->send($message, false);
    /*/
    $result = array(0=>array('status'=>'sent'));
    //*/

    if($result[0]['status'] == 'sent'){
        $app->flash('info', 'Uw bericht is verzenden. Ik zal hier zo spoedig mogelijk op reageren.');
    }else{
        $app->flash('error', 'Er is iets mis gegaan tijdens het versuren van uw bericht. U kunt uw bericht ook mailen naar <a href="mailto:mail@markbiesheuvel.nl">mail@markbiesheuvel.nl</a>.');
    }
    $app->redirect('/contact');
});

$app->run();