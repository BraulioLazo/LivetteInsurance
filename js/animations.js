const animations = {

    navegationContainer: null,
    menuButton: null,
    menuLines: null,
    body: null,

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

    highlightActiveLink: () => {
        const sections = document.querySelectorAll("[data-section-id]");
        const menuLinks = document.querySelectorAll(".menu__links");
        const menuLinkContainer = document.querySelectorAll(".element-to-disable-hover")

        let currentActive = "";

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= 200) {
                currentActive = section.id;
            }
        });

        menuLinks.forEach((link, index) => {
            menuLinkContainer[index].classList.remove("active");

            if (link.dataset.section === currentActive) {
                menuLinkContainer[index].classList.add("active");
            }
        });
    },

    closeMenuOnClickOutside: (event, topLine, middleLine, bottomLine) => {
        if (!animations.navegationContainer.contains(event.target) && !animations.menuButton.contains(event.target) && animations.navegationContainer.classList.contains("menu__open")) {

            topLine.classList.remove("rotate__line__one");
            middleLine.classList.remove("display__none");
            bottomLine.classList.remove("rotate__line__three");

            animations.navegationContainer.classList.remove("menu__open");

            animations.body.classList.remove("no__scroll");
        }
    },

    toggleMenu: (topLine, middleLine, bottomLine) => {

        topLine.classList.toggle("rotate__line__one");
        middleLine.classList.toggle("display__none");
        bottomLine.classList.toggle("rotate__line__three");

        animations.navegationContainer.classList.toggle("menu__open");
        animations.body.classList.toggle("no__scroll");
    },

    setupSmoothScrollLinks: () => {
        const menuLinks = document.querySelectorAll(".menu__links");

        menuLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const targetId = link.getAttribute("data-section");
                const targetElement = document.querySelector(`[data-section-id="${targetId}"]`);

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                if (animations.navegationContainer.classList.contains("menu__open")) {
                    const topLine = animations.menuLines[0];
                    const middleLine = animations.menuLines[1];
                    const bottomLine = animations.menuLines[2];
                    animations.toggleMenu(topLine, middleLine, bottomLine);
                }
            });
        });
    },

    init: () => {
        animations.navegationContainer = document.querySelector(".navigation__links");
        animations.menuButton = document.querySelector("#hamburger__menu");
        animations.menuLines = document.querySelectorAll(".hamburger__menu__line");
        animations.menuLines = document.querySelectorAll(".hamburger__menu__line");
        animations.body = document.querySelector("body");

        const topLine = animations.menuLines[0];
        const middleLine = animations.menuLines[1];
        const bottomLine = animations.menuLines[2];

        animations.menuButton.addEventListener("click", () => {
            animations.toggleMenu(topLine, middleLine, bottomLine);
        });

        document.addEventListener("click", (event) => {
            animations.closeMenuOnClickOutside(event, topLine, middleLine, bottomLine);
        });

        window.addEventListener("scroll", () => {
            animations.highlightActiveLink();
        });

        const header = document.querySelector("#header");
        const logoContainer = document.querySelector('.logo__container');
        const elementsToDisableHover = document.querySelectorAll(".element-to-disable-hover");

        if (window.innerWidth > 1024) {
            window.onscroll = () => animations.menuAnimations(header, logoContainer, elementsToDisableHover);
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
                window.onscroll = () => animations.menuAnimations(header, logoContainer, elementsToDisableHover);
            } else {
                window.onscroll = null;
            }
        });

        animations.setupSmoothScrollLinks();
    }
};

animations.init();
