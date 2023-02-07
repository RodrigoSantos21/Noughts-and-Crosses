var buttons = [];
var playerType = 'X';
var positionSelected = [];
const turnText = document.querySelector('.playerTurn');
let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

function start(){
    positionSelected = [];
    document.querySelectorAll('.buttons button').forEach((item) => {
        item.addEventListener("click", move);
        turnText.innerHTML = `Player X turn`;
        item.innerHTML = '';
        buttons.push(item)
    });
}

start()

function move(e){
    var index = e.target.getAttribute('id');

    e.target.innerHTML = playerType;
    e.target.removeEventListener("click", move);
    positionSelected[index] = playerType;

    setTimeout(() => {
        winCondition();
      }, [100]);

      playerType = playerType === 'X' ? 'O' : 'X';
      turnText.innerHTML = `Player ${playerType} turn`;
}

function winCondition()
{
    const indicesX = positionSelected.map(function(valor,i){
        if(valor === 'X')return i
    });

    const indicesO = positionSelected.map(function(valor,i){
        if(valor === 'O')return i
    });

    for (pos of positions) {
        if (pos.every((item) => indicesX.includes(item))) {
          alert("X PLAYER HAS WON!");
          playerType = 'X';
          start();
          return;
        }

        if (pos.every((item) => indicesO.includes(item))) {
            alert("O PLAYER HAS WON!");
            start();
            return;
          }
    }

    if (positionSelected.filter((item) => item).length === 9) {
        alert("DRAW!");
        start();
        return;
    }
}