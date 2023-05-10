

const insurancesAnimationManager = {
    addMouseEvents: (element, hoverElement) => {
        element.addEventListener("mouseover", () => {
            hoverElement.style.width = "100%";
            hoverElement.style.right = "0px";
            hoverElement.style.left = "0px";
        });

        element.addEventListener("mouseleave", () => {
            hoverElement.style.width = "0%";
            hoverElement.style.left = "auto";
        });
    },

    insuranceHover: () => {
        const insuranceElementsHover = document.querySelectorAll(".insurance__type__hover__element");
        const insuranceContainers = document.querySelectorAll(".insurance__type__container");

        insuranceContainers.forEach((element, index) => {
            insurancesAnimationManager.addMouseEvents(element, insuranceElementsHover[index]);
        });
    },

    init: () => {
        insurancesAnimationManager.insuranceHover();
    }
};


insurancesAnimationManager.init();