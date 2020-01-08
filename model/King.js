var King = function(player){
    Piece.call(this, "king", player);
};

King.prototype = Object.create(Piece.prototype);
King.prototype.constructor = King;
