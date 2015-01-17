<header class="navbar navbar-inverse {{header_class}}" role="banner">
    <div class="container">
        <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="{{ siteUrl('/') }}" class="navbar-brand">Wiskunde bijles</a>
        </div>
        <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="{{ siteUrl('/') }}">
                        Home
                    </a>
                </li>
                <li>
                    <a href="{{ siteUrl('/over-mij') }}">
                        Over mij
                    </a>
                </li>
                <li>
                    <a href="{{ siteUrl('/pakketen') }}">
                        Pakketen
                    </a>
                </li>
                <li>
                    <a href="{{ siteUrl('/contact') }}">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>