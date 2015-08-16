(function (window, document, mf) {

    if (window.location.href.match(/dev\.debijlesformule\.nl/) === null) {

        window._mfq = window._mfq || [];

        mf = document.createElement("script");
        mf.type = "text/javascript";
        mf.async = true;
        mf.src = "//cdn.mouseflow.com/projects/a14890ed-a675-4f28-9760-338ee63b7386.js";
        document.getElementsByTagName("head")[0].appendChild(mf);
    }

})(window, document);