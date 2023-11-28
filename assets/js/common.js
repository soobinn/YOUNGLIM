$(document).mousemove(function (e) {
    x = e.clientX;
    y = e.clientY;
    gsap.to(".cursor", 0, {
        x: x,
        y: y,
    });
});

$(".sc-main .mySwiper .swiper-button-next").hover(
    function () {
        $(".cursor").addClass("next");
    },
    function () {
        $(".cursor").removeClass("next");
    }
);
$(".sc-main .mySwiper .swiper-button-next").hover(
    function () {
        $(".cursor").addClass("next");
    },
    function () {
        $(".cursor").removeClass("next");
    }
);
$(".sc-main .mySwiper .swiper-button-prev").hover(
    function () {
        $(".cursor").addClass("prev");
    },
    function () {
        $(".cursor").removeClass("prev");
    }
);
$(".sc-main .mySwiper .swiper-button-prev").hover(
    function () {
        $(".cursor").addClass("prev");
    },
    function () {
        $(".cursor").removeClass("prev");
    }
);
