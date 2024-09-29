document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Welcome to Tic Tac Toe");
    let music = new Audio("Taambdi Chaamdi.mp3");
    let audioTurn = new Audio("ting.mp3");
    let gameover = new Audio("gameover.mp3");
    let turn = "X";
    let isgameover = false;

    // Function to change the turn
    const changeTurn = () => {
        turn = turn === "X" ? "0" : "X";
    };

    // Function to check for a win
    const checkWin = () => {
        let boxtext = document.getElementsByClassName("boxtext");
        let wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        wins.forEach(e => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
                isgameover = true;
                document.querySelector('.imageClass').getElementsByTagName('excited.gif')[0].style.width = "56px";
                gameover.play(); // Play game over sound when someone wins
            }
        });
    };

    // Event listener to start the game music on the first user interaction
    document.body.addEventListener('click', () => {
        music.play();
    }, { once: true });

    // Game Logic
    let Boxes = document.getElementsByClassName("Box");
    Array.from(Boxes).forEach(element => {
        let boxtext = element.querySelector('.boxtext');
        if (boxtext) {
            element.addEventListener('click', () => {
                if (boxtext.innerText === '' && !isgameover) {
                    boxtext.innerText = turn;
                    changeTurn();
                    audioTurn.play();
                    checkWin();
                    if (!isgameover) {
                        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                    }
                }
            });
        }
    });

    // Reset game
    const resetButton = document.getElementById('Reset');
    resetButton.addEventListener('click', () => {
        const boxes = document.querySelectorAll('.boxtext');
        boxes.forEach(box => box.textContent = '');
        document.querySelector('.info').textContent = 'Turn for X';
        turn = "X";
        isgameover = false;
    });
});
