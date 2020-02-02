var Queen = function(player){
    this._type = "queen";
    Piece.call(this, player);
};

Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;

Queen.prototype.getMoves = function (currentIndex, state) {
    const moves = [[1,1],[1,-1],[-1,-1],[-1,1],[0,1],[0,-1],[1,0],[-1,0]];
    var res = [];
    for(let i = 0; i < moves.length; i++){
        let move = moves[i];
        let index = currentIndex;
        while(this.withInChessBoard(index, move[0], move[1]) && this._player !== state[index + move[0] + 8 * move[1]].get("player")){
            index += move[0] + 8 * move[1];
            res.push(index);
            if(!(state[index].get("info") instanceof Empty)){
                break;
            }
        }
    }
    return res;
};

Queen.prototype.getSpecialMoves = function (state) {
    return [];
};
