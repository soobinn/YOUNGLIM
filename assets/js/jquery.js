var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".lifeSwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: "3",
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

var swiper = new Swiper(".bannerSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let name = [
    "키친/붙박이장",
    "바스/타일",
    "도어",
    "중문",
    "창호",
    "몰딩/월/마루",
];
var swiper = new Swiper(".pickSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return (
                '<div class="' +
                className +
                '"><span>' +
                name[index] +
                "</span></div>"
            );
        },
    },
});
