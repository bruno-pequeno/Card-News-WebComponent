class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("h1");
        linkTitle.textContent = this.getAttribute("title") || "None"; 
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content") || "None";

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("src-img") || "assets/Default-photo.png";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: 0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            
            .card {
                width: 65%;
                -webkit-box-shadow: 3px 2px 19px -7px rgba(0,0,0,0.75);
                -moz-box-shadow: 3px 2px 19px -7px rgba(0,0,0,0.75);
                box-shadow: 3px 2px 19px -7px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 10px;
            }
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card_left > span{
                font-weight: 400;
            
            }
            
            .card_left > h1 {
                margin-top: 15px;
                font-size: 25px;
            }
            
            img {
                height: 10rem;
                width: max-content;
            }
            
            .card_left > p {
                color: gray;
            }
        `;

        return style;
    }
}

customElements.define("card-news", Cardnews);
