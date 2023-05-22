// Despliega el contenedor para el número de dependientes
function toggleDependentQuantity() {
    const insuranceValue = document.querySelector("#include_dependant_in_insurance").value.toLowerCase();
    const dependentQuantityContainer = document.querySelector("#input__group__qty__dependant");
    const dependentQuantityInput = document.querySelector("#qty__dependant");
    const dependentFieldset = document.querySelector("#fieldset__dependant");

    // Si la respuesta es 'si', desplegamos el contenedor y ajustamos la altura del fieldset
    if (insuranceValue === "si") {
        if (window.innerWidth < 501) {
            dependentFieldset.style.height = "320px";
        }
        dependentQuantityContainer.style.width = "150px";
        dependentQuantityContainer.style.marginRight = "0px";
        dependentQuantityInput.setAttribute("required", "");

        setTimeout(() => {
            dependentQuantityContainer.style.opacity = "1";
        }, 500);

        // Si la respuesta es diferente a 'si', escondemos el contenedor y restablecemos la altura del fieldset
    } else if (insuranceValue !== "si") {
        if (window.innerWidth < 501) {
            dependentFieldset.style.height = "230px";
        }
        document.querySelector("#form__group__qty__dependant").innerHTML = "";
        document.querySelector("#qty__dependant").value = 0;
        adjustDependentFieldsetHeight();
        dependentQuantityContainer.style.opacity = "0";
        dependentQuantityInput.removeAttribute("required");

        setTimeout(() => {
            dependentQuantityContainer.style.width = "0px";
            dependentQuantityContainer.style.marginRight = "-20px";
            document.querySelector("#qty__dependant").value = "";
        }, 500);
    }
}
toggleDependentQuantity();

// Ajusta la altura del fieldset de dependientes de acuerdo al número de dependientes
function adjustDependentFieldsetHeight() {
    const dependentFieldset = document.querySelector("#fieldset__dependant");
    let dependentsQuantity = document.querySelector("#qty__dependant").value;

    if (dependentsQuantity > 5) {
        dependentsQuantity = 5;
    }

    // Ajustar la altura basada en el número de dependientes y el ancho de la ventana
    // Los números mágicos (150, 135, 220, 390) representan las alturas en px para distintos rangos de ancho de la ventana.
    // Estos números pueden requerir ajuste de acuerdo al diseño específico de tu sitio.
    if (window.innerWidth > 1200) {
        dependentFieldset.style.height = `${150 + (dependentsQuantity * 135) + (3 * dependentsQuantity)}px`;
    } else if (window.innerWidth < 1200 && window.innerWidth > 900) {
        dependentFieldset.style.height = `${150 + (dependentsQuantity * 220) + (3 * dependentsQuantity)}px`;
    } else if (window.innerWidth < 901 && window.innerWidth > 767) {
        dependentFieldset.style.height = `${230 + (dependentsQuantity * 220 + (3 * dependentsQuantity))}px`;
    } else if (window.innerWidth < 768 && window.innerWidth > 500) {
        dependentFieldset.style.height = `${230 + (dependentsQuantity * 390 + (3 * dependentsQuantity))}px`;
    } else if (window.innerWidth < 501 && document.querySelector("#include_dependant_in_insurance").value.toLowerCase() == "si") {
        dependentFieldset.style.height = `${320 + (dependentsQuantity * 390 + (3 * dependentsQuantity))}px`;
    }
}


