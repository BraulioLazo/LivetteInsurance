(function () {
    function initialize() {

        adjustSpouseFieldsetHeight();

        // Esta función maneja el comportamiento en la entrada del número de teléfono.
        document.getElementById('user__phone__number').addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });


        // FORMATEA el número de seguridad social
        document.querySelectorAll('.input__social__security').forEach(element => {
            element.addEventListener('input', function (e) {
                formatSocialSecurityNumber(e);
            });
        });

        // Ajusta la altura del FIELDSET del cónyuge dependiendo del valor seleccionado
        document.querySelector("#taxes_with_spouse").addEventListener('change', adjustSpouseFieldsetHeight);
        window.addEventListener('resize', handleWindowResize);

        document.querySelector("#taxes_with_dependant").addEventListener("change", toggleDependentQuantity);

        document.getElementById('file__upload').addEventListener('change', function() {
            var fileList = document.getElementById('file_list');
            fileList.innerHTML = ''; // Limpiamos la lista de archivos
            fileList.style.paddingTop = "30px"
        
            // Por cada archivo seleccionado, generamos una vista previa y agregamos su nombre a la lista
            for(var i=0; i<this.files.length; i++) {
                var file = this.files[i];
        
                var img = document.createElement("img");
                img.classList.add("obj");
                img.file = file;
                fileList.appendChild(img);
        
                // Usamos FileReader para leer el contenido del archivo
                var reader = new FileReader();
                reader.onload = (function(aImg) { 
                    return function(e) { 
                        aImg.src = e.target.result; 
                    }; 
                })(img);
                reader.readAsDataURL(file);
            }
        });
        
        

    }

    window.addEventListener("load", initialize);
})();
