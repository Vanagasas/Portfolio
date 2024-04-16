$(document).ready(function(){
    var height = screen.height;
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
    var about = $('#about').offset().top;
    var projects = $('#projects').offset().top;
    var experience = $('#experience').offset().top;

    var aboutAnimation = 0;
    var projectsAnimation = 0;
    var experienceAnimation = 0;

    $(window).scroll(function(){
        var newHeight = $(this).scrollTop() + height * 1/3;
        if (newHeight > about && aboutAnimation == 0) {
            scrollAnimation('.about-header', '.about-text');
            aboutAnimation = 1;
        }
        else if (newHeight > projects && projectsAnimation == 0){
            scrollAnimation('.projects-header', '.projects-img-container');
            projectsAnimation = 1;
        }
        else if (newHeight > experience && experienceAnimation == 0){
            scrollAnimation('.experience-header', '.experience-text-container', '.experience-text');
            experienceAnimation = 1;
        }

    });
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
    $(".nav-button").click(function() {
        var attribute = $(this).attr('name');
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + attribute).offset().top
        }, 500);
    });
    $('.fa-expand').click(function(){
        $(this).closest('.projects-img-container').prependTo('.projects-container').fadeIn();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".projects-img-container").offset().top
        }, 500);
    });
    $('.nav-hire').click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    })
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

});