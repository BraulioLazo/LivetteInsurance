class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <div class="footer__container">
                                <p>&copy; <span id="year"></span> LivetteInsurance<small>&reg;</small>. Todos los derechos reservados.</p>
                           </div>`;
        this.setFooterYear();
    }
    
    setFooterYear() {
        const date = new Date();
        this.querySelector("#year").textContent = date.getFullYear();
    }
}

customElements.define("my-footer", MyFooter);