// Establece la altura del FIELDSET del cónyuge en caso afirmativo
function setSpouseFieldsetHeightForAffirmative(size) {
    const fieldset = document.querySelector("#fieldset__spouse");
    const heights = {
        large: "250px",
        medium: "340px",
        small: "600px",
    };
    fieldset.style.height = heights[size];
    fieldset.style.transition = "0.5s ease";
}

// Establece la altura del FIELDSET del cónyuge en caso negativo
function setSpouseFieldsetHeightForNegative(size) {
    const fieldset = document.querySelector("#fieldset__spouse");
    const heights = {
        large: "150px",
        small: "230px",
    };
    fieldset.style.height = heights[size];
}

// Ajusta la altura del FIELDSET del cónyuge dependiendo del valor seleccionado
function adjustSpouseFieldsetHeight() {
    const spouseInputsContainer = document.querySelector("#form__group__inputs__spouse");
    const spouseQuestionContainer = document.querySelector("#input__group__spouse__include");
    let valor = document.querySelector("#taxes_with_spouse").value.toLowerCase();


    if (valor == "si") {
        spouseQuestionContainer.innerHTML = generateSpouseInsuranceOptionHTML();
        spouseQuestionContainer.classList.add("open");

        spouseInputsContainer.innerHTML = generateSpouseFormFieldsHTML();

        // Para el número de seguridad social del cónyuge
        document.querySelectorAll('.input__social__security').forEach(element => {
            element.addEventListener('input', function (e) {
                formatSocialSecurityNumber(e);
            });
        });
        spouseQuestionContainer.style.width = "100%";
        spouseQuestionContainer.style.marginRight = "0";
        setTimeout(() => {
            spouseQuestionContainer.style.opacity = "1";
            spouseInputsContainer.style.opacity = "1";
        }, 500);


        if (window.innerWidth > 1200) {
            setSpouseFieldsetHeightForAffirmative('large');
        } else if (window.innerWidth < 1200 && window.innerWidth > 768) {
            setSpouseFieldsetHeightForAffirmative('medium');
        } else if (window.innerWidth <= 768 && spouseQuestionContainer.classList.contains("open")) {
            setSpouseFieldsetHeightForAffirmative('small');
        }

    } else if (valor !== "si") {

        spouseQuestionContainer.style.opacity = "0";
        spouseInputsContainer.style.opacity = "0";
        spouseQuestionContainer.classList.remove("open");

        setTimeout(() => {
            spouseQuestionContainer.innerHTML = "";
            spouseQuestionContainer.style.width = "0";

            spouseQuestionContainer.style.marginRight = "-20px";
        }, 500);


        if (window.innerWidth > 768) {
            setSpouseFieldsetHeightForNegative('large');
        } else if(window.innerWidth <= 768 && !spouseQuestionContainer.classList.contains("open")){
            setSpouseFieldsetHeightForNegative('large');
        }
    }
}

