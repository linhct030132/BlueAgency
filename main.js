var scrollToTop = document.querySelector('.scroll-to-top');

window.onscroll = function () {

    var headerPosition = document.querySelector('.header');

    console.log(document.documentElement.scrollTop);

    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        headerPosition.style.backgroundColor = '#142333';
        scrollToTop.style.opacity = '1';
    }
    else {
        headerPosition.style.backgroundColor = 'transparent';
        scrollToTop.style.opacity = '0';
    }
};

function goToTop() {
    $('html, body').animate({scrollTop:0}, 'medium');
}


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 0) {
        $(".banner-con").addClass("show-item");
    } 

    if (scroll >= 50) {
        $(".link").addClass("show-item");
    }
    
    if(scroll >= 300) {
        $(".title").addClass("show-item");
    }

    if (scroll >= 500 ) {
        $(".services-layout").addClass("show-item");
    }

    if (scroll >= 1200 ) {
        $(".social-layout").addClass("show-item");
    }

    if (scroll >= 1800 ) {
        $(".slide-client").addClass("show-item");
    }
});

