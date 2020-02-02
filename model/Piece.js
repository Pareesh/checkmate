var Piece = function(player){
    this._player = player;
    this._colour = player ? player.COLOUR : undefined;
    this._selected = false;
    this._nextPossibleMove = false;
};

// Piece.prototype.getSelected = function () {
//     return this._selected;
// };
//
// Piece.prototype.setSelected = function (value) {
//     this._selected = value;
//     this.setDirty(true);
// };
//
// Piece.prototype.getNextPossibleMove = function () {
//     return this._nextPossibleMove;
// };
//
// Piece.prototype.setNextPossibleMove = function (value) {
//     this._nextPossibleMove = value;
//     this.setDirty(true);
// };
//
// Piece.prototype.getDirty = function () {
//     return this._dirty;
// };
//
// Piece.prototype.setDirty = function (value) {
//     this._dirty = value;
// };
//
// Piece.prototype.getPlayer = function () {
//     return this._player;
// };

// Piece.prototype.getValidMoves = function (index, state) {
//     var res = [];
//     res = res.concat(this.getMoves(index, state));
//     res = res.concat(this.getSpecialMoves(index, state));
//     return res;
// };
//
// Piece.prototype.getMoves = function (state) {
//     return [];
// };
//
// Piece.prototype.getSpecialMoves = function (state) {
//     return [];
// };

Piece.prototype.withInChessBoard = function (index, offsetX, offsetY) {
    var x = index%8 + offsetX;
    var y = index/8 + offsetY;
    if(x >= 0 && x < 8 && y >= 0 && y < 8){
        return true;
    }
    return false;
};
