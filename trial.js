class specialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <p>
        <a href="trial.html">
            Home
        </a>
        <a href="trial2.html">
            About
        </a>
        <a href="trial3.html">
            Services
        </a>
    </p>
        `
    }
}

class specialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <p>this is the copy right of web page.</p>
        `
    }
}

customElements.define('special-header', specialHeader);
customElements.define('special-footer', specialFooter);