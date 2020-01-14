class PigRow extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        console.log(this);
    }

    disconnectedCallback(){

    }

    attributeChangedCallback(){

    }
}
window.customElements.define("pig-row", PigRow);
