var constants = CHECKMATE.MODEL.PIECE;

// Use Factory Method to create chess piece object
var createChessPiece = function(type, player){
    if(type === constants.PAWN){
      return new Pawn(player);
    }else if(type === constants.ROOK){
      return new Rook(player);
    }else if(type === constants.KNIGHT){
      return new Knight(player);
    }else if(type === constants.BISHOP){
      return new Bishop(player);
    }else if(type === constants.QUEEN){
      return new Queen(player);
    }else if(type === constants.KING){
      return new king(player);
    }else {
      log.console.error("type doesn't not match any type");
      return undefined;
    }
}
