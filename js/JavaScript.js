const animations = {
    menuAnimations: () => {

        const header = document.querySelector("#header");
        const logoContainer = document.querySelector('.logo__container');
        const elementsToDisableHover = document.querySelectorAll(".element-to-disable-hover");

        if (scrollY > 0) {
            header.classList.add("blue__background");
            logoContainer.style.color = "var(--letter-color-light)";
            elementsToDisableHover.forEach((element) => {
                element.classList.add("change__hover__efect");
            });

        } else {
            header.classList.remove("blue__background");
            logoContainer.style.color = "var(--main-color-light)";
            elementsToDisableHover.forEach((element) => {
                element.classList.remove("change__hover__efect");
            });
        }
    },

    init: () => {
        if (window.innerWidth > 1024) {
            window.onscroll = animations.menuAnimations;
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
                window.onscroll = animations.menuAnimations;
            } else {
                window.onscroll = null;
            }
        });
    }
};

animations.init();
