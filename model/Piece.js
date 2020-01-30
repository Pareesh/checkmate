var Piece = function(player, index, colour){
    this._player = player;
    this._colour = colour;
    this._alive = true;
    this._index = index;
    this._selected = false;
};

Piece.prototype.setIndex = function (index) {
    this._index = index;
};

Piece.prototype.getIndex = function (index) {
    return this._index;
};

Piece.prototype.getSelected = function (selected) {
    this._selected = selected;
};

Piece.prototype.setSelected = function (index) {
    return this._selected;
};

Piece.prototype.getPlayer = function () {
    return this._player;
};

Piece.prototype.getIsAlive = function () {
    return this._alive
};

Piece.prototype.setIsAlive = function (alive) {
    this._alive = alive;
};

Piece.prototype.getColour = function () {
    return this.colour;
};

Piece.prototype.getValidMoves = function (state) {
    var res = [];
    res = res.concat(this.getMoves(state));
    res = res.concat(this.getSpecialMoves(state));
    return res;
};

Piece.prototype.getMoves = function (state) {
    return [];
};

Piece.prototype.getSpecialMoves = function (state) {
    return [];
};

Piece.prototype.withInChessBoard = function (index, offsetX, offsetY) {
    var x = index%8 + offsetX;
    var y = index/8 + offsetY;
    if(x >= 0 && x < 8 && y >= 0 && y < 8){
        return true;
    }
    return false;
};

Piece.prototype.click = function(prevModel){
    var curr = this;
    var prev = prevModel ? prevModel : undefined;
    if(!prev){
        this._selected = true;
        return true;
    }else if(prev === curr){
        this._selected = false;
        return true;
    }else{
        prevModel._selected = false;
        return false;
    }
}
