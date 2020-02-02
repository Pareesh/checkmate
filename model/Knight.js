var Knight = function(player){
    this._type = "knight";
    Piece.call(this, player);
};

Knight.prototype = Object.create(Piece.prototype);
Knight.prototype.constructor = Knight;

Knight.prototype.getMoves = function (currentIndex, state) {
    const moves = [[2,1],[2,-1],[-2,-1],[-2,1],[1,2],[1,-2],[-1,2],[-1,-2]];
    var res = [];
    for(let i = 0; i < moves.length; i++){
        let move = moves[i];
        let index = currentIndex +  move[0] + 8 * move[1];
        if(this.withInChessBoard(currentIndex, move[0], move[1]) && this._player !== state[index].get("player")){
            res.push(index);
        }
    }
    return res;
};

Knight.prototype.getSpecialMoves = function (state) {
    return [];
};
