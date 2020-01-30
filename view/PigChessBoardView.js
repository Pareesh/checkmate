var PigChessBoardView = function(el) {
    this._self = el;
    initializeBoard(el);
    this._tbody = document.querySelector("tbody");
    this._onClick = function(event){

    }

    this._updateMoves = function(indices){
        for(var index of indices){
            var element = el.querySelector(".pig-table-cell[index='" + index + "'] pig-cell-piece");
            element.appendChild(createAvailableMoveImage());
        }
    }

    this._resetMoves = function(){
        var elements = el.querySelectorAll("img.availableMove");
        for(var element of elements){
            element.remove();
        }
    }
}

function createAvailableMoveImage(){
    var img = document.createElement("img");
    var src = "./images/availableMove.png";
    img.setAttribute("src",src);
    img.classList.add("availableMove");
    return img;
}

function initializeBoard(el){
    var size = [8,8];
    var tbody = document.createElement("tbody");
    for(let i = 0; i < size[0]; i++){
        var row = createTableRow(i);
        for(let j = 0; j < size[1]; j++){
            var cell = createTableCell(i*size[0]+j);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    el.appendChild(tbody);
}

function createTableRow(index){
    var el = document.createElement("tr");
    el.classList.add("pig-table-row");
    el.setAttribute("index", index);
    return el;
}

function createTableCell(index){
    var el = document.createElement("td");
    el.setAttribute("index", index);
    el.classList.add("pig-table-cell");
    if(index%2){
        el.setAttribute("colour", "white");
    }else{
        el.setAttribute("colour", "black");
    }
    return el;
}
