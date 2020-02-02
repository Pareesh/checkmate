function PigCellModel(index, player, type){
    const TYPE = PIGMATE.PIECETYPE;
    const PIECE = PIGMATE.PIECE;
    var self = this;
    this._index = index;
    this._dirty = false;
    // Use Factory Method to create chess piece object
    this._info = (function createChessPiece(type){
        var pieceType = type|| getType(index);
        if(pieceType === PIECE.PAWN && player){
          return new Pawn(player);
        }else if(pieceType === PIECE.ROOK && player){
          return new Rook(player);
        }else if(pieceType === PIECE.KNIGHT && player){
          return new Knight(player);
        }else if(pieceType === PIECE.BISHOP && player){
          return new Bishop(player);
        }else if(pieceType === PIECE.QUEEN && player){
          return new Queen(player);
        }else if(pieceType === PIECE.KING && player){
          return new King(player);
        }else {
          return new Empty(index, undefined);
        }
    }());

    function getType(index){
        if(index < 8){
            return TYPE[index]
        }else if(index < 16){
            return TYPE[8];
        }else if(index >= 48 && index < 56){
            return TYPE[8];
        }else if(index >= 56 && index < 64){
            return TYPE[index-56];
        }else{
            return TYPE[9];
        }
    }

    return {
        getValidMoves : function(state){
            var res = [];
            res = res.concat(self._info.getMoves(self._index, state));
            res = res.concat(self._info.getSpecialMoves(self._index, state));
            return res;
        },

        set : function(property, value){
            if(property === "dirty"){
                self._dirty = value;
                return;
            }else if (self.hasOwnProperty("_" + property)) {
                self["_" + property] = value;
            }else if(this.get("info").hasOwnProperty("_" + property)){
                this.get("info")["_" + property] = value;
            }
            self._dirty = true;
        },

        get : function(property){
            if (self.hasOwnProperty("_" + property)) {
                return self["_" + property];
            }else if(this.get("info").hasOwnProperty("_" + property)){
                return this.get("info")["_" + property];
            }
            return undefined;
        },

        updateInfo : function(newPieceInfo){
            if(newPieceInfo.prototype instanceof Piece){
                self._info = newPieceInfo;
            }
        },
    };
        // click : function (prevModel){
        //     var currData = this.data;
        //     var prevData = prevModel ? prevModel.data : undefined;
        //     if(!currData.click(prevData)){
        //         var currIndex = currData.getIndex();
        //         var prevIndex = prevData.getIndex();
        //         this.data = prevData;
        //         this.data.setIndex(currIndex);
        //         prevModel.data = createChessPiece(prevIndex, "undefined", TYPE[9]);
        //     }
        // }
}
