var King = function(player){
    Piece.call(this, player);
    this._type = "king";
};

King.prototype = Object.create(Piece.prototype);
King.prototype.constructor = King;

King.prototype.getMoves = function (currentIndex, state) {
    const moves = [[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[0,1],[-1,0],[0,-1]];
    var res = [];
    for(let i = 0; i < moves.length; i++){
        let move = moves[i];
        let index = currentIndex +  move[0] + 8 * move[1];
        if(this.withInChessBoard(currentIndex, move[0], move[1]) && state && this._player !== state[index].get("player")){
            res.push(index);
        }
    }
    return res;
};

King.prototype.getSpecialMoves = function (state) {
    return [];
};
