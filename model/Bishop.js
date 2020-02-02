var Bishop = function(player){
    this._type = "bishop";
    Piece.call(this, player);

};
Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;

Bishop.prototype.getMoves = function (currentIndex, state) {
    const moves = [[1,1],[1,-1],[-1,-1],[-1,1]];
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

Bishop.prototype.getSpecialMoves = function (state) {
    return [];
};
