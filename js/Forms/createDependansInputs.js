// Función principal para crear los campos del formulario para un número especificado de dependientes
function createDependantFormFields(numberOfDependants) {

    // Función interna para crear un array del tamaño especificado
    function createArray() {

        if (numberOfDependants > 5) {
            numberOfDependants = 5;
        }

        let array = [];
        // Llena el array con el número de dependientes requerido
        for (let i = 0; i < numberOfDependants; i++) {
            array.push(i);
        }
        return array;
    }

    // Crea el array que vamos a usar para generar los campos del formulario
    const array = createArray();

    // Mapea cada elemento del array a un conjunto de campos de formulario para un dependiente
    let dependantsForm = array.map((_, index) => {
        return `
            <div class="form__group">
                
                <div class="input__group">
                    <label for="dependant__name_${index}">Nombre del Dependiente<span>*</span>:</label>
                    <input type="text" id="dependant__name_${index}" class="input__dependant"
                        name="nombre_dependiente_${index}" placeholder="Nombre(s) y Apellidos."
                        style="text-transform: capitalize;" required>
                </div>
    
                <div class="input__group">
                    <label for="dependant__birth__date_${index}">Fecha de Nacimiento<span>*</span>:</label>
                    <input type="date" id="dependant__birth__date_${index}" class="input__dependant"
                        name="fecha_nacimiento_dependiente_${index}" required>
                </div>
    
                <div class="input__group">
                    <label for="dependant__social__security_${index}">Número de Seguro
                        Social<span>*</span>:</label>
                    <input type="text" id="dependant__social__security_${index}" class="input__dependant input__social__security"
                        name="dependiente_social_security_${index}" maxlength="11" placeholder="123-45-6789" required>
                </div>
    
                <div class="input__group">
                    <label for="dependant__legal__status_${index}">Estatus Migratorio<span>*</span>:</label>
                    <select id="dependant__legal__status_${index}" class="input__dependant"
                        name="estatus_migratorio_dependiente_${index}" required>
                        <option value="">Selecciona una opción</option>
                        <option value="permiso_de_trabajo">Permiso de Trabajo</option>
                        <option value="residente">Residente</option>
                        <option value="ciudadano">Ciudadano</option>
                    </select>
                </div>
            </div>
        `;
    }).join('');

    // Inserta los campos del formulario generados en el contenedor apropiado en el DOM
    document.querySelector('#form__group__qty__dependant').innerHTML = dependantsForm;
}

const createDependantsQuestions = () => {
    return `
    <div class="input__group">
        <label for="include_dependant_in_insurance">¿Estará incluido en el
            seguro?<span>*</span>:</label><br>
        <select id="include_dependant_in_insurance" name="incluir_depende_en_seguro"
            required>
            <option value="">Selecciona una opción</option>
            <option value="si">Sí</option>
            <option value="no">No</option>
        </select>
    </div>

    <div class="input__group" id="input__group__qty__dependant">
        <label for="qty__dependant">¿Cuántos?<span>*</span>:</label><br>
        <input type="number" id="qty__dependant" placeholder="De 1 a 5"
            name="cantidad_dependientes" min="0" max="5" style="padding: 0 10px;" required>
    </div>
    `;
};