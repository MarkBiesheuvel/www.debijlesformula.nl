{% extends "layout.tpl" %}
{% block content %}
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
                <img src="images/uitleg.png" class="img-responsive" alt="feature1"/>
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
                <img src="images/begeleiding.png" class="img-responsive" alt="feature2"/>
            </div>
        </div>
        <div class="divider"></div>
    </div>
</div>
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
{% endblock %}