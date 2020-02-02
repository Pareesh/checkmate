document.addEventListener("DOMContentLoaded", function(event){
    var el = document.querySelector(".pig-chessboard");
    new PigChessBoardController(el);
});

function PigChessBoardController(el, model){
    var model = new PigChessBoardModel(model);
    var view = new PigChessBoardView(model.getState(), this);
    this.click = function(index){
        model.click(index);
        view.updateView(model.getState(), model.getDirtyIndices());
        model.resetDirtyIndices();
    }
}
