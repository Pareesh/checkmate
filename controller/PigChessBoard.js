(function(){

    function chessboard(element){
      var el = element;

    }

    document.addEventListener("DOMContentLoaded", function(event){
        var currentEL = event.target;
        var element = currentEL.querySelector(".pig-checkmate-chessboard");
        chessboard(element);
    });
}());
