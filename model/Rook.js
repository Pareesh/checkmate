var Rook = function(player, index){
    this._name = "rook";
    Piece.call(this, player, index);
};

Rook.prototype = Object.create(Piece.prototype);
Rook.prototype.constructor = Rook;

Bishop.prototype.getMoves = function (state) {
    const moves = [[0,1],[0,-1],[1,0],[-1,0]];
    var res = [];
    for(let i = 0; i < moves.length; i++){
        let move = moves[0];
        let index = this._index +  move[0] + 8 * move[1];
        while(index >= 0 && index < 64 && state && this._player !== state.getInfo(index)._player){
            index += move[0] + 8 * move[1];
            res.append([index]);
        }
    }
    return res;
};

Bishop.prototype.getSpecialMoves = function (state) {
    return [];
};
