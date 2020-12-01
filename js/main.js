$(document).ready(function(){

    $('#slides').superslides({
        animation: 'fade',
        play: 10000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Full-Stack Web Developer", "IT Analyst", "Development Student"],
        typeSpeed: 90,
        loop: true,
        startDelay: 1100,
        showCursos: false,
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            770:{
                items:3
            },
            940:{
                items:4
            }
        }
    });

    var skillsTopOffset = $(".Skills").offset().top;

    $(window).scroll(function(){
        if(window.pageYOffset>skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fdcb6e',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 150,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

});