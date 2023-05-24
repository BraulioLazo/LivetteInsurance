// Establece la altura del FIELDSET del cónyuge en función del tamaño de la pantalla y el estado de la selección
function setSpouseFieldsetHeight(size, isAffirmative) {
    const fieldset = document.querySelector("#fieldset__spouse");
    const heights = isAffirmative
        ? { large: "250px", medium: "340px", small: "600px" }
        : { large: "150px", small: "230px" };
    fieldset.style.height = heights[size];
    fieldset.style.transition = "0.5s ease";
}

// Muestra u oculta los elementos del cónyuge
function toggleSpouseElements(isVisible, spouseQuestionContainer, spouseInputsContainer) {
    if (isVisible) {

        // Inicializa la opacidad a 0
        spouseQuestionContainer.style.opacity = "0";
        spouseInputsContainer.style.opacity = "0";
        setTimeout(() => {
            // Cambia la opacidad a 1 después de 500 milisegundos
            spouseQuestionContainer.style.opacity = "1";
            spouseInputsContainer.style.opacity = "1";
        }, 500);

    } else {
        spouseQuestionContainer.style.opacity = "0";
        spouseInputsContainer.style.opacity = "0";
        setTimeout(() => {
            spouseQuestionContainer.innerHTML = "";
            spouseInputsContainer.innerHTML = "";
            spouseQuestionContainer.style.width = "0";
            spouseQuestionContainer.style.marginRight = "-20px";
        }, 500);
    }
}

function createSpouseInputs(spouseQuestionContainer, spouseInputsContainer) {
    spouseQuestionContainer.innerHTML = generateSpouseInsuranceOptionHTML();
    spouseQuestionContainer.classList.add("open");
    spouseInputsContainer.innerHTML = generateSpouseFormFieldsHTML();

    // Formatea el número de seguridad social del cónyuge
    document.querySelectorAll('.input__social__security').forEach(element => {
        element.addEventListener('input', formatSocialSecurityNumber);
    });

    spouseQuestionContainer.style.width = "100%";
    spouseQuestionContainer.style.marginRight = "0";

    toggleSpouseElements(true, spouseQuestionContainer, spouseInputsContainer);
}

function removeSpouseInputs(spouseQuestionContainer, spouseInputsContainer) {
    spouseQuestionContainer.classList.remove("open");
    toggleSpouseElements(false, spouseQuestionContainer, spouseInputsContainer);
}


// Ajusta la altura del FIELDSET del cónyuge dependiendo del valor seleccionado
function adjustSpouseFieldsetHeight() {
    const spouseInputsContainer = document.querySelector("#form__group__inputs__spouse");
    const spouseQuestionContainer = document.querySelector("#input__group__spouse__include");
    const spouseSelection = document.querySelector("#taxes_with_spouse").value.toLowerCase();

    if (spouseSelection === "si" && !spouseQuestionContainer.classList.contains("open")) {
        createSpouseInputs(spouseQuestionContainer, spouseInputsContainer);

        const size = window.innerWidth > 1200 ? 'large'
            : window.innerWidth > 768 ? 'medium'
                : 'small';
        setSpouseFieldsetHeight(size, true);

    } else if (spouseSelection !== "si") {
        removeSpouseInputs(spouseQuestionContainer, spouseInputsContainer);

        const size = window.innerWidth > 768 ? 'large' :
            !spouseQuestionContainer.classList.contains("open") ? 'large' : 'small';
        setSpouseFieldsetHeight(size, false);
    }
}


function handleWindowResize() {
    const spouseInputsContainer = document.querySelector("#form__group__inputs__spouse");
    const spouseQuestionContainer = document.querySelector("#input__group__spouse__include");
    const spouseSelection = document.querySelector("#taxes_with_spouse").value.toLowerCase();

    let size;

    if (window.innerWidth > 1200) {
        size = 'large';
    } else if (window.innerWidth > 768) {
        size = 'medium';
    } else if (window.innerWidth <= 768 && !spouseQuestionContainer.classList.contains("open")) {
        size = 'large';
    } else {
        size = "small";
    }

    const isAffirmative = spouseSelection === "si" && spouseQuestionContainer.classList.contains("open");
    setSpouseFieldsetHeight(size, isAffirmative);
}

// Agregamos el evento de resize al navegador
window.addEventListener('resize', handleWindowResize);

