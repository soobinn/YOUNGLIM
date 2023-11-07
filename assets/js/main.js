const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

mainTl = gsap.timeline({
    default: { ease: "none" },
    scrollTrigger: {
        trigger: ".sc-main",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
});

mainTl.to(".main-bg", { opacity: 1 }, "a");
mainTl.to(".main-text", { "--opacity": 0 }, "a");
mainTl.to(".main-text", { opacity: 1 }, "a+=3");
mainTl.to(".main-bg", { opacity: 0 });

// bottle

const textWrapTl = gsap.timeline({
    default: { ease: "none" },
    scrollTrigger: {
        trigger: ".text-wrapper",
        start: "0% 100%",
        end: "100% 100%",
        scrub: 1,
        toggleClass: { targets: ".bottle-bg", className: "dark" },
    },
});

// .text-wrapper

ScrollTrigger.create({
    trigger: ".text-wrapper",
    start: "0% 100%",
    end: "100% 100%",
    toggleClass: { targets: ".text-bg", className: "fixed" },
});

const enjoyTl = gsap.timeline({
    default: { ease: "none" },
    scrollTrigger: {
        trigger: ".sc-enjoy",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
    },
});
enjoyTl.to(
    ".enjoy-bgImg",
    {
        opacity: 1,
    },
    "a"
);
enjoyTl.to(
    ".enjoy-textImg",
    {
        opacity: 1,
        scale: 1,
        delay: 0.05,
    },
    "a"
);

// .sc-product

const productTl = gsap.timeline({
    default: { ease: "none" },
    scrollTrigger: {
        trigger: ".sc-product ",
        start: "0% 85%",
        end: "80% 90%",
        scrub: 1,
    },
});
productTl.to(" .sticky-bottle", {
    yPercent: 100,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
});
productTl.to(" .sticky-bg", {
    opacity: 1,
    duration: 0.1,
});

// .sc-purset

const pursetTl = gsap.timeline({
    default: {
        ease: "none",
    },
    scrollTrigger: {
        trigger: ".sc-purest ",
        start: "0% 20%",
        end: "100% 100%",
        scrub: 1,
    },
});
pursetTl.to(
    ".sc-purest .purset-video ",
    {
        opacity: 1,
        position: "fixed",
    },
    "a"
);
pursetTl.to(".sc-purest .con-text ", {
    opacity: 1,
    y: 0,
    delay: 0.5,
});
pursetTl.to(
    ".sc-purest .purset-video ",
    {
        opacity: 0,
    },
    "b"
);
pursetTl.to(".sc-purest .purset-video ", {
    position: "static",
});

// text-con
gsap.to(".bottle-wrap", {
    scrollTrigger: {
        trigger: ".sc-purest",
        start: "80% 80%",
        end: "150% 100%",
        scrub: 1,
        ease: "none",
    },
    scale: 0.7,
    opacity: 0,
    display: "none",
});

// 반복문사용해서 쓰고싶음

const targetElement = $(".text-con").find("section[class*='sc-']").eq(0);

welcomShow = gsap.timeline({
    scrollTrigger: {
        trigger: targetElement,
        start: "0% 50%",
        end: "100% 100%",
        toggleActions: "play reverse play reverse",
    },
});

welcomShow.to("#bg1", {
    scale: 1,
});

welcomShow2 = gsap.timeline({
    scrollTrigger: {
        trigger: $("[data-bg='#bg2']"),
        start: "0% 50%",
        end: "100% 100%",
        toggleActions: "play reverse play reverse",
    },
});

welcomShow2.to("#bg2", {
    scale: 1,
});
welcomShow3 = gsap.timeline({
    scrollTrigger: {
        trigger: $("[data-bg='#bg3']"),
        start: "0% 50%",
        end: "100% 100%",
        toggleActions: "play reverse play reverse",
    },
});

welcomShow3.to("#bg3", {
    scale: 1,
});

welcomShow4 = gsap.timeline({
    scrollTrigger: {
        trigger: $("[data-bg='#bg4']"),
        start: "0% 50%",
        end: "100% 100%",
        toggleActions: "play reverse play reverse",
    },
});

welcomShow4.to("#bg4", {
    scale: 1,
});

console.log($(".text-con").find("section[class*='sc-']").eq(0).data("bg"));
console.log($(".text-con").find("section[class*='sc-']").eq(1).data("bg"));
console.log($(".text-con").find("section[class*='sc-']").eq(2).data("bg"));
console.log($(".text-con").find("section[class*='sc-']").eq(3).data("bg"));
