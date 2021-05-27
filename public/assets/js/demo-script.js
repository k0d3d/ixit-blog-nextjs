(function($) {
    var allfunction = {
        preloader: () => {
            var count = 0;
            var counter = setInterval(function() {
                if (count < 101) {
                    $('.count').text(count + '%');
                    $('.loader, .loader2').css('width', count + '%');
                    if (count == 100) {
                        $('body').removeClass('placeholder')
                        $('.loader-wrapper').addClass('hideen')
                    }
                    count++
                } else {
                    clearInterval(counter)
                }
            }, 20)
        },
        swiper: () => {
            var swiper = new Swiper('.swiper-container', {
                effect: 'coverflow',
                loop: true,
                centeredSlides: true,
                slidesPerView: 3,
                initialSlide: 1,
                keyboardControl: true,
                mousewheelControl: true,
                lazyLoading: true,
                preventClicks: false,
                preventClicksPropagation: false,
                lazyLoadingInPrevNext: true,
                breakpoints: {
                    '575': {
                        slidesPerView: 1
                    },
                },
                coverflow: {
                    rotate: 0,
                    stretch: 150,
                    depth: 120,
                    modifier: 1,
                    slideShadows: true,
                }
            });
        },
        init: function() {
            allfunction.preloader();
            allfunction.swiper();
        },
    };

    $(document).ready(function() {
        allfunction.init();
    });

})(jQuery);
//loder js code
$(window).load(function() {});
/*LazyLoad*/
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    effect: "fadeIn"
});
lazyLoadInstance.update();
lazyLoadInstance.loadAll();