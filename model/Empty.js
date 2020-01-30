var Empty = function(index){
    Piece.call(this, undefined, index, "none");
    this._name = "empty";
    this.setIsAlive(false);
};

Empty.prototype = Object.create(Piece.prototype);
Empty.prototype.constructor = Empty;
