<?php

// Activate autloading
require 'vendor/autoload.php';

// Initiate app
$app = new \Slim\Slim(array(
    'debug' => true,
    'view' => new \Slim\Views\Twig(),
    'log.writer' => new \Slim\Logger\DateTimeFileWriter(),
));


// Custom view settings
$app->view()->parserOptions = array(
    'debug' => true,
    'cache' => dirname(__FILE__) . '/cache'
);
$app->view()->parserExtensions = array(
    new \Slim\Views\TwigExtension(),
);

// Routes
$app->get('/', function () use ($app) {
    $app->render('home.tpl', array(
        'body_id' => 'home',
        'header_class' => 'hero',
    ));
});

$app->get('/over-mij', function () use ($app) {
    $app->render('over-mij.tpl', array(
        'body_id' => 'about-us',
        'header_class' => 'normal',
    ));
});

$app->get('/pakketen', function () use ($app) {
    $app->render('pakketen.tpl', array(
        'body_id' => 'pricing',
        'header_class' => 'normal',
    ));
});

$app->get('/contact', function () use ($app) {
    $app->render('contact.tpl', array(
        'body_id' => 'contact-us',
        'header_class' => 'normal',
    ));
});

$app->run();