var form = document.getElementById("form__user__info");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form_send_status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Hemos recibido tu mensaje. Te contactaremos lo más pronto posible!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! Hemos tenido un problema al enviar el mensaje. Recargue la página y vuelva a enviarlo"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! Hemos tenido un problema al enviar el mensaje. Recargue la página y vuelva a enviarlo"
  });
}
form.addEventListener("submit", handleSubmit)