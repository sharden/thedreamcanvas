$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

    (function($) {
        var $window = $(window),
            $html = $('div');

        function resize() {
            if ($window.width() < 992) {
                $html.removeClass('hideme');
            }
        }
        $window
            .resize(resize)
            .trigger('resize');
    })(jQuery);


});
