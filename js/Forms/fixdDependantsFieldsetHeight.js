// Esta función se encarga de cambiar el tamaño de los contenedores dependiendo del tamaño de la ventana.
function adjustContainersWidth(dependantsInTaxesContainer, newQuestionsSpouseContainer) {
    if (window.innerWidth >= 900) {
        dependantsInTaxesContainer.style.width = "50%";
        newQuestionsSpouseContainer.style.width = "50%";
    } else if (window.innerWidth <= 900) {
        dependantsInTaxesContainer.style.width = "100%";
        newQuestionsSpouseContainer.style.width = "100%";
    }
}

// Esta función se encarga de ajustar la altura del fieldset dependiendo del número de dependientes.
function adjustFieldsetHeight(dependentFieldset, dependentsQuantity) {
    if (window.innerWidth > 1200) {
        dependentFieldset.style.height = `${150 + (dependentsQuantity * 135) + (3 * dependentsQuantity)}px`;
    } else if (window.innerWidth < 1200 && window.innerWidth > 900) {
        dependentFieldset.style.height = `${150 + (dependentsQuantity * 220) + (3 * dependentsQuantity)}px`;
    } else if (window.innerWidth < 901 && window.innerWidth > 767) {
        dependentFieldset.style.height = `${230 + (dependentsQuantity * 220 + (3 * dependentsQuantity))}px`;
    } else if (window.innerWidth < 768 && window.innerWidth >= 530) {
        dependentFieldset.style.height = `${230 + (dependentsQuantity * 390 + (3 * dependentsQuantity))}px`;
    } else if (window.innerWidth < 530) {
        dependentFieldset.style.height = `${320 + (dependentsQuantity * 390 + (3 * dependentsQuantity))}px`;
    }
}

// Esta función manejará el evento resize
function handleResize() {
    const dependentFieldset = document.querySelector("#fieldset__dependant");
    const qtyDependantElement = document.querySelector("#qty__dependant");
    const newQuestionsSpouseContainer = document.querySelector("#input__group");
    const taxesWidthDependant = document.querySelector("#input__group__taxes__with__dependant");

    // Comprobamos si el elemento existe y no está vacío
    if (qtyDependantElement && qtyDependantElement.value !== '') {
        let dependentsQuantity = qtyDependantElement.value;
        adjustFieldsetHeight(dependentFieldset, dependentsQuantity);
        newQuestionsSpouseContainer.style.width = "50%";

        if (window.innerWidth < 900) {
            newQuestionsSpouseContainer.style.width = "100%";
        } else {
            newQuestionsSpouseContainer.style.width = "50%";
            taxesWidthDependant.style.width = "50%";
        }

    } else {
        if (window.innerWidth >= 900) {
            dependentFieldset.style.height = "150px";

        } else if (window.innerWidth < 900 && window.innerWidth > 530 && qtyDependantElement) {
            dependentFieldset.style.height = "230px";
            newQuestionsSpouseContainer.style.width = "100%";

        } else if (window.innerWidth <= 530 && qtyDependantElement) {
            dependentFieldset.style.height = "320px";
        }
    }
}

window.addEventListener("resize", handleResize);


// La función principal que se encarga de mostrar u ocultar la pregunta de dependientes en el formulario.
function toggleDependentQuantity() {
    const dependantsInTaxesContainer = document.querySelector("#input__group__taxes__with__dependant");
    const dependantsInTaxes = document.querySelector("#taxes_with_dependant").value.toLowerCase();
    const dependentFieldset = document.querySelector("#fieldset__dependant");
    const newQuestionsSpouseContainer = document.querySelector("#input__group");

    adjustContainersWidth(dependantsInTaxesContainer, newQuestionsSpouseContainer);

    if (dependantsInTaxes === "si") {

        if (window.innerWidth <= 900 && window.innerWidth >= 530) {
            dependentFieldset.style.height = "230px";
        } else if (window.innerWidth < 530) {
            dependentFieldset.style.height = "320px";
        }
        newQuestionsSpouseContainer.innerHTML = createDependantsQuestions();

        document.querySelector("#qty__dependant").addEventListener("change", (e) => {
            createDependantFormFields(e.target.value);

            // FORMATEA el número de seguridad social
            document.querySelectorAll('.input__social__security').forEach(element => {
                element.addEventListener('input', function (e) {
                    formatSocialSecurityNumber(e);
                });
            });

            let dependentsQuantity = document.querySelector("#qty__dependant").value;
            adjustFieldsetHeight(dependentFieldset, dependentsQuantity);
        });



        newQuestionsSpouseContainer.style.marginRight = "0px";
        setTimeout(() => {
            newQuestionsSpouseContainer.style.opacity = "1";
        }, 500);
    } else if (dependantsInTaxes !== "si") {

        if (dependantsInTaxes !== "si" && window.innerWidth >= 900 && !document.querySelector("#qty__dependant")) {
            dependantsInTaxesContainer.style.width = "100%";
            newQuestionsSpouseContainer.style.width = "0%";
        } 
        
        newQuestionsSpouseContainer.style.opacity = "0";
        dependentFieldset.style.height = "150px";

        setTimeout(() => {
            newQuestionsSpouseContainer.style.marginRight = "-20px";
            newQuestionsSpouseContainer.style.width = "0%";
            newQuestionsSpouseContainer.innerHTML = "";
            dependantsInTaxesContainer.style.width = "100%";
            document.querySelector('#form__group__qty__dependant').innerHTML = "";
        }, 500);
    }
}
toggleDependentQuantity();
