Utils = (function(){
    return {
        getCheckPiece : function(state, currentPlayer){
            var secondPlayer =  currentPlayer === PIGMATE.PLAYER_ONE ? PIGMATE.PLAYER_TWO : PIGMATE.PLAYER_ONE;
            var king = undefined;
            var res = undefined;
            for(var index in state){
                if(state[index].get("player") === currentPlayer){
                    if(state[index].get("info") instanceof King){
                        king = index
                    }
                }
            }
            for(var index in state){
                if(state[index].get("player") === secondPlayer){
                    if(state[index].getValidMoves(state).indexOf(parseInt(king)) >= 0){
                        res = index;
                    }
                }
            }
            return res;
        },

        checkForWinCondition : function(state, currentPlayer){
            if(this.getCheckPiece(state, currentPlayer)){
                var moves = this.getValidMovesInCheck(state,currentPlayer);
                if(Object.keys(moves).length > 0){
                    return false;
                }
                return true;
            }
            return false;
        },

        getValidMovesInCheck : function(state, currentPlayer){
            var moves = {};
            for(var index in state){
                if(state[index].get("player") === currentPlayer){
                    var currentIndex = state[index].get("index");
                    var validMoves = state[index].getValidMoves(state);
                    for(var i = 0; i<validMoves.length; i++){
                        var validInfo = state[validMoves[i]].get("info");
                        var currentInfo = state[currentIndex].get("info");
                        state[validMoves[i]].set("info", currentInfo);
                        state[currentIndex].set("info", new PigCellModel(undefined, undefined, "empty").get("info"));
                        if(!this.getCheckPiece(state, currentPlayer)){
                            moves[currentIndex] = moves[currentIndex] || [];
                            moves[currentIndex].push(validMoves[i]);
                        }
                        state[validMoves[i]].set("info", validInfo);
                        state[currentIndex].set("info", currentInfo);
                    }
                }
            }
            return moves;
        },

        isInCheckCondition : function(state, currentPlayer){
            if(this.getCheckPiece(state, currentPlayer)){
                return true;
            }
            return false;
        },

        getValidMovesAvoidCheck : function(index, state, currentPlayer){
            var moves = state[index].getValidMoves(state);
            var res = [];
            var self = this;
            moves.forEach(function(move){
                var validInfo = state[move].get("info");
                var currentInfo = state[index].get("info");
                state[move].set("info", currentInfo);
                state[index].set("info", new PigCellModel(undefined, undefined, "empty").get("info"));
                if(!self.isInCheckCondition(state, currentPlayer)){
                    res.push(move)
                }
                state[move].set("info", validInfo);
                state[index].set("info", currentInfo);
            });
            return res;
        },
    }
}());
