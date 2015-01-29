(function(window){

    // Creates an initial ga() function.  The queued commands will be executed once analytics.js loads.
    window.ga = window.ga || function(){
        (ga.q = ga.q || []).push(arguments);
    };

    // Sets the time (as an integer) this tag was executed.  Used for timing hits.
    ga.l =+ new Date();

    ga('create', 'UA-52149438-2', 'auto'); // Creates the tracker with default parameters
    ga('send', 'pageview'); // Sends a pageview hit.
})(window);

