var Piece = function(){
    this.alive = true;
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
