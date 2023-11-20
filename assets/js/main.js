// const lenis = new Lenis();

// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
// });
// gsap.ticker.lagSmoothing(0);
/*************************************************/

// header
let lastScroll = 0;
$(window).scroll(function () {
    current = $(this).scrollTop();
    if (current > lastScroll) {
        $("header").addClass("show");
    } else {
        $("header").removeClass("show");
    }

    lastScroll = current;

    if (current >= 100) {
        $("header, .link-home,.icon-item a").addClass("on");
    } else {
        $("header, .link-home,.icon-item a").removeClass("on");
    }
});

$(".nav-item").mouseenter(function (e) {
    console.log($(e.currentTarget).attr("id"));

    $("header .subject").addClass("on");

    if (
        $(e.currentTarget).attr("id") ===
        $(".sub-list .sub-item").eq(0).data("id")
    ) {
        $(".sub-list .sub-item").eq(0).addClass("on");
        $(".sub-list .sub-item").eq(1).removeClass("on");
    } else if (
        $(e.currentTarget).attr("id") ===
        $(".sub-list .sub-item").eq(1).data("id")
    ) {
        $(".sub-list .sub-item").eq(1).addClass("on");
        $(".sub-list .sub-item").eq(0).removeClass("on");
    } else {
        $("header .subject").removeClass("on");
    }
});

$("header").hover(function () {
    $("header").addClass("on");

    $(".link-home").addClass("on");
    $(".icon-item a").addClass("on");
});

$(" header").mouseleave(function () {
    $("header .subject").removeClass("on");
    $("header").removeClass("on");

    $(".link-home").removeClass("on");
    $(".icon-item a").removeClass("on");
});

/*************************************************/
// sc-main

mainTl = gsap.timeline({
    default: {
        ease: "power3",
    },
});
mainTl.to(".sc-main .text-box .title", {
    opacity: 1,
    delay: 0.5,

    y: 0,
});
mainTl.to(".sc-main .text-box .desc", {
    opacity: 1,

    y: 0,
});
mainTl.to(".sc-main .text-box .link-more", {
    opacity: 1,

    y: 0,
});

// .sc-modern

$(".sc-modern .btn-wrap a").click(function (e) {
    e.preventDefault();

    tabName = $(this).data("tab");
    $(this).addClass("on").siblings().removeClass("on");
    $(tabName).addClass("on").siblings().removeClass("on");
});

moTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".modern-gallary",
        start: "0% 50%",
        end: "100% 100%",
        scrub: 1,
    },
});

moTl.to(
    ".gallary-wrap .top-left",
    {
        y: 0,
    },
    "a"
);

moTl.to(".gallary-wrap .name", {});

ScrollTrigger.create({
    trigger: ".modern-gallary",
    start: "0% 50%",
    end: "100% 100%",
    scrub: 1,
    toggleClass: { targets: ".gallary-wrap .top-right", className: "on" },
});
ScrollTrigger.create({
    trigger: ".modern-gallary",
    start: "50% 80%",
    end: "100% 50%",
    scrub: 1,
    toggleClass: {
        targets: ".gallary-wrap .name span,.gallary-wrap .bottom",
        className: "on",
    },
});
ScrollTrigger.create({
    trigger: ".sc-magazine",
    start: "0% 60%",
    end: "100% 60%",
    scrub: 0,
    onEnter: () => {
        // 스크롤 영역 진입 시 실행할 동작
        document.querySelector(".sc-magazine").classList.add("on");
    },
});
ScrollTrigger.create({
    trigger: ".sc-qna",
    start: "0% 60%",
    end: "100% 60%",
    scrub: 0,
    onEnter: () => {
        // 스크롤 영역 진입 시 실행할 동작
        document.querySelector(".sc-qna").classList.add("on");
    },
});
