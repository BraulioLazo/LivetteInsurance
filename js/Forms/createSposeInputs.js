
const generateSpouseInsuranceOptionHTML = () => {
    return `
    <label for="include_spouse_in_insurance">¿Estará incluido en el seguro?<span>*</span>:</label><br>
    <select id="include_spouse_in_insurance" name="incluir_conyugue_en_seguro" required>
        <option value="">Selecciona una opción</option>
        <option value="si">Sí</option>
        <option value="no">No</option>
    </select>`;
};

const generateSpouseFormFieldsHTML = () => {
    return `
            <div class="input__group">
                <label for="spouse__name">Nombre del Cónyuge<span>*</span>:</label>
                <input type="text" id="spouse__name" class="input__spouse" name="nombre_conyugue"
                        placeholder="Nombre(s) y Apellidos." style="text-transform: capitalize;" required>
            </div>

            <div class="input__group">
                <label for="spouse__birth__date">Fecha de Nacimiento<span>*</span>:</label>
                <input type="date" id="spouse__birth__date" class="input__spouse"
                    name="fecha_nacimiento_conyugue" required>
            </div>

            <div class="input__group">
                <label for="spouse__social__security">Número de Seguro Social<span>*</span>:</label>
                <input type="text" id="spouse__social__security"
                    class="input__spouse input__social__security" name="conyugue_social_security"
                    maxlength="11" placeholder="123-45-6789" required>
            </div>

            <div class="input__group">
                <label for="spouse__legal__status">Estatus Migratorio<span>*</span>:</label>
                <select id="spouse__legal__status" class="input__spouse"
                    name="estatus_migratorio_conyugue" required>
                        <option value="">Selecciona una opción</option>
                        <option value="permiso_de_trabajo">Permiso de Trabajo</option>
                        <option value="residente">Residente</option>
                        <option value="ciudadano">Ciudadano</option>
                </select>
            </div>

            <div class="input__group">
                <label for="spouse__employer">Empleador del Cónyuge:</label>
                <input type="text" id="spouse__employer" class="input__spouse" 
                       name="empleador_conyugue" placeholder="Nombre del empleador." 
                       style="text-transform: capitalize;">
            </div>

            <div class="input__group">
                <label for="spouse__income">Ingresos del Cónyuge:</label>
                <input type="text" id="spouse__income" class="input__spouse" 
                       name="ingresos_conyugue" placeholder="Ingresos mensuales">
            </div>
    `;
};

