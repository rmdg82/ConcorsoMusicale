/* Some scripts */

$(function () {
    "use strict";

    /* Enable Tooltips */
    $('[data-toggle="tooltip"]').tooltip();

    /* Scroll to section from .js-scroll-trigger */
    $('.js-scroll-trigger').click(function () {
        var sectionTo = $(this).attr('href');
        console.log(sectionTo);
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top - 50
        }, 1500);
    });

    /* Scroll spy */

});
