var Empty = function(index, player){
    Piece.call(this, undefined);
    this._type = "empty";
};

Empty.prototype = Object.create(Piece.prototype);
Empty.prototype.constructor = Empty;
