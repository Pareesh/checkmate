function PigCellController(el) {
    var selfEl = el;
    el._controller = this;
    var view = this._view = new PigCellView(el);
    var model = this._model = new PigCellModel(el);
    var player = document.querySelector(".pig-player");

    function isValidMove(){
        var flag = 0;
        if(player.getAttribute("value") ===  model._getPlayer()){
            flag++;
        }
        if(model._getValidMoves().length>0){
            flag++;
        }
    }

    el.addEventListener("click", function(event){
        var target = event.currentTarget;
        var controller = target._controller;
        var view = controller._view;
        var model = controller._model;
        isValidMove();
    });
}
