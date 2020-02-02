function PigChessBoardModel(model, player){
    var self = this;
    var state = model || {};
    var selectedIndex = undefined;
    var currentPlayer = undefined;
    togglePlayer();
    function togglePlayer(){
        if(currentPlayer === PIGMATE.PLAYER_ONE){
            currentPlayer = PIGMATE.PLAYER_TWO;
        }else{
            currentPlayer = PIGMATE.PLAYER_ONE
        }
    }

    (function(){
        if(model){

        }else{
            for(var index = 0; index < PIGMATE.SIZE.ROW * PIGMATE.SIZE.COLUMN; index++){
                if(index >= 0 && index < 16){
                    //state[index] = new PigCellModel(index, player);
                    state[index] = new PigCellModel(index, PIGMATE.PLAYER_ONE);
                }else if(index >= 48 && index < 64){
                    //state[index] = new PigCellModel(index, player);
                    state[index] = new PigCellModel(index, PIGMATE.PLAYER_TWO);
                }else{
                    state[index] = new PigCellModel(index, undefined);
                }
            }
        }
    }());

    function setNextPossibleMoves(index){
        var moves = state[index].getValidMoves(state);
        for(var move of moves){
            state[move].set("nextPossibleMove", true);
        }
    }

    function resetNextPossibleMoves(index){
        var moves = state[index].getValidMoves(state);
        for(var move of moves){
            state[move].set("nextPossibleMove", false);
        }
    }

    function isSelectable(index){
        if(selectedIndex){
            return false;
        }

        if(currentPlayer !==  state[index].get("player")){
            return false
        }

        if(state[index].getValidMoves(state).length <= 0){
            return false;
        }
        return true;
    }

    function isMovable(index){
        if(!selectedIndex){
            return false;
        }

        if(index === selectedIndex){
            return false;
        }

        if(state[selectedIndex].getValidMoves(state).indexOf(parseInt(index)) < 0){
            return false;
        }
        return true;
    }

    function move(index, selected){
        var info = new PigCellModel(undefined, undefined, "empty").get("info");
        state[index].set("info", state[selected].get("info"));
        state[selected].set("info", info);
    }

    return {
        getState : function(){
            return state;
        },

        click : function(index){
            if(isSelectable(index)){
                selectedIndex = index;
                state[index].set("selected", true);
                setNextPossibleMoves(index);
            }else if(index === selectedIndex){
                selectedIndex = undefined;
                state[index].set("selected", false);
                resetNextPossibleMoves(index);
            }else if(isMovable(index)){
                resetNextPossibleMoves(selectedIndex);
                state[selectedIndex].set("selected", false);
                state[selectedIndex].set("moved", true);
                move(index, selectedIndex);
                selectedIndex = undefined;
                togglePlayer();
            }else {

            }
        },

        getDirtyIndices : function(){
            var res = [];
            for(var index in state){
                if(state[index].get("dirty"))
                    res.push(state[index].get("index"));
            }
            return res;
        },

        resetDirtyIndices : function(){
            for(var index in state){
                if(state[index].get("dirty"))
                    state[index].set("dirty", false);
            }
        }
    }
}
