var Bishop = function(player, index){
    this._name = "bishop";
    Piece.call(this, player, index);

};
Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;

Bishop.prototype.getMoves = function (state) {
    const moves = [[1,1],[1,-1],[-1,-1],[-1,1]];
    var res = [];
    for(let i = 0; i < moves.length; i++){
        let move = moves[i];
        let index = this._index;
        while(this.withInChessBoard(index, move[0], move[1]) && state && this._player !== state[index + move[0] + 8 * move[1]].data.getPlayer()){
            index += move[0] + 8 * move[1];
            res.push(index);
            if(!(state[index].data instanceof Empty)){
                break;
            }
        }
    }
    return res;
};

Bishop.prototype.getSpecialMoves = function (state) {
    return [];
};
