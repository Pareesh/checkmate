function PigCellView(el, model){
    var self = this;
    this._piece = getPigPiece(model);
    el.appendChild(this._piece);

    function getPigPiece(model) {
        var piece = document.createElement("pig-cell-piece");
        piece.setAttribute("type", model.get("type"));
        piece.setAttribute("colour", model.get("colour"));
        if(model.get("selected")){
            el.setAttribute("selected", "");
        }else{
            el.removeAttribute("selected");
        }
        if(model.get("nextPossibleMove")){
            piece.setAttribute("nextPossibleMove", true);
        }else{
            piece.removeAttribute("nextPossibleMove");          
        }
        return piece;
    }

    return {
        updateView : function(newModel){
            var piece = getPigPiece(newModel);
            el.replaceChild(piece, self._piece);
            self._piece = piece;
        }
    }
}
