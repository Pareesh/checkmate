(function(){

    const TYPE = ["rook","knight","bishop","queen","king","bishop","knight","rook","pawn","empty"];
    function getImage(type, colour){
        var image = document.createElement("img");
        var src = "./images/" + colour + "_" + type + ".png";
        image.setAttribute("src", src);
        return image;
    }

    function getType(index){
        if(index < 8){
            return TYPE[index]
        }else if(index < 16){
            return TYPE[8];
        }else if(index < 48){
            return TYPE[9];
        }else if(index < 56){
            return TYPE[8];
        }else if(index < 64){
            return TYPE[index-56];
        }
    }

    function getColour(index){
        if(index < 16){
            return "white";
        }else if(index > 47 && index < 64){
            return "black";
        }else{
            return "";
        }
    }

    class PigPiece extends HTMLElement{
        constructor(){
            super();
        }

        connectedCallback(){
            var index = this.closest(".pig-table-cell").getAttribute("index");
            var type = this.getAttribute("type") || getType(index);
            var colour = this.getAttribute("colour") || getColour(index);

            this.setAttribute("type", type);
            this.setAttribute("colour", colour);

            if(type !== "empty" && colour !== ""){
                var img = getImage(type, colour);
                this._img = img;
                this.appendChild(img);
            }
        }

        disconnectedCallback(){
          if(this.img)
          this.removeChild(this.img);
        }

        attributeChangedCallback(){

        }
    }
    window.customElements.define("pig-cell-piece", PigPiece);
}());
