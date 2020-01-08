var Bishop = function(player){
    Piece.call(this, "king", player);
};

Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;
