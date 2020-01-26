(function(){

    function initialize(el){
        var cells = document.querySelectorAll(".pig-table-cell");
        var self = this;
        cells.forEach(function(cell){
            new PigCellController(cell);
            //this._cellsController.push(cell._controller);
        });

    }

    function PigChessBoardController(el){
        el._controller = this;
        this._view = new PigChessBoardView(el);
        this._model;
        initialize(el);
        var player = document.querySelector(".pig-player");
        player.setAttribute("value","playerOne");

    }

    document.addEventListener("DOMContentLoaded", function(event){
        var el = document.querySelector(".pig-chessboard");
        el._controller = PigChessBoardController(el);
    });
}());
