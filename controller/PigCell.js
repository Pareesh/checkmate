class PigCell extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        console.log(this.attribute);
    }

    disconnectedCallback(){

    }

    attributeChangedCallback(){

    }
}
window.customElements.define("pig-cell", PigCell);
