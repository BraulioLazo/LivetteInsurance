const bothForms = document.querySelector("#form__user__info");
bothForms.addEventListener("submit", () => {
    setTimeout(() => {
        location.reload();
    }, 3000);
});