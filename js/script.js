$(function(){

    $('[data-toggle=collapse]').each(function(){

        var $el = $(this);
        var $target = $($el.data('target'));

        $el.on('click', function(){
            $target.toggle();
        });

    });

});