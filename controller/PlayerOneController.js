var constants = CHECKMATE.MODEL.PLAYER;
PlayerOneController = function(){
    PlayerController.call(this, constants.WHITE);
    this.initializePosition(0, 0, 1);
}

PlayerOneController.prototype = Object.create(PlayerController.prototype);
PlayerOneController.prototype.constructor = PlayerOneController
