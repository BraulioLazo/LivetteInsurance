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
    let valor = document.querySelector("#include_spouse_in_insurance").value.toLowerCase();
    const inputSpouse = document.querySelectorAll(".input__spouse");

    if (valor == "si") {
        inputSpouse.forEach(element => element.setAttribute("required", ""));

        if (window.innerWidth > 1200) {
            setSpouseFieldsetHeightForAffirmative('large');
        } else if (window.innerWidth < 1200 && window.innerWidth > 768) {
            setSpouseFieldsetHeightForAffirmative('medium');
        } else if (window.innerWidth < 768) {
            setSpouseFieldsetHeightForAffirmative('small');
        }

    } else if (valor !== "si") {
        inputSpouse.forEach(element => element.removeAttribute("required"));

        if (window.innerWidth > 768) {
            setSpouseFieldsetHeightForNegative('large');
        } else {
            setSpouseFieldsetHeightForNegative('small');
        }
    }
}

