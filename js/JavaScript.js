function startProgram() {

    const contactUsBTN = document.querySelector("#btn__contact__us");
    contactUsBTN.addEventListener("click", () => {

        animations.smoothScroll(contactUsBTN);
    });
}
startProgram();
