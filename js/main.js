gsap.from(".loader svg", {
    repeat: -1,
    duration: 3,
    opacity: 0,
    yoyo: true
})

const loader = document.querySelector(".loader");

window.addEventListener("load", onLoad)


gsap.from("footer", {
    scrollTrigger: {
        trigger: "footer",
    },
    y: 30,
    opacity: 0,
    duration: 2
});

gsap.from(".features", {
    scrollTrigger: {
        trigger: ".features",
        start: "top center"
    },
    y: -30,
    opacity: 0,
    duration: 2
});

function onLoad() {

    loader.style.visibility = "hidden";

    gsap.from(".hero__content", {
        x: -100,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 2

    });

    gsap.from(".hero__carrosel", {
        y: 25,
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 2
    });
    if (window.matchMedia("(min-width:768px)").matches) {

        gsap.from("header", {
                y: -25,
                opacity: 0,
                duration: 1
            }

        )
    }
}