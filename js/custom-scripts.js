$(document).ready(function () {

    /*** initial scripts **/



    /*** end of initial scripts **/


    /** scripts for adaptive **

    if ($(window).width() < '981'){

    } else {

    }

    $(window).resize(function(){
        if ($(window).width() < '981'){

        } else {

        }
    });

    /** end of scripts for adaptive **/

    /*** scripts for sliders **/

    $('.slider-trustees').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /*** end of scripts for sliders **/

    /*** others scripts **/

    $('.mobile-nav').click(function() {
        $(this).toggleClass('active');
        $('nav ul').slideToggle();
    });
    $('.mobile-header-menu').click(function() {
        $(this).toggleClass('active');
        $('.header-menu ul').slideToggle();
    });

    $(function($) {
        $('.checked-form').validatr({
            showall: true
        });
    });

    $('input[type="submit"]').click(function() {
        $(this).parents('form').find('.form-field:invalid').addClass('invalid-field');
        $(this).parents('form').find('.form-field:valid').addClass('valid-field');
    });
});
