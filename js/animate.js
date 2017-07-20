window.onload = function(){

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

$('#hi').animateCss('fadeIn');

$('#touch').animateCss('fadeIn');

$('#unicorn').animateCss('fadeIn');

// $('#hi').addClass('animated fadeIn');

};