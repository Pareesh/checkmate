(function(){
    var type;
    var object;
    class PigPiece extends HTMLElement{

        constructor(){
            super();
        }

        connectedCallback(){
            type = this.attributes.type.value;
            object = createChessPiece(type);
        }

        disconnectedCallback(){

        }

        attributeChangedCallback(){

        }
    }
    window.customElements.define("pig-piece", PigPiece);
}());
