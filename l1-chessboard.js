var sizeBoard = 8;

var board = ""; 
for (var x = 0; x < size; x++) { 
    for (var p = 0; p < size; p++) { 
        if ((p + x) % 2 === 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);
