
// Formatea el número del social security
function formatSocialSecurityNumber(e) {
    let target = e.target, position = target.selectionStart, length = target.value.length;
    target.value = target.value.replace(/\D/g, '').replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3').substr(0, 11);

    if (position !== length) {
        target.setSelectionRange(position, position);
    }
}

