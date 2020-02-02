var Pawn = function(player){
    this._type = "pawn";
    this._moved = false;
    Piece.call(this, player);
};

Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

Pawn.prototype.getMoves = function (currentIndex, state) {
    const moves = this._player === PIGMATE.PLAYER_ONE ? [[0,1]] : [[0,-1]];
    var res = [];
    var move =  moves[0];
    let index = currentIndex + move[0] + 8 * move[1];
    if(this.withInChessBoard(currentIndex, move[0], move[1]) && state[index].get("type") === "empty"){
        res.push(index);
    }

    if(!this._moved){
        var move = this._player === PIGMATE.PLAYER_ONE ? [0, 2] : [0, -2];
        let index = currentIndex + move[0] + 8 * move[1];
        if(this.withInChessBoard(currentIndex, move[0], move[1]) && state[index].get("type") === "empty"){
            move[1] = move[1] > 0 ? move[1] - 1 : move[1] + 1;
            if(this.withInChessBoard(currentIndex, move[0], move[1]) && state[currentIndex + move[0] + 8 * move[1]].get("type") === "empty"){
                res.push(index);
            }
        }
    }

    return res;
};

Pawn.prototype.getSpecialMoves = function (currentIndex, state) {
    const moves = this._player === PIGMATE.PLAYER_ONE ? [[1,1],[-1,1]] : [[1,-1],[-1,-1]];
    var res = [];
    for(let i = 0; i < moves.length; i++){
        var move = moves[i];
        let index = currentIndex + move[0] + 8 * move[1];
        if(this.withInChessBoard(currentIndex, move[0], move[1]) && this._player !== state[index].get("player") && state[index].get("type") !== "empty"){
            res.push(index);
        }
    }
    return res;
};
