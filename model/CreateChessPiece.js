(function(_window){
    var constants = CHECKMATE.MODEL.PIECE;

    const TYPE = ["rook","knight","bishop","queen","king","bishop","knight","rook","pawn","empty"];
    // Use Factory Method to create chess piece object
      _window.createChessPiece = function(index){
        var type = getType(index);
        var player = getPlayer(index);
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
          console.log("type doesn't not match any type");
          return undefined;
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
        }else if(index < 56){
            return TYPE[8];
        }else if(index < 64){
            return TYPE[index-56];
        }
    }

    function getColour(index){
        if(index < 16){
            return "white";
        }else if(index > 47 && index < 64){
            return "black";
        }else{
            return "";
        }
    }
}(window));
