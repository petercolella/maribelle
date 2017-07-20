$(document).ready(function(){

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

$('#hi').animateCss('fadeIn').addClass('opacity1');

$('#touch').animateCss('fadeIn').addClass('opacity1');

$('#unicorn').animateCss('fadeIn').addClass('opacity1');

});

$('.bdayLink').click(function() {
	$('html,body').animate({
		scrollTop: $("#bday-link").offset().top},
	1000);
	$('#happy').animateCss('zoomInUp').addClass('opacity1 animate rubberBand');
	$('#love').animateCss('fadeInLeftBig').addClass('opacity1 animate wobble');
});