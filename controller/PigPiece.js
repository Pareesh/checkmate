(function(){
    var type;
    var object;
    var colour;
    var img;

    function addImage(){
        var image = document.createElement("IMG");
        var src = "./images/" + colour + "_" + type + ".png";
        image.setAttribute("src", src);
        return image;
    }

    class PigPiece extends HTMLElement{

        constructor(){
            super();
        }

        connectedCallback(){
            type = this.attributes.type.value;
            colour = this.attributes.colour.value;
            object = createChessPiece(type);
            if(type !== "empty"){
                img = addImage();
                this.append(img);
            }
        }

        disconnectedCallback(){
          type = undefined;
          object = undefined;
        }

        attributeChangedCallback(){

        }
    }
    window.customElements.define("pig-piece", PigPiece);
}());
