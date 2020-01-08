var Queen = function(player){
    Piece.call(this, "queen", player);
};

Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;
