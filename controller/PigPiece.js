(function(){

    class PigPiece extends HTMLElement{
        constructor(){
            super();
        }
        connectedCallback(){
            var type = this.getAttribute("type");
            var colour = this.getAttribute("colour");
            var nextPossibleMove = this.getAttribute("nextPossibleMove");
            if(type !== "empty" && colour !== "none"){
                this.appendChild(getImage(type, colour));
            }

            if(nextPossibleMove){
                this.appendChild(getAvailableMoveImage());
            }

            function getImage(type, colour){
                var image = document.createElement("img");
                var src = "./images/" + colour + "_" + type + ".png";
                image.setAttribute("src", src);
                return image;
            }

            function getAvailableMoveImage(){
                var img = document.createElement("img");
                var src = "./images/availableMove.png";
                img.setAttribute("src",src);
                img.classList.add("availableMove");
                return img;
            }
        }

        disconnectedCallback(){
        }

        attributeChangedCallback(){
        }
    }
    window.customElements.define("pig-cell-piece", PigPiece);
}());
