var Pawn = function(player){
    Piece.call(this, "pawn", player);
};

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;
