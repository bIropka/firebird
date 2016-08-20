$(document).ready(function () {

    /*** initial scripts **/



    /*** end of initial scripts **/


    /** scripts for adaptive **/

    if ($(window).width() < '981'){
        $('nav ul').css('display', 'none');
        $('.header-menu ul').css('display', 'none');
    } else {
        $('nav ul').css('display', 'block');
        $('.header-menu ul').css('display', 'block');
    }

    $(window).resize(function(){
        if ($(window).width() < '981'){
            $('nav ul').css('display', 'none');
            $('.header-menu ul').css('display', 'none');
        } else {
            $('nav ul').css('display', 'block');
            $('.header-menu ul').css('display', 'block');
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

    $('.slider-partners').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
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

    $('.custom-select .current-value').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('.custom-select ul li').click(function() {
        var currentValue = $(this).html();
        $(this).parents('.custom-select').find('input').attr('value', currentValue);
        $(this).parents('.custom-select').find('.current-value').html(currentValue);
        $(this).parents('.custom-select').removeClass('active');
    });


});
