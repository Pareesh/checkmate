function PigCellModel(el){
    this._self = el;
    var index  = parseInt(el.getAttribute("index"), 10);
    this._index = index;
    this._model = createChessPiece(index);

    this._getPlayer = function(){
        return this._model.getPlayer();
    }

    this._getValidMoves = function(){
        return this._model._getValidMoves();
    }
}
