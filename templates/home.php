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
<body id="home">
<header class="navbar navbar-inverse hero" role="banner">
    <div class="container">
        <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="home.php" class="navbar-brand">Wiskunde bijles</a>
        </div>
        <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        Over mij
                    </a>
                </li>
                <li>
                    <a href="#">
                        Pakketen
                    </a>
                </li>
                <li>
                    <a href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>

<div id="hero">
    <div class="container">
        <h1 class="hero-text animated fadeInDown">
            De beste wiskunde <br/>bijles <br/>
            in Noord-Brabant
        </h1>

        <p class="sub-text animated fadeInDown">
            Verhoog je gemiddeld binnen enkele weken
        </p>

        <div class="cta animated fadeInDown">
            <a href="features.html" class="button-outline">Vraag een intake gesprek aan</a>
        </div>
        <div class="img"></div>
    </div>
</div>

<div id="features">
    <div class="container">
        <div class="row header">
            <div class="col-md-12">
                <h2>Snel hulp nodig om een hoger gemiddelde te halen?</h2>

                <p>
                    Begeleiding bij het maken van wiskunde huiswerk en voorbereiden van proefwerken.
                    Bij jou thuis.
                </p>
            </div>
        </div>
        <div class="row feature">
            <div class="col-md-6 info">
                <h4>Is het kwartje nog niet gevallen?</h4>

                <p>
                    Ben je met een nieuw onderwerp begonnen tijdens wiskunde,
                    maar heb je nog steeds moeite dit onderwerp onder de knie te krijgen.
                    Met een aantal bijlessen voor het proefwerk kun je alsnog een voldoende scoren.
                </p>
            </div>
            <div class="col-md-6 image">
                <img src="images/feature1.png" class="img-responsive" alt="feature1"/>
            </div>
        </div>
        <div class="divider"></div>
        <div class="row feature backwards">
            <div class="col-md-6 info">
                <h4>Wiskunde nodig voor je vervolgstudie?</h4>

                <p>
                    Ligt wiskunde jou niet goed, maar zit het toch in je profiel
                    omdat je het nodig hebt voor je droom studie ...
                </p>
            </div>
            <div class="col-md-6 image">
                <img src="images/feature2.png" class="img-responsive" alt="feature2"/>
            </div>
        </div>
        <div class="divider"></div>
    </div>
</div>
<?php /*
<div id="pricing">
    <div class="container">
        <div class="row header">
            <div class="col-md-12">
                <h3>Bespaar door meerdere uren tegelijk te reserveren.</h3>
                <p>Er hoeven geen reiskosten betaald te worden.</p>
            </div>
        </div>
        <div class="row charts">
            <div class="col-md-3">
                <div class="chart first">
                    <div class="quantity">
                        <span class="dollar">&euro;</span>
                        <span class="price">270</span>
                    </div>
                    <div class="plan-name">Pakket ɛ</div>
                    <div class="specs">
                        <div class="spec">
                            <span class="variable">6</span>
                            uren
                        </div>
                        <div class="spec">
                            <span class="variable">&euro;45</span>
                            per uur
                        </div>
                        <div class="spec">
                            <span class="variable">&euro;30</span>
                            korting
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="chart">
                    <div class="quantity">
                        <span class="dollar">&euro;</span>
                        <span class="price">480</span>
                    </div>
                    <div class="plan-name">Pakket φ</div>
                    <div class="specs">
                        <div class="spec">
                            <span class="variable">12</span>
                            uren
                        </div>
                        <div class="spec">
                            <span class="variable">&euro;40</span>
                            per uur
                        </div>
                        <div class="spec">
                            <span class="variable">&euro;120</span>
                            korting
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="chart last">
                    <div class="quantity">
                        <span class="dollar">&euro;</span>
                        <span class="price">840</span>
                    </div>
                    <div class="plan-name">Pakket π</div>
                    <div class="specs">
                        <div class="spec">
                            <span class="variable">24</span>
                            uren
                        </div>
                        <div class="spec">
                            <span class="variable">&euro;35</span>
                            per uur
                        </div>
                        <div class="spec">
                            <span class="variable">&euro;360</span>
                            korting
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="chart first">
                    <div class="quantity">
                        <span class="dollar">&euro;</span>
                        <span class="price">50</span>
                    </div>
                    <div class="plan-name">Losse les</div>
                    <p class="description">
                        Wil je snel 1 of 2 lessen om voor een proefwerk voor te bereiden?
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
*/ ?>
<div id="testimonials">
    <div class="container">
        <div class="row header">
            <div class="col-md-12">
                <h3>Referentie van andere klanten</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="testimonial pull-right">
                    <div class="quote">

                        <p>
                            Ik vond Mark een uitstekende bijlesdocent: geduldig, serieus en doelgericht. Het was
                            prettig dat we zowel de stof in het boek behandelden, evenals opgaves die hij voor mij
                            bedacht. Zo kon ik toch meer grip op de, voor mij immer lastige stof krijgen.
                        </p>
                        <p>
                            Ook was het nuttig dat we naar een proefwerk van mij gekeken hebben. We hebben ons daarna
                            sterk gefocusd op de dingen waar ik het meeste moeite mee had. Ook qua communicatie
                            verliep alles goed en je was immer stipt op tijd.
                        </p>
                        <p>
                            Voor mij zijn de bijlessen meer dan nuttig geweest en ze gaven me net die steun om mijn
                            vwo-diploma te halen. Ik kijk er dan ook met een louter goed gevoel op terug.
                        </p>
                        <div class="arrow-down">
                            <div class="arrow"></div>
                            <div class="arrow-border"></div>
                        </div>
                    </div>
                    <div class="author">
                        <img src="../images/testimonials/max.jpg" class="pic" alt="Max Tromp"/>

                        <div class="name">Max Tromp</div>
                        <div class="company">Wiskunde A, 5/6VWO</div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="testimonial">
                    <div class="quote">
                        <p>
                            Ik heb één keer bijles gehad van Mark en dat me enige voldoende dit jaar.
                        </p>
                        <div class="arrow-down">
                            <div class="arrow"></div>
                            <div class="arrow-border"></div>
                        </div>
                    </div>
                    <div class="author">
                        <img src="../images/testimonials/marianne.jpg" class="pic" alt="testimonial2"/>

                        <div class="name">Marianne Griemink</div>
                        <div class="company">Wiskunde A, 3HAVO</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>