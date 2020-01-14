class PigChessBoard extends HTMLElement{

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
window.customElements.define("pig-chessboard", PigChessBoard);
