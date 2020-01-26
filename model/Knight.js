var Knight = function(player, index){
    this._name = "knight";
    Piece.call(this, player, index);
};

Knight.prototype = Object.create(Piece.prototype);
Knight.prototype.constructor = Knight;

Knight.prototype.getMoves = function (state) {
    const moves = [[2,1],[2,-1],[-2,-1],[-2,1],[1,2],[1,-2],[-1,2],[-1,-2]];
    var res = [];
    for(let i = 0; i < moves.length; i++){
        let move = moves[i];
        let index = this._index +  move[0] + 8 * move[1];
        if(index >= 0 && index < 64 && state && this._player !== state.getInfo(index)._player){
            res.append([index]);
        }
    }
    return res;
};

Knight.prototype.getSpecialMoves = function (state) {
    return [];
};
