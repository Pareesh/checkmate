var Piece = function(name, player){
    this.name = name;
    this.alive = true;
    this.white = player;
    this.positionX = undefined;
    this.positionY = undefined;
};

Piece.prototype.setPositionX = function (positionX) {
    this.positionX = positionX;
};

Piece.prototype.setPositionY = function (positionY) {
    this.positionY = positionY;
};

Piece.prototype.setIsAlive = function (alive) {
    isBoolean(value) ? this.alive = alive : undefined;
};

Piece.prototype.getIsWhite = function () {
    return this.white;
};
Piece.prototype.getName = function () {
    return this.name;
};
