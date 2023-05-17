const animations = {

    navegationContainer: null,
    menuButton: null,
    menuLines: null,
    body: null,

    menuAnimations: (header, logoContainer, elementsToDisableHover, imgLogo) => {

        if (scrollY > 0) {
            header.classList.add("blue__background");
            imgLogo.classList.add("white__logo");
            logoContainer.style.color = "var(--letter-color-light)";
            elementsToDisableHover.forEach((element) => {
                element.classList.add("change__hover__efect");
            });

        } else {
            header.classList.remove("blue__background");
            imgLogo.classList.remove("white__logo");
            logoContainer.style.color = "var(--main-color-light)";
            elementsToDisableHover.forEach((element) => {
                element.classList.remove("change__hover__efect");
            });
        }
    },

    highlightActiveLink: () => {
        const sections = document.querySelectorAll("[data-section-id]");
        const menuLinks = document.querySelectorAll(".menu__links");
        const menuLinkContainer = document.querySelectorAll(".element-to-disable-hover");

        let currentActive = "";

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= 400) {
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

    imgAnimation: (container, image) => {
        let imagePosition = image.getBoundingClientRect();

        let aspectRatio = window.innerWidth / window.innerHeight;

        window.addEventListener("resize", () => {
            aspectRatio = window.innerWidth / window.innerHeight;
            imagePosition = image.getBoundingClientRect();
        });

        document.addEventListener("visibilitychange", () => {
            if (!document.hidden) {
                aspectRatio = window.innerWidth / window.innerHeight;
                imagePosition = image.getBoundingClientRect();
            }
        });

        document.addEventListener("scroll", () => {

            aspectRatio = window.innerWidth / window.innerHeight;
            imagePosition = image.getBoundingClientRect();

        });

        container.addEventListener("mousemove", (event) => {

            const positionX = Math.floor(event.clientX - imagePosition.left);
            const positionY = Math.floor(event.clientY - imagePosition.top);

            const centerX = imagePosition.width / 2;
            const centerY = imagePosition.height / 2;

            const normalizedX = -(positionX - centerX) / centerX * aspectRatio;
            const normalizedY = (positionY - centerY) / centerY;

            const maxRotation = 10;
            const rotateY = normalizedY * maxRotation;
            const rotateX = normalizedX * maxRotation;

            image.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
        });

        container.addEventListener("mouseleave", () => {
            image.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
    },

    smoothScroll: (target) => {
        const targetId = target.getAttribute("data-section");
        const targetElement = document.querySelector(`[data-section-id="${targetId}"]`);

        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    },

    init: () => {
        animations.navegationContainer = document.querySelector("nav");
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

        animations.highlightActiveLink();

        window.addEventListener("scroll", () => {
            animations.highlightActiveLink();
        });

        const header = document.querySelector("#header");
        const logoContainer = document.querySelector('.logo__container');
        const imgLogo = document.querySelector(".img__logo");
        const elementsToDisableHover = document.querySelectorAll(".element-to-disable-hover");

        if (window.innerWidth > 1024) {
            window.onscroll = () => animations.menuAnimations(header, logoContainer, elementsToDisableHover, imgLogo);
        }

        if(window.innerWidth > 1024 && scrollY > 0){
            animations.menuAnimations(header, logoContainer, elementsToDisableHover, imgLogo);
        }

        if (header.classList.contains("blue__background")) {
            imgLogo.classList.add("white__logo");
        } else {
            imgLogo.classList.remove("white__logo");
        }

        window.addEventListener("resize", () => {
            if (window.innerWidth < 1024) {
                imgLogo.classList.add("white__logo");
            } else if (window.innerWidth > 1024 && !header.classList.contains("blue__background")) {
                imgLogo.classList.remove("white__logo");
            }
            if (window.innerWidth > 1024) {
                window.onscroll = () => animations.menuAnimations(header, logoContainer, elementsToDisableHover, imgLogo);
            } else {
                window.onscroll = null;
            }
        });

        animations.setupSmoothScrollLinks();

        const containerElement = document.querySelectorAll(".image__container");
        containerElement.forEach(containerElement => {
            const imageElement = containerElement.querySelector(".img__to__animate");
            animations.imgAnimation(containerElement, imageElement);
        });
    }
};

animations.init();
