var Pawn = function(player, index){
    this._name = CHECKMATE.MODEL.PIECE.PAWN;
    Piece.call(this, player, index);
};

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

Pawn.prototype.getMoves = function (state) {
    const moves = this._player === "playerOne" ? [[0,1]] : [[0,-1]];
    var res = [];
    var move =  moves[0];
    let index = this._index + move[0] + 8 * move[1];;
    if(index >= 0 && index < 64 && state && this._player !== state.getInfo(index)._player){
        res.append([index]);
    }
    return res;
};

Pawn.prototype.getSpecialMoves = function (state) {
    const moves = this._player === "playerOne" ? [[1,1],[-1,1]] : [[1,-1],[-1,-1]];
    var res = [];
    for(let i = 0; i < moves.length; i++){
        var move = moves[i];
        let index = this._index + move[0] + 8 * move[1];;
        if(index >= 0 && index < 64 && state && this._player !== state.getInfo(index)._player
            && state.getInfo(index)._name !== "empty"){
            res.append([index]);
        }
    }
    return res;
};
