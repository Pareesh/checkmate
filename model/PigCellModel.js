function PigCellModel(el, player){
    const TYPE = ["rook","knight","bishop","queen","king","bishop","knight","rook","pawn","empty"];
    const constants = CHECKMATE.MODEL.PIECE;
    // Use Factory Method to create chess piece object
    function createChessPiece(index, type, player){
        var type = type|| getType(index);
        var player = player || getPlayer(index);
        if(type === constants.PAWN){
          return new Pawn(player, index);
        }else if(type === constants.ROOK){
          return new Rook(player, index);
        }else if(type === constants.KNIGHT){
          return new Knight(player, index);
        }else if(type === constants.BISHOP){
          return new Bishop(player, index);
        }else if(type === constants.QUEEN){
          return new Queen(player, index);
        }else if(type === constants.KING){
          return new King(player, index);
        }else {
          return new Empty(index);
        }
    }

    function getPlayer(index){
        if(getColour(index) === "white"){
            return "playerOne";
        }else if(getColour(index) === "black"){
            return "playerTwo";
        }
    }

    function getType(index){
        if(index < 8){
            return TYPE[index]
        }else if(index < 16){
            return TYPE[8];
        }else if(index < 48){
            return TYPE[9];
        }else if(index >= 48 && index < 56){
            return TYPE[8];
        }else if(index >= 56 && index < 64){
            return TYPE[index-56];
        }else{
            return TYPE[9];
        }
    }

    function getColour(index){
        if(index >= 0 && index < 16){
            return "white";
        }else if(index > 47 && index < 64){
            return "black";
        }else{
            return "";
        }
    }

    return{
        data : createChessPiece(parseInt(el.getAttribute("index"), 10), "", player),
        click : function (prevModel){
            var currData = this.data;
            var prevData = prevModel ? prevModel.data : undefined;
            if(!currData.click(prevData)){
                var currIndex = currData.getIndex();
                var prevIndex = prevData.getIndex();
                this.data = prevData;
                this.data.setIndex(currIndex);
                prevModel.data = createChessPiece(prevIndex, TYPE[9], "undefined");
            }
        }
    };
}
