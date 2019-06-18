$(document).ready(function () {
    lazyload();

    if ($('#ranking-tabContent').length) {
        const ps = new PerfectScrollbar('#ranking-tabContent');
    }

    if ($('.slider').length) {
        $('.slider--banner').slick({
            autoplay: true,
            prevArrow:
                `<button type="button" class="slick-prev">
                    <i class="fas fa-chevron-left"></i>
                </button>`,
            nextArrow:
                `<button type="button" class="slick-next">
                    <i class="fas fa-chevron-right"></i>
                </button>`
        });

        $('.slider--movie').slick({
            autoplay: true,
            prevArrow:
                `<button type="button" class="slick-prev">
                    <i class="fas fa-chevron-left"></i>
                </button>`,
            nextArrow:
                `<button type="button" class="slick-next">
                    <i class="fas fa-chevron-right"></i>
                </button>`,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }
            ]
        });
    }
});