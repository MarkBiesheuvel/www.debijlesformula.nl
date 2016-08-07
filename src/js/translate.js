(function (document, byId, block, none) {

    var english = document[byId]('english');
    var dutch = document[byId]('dutch');
    var button = document[byId]('translate-button');
    var isEnglish = true;
    var setDisplay = function (element, value) {
        element.style.display = value;
    };

    button.addEventListener('click', function () {

        if (isEnglish) {
            setDisplay(dutch, block);
            setDisplay(english, none);
            button.innerHTML = '[Origineel]';
        } else {
            setDisplay(dutch, none);
            setDisplay(english, block);
            button.innerHTML = '[Vertaal]';
        }
        isEnglish ^= true
    });

})(document, 'getElementById', 'block', 'none');