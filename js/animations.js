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

    closeMenuOnClickOutside: (event) => {
        const menuButton = document.querySelector("#hamburger__menu");
        const menuLines = document.querySelectorAll(".hamburger__menu__line");
        const navegationContainer = document.querySelector(".navigation__links");
        const body = document.querySelector("body");

        if (!navegationContainer.contains(event.target) && !menuButton.contains(event.target) && navegationContainer.classList.contains("menu__open")) {
            menuLines[0].classList.remove("rotate__line__one");
            menuLines[1].classList.remove("display__none");
            menuLines[2].classList.remove("rotate__line__three");
            navegationContainer.classList.remove("menu__open");
            body.classList.remove("no__scroll");
        }
    },

    toggleMenu: () => {
        const menuButton = document.querySelector("#hamburger__menu");
        const menuLines = document.querySelectorAll(".hamburger__menu__line");
        const navegationContainer = document.querySelector(".navigation__links");
        const body = document.querySelector("body");

        menuButton.addEventListener("click", () => {
            menuLines[0].classList.toggle("rotate__line__one");
            menuLines[1].classList.toggle("display__none");
            menuLines[2].classList.toggle("rotate__line__three");
            navegationContainer.classList.toggle("menu__open");
            body.classList.toggle("no__scroll");
        });

        document.addEventListener("click", animations.closeMenuOnClickOutside);
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

        animations.toggleMenu();
    }
};

animations.init();
