document.addEventListener("DOMContentLoaded", () => {
    const grids = document.querySelectorAll(".grid");
    const massege = document.getElementById("massege");
    const restart = document.getElementById("restart");
    let currentplayer = "x";
    let board = ["", "", "", "", "", "", "", "", "",];
    let gameover = false;

    let winningcombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    function handlecellclick(e){
        const index = e.target.dataset.index;

        if (board[index] === "" && !gameover){
            board[index] = currentplayer;
            e.target.textContent = currentplayer;

            if (checkForWin()){
                massege.textContent = `player ${currentplayer} wins!!`
                gameover = true;
            } 
            else if(board.every(grid => grid !== "")){
                massege.textContent = "its a draw";
                gameover = true;
            }
            else{
                currentplayer = currentplayer === "x" ? "o" : "x";
                massege.textContent = `player ${currentplayer}s turn`;
            }
        }
    }

    function checkForWin() {
        return winningcombinations.some(combination => {
          return combination.every(index => board[index] === currentplayer);
        });
      }

    function restartgame(){
        board = ["", "", "", "", "", "", "", "", ""];
        currentplayer = "x";
        gameover = false;
        massege.textContent = "player X turn";
        grids.forEach(grid => {
            grid.textContent = "";
        });
    }

    grids.forEach(grid => {
        grid.addEventListener("click", handlecellclick)
    });

    restart.addEventListener("click", restartgame);

    massege.textContent = "player X turn";
});