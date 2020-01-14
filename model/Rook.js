var Rook = function(player){
    Piece.call(this, "rook", player);
};

Rook.prototype = Object.create(Piece.prototype);
Rook.prototype.constructor = Rook;
