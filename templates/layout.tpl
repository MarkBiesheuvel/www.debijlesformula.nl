<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>Wiskunde bijles</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <!-- stylesheets -->
    <link rel="stylesheet" type="text/css" href="../css/compiled/theme.css">
    <link rel="stylesheet" type="text/css" href="../css/vendor/animate.css">

    <!-- javascript -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="../js/bootstrap/bootstrap.min.js"></script>
    <script src="../js/theme.js"></script>

    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body id="{{body_id}}">
{% include "header.tpl" %}
{% block content %}{% endblock %}
</body>
</html>