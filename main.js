var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

handleClick = function(event) {
    console.log (event);
    var cell = event.target

    cell.innerHTML = currentPlayer;
    if(currentPlayer === "X") {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    }
    else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }

    //swap players
    currentPlayer = nextPlayer;

    playerSelections.push(parseInt(cell.id))
    //
}

function checkWinner(player) {
    for (i = 0; i < winningCombinations.length; i++) {
        var matches = 0;
        for (m = 0; m < winningCombinations[i].length; m++) { 
            if (player.includes(winningCombinations[i][m])) {
                matches++;
            }
            else {
                break;
             }
            
        }
        if (matches = 3) {
            return true;
        }

    }
}

function checkDraw() {
    return playerXSelections.length + playerOSelections >= cells.length;
}

var cells = document.querySelectorAll("td");

for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}
