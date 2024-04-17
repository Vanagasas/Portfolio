$(document).ready(function(){
    var height = screen.height;
    var navStatus = 0;
    // Hide all the elements
    $('.about-text').css({opacity: 0, visibility: "hidden", bottom: '-100px'});
    $('.about-header').css({opacity: 0, visibility: "hidden", bottom: '-100px'});
    $('.projects-img-container').css({opacity: 0, visibility: "hidden", bottom: '-100px'});
    $('.projects-header').css({opacity: 0, visibility: "hidden", bottom: '-100px'});
    $('.experience-text-container').css({opacity: 0, visibility: "hidden", bottom: '-100px'});
    $('.experience-header').css({opacity: 0, visibility: "hidden", bottom: '-100px'});
    $('.experience-text').css({opacity: 0, visibility: "hidden", bottom: '-100px'});


    //Set hight of all elements to screen hight
    $('main').css('min-height', height);
    $('#about').css('min-height', height);
    $('#projects').css('min-height', height);
    $('#experience').css('min-height', height);


    $('.about-text').hover(function(){
        $('.about-text').css('background-color', 'var(--dark-primary-color)');
        $(this).css('background-color', 'var(--light-primary-color)');

    })

    // Set animation variables

    var aboutAnimation = 0;
    var projectsAnimation = 0;
    var experienceAnimation = 0;

    // Check if user scrolled to the content and animate it

    $(window).scroll(function(){
        var newHeight = $(this).scrollTop() + height * 1/3;
        if (newHeight > $('#about').offset().top && aboutAnimation == 0) {
            scrollAnimation('.about-header', '.about-text');
            aboutAnimation = 1;
        }
        else if (newHeight > $('#projects').offset().top && projectsAnimation == 0){
            scrollAnimation('.projects-header', '.projects-img-container');
            projectsAnimation = 1;
        }
        else if (newHeight > $('#experience').offset().top && experienceAnimation == 0){
            scrollAnimation('.experience-header', '.experience-text-container', '.experience-text');
            experienceAnimation = 1;
        }

    });

    // Function to animate content on scroll

    function scrollAnimation(header, text, additional){
        $(header).delay(500).css({visibility: 'visible'}).animate({bottom: '0', opacity: 1 }, {duration: 500, queue: true});
        if (additional != null){
            $(additional).delay(1000).css({visibility: 'visible'}).animate({bottom: '0', opacity: 1 }, {duration: 500, queue: true});
        }
            jQuery(text).each(function(i) {
                i++;
                $(this).delay(i * 1000).css({visibility: 'visible'}).animate({bottom: '0', opacity: 1 }, {duration: 500, queue: true});
            })
    }

    // Scroll through naviagtion
    
    $(".nav-button").click(function() {
        var attribute = $(this).attr('name');
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + attribute).offset().top
        }, 500);
        if (navStatus == 1){
            menuClose();
        }
    });
    $('.nav-hire').click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    })

    // Expand Project

    $('.fa-expand').click(function(){
        $(this).closest('.projects-img-container').prependTo('.projects-container').fadeIn();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".projects-img-container").offset().top
        }, 500);
    });
    

    //Change Language

    $('.language-change').click(function(){
        var attr = $(this).attr('name');
        if (attr == 'en'){
            $('.lt').fadeOut(500);
            $('.en').delay(500).fadeIn(500);
        }
        else if (attr == 'lt'){
            $('.en').fadeOut(500);
            $('.lt').delay(500).fadeIn(500);
        }
    })

    // Open phone menu

    $('.phone-menu').click(function(){
        if (navStatus == 0){
            $('.navbar').css({width: '0%', height: '100%', backdropFilter: 'blur(10px)'}).animate({width: '100%'}, 1000);
            $('.language-change').css({display: 'block', marginTop: '1em'});
            $('.nav-button').css('display', 'block');
            $('.nav-hire').css('display', 'block');
            navStatus = 1;
        }
        else if (navStatus == 1){
            menuClose();
        }

    })

    // Close menu function

    function menuClose(){
        $('.navbar').animate({width: '0%'}, 1000);
        $('.language-change').fadeOut(700);
        $('.nav-button').fadeOut(700);
        $('.nav-hire').fadeOut(700);
        $('.navbar').css('backdrop-filter', 'blur(0)');
        navStatus = 0;
    }

    // Toggle overlay

    $('.projects-img-container').click(function(){
        if (window.innerWidth < 801){

            if ($(this).children('.overlay').css('display') == 'none'){
            $(this).children('.overlay').css('display', 'grid').animate({opacity: .8}, 500);

            }
            else{
                $(this).children('.overlay').animate({opacity: 0}, 500).css('display', 'none');
            }
        }
    })
});