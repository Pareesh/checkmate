var PlayerController = function(player){
  this.pawn = Array(8).fill(new Pawn(player));
  this.bishop = Array(2).fill(new Bishop(player));
  this.rook = Array(2).fill(new Rook(player));
  this.knight = Array(2).fill(new Knight(player));
  this.queen = new Queen(player);
  this.king = new King(player);

  this.initializePosition = function(startX, startY, next){
      this.rook[0].setPositionX = startX;
      this.rook[0].setPositionY = startY;
      this.rook[1].setPositionX = startX;
      this.rook[1].setPositionY = startY + 7;

      this.knight[0].setPositionX = startX;
      this.knight[0].setPositionY = startY + 1;
      this.knight[1].setPositionX = startX;
      this.knight[1].setPositionY = startY + 6;

      this.bishop[0].setPositionX = startX;
      this.bishop[0].setPositionY = startY + 2;
      this.bishop[1].setPositionX = startX;
      this.bishop[1].setPositionY = startY + 5;

      this.queen.setPositionX = startX;
      this.queen.setPositionY = startY + 3;
      this.king.setPositionX = startX;
      this.king.setPositionY = startY + 4;

      for (let [i, value] of this.pawn.entries()) {
          value.setPositionX = startX + next;
          value.setPositionY = startY + next + i;
      }
  }

}
