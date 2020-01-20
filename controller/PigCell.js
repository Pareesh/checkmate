(function(){

    function chessboardRowData(element){
        var parent = element;
        var parentId = parent.attributes.rowId.value;
        var items = parent.querySelectorAll(".pig-checkmate-chessboard-row-data");
        for(let i = 0; i < items.length ; i++){
            items[i].setAttribute("positionX",parentId);
            items[i].setAttribute("positionY",i);
        }

    }

    document.addEventListener("DOMContentLoaded", function(event){
        var currentEL = event.target;
        var rows = currentEL.querySelectorAll(".pig-checkmate-chessboard-row");
        rows.forEach(function(row){
            new chessboardRowData(row);
        });
    });
}());
