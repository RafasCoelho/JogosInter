document.addEventListener('DOMContentLoaded', () => {


    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {


    let square = event.target;
    let position = square.id;

   if (handleMove(position)) {

       setTimeout(() => {
           alert("O jogo Acabou - O Vencedor foi" + playerTime);

       }, 10);
   };
    updateSquares(position);
}

function updateSquares(position) {
    let squares = document.getElementById(position.toString());
    let symbol = board[position];
    squares.innerHTML = `<div class='${symbol}'></div>`
}

