

// Despliega el contenedor de la cantidad de DEPENDIENTES
function deployQtyDependants() {
    let valor = document.querySelector("#include_dependant_in_insurance").value.toLowerCase();
    const qtyDependantContainer = document.querySelector("#input__group__qty__dependant");
    const inputQtyDependants = document.querySelector("#qty__dependant");

    if (valor == "si") {
        qtyDependantContainer.style.width = "150px";
        qtyDependantContainer.style.marginRight = "0px";
        inputQtyDependants.setAttribute("required", "");

        setTimeout(() => {
            qtyDependantContainer.style.opacity = "1";
        }, 500);

    } else if (valor !== "si") {

        document.querySelector("#form__group__qty__dependant").innerHTML = "";
        document.querySelector("#qty__dependant").value = 0;
        modificarAlturaFieldsetDependientes();
        qtyDependantContainer.style.opacity = "0";
        inputQtyDependants.removeAttribute("required");


        setTimeout(() => {
            qtyDependantContainer.style.width = "0px";
            qtyDependantContainer.style.marginRight = "-20px";
        document.querySelector("#qty__dependant").value = "";

        }, 500);
    }
}
deployQtyDependants();

function modificarAlturaFieldsetDependientes() {

    const fieldsetDependientes = document.querySelector("#fieldset__dependant");
    const qtyDependants = document.querySelector("#qty__dependant").value;

    if (window.innerWidth > 1200) {
        fieldsetDependientes.style.height = `${150 + (qtyDependants * 135) + (3 * qtyDependants)}px`;

    } else if (window.innerWidth < 1200 && window.innerWidth > 900) {
        fieldsetDependientes.style.height = `${150 + (qtyDependants * 220) + (3 * qtyDependants)}px`;

    } else if (window.innerWidth < 901 && window.innerWidth > 767) {
        fieldsetDependientes.style.height = `${230 + (qtyDependants * 220 + (3 * qtyDependants))}px`;

    } else if (window.innerWidth < 768) {
        fieldsetDependientes.style.height = `${230 + (qtyDependants * 390 + (3 * qtyDependants))}px`;

    }
}


// Ajusta la altura del FIELDSET del cónyuge dependiendo del valor seleccionado
window.addEventListener("load", () => {

    document.querySelector("#include_dependant_in_insurance").addEventListener('change', deployQtyDependants);
    window.addEventListener('resize', deployQtyDependants);

    document.querySelector("#qty__dependant").addEventListener("change", modificarAlturaFieldsetDependientes);
    window.addEventListener("resize", modificarAlturaFieldsetDependientes);
});

