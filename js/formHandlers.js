
// Formatea el número del social security
function formatSocialSecurityNumber(e) {
    let target = e.target, position = target.selectionStart, length = target.value.length;
    target.value = target.value.replace(/\D/g, '').replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3').substr(0, 11);

    if (position !== length) {
        target.setSelectionRange(position, position);
    }
}


//Maneja la altura del FIELDSET
function fixFieldsetHeight() {
    let valor = document.querySelector("#include_in_insurance").value.toLowerCase();
    const inputSpouse = document.querySelectorAll(".input__spouse");

    if(valor == "si") {
        inputSpouse.forEach(element =>{
            element.setAttribute("required", "");
        });

        if(window.innerWidth > 1200){
            document.querySelector("#fieldset__spouse").style.height = "250px";

        } else if(window.innerWidth < 1200 && window.innerWidth > 768){
            document.querySelector("#fieldset__spouse").style.height = "340px";

        } else if(window.innerWidth < 768){
            document.querySelector("#fieldset__spouse").style.height = "600px";
        }
        document.querySelector("#fieldset__spouse").style.transition = "0.5s ease";

    } else if(valor !== "si"){
        inputSpouse.forEach(element =>{
            element.removeAttribute("required");
        });

        if(window.innerWidth > 768){
            document.querySelector("#fieldset__spouse").style.height = "150px";
        } else {
            document.querySelector("#fieldset__spouse").style.height = "230px";
        }
    }
}


window.addEventListener('load', function() {
    // Esta función maneja el comportamiento en la entrada del número de teléfono.
    document.getElementById('user__phone__number').addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });

    // Para el número de seguridad social del usuario
    document.getElementById('user__social__security').addEventListener('input', function(e) {
        formatSocialSecurityNumber(e);
    });

    // Para el número de seguridad social del cónyuge
    document.getElementById('spouse__social__security').addEventListener('input', function(e) {
        formatSocialSecurityNumber(e);
    });

    document.querySelector("#include_in_insurance").addEventListener('change', fixFieldsetHeight);
    window.addEventListener('resize', fixFieldsetHeight);

});

