(function () {
    function initialize() {

        adjustSpouseFieldsetHeight();
        
        // Esta función maneja el comportamiento en la entrada del número de teléfono.
        document.getElementById('user__phone__number').addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });


        // Para el número de seguridad social del cónyuge
        document.querySelectorAll('.input__social__security').forEach(element => {
            element.addEventListener('input', function (e) {
                formatSocialSecurityNumber(e);
            });
        });


        // Ajusta la altura del FIELDSET del cónyuge dependiendo del valor seleccionado
        document.querySelector("#include_spouse_in_insurance").addEventListener('change', adjustSpouseFieldsetHeight);
        window.addEventListener('resize', adjustSpouseFieldsetHeight);


        // Añadir listeners para los cambios de la opción de seguro y del número de dependientes
        document.querySelector("#include_dependant_in_insurance").addEventListener('change', toggleDependentQuantity);
        window.addEventListener('resize', toggleDependentQuantity);

        document.querySelector("#qty__dependant").addEventListener("change", adjustDependentFieldsetHeight);
        window.addEventListener("resize", adjustDependentFieldsetHeight);

    }

    window.addEventListener("load", initialize);
})();
