var King = function(player, index){
    Piece.call(this, player, index);
    this._name = "king";
};

King.prototype = Object.create(Piece.prototype);
King.prototype.constructor = King;

King.prototype.getMoves = function (state) {
    const moves = [[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[0,1],[-1,0],[0,-1]];
    var res = [];
    for(let i = 0; i < moves.length; i++){
        let move = moves[i];
        let index = this._index +  move[0] + 8 * move[1];
        if(this.withInChessBoard(this._index, move[0], move[1]) && state && this._player !== state[index].data.getPlayer()){
            res.push(index);
        }
    }
    return res;
};

King.prototype.getSpecialMoves = function (state) {
    return [];
};
