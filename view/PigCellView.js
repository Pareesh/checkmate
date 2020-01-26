function PigCellView(el){
    this._self = el;
    this.index = el.getAttribute("index");
    initializeCell(el);
    this._pigPiece = el.querySelector("pig-cell-piece");

    this._click = function(e){
        var prevSelected = document.querySelector("[selected]");
        var currSelected = e.currentTarget;
        if(!prevSelected){
            currSelected.setAttribute("selected","");
        } else if(prevSelected === currSelected){
            prevSelected.removeAttribute("selected");
        } else {
            var prevSelf = prevSelected._self;
            var currSelf = currSelected._self;
            currSelf._pigPiece.replaceWith(prevSelf._pigPiece);
            currSelf._pigPiece = prevSelf._pigPiece;
            prevSelected.innerHTML = '<pig-piece class = "pig-checkmate-chessboard-piece" type="empty" colour = "none"></pig-piece>';
            prevSelf._pigPiece = prevSelected.children[0];
            prevSelected.removeAttribute("selected");
        }
    }
}

function initializeCell(el){
    el.appendChild(getPigPiece());
}

function getPigPiece() {
    var piece = document.createElement("pig-cell-piece");
    return piece;
}
