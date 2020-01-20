(function(){

    function chessboardRow(element){
        var el = element;
        var id = el.attributes.rowId.value;
    }

    document.addEventListener("DOMContentLoaded", function(event){
        var currentEL = event.target;
        var rows = currentEL.querySelectorAll(".pig-checkmate-chessboard-row");
        rows.forEach(function(row){
            new chessboardRow(row);
        });
    });
}());
