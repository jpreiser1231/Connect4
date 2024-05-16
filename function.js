let board = [	 [null, null, null, null, null, null, null ],
    [null, null, null, null, null, null, null ],
    [null, null, null, null, null, null, null ],
    [null, null, null, null, null, null, null ],
    [null, null, null, null, null, null, null ],
    [null, null, null, null, null, null, null ]]
//each array inside is a row with a value to represent empty, and take nby each player
//for the column that the user presses, check the lowest available row (for-loop)
//TO CHECK FOR WINNER: separate loop check one and check the 3 to the right. another loop to check columns using same algorithm. chek diagonals by checking the the top left 4x3 box and chekcking one down and one right.do the same from the right 4x3 section and go left and down one (USE IF STATEMENT TO CHECK BACKGROUND COLOR)(IF THAT DOESNT WORK CHECK IF THEY ARE ALL EVEN OR ODD)
let player = 1
function fill(row, col, playerValue)//takes location and player and puts color down and changes player
{
    if (playerValue%2 === 0)
        document.getElementById(row + "," + col).style.backgroundColor = "red";
    else
        document.getElementById(row + "," + col).style.backgroundColor = "yellow";
    player++;
}


function clickC1() {
    for (let x = 5; x >= 0; x--) {
        if (board[x][0] === null) {
            board[x][0] = player;
            fill(x, 0, player);
            break;
        }
    }
}

    function clickC2() {
        for (let x = 5; x >= 0; x--) {
            if (board[x][1] === null) {
                board[x][1] = player;
                fill(x, 1, player);
                break;
            }
        }
    }

    function clickC3() {
        for (let x = 5; x >= 0; x--) {
            if (board[x][2] === null) {
                board[x][2] = player;
                fill(x, 2, player);
                break;
            }
        }
    }

    function clickC4() {
        for (let x = 5; x >= 0; x--) {
            if (board[x][3] === null) {
                board[x][3] = player;
                fill(x, 3, player);
                break;
            }
        }
    }

    function clickC5() {
        for (let x = 5; x >= 0; x--) {
            if (board[x][4] === null) {
                board[x][4] = player;
                fill(x, 4, player);
                break;
            }
        }
    }

    function clickC6() {
        for (let x = 5; x >= 0; x--) {
            if (board[x][5] === null) {
                board[x][5] = player;
                fill(x, 5, player);
                break;
            }
        }
    }

    function clickC7() {
        for (let x = 5; x >= 0; x--) {
            if (board[x][6] === null) {
                board[x][6] = player;
                fill(x, 6, player);
                break;
            }
        }
    }

    function check()
    {
        for(let start = 0; start < 5; r++)
        {
            for(let next = 0; next < 3; next++)
            {
                if(board[start][next] !== null)
                    if(document.getElementById(start + "," + next).style.backgroundColor === document.getElementById(start + "," + next+1).style.backgroundColor && document.getElementById(start + "," + next+1).style.backgroundColor === document.getElementById(start + "," + next+2).style.backgroundColor && document.getElementById(start + "," + next+2).style.backgroundColor === document.getElementById(start + "," + next+3).style.backgroundColor)//if board[start][next] is equal to the next one which is equal to the next which is equal to the next
                        if(player%2 === 0)
                            win("Player 2");
                        else win("Player 1");
            }
        }
    }
    function win(winner)
    {
        //display the winner ALSO ADD A RESET BUTTON
    }





