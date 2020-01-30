function PigChessBoardModel(el, controllers){
    var self = this;
    var state = {};
    initialize();
    function initialize(){
        var cells = document.querySelectorAll(".pig-table-cell");
            cells.forEach(function(cell){
              var index = cell.getAttribute("index");
              var cellModel = controllers[index].getModel();
              state[index] = cellModel;
          });
    }

    return {
        getCurrentState : function(){
            return state;
        },

        updateCurrentState : function(index, model){
            self.state[index] = cellModel;
        }
    }
}
