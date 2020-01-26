var Piece = function(player, index, colour){
    this._player = player;
    this._colour = colour;
    this._isAlive = true;
    this._index = index;

    function getMoves(state) {
    };

    function getSpecialMoves(state) {
        return [];
    };
};

Piece.prototype.setIndex = function (index) {
    this._index = index;
};

Piece.prototype.getIndex = function (index) {
    return this._index;
};

Piece.prototype.getPlayer = function () {
    return this.player;
};

Piece.prototype.getIsAlive = function () {
    return this.alive
};

Piece.prototype.setIsAlive = function (alive) {
    this._alive = alive;
};

Piece.prototype.getColour = function () {
    return this.colour;
};

Piece.prototype._getValidMoves = function (state) {
    var res = [];
    res.push(this.getMoves(state));
    res.push(this.getSpecialMoves(state));
    return res;
};

Piece.prototype.getMoves = function (state) {
    return [];
};

Piece.prototype.getSpecialMoves = function (state) {
    return [];
};
