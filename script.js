function createBoard() {
  const cols = 7;
  const rows = 6;
  const board = document.createElement("section");
  const main = document.querySelector("main");
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", () => {
		startButton.remove()
    main.appendChild(board);
    board.id = "board";
    for (let i = 0; i < cols; i++) {
      console.log("Colonne : " + (i + 1));
      const colonne = document.createElement("section");
      colonne.classList.add("colonne");
      board.appendChild(colonne);
      for (let x = 0; x < rows; x++) {
        console.log("  Case : " + (x + 1) + " de la colonne " + (i + 1));
        const emptySpot = document.createElement("div");
        emptySpot.classList.add("empty-spot");
        colonne.appendChild(emptySpot);
      }
    }
  });
}

function startGame() {
  //bouton Jouer statique
  //listen click Jouer
  //creer board afficher board lors du clic sur jouer
  createBoard();
  //effacer boutons jouer
  //listen buttons
  //check game status
  // showResults (victoire/defaite/play again)
}
startGame();
