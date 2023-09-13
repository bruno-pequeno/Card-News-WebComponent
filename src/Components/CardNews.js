class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.innerHTML = "<h1> Hello </h1>";
    }
}

customElements.define("card-news", Cardnews);
