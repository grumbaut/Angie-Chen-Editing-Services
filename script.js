window.sr = ScrollReveal();

setInterval(arrowAnimate, 1500);

function arrowAnimate(){
  var arrow = document.getElementById("down-arrow");
  arrow.classList.toggle("arrow-hidden")
}

sr.reveal('.services-info1');
sr.reveal('.services-info2');
sr.reveal('.services-info3');
sr.reveal('.services-info4');
sr.reveal('.services-info5');
sr.reveal('.services-info6');
sr.reveal('.services-info7');
sr.reveal('.services-info8');
sr.reveal('.testimonials1');
sr.reveal('.testimonials2');
sr.reveal('.email');

/* Carousel JS */

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        rewindNav : true,
        autoPlay:true
    });
});
