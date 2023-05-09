document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact__form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Replace YOUR_FORMSPREE_ENDPOINT with your Formspree endpoint
        const formspreeEndpoint = 'https://formspree.io/f/xjvdlner';

        fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(new FormData(form))
        })
        .then(response => response.json())
        .then(() => {
            // Handle successful form submission here
            const formSendStatusContainer = document.querySelector("#form_send_status");
            formSendStatusContainer.textContent = "Su mensaje se ha enviado con éxito. Lo contactaremoslo más pronto posible. !Un abrazo¡"
        })
        .catch(() => {
            // Handle form submission errors here
            alert('An error occurred while submitting the form.');
        });
    });
});
