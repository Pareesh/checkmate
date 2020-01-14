class CheckmateCell extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        console.log("Hello");
    }

    disconnectedCallback(){

    }

    attributeChangedCallback(){

    }
}
window.customElements.define("checkmate-cell", CheckmateCell);
