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

    $('.slider-effect').slick({
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

    $('.slider-volunteers').slick({
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
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    var projectSlider = $('.slider-single-project');
    projectSlider.slick({
        arrows: false
    });
    projectSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.slider-single-project-controls li').eq(currentSlide).removeClass('active');
        $('.slider-single-project-controls li').eq(nextSlide).addClass('active');
    });
    $('.slider-single-project-controls li').click(function() {
        var nextSlide = $(this).index();
        projectSlider.slick('slickGoTo', nextSlide);
    });

    $('#slider-video').lightGallery();

    $('.slider-video').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-documents').slick({
        slidesToShow: 3,
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
        $('form').validatr({
            showall: true
        });
    });

    $('.form-submit').click(function() {
        $(this).parents('form').find('.form-field:invalid').addClass('invalid-field');
        $(this).parents('form').find('.form-field:valid').addClass('valid-field');
        $(this).parents('form').find('.no-checked').removeClass('valid-field invalid-field');
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

    $('.single-news .show-all').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.news-data').toggleClass('active');
        return false;
    });

    $('.tab-controls li').click(function() {
        if(!$(this).hasClass('active')) {
            var index = $(this).index();
            console.log(index);
            $('.tab-controls .active').removeClass('active');
            $('.tabs .active').removeClass('active');
            $(this).addClass('active');
            $('.tabs>li').eq(index).addClass('active');
;        }
    });

    $('.be-volunteer').click(function () {
        $('.window-volunteers').fadeIn();
    });
    $('.window-volunteers').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-be-volunteer')).length) $('.window-volunteers').fadeOut();
    });

    $( function() {
        $( ".datepicker-here" ).datepicker({
            dateFormat: "dd.mm.yy",
            changeYear: true,
            yearRange: "-80:2000",
            monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
            monthNamesShort: [ "Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
            firstDay: 1,
            dayNames: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
            dayNamesShort: [ "Вскрс", "Пон", "Втор", "Сред", "Четв", "Пят", "Суб" ],
            dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
            defaultDate: '01.01.2000'
        });
    });
    
    $('.choose-skills .field-checkbox').on('change', function() {
        if(document.getElementById('be-volunteer-skills-6').checked) {
            $('.skills-other-wrap').fadeIn();
        } else {
            $('.skills-other-wrap').fadeOut();
        }
    });

    $('.callback').click(function () {
        $('.window-callback').fadeIn();
    });
    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback')).length) $('.window-callback').fadeOut();
    });

    $('input[type="tel"]').mask("+7 ( 999 ) 999 - 99 - 99");
    $('input[type="tel"]').click(function() {
        $(this).focus();
    });


});
