const animations = {
    menuAnimations: (header, logoContainer, elementsToDisableHover) => {

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

    setupMenuToggle: () => {
        const menuButton = document.querySelector("#hamburger__menu");
        const menuLines = document.querySelectorAll(".hamburger__menu__line");
        const navegationContainer = document.querySelector(".navigation__links");
        const body = document.querySelector("body");

        const topLine = menuLines[0];
        const middleLine = menuLines[1];
        const bottomLine = menuLines[2];

        menuButton.addEventListener("click", () => {
            animations.toggleMenu(topLine, middleLine, bottomLine, navegationContainer, body, menuButton);
        });

        document.addEventListener("click", (event) => {
            animations.closeMenuOnClickOutside(event, topLine, middleLine, bottomLine, navegationContainer, body, menuButton);
        });
    },

    closeMenuOnClickOutside: (event, topLine, middleLine, bottomLine, navegationContainer, body, menuButton) => {
        if (!navegationContainer.contains(event.target) && !menuButton.contains(event.target) && navegationContainer.classList.contains("menu__open")) {

            topLine.classList.remove("rotate__line__one");
            middleLine.classList.remove("display__none");
            bottomLine.classList.remove("rotate__line__three");

            navegationContainer.classList.remove("menu__open");

            body.classList.remove("no__scroll");
        }
    },

    toggleMenu: (topLine, middleLine, bottomLine, navegationContainer, body) => {

        topLine.classList.toggle("rotate__line__one");
        middleLine.classList.toggle("display__none");
        bottomLine.classList.toggle("rotate__line__three");
        navegationContainer.classList.toggle("menu__open");
        body.classList.toggle("no__scroll");
    },

    init: () => {
        const header = document.querySelector("#header");
        const logoContainer = document.querySelector('.logo__container');
        const elementsToDisableHover = document.querySelectorAll(".element-to-disable-hover");

        if (window.innerWidth > 1024) {
            window.onscroll = animations.menuAnimations(header, logoContainer, elementsToDisableHover);
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
                window.onscroll = animations.menuAnimations(header, logoContainer, elementsToDisableHover);
            } else {
                window.onscroll = null;
            }
        });

        animations.setupMenuToggle();
    }
};

animations.init();
