const CountUpAndRevealOnScroll = {
    countUp: (element, numberToAnimate) => {
        const animationDuration = 2000;
        const fps = 60;
        const frameDuration = 1000 / fps;
        const totalFrames = Math.ceil(animationDuration / frameDuration);
        const elementValue = parseInt(element.getAttribute("data-number-animation"));
        const incrementPerFrame = elementValue / totalFrames;
        let counter = 0;

        element.classList.add("animation-in-progress");

        const interval = setInterval(() => {
            counter += incrementPerFrame;
            const displayValue = Math.min(Math.round(counter), elementValue);
            if (element == numberToAnimate[0]) {
                element.textContent = displayValue + "+";
            } else {
                element.textContent = displayValue;
            }
            if (displayValue == elementValue) {
                clearInterval(interval);
                element.classList.remove("animation-in-progress");
                element.classList.remove("number__to__animate");
            }
        }, frameDuration);
    },

    startAnimationIfVisible: (element, numberToAnimate, animationFunction) => {
        const elementDistance = window.innerHeight - element.getBoundingClientRect().top;
        if (elementDistance >= 100 && !element.classList.contains("animation-in-progress")) {
            if (parseInt(element.innerHTML) == 0) {
                animationFunction(element, numberToAnimate);
            }
        }
    },

    checkVisibilityOnScroll: (numberToAnimate) => {
        numberToAnimate.forEach((element) => {
            CountUpAndRevealOnScroll.startAnimationIfVisible(element, numberToAnimate, CountUpAndRevealOnScroll.countUp);
        });
    },

    init: () => {
        const numberToAnimate = document.querySelectorAll(".number__to__animate");
        window.addEventListener("scroll", () => {
            CountUpAndRevealOnScroll.checkVisibilityOnScroll(numberToAnimate);
        });
    }
};

CountUpAndRevealOnScroll.init();
