PlayerTwoController = function(){
    PlayerController.call(this, PLAYER.BLACK);
    this.initializePosition(7, 0, -1);
    console.log("hello");
}

PlayerTwoController.prototype = Object.create(PlayerController.prototype);
PlayerTwoController.prototype.constructor = PlayerTwoController
