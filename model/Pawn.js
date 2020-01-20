var Pawn = function(player){
    Piece.call(this);
    this.name = CHECKMATE.MODEL.PIECE.PAWN;
};

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;
