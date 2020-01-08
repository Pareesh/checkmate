var Knight = function(player){
    Piece.call(this, "knight", player);
};

Knight.prototype = Object.create(Piece.prototype);
Knight.prototype.constructor = Knight;
