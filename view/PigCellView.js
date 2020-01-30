function PigCellView(el){
    this._el = el;
    var self = this;
    var index = el.getAttribute("index");
    initialize(el);
    var pigPiece = el.querySelector("pig-cell-piece");

    function initialize(el){
        el.appendChild(getPigPiece());
    }

    function getPigPiece() {
        var piece = document.createElement("pig-cell-piece");
        return piece;
    }

    function getEmptyPigPiece() {
        var piece = getPigPiece();
        piece.setAttribute("type","empty");
        piece.setAttribute("colour","none");
        return piece;
    }

    this._click = function(prevView){
        var curr = this._el;
        var prev = prevView ? prevView._el : undefined;
        if(!prev){
            curr.setAttribute("selected","");
            return;
        } else if(prev !== curr){
            var removed = prev.removeChild(prev.children[0]);
            curr.removeChild(curr.children[0]);
            curr.appendChild(removed);
            prev.appendChild(getEmptyPigPiece());
        }
        prev.removeAttribute("selected");
    }

    this.updateMoves = function(indices){
        var curr = this._el;
        var prev = prevView ? prevView._el : undefined;
        if(!prev){
            curr.setAttribute("selected","");
            return;
        } else if(prev !== curr){
            var removed = prev.removeChild(prev.children[0]);
            curr.removeChild(curr.children[0]);
            curr.appendChild(removed);
            prev.appendChild(getEmptyPigPiece());
        }
        prev.removeAttribute("selected");
    }
}
