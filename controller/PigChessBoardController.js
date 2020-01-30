document.addEventListener("DOMContentLoaded", function(event){
    var el = document.querySelector(".pig-chessboard");
    new PigChessBoardController(el);
});

function PigChessBoardController(el){
    var self = this;
    var selfEl = el;
    var view = new PigChessBoardView(el);
    var cells = document.querySelectorAll(".pig-table-cell");
    var player = document.querySelector(".pig-player");
    var cellControllers = {};
    var selectedIndex;
    reset();
    initialize();
    addListener();
    var model = new PigChessBoardModel(el, cellControllers);

    function reset(){
        selectedIndex = undefined;
    }

    function initialize(){
        cells.forEach(function(cell){
            var index = cell.getAttribute("index");
            var cellController = new PigCellController(cell)
            cellControllers[index] = cellController;
        });
        player.setAttribute("value","playerOne");
    }

    function togglePlayer(){
        var player = document.querySelector(".pig-player").getAttribute("value");
        if(player === "playerOne"){
            document.querySelector(".pig-player").setAttribute("value", "playerTwo");
        }else {
            document.querySelector(".pig-player").setAttribute("value", "playerOne");
        }
    }

    function addListener(){
        selfEl.addEventListener("click", function(e){

        });

        cells.forEach(function(cell){
            cell.addEventListener("click", function(e){
                var index = cell.getAttribute("index");
                var cellController = cellControllers[index];
                if (!selectedIndex && cellController.isSelectable(model.getCurrentState())) {
                    cellController.onClick(undefined);
                    view._updateMoves(cellController.getValidMoves(model));
                    selectedIndex = index;
                }else if(selectedIndex && selectedIndex === index){
                    view._resetMoves();
                    cellController.onClick(cellControllers[selectedIndex]);
                    reset();
                }else if(selectedIndex && cellControllers[selectedIndex].getValidMoves(model).indexOf(parseInt(index)) >= 0){
                    view._resetMoves();
                    cellController.onClick(cellControllers[selectedIndex]);
                    reset();
                    togglePlayer();
                }
            });
        });
    }
}
