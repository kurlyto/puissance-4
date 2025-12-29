const mapCols = [];
let isRedTurn = true;

function createBoard() {
  mapCols.length = 0; //reset de la mapCols à chaque création de board
  const cols = 7;
  const rows = 6;
  const board = document.createElement("section"); //créé la section board
  const main = document.querySelector("main"); //selectionne le main
  const startButton = document.getElementById("start-button"); //selectionne le bouton start
  startButton.addEventListener("click", () => {
    //si on clique sur  le bouton
    startButton.remove(); //le bouton s'enlève
    main.appendChild(board); //on place board dans main
    board.id = "board"; //on ajoute un ID à board
    for (let i = 0; i < cols; i++) {
      const mapCol = [];
      mapCols.push(mapCol);
      console.log("Colonne : " + (i + 1));
      const colonne = document.createElement("section"); // on créé 7 colonnes
      colonne.classList.add("colonne"); //on leur donne une classe
      colonne.addEventListener("click", () => listenMoves(i + 1)); //on ecoute le bouton
      board.appendChild(colonne); //on place colonne dans board
      for (let x = 0; x < rows; x++) {
        console.log("  Case : " + (x + 1) + " de la colonne " + (i + 1));
        const emptySpot = document.createElement("div"); //on créé 6 cases par colonne
        emptySpot.classList.add("empty-spot"); //on ajoute une classe aux cases
        colonne.appendChild(emptySpot); //on place ces cases dans colonne
        mapCol.push(emptySpot);
      }
    }
    console.log(mapCols.length);
    console.log(mapCols[0].length);
    console.log(mapCols[0][0]);
  });
}

function listenMoves(i) {
	const colonne = document.querySelectorAll("colonne");
	colonne.addEventListener("click", () => (
  console.log("Est-ce le tour du rouge : " + isRedTurn);
  console.log(i);
  if (i == 1) {
    console.log("Placement d'un pion en colonne " + i);
    for (let x = mapCols[0].length - 1; x >= 0; x--) {
      //pour chaque cases de la colonne
      if (mapCols[0][x].classList.contains("empty-spot") || isRedTurn == true) {
        mapCols[0][x].classList.add("red-spot");
        mapCols[0][x].classList.remove("empty-spot");
        isRedTurn = false;
        console.log(isRedTurn);
				break;
      }
      //on vérifie si la case est vide
      else if (
        mapCols[0][x].classList.contains("empty-spot") ||
        isRedTurn == false
      ) {
        mapCols[0][x].classList.add("yellow-spot");
        mapCols[0][x].classList.remove("empty-spot");
        isRedTurn = true;
      }
    }
  }
  if (i == 2) {
    console.log("Placement d'un pion en colonne " + i);
    for (let x = mapCols[1].length - 1; x >= 0; x--) {
      if (mapCols[1][x].classList.contains("empty-spot") || isRedTurn == true) {
        mapCols[1][x].classList.add("red-spot");
        isRedTurn = false;
      } else {
        mapCols[1][x].classList.add("yellow-spot");
        isRedTurn = true;
      }
      break;
    }
  }
  if (i == 3) {
    console.log("Placement d'un pion en colonne " + i);
    for (let x = mapCols[2].length - 1; x >= 0; x--) {
      if (mapCols[2][x].classList.contains("empty-spot") || isRedTurn == true) {
        mapCols[2][x].classList.add("red-spot");
        isRedTurn = false;
      } else {
        mapCols[2][x].classList.add("yellow-spot");
        isRedTurn = true;
      }
      break;
    }
  }
  if (i == 4) {
    console.log("Placement d'un pion en colonne " + i);
    for (let x = mapCols[3].length - 1; x >= 0; x--) {
      if (mapCols[3][x].classList.contains("empty-spot") || isRedTurn == true) {
        mapCols[3][x].classList.add("red-spot");
        isRedTurn = false;
      } else {
        mapCols[3][x].classList.add("yellow-spot");
        isRedTurn = true;
      }
      break;
    }
  }
  if (i == 5) {
    console.log("Placement d'un pion en colonne " + i);
    for (let x = mapCols[4].length - 1; x >= 0; x--) {
      if (mapCols[4][x].classList.contains("empty-spot") || isRedTurn == true) {
        mapCols[4][x].classList.add("red-spot");
        isRedTurn = false;
      } else {
        mapCols[4][x].classList.add("yellow-spot");
        isRedTurn = true;
      }
      break;
    }
  }
  if (i == 6) {
    console.log("Placement d'un pion en colonne " + i);
    for (let x = mapCols[0].length - 1; x >= 0; x--) {
      if (mapCols[5][x].classList.contains("empty-spot") || isRedTurn == true) {
        mapCols[5][x].classList.add("red-spot");
        isRedTurn = false;
      } else {
        mapCols[5][x].classList.add("yellow-spot");
        isRedTurn = true;
      }
      break;
    }
  }
  if (i == 7) {
    console.log("Placement d'un pion en colonne " + i);
    for (let x = mapCols[6].length - 1; x >= 0; x--) {
      if (mapCols[6][x].classList.contains("empty-spot") || isRedTurn == true) {
        mapCols[6][x].classList.add("red-spot");
        isRedTurn = false;
      } else {
        mapCols[6][x].classList.add("yellow-spot");
        isRedTurn = true;
      }
      break;
    }
  }

function startGame() {
  //bouton Jouer statique
  //listen click Jouer
  //creer board afficher board lors du clic sur jouer
  //effacer boutons jouer
  createBoard();
  //listen buttons
  //check game status
  // showResults (victoire/defaite/play again)
}

startGame();
