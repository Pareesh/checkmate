var PigChessBoardView = function(modelState, controller) {
    var self = this;
    var el = document.querySelector(".pig-chessboard");
    var viewState = {};

    (function initialize(){
        var tbody = document.createElement("tbody");
        for(var index = 0; index < PIGMATE.SIZE.ROW * PIGMATE.SIZE.COLUMN; index++){
            if(index%8 == 0){
                var row = createTableRow();
            }

            var cell = createTableCell(index);
            viewState[index] = new PigCellView(cell, modelState[index]);
            row.appendChild(cell);

            if((index+1)%8 == 0){
                tbody.appendChild(row);
            }
        }
        el.appendChild(tbody);
    }());

    function createTableRow(){
        var row = document.createElement("tr");
        row.classList.add("pig-table-row");
        return row;
    }

    function createTableCell(index){
        var cell = document.createElement("td");
        cell.setAttribute("index", index);
        cell.classList.add("pig-table-cell");
        if((index+parseInt(index/8, 10))%2){
            cell.setAttribute("colour", "white");
        }else{
            cell.setAttribute("colour", "black");
        }
        return cell;
    }

    el.addEventListener("click", function(event){
        var matchedTarget = event.target.closest(".pig-table-cell");
        var index = matchedTarget.getAttribute("index");
        if(controller.click){
            controller.click(index);
        }
    });

    this.updateView = function(newModel, indices){
        for(var index of indices){
            viewState[index].updateView(newModel[index]);
        }
    }
}
