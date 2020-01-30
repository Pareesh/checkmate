var Pawn = function(player, index){
    this._name = CHECKMATE.MODEL.PIECE.PAWN;
    this._moved = false;
    Piece.call(this, player, index);
};

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

Pawn.prototype.getMoves = function (state) {
    const moves = this._player === "playerOne" ? [[0,1]] : [[0,-1]];
    var res = [];
    var move =  moves[0];
    let index = this._index + move[0] + 8 * move[1];
    if(this.withInChessBoard(this._index, move[0], move[1]) && state && state[index].data._name === "empty"){
        res.push(index);
    }
    return res;
};

Pawn.prototype.getSpecialMoves = function (state) {
    const moves = this._player === "playerOne" ? [[1,1],[-1,1]] : [[1,-1],[-1,-1]];
    var res = [];
    for(let i = 0; i < moves.length; i++){
        var move = moves[i];
        let index = this._index + move[0] + 8 * move[1];
        if(this.withInChessBoard(this._index, move[0], move[1]) && state && this._player !== state[index].data.getPlayer() && state[index].data._name !== "empty"){
            res.push(index);
        }
    }

    if(!this._moved){
        var move = this._player === "playerOne" ? [0, 2] : [0, -2];
        let index = this._index + move[0] + 8 * move[1];
        if(this.withInChessBoard(this._index, move[0], move[1]) && state && state[index].data._name === "empty"){
            res.push(index);
        }
        this._moved = true;
    }
    return res;
};
