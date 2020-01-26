var Queen = function(player, index){
    this._name = "queen";
    Piece.call(this, player, index);
};

Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;
