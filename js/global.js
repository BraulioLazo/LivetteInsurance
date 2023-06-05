

function setupPage() {
    const contactUsBTN = document.querySelectorAll(".btn__contact__us");
    contactUsBTN.forEach(element => {
        element.addEventListener("click", () => {
            animations.smoothScroll(element);
        });
    });
}

document.addEventListener('DOMContentLoaded', setupPage);
