$('#burger-trigger').on('click', function (e) {
    e.preventDefault();
    $('#myTopnav').toggleClass('responsive');
});


$(function() {

    let scrollBtn = $('#scroll-btn');

    scrollBtn.on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
        return false;
    });

    $(window).on('scroll', function(){
        if ($(document).scrollTop() > 400){
            scrollBtn.fadeIn();
        } else {
            scrollBtn.fadeOut();
        }
    })

});

