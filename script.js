const mapCols = [];
let isRedTurn = true;
let gameOver = false;
let hasRedWin;

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
      const colonne = document.createElement("section"); // on créé 7 colonnes
      colonne.classList.add("colonne"); //on leur donne une classe
      colonne.addEventListener("click", () => listenMoves(i + 1)); //on ecoute le bouton
      board.appendChild(colonne); //on place colonne dans board
      for (let x = 0; x < rows; x++) {
        const emptySpot = document.createElement("div"); //on créé 6 cases par colonne
        emptySpot.classList.add("empty-spot"); //on ajoute une classe aux cases
        colonne.appendChild(emptySpot); //on place ces cases dans colonne
        mapCol.push(emptySpot);
      }
    }
  });
}

function listenMoves(i) {
  if (gameOver) {
    return;
  }
  let x;
  console.log("Est-ce le tour du rouge : " + isRedTurn);
  if (i == 1) {
    for (let x = mapCols[0].length - 1; x >= 0; x--) {
      //pour chaque cases de la colonne
      if (mapCols[0][x].classList.contains("empty-spot") && isRedTurn == true) {
        mapCols[0][x].classList.remove("empty-spot");
        mapCols[0][x].classList.add("red-spot");
        console.log(
          "Placement d'un pion rouge en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = false;
        checkGameStatus(i, x);
        break;
      }
      //on vérifie si la case est vide
      else if (
        mapCols[0][x].classList.contains("empty-spot") &&
        isRedTurn == false
      ) {
        mapCols[0][x].classList.remove("empty-spot");
        mapCols[0][x].classList.add("yellow-spot");
        console.log(
          "Placement d'un pion jaune en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = true;
        checkGameStatus(i, x);
        break;
      }
    }
  }
  if (i == 2) {
    for (let x = mapCols[1].length - 1; x >= 0; x--) {
      //pour chaque cases de la colonne
      if (mapCols[1][x].classList.contains("empty-spot") && isRedTurn == true) {
        mapCols[1][x].classList.remove("empty-spot");
        mapCols[1][x].classList.add("red-spot");
        console.log(
          "Placement d'un pion rouge en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = false;
        checkGameStatus(i, x);
        break;
      }
      //on vérifie si la case est vide
      else if (
        mapCols[1][x].classList.contains("empty-spot") &&
        isRedTurn == false
      ) {
        mapCols[1][x].classList.remove("empty-spot");
        mapCols[1][x].classList.add("yellow-spot");
        console.log(
          "Placement d'un pion jaune en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = true;
        checkGameStatus(i, x);
        break;
      }
    }
  }
  if (i == 3) {
    for (let x = mapCols[2].length - 1; x >= 0; x--) {
      //pour chaque cases de la colonne
      if (mapCols[2][x].classList.contains("empty-spot") && isRedTurn == true) {
        mapCols[2][x].classList.remove("empty-spot");
        mapCols[2][x].classList.add("red-spot");
        console.log(
          "Placement d'un pion rouge en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = false;
        checkGameStatus(i, x);
        break;
      }
      //on vérifie si la case est vide
      else if (
        mapCols[2][x].classList.contains("empty-spot") &&
        isRedTurn == false
      ) {
        mapCols[2][x].classList.remove("empty-spot");
        mapCols[2][x].classList.add("yellow-spot");
        console.log(
          "Placement d'un pion jaune en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = true;
        checkGameStatus(i, x);
        break;
      }
    }
  }
  if (i == 4) {
    for (let x = mapCols[3].length - 1; x >= 0; x--) {
      //pour chaque cases de la colonne
      if (mapCols[3][x].classList.contains("empty-spot") && isRedTurn == true) {
        mapCols[3][x].classList.remove("empty-spot");
        mapCols[3][x].classList.add("red-spot");
        console.log(
          "Placement d'un pion rouge en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = false;
        checkGameStatus(i, x);
        break;
      }
      //on vérifie si la case est vide
      else if (
        mapCols[3][x].classList.contains("empty-spot") &&
        isRedTurn == false
      ) {
        mapCols[3][x].classList.remove("empty-spot");
        mapCols[3][x].classList.add("yellow-spot");
        console.log(
          "Placement d'un pion jaune en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = true;
        checkGameStatus(i, x);
        break;
      }
    }
  }
  if (i == 5) {
    for (let x = mapCols[4].length - 1; x >= 0; x--) {
      //pour chaque cases de la colonne
      if (mapCols[4][x].classList.contains("empty-spot") && isRedTurn == true) {
        mapCols[4][x].classList.remove("empty-spot");
        mapCols[4][x].classList.add("red-spot");
        console.log(
          "Placement d'un pion rouge en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = false;
        checkGameStatus(i, x);
        break;
      }
      //on vérifie si la case est vide
      else if (
        mapCols[4][x].classList.contains("empty-spot") &&
        isRedTurn == false
      ) {
        mapCols[4][x].classList.remove("empty-spot");
        mapCols[4][x].classList.add("yellow-spot");
        console.log(
          "Placement d'un pion jaune en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = true;
        checkGameStatus(i, x);
        break;
      }
    }
  }
  if (i == 6) {
    for (let x = mapCols[5].length - 1; x >= 0; x--) {
      //pour chaque cases de la colonne
      if (mapCols[5][x].classList.contains("empty-spot") && isRedTurn == true) {
        mapCols[5][x].classList.remove("empty-spot");
        mapCols[5][x].classList.add("red-spot");
        console.log(
          "Placement d'un pion rouge en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = false;
        checkGameStatus(i, x);
        break;
      }
      //on vérifie si la case est vide
      else if (
        mapCols[5][x].classList.contains("empty-spot") &&
        isRedTurn == false
      ) {
        mapCols[5][x].classList.remove("empty-spot");
        mapCols[5][x].classList.add("yellow-spot");
        console.log(
          "Placement d'un pion jaune en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = true;
        checkGameStatus(i, x);
        break;
      }
    }
  }
  if (i == 7) {
    for (let x = mapCols[6].length - 1; x >= 0; x--) {
      //pour chaque cases de la colonne
      if (mapCols[6][x].classList.contains("empty-spot") && isRedTurn == true) {
        mapCols[6][x].classList.remove("empty-spot");
        mapCols[6][x].classList.add("red-spot");
        console.log(
          "Placement d'un pion rouge en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = false;
        checkGameStatus(i, x);
        break;
      }
      //on vérifie si la case est vide
      else if (
        mapCols[6][x].classList.contains("empty-spot") &&
        isRedTurn == false
      ) {
        mapCols[6][x].classList.remove("empty-spot");
        mapCols[6][x].classList.add("yellow-spot");
        console.log(
          "Placement d'un pion jaune en colonne " + i + " en ligne " + (x + 1)
        );
        isRedTurn = true;
        checkGameStatus(i, x);
        break;
      }
    }
  }
  console.log(mapCols);
  return { i, x };
}

//position actuelle visuelle : i (colonne) et x+1 (ligne)
//position actuelle dans mapCols : i-1 (colonne) et x (ligne)
function checkGameStatus(i, x) {
  console.log("Vérification de la victoire...");
  console.log(mapCols);
  console.log(mapCols[i - 1][x]);
  console.log("case cliquée : " + mapCols[i - 1][x].classList);
  const board = document.getElementById("board");
  const emptySpot = board.getElementsByClassName("empty-spot");
  // SI LE DERNIER COUP EST ROUGE
  if (mapCols[i - 1][x] && mapCols[i - 1][x].classList.contains("red-spot")) {
    if (
      // CAS 1 : LIGNE VERTICALE ROUGE
      (mapCols[i - 1][x + 1] &&
        mapCols[i - 1][x + 1].classList.contains("red-spot") &&
        mapCols[i - 1][x + 2] &&
        mapCols[i - 1][x + 2].classList.contains("red-spot") &&
        mapCols[i - 1][x + 3] &&
        mapCols[i - 1][x + 3].classList.contains("red-spot")) ||
      // CAS 2 : LIGNE HORIZONTALE ROUGE (DROITE)
      (mapCols[i] &&
        mapCols[i][x] &&
        mapCols[i][x].classList.contains("red-spot") &&
        mapCols[i + 1] &&
        mapCols[i + 1][x] &&
        mapCols[i + 1][x].classList.contains("red-spot") &&
        mapCols[i + 2] &&
        mapCols[i + 2][x] &&
        mapCols[i + 2][x].classList.contains("red-spot")) ||
      // CAS 2.1 : LIGNE HORIZONTALE ROUGE (GAUCHE)
      (mapCols[i - 2] &&
        mapCols[i - 2][x] &&
        mapCols[i - 2][x].classList.contains("red-spot") &&
        mapCols[i - 3] &&
        mapCols[i - 3][x] &&
        mapCols[i - 3][x].classList.contains("red-spot") &&
        mapCols[i - 4] &&
        mapCols[i - 4][x] &&
        mapCols[i - 4][x].classList.contains("red-spot")) ||
      // CAS 2.2 : LIGNE HORIZONTALE ROUGE (MIX DROITE/GAUCHE)
      (mapCols[i] &&
        mapCols[i][x] &&
        mapCols[i][x].classList.contains("red-spot") &&
        mapCols[i - 2] &&
        mapCols[i - 2][x] &&
        mapCols[i - 2][x].classList.contains("red-spot") &&
        ((mapCols[i + 1] &&
          mapCols[i + 1][x] &&
          mapCols[i + 1][x].classList.contains("red-spot")) ||
          (mapCols[i - 3] &&
            mapCols[i - 3][x] &&
            mapCols[i - 3][x].classList.contains("red-spot")))) ||
      //CAS 3.1 : DIAGONALES ROUGES HAUT GAUCHE
      (mapCols[i] &&
        mapCols[i][x - 1] &&
        mapCols[i][x - 1].classList.contains("red-spot") &&
        mapCols[i + 1] &&
        mapCols[i + 1][x - 2] &&
        mapCols[i + 1][x - 2].classList.contains("red-spot") &&
        mapCols[i + 2] &&
        mapCols[i + 2][x - 3] &&
        mapCols[i + 2][x - 3].classList.contains("red-spot")) ||
      //CAS 3.2 : DIAGONALES ROUGES HAUT GAUCHE
      (mapCols[i - 2] &&
        mapCols[i - 2][x - 1] &&
        mapCols[i - 2][x - 1].classList.contains("red-spot") &&
        mapCols[i - 3] &&
        mapCols[i - 3][x - 2] &&
        mapCols[i - 3][x - 2].classList.contains("red-spot") &&
        mapCols[i - 4] &&
        mapCols[i - 4][x - 3] &&
        mapCols[i - 4][x - 3].classList.contains("red-spot")) ||
      //CAS 3.3 : DIAGONALES ROUGES BAS GAUCHE
      (mapCols[i - 2] &&
        mapCols[i - 2][x + 1] &&
        mapCols[i - 2][x + 1].classList.contains("red-spot") &&
        mapCols[i - 3] &&
        mapCols[i - 3][x + 2] &&
        mapCols[i - 3][x + 2].classList.contains("red-spot") &&
        mapCols[i - 4] &&
        mapCols[i - 4][x + 3] &&
        mapCols[i - 4][x + 3].classList.contains("red-spot")) ||
      //CAS 3.4 DIAGONALES ROUGES BAS DROITE
      (mapCols[i] &&
        mapCols[i][x + 1] &&
        mapCols[i][x + 1].classList.contains("red-spot") &&
        mapCols[i + 1] &&
        mapCols[i + 1][x + 2] &&
        mapCols[i + 1][x + 2].classList.contains("red-spot") &&
        mapCols[i + 2] &&
        mapCols[i + 2][x + 3] &&
        mapCols[i + 2][x + 3].classList.contains("red-spot")) || //haut droite existe, bas gauche existe, et OU 2x bas gauche OU 2x bas droite
      //CAS 3.5 DIAGONALES MIXTE HAUT/BAS DANS UN SENS
      (mapCols[i] &&
        mapCols[i][x - 1] &&
        mapCols[i][x - 1].classList.contains("red-spot") && //en haut a droite
        mapCols[i - 2] &&
        mapCols[i - 2][x + 1] &&
        mapCols[i - 2][x + 1].classList.contains("red-spot") && // en bas à gauche
        ((mapCols[i + 1] &&
          mapCols[i + 1][x - 2].classList.contains("red-spot")) || //2x haut droite ou gauche
          (mapCols[i - 3] &&
            mapCols[i - 3][x + 2].classList.contains("red-spot")))) ||
      (mapCols[i - 2] &&
        mapCols[i - 2][x - 1] &&
        mapCols[i - 2][x - 1].classList.contains("red-spot") &&
        mapCols[i] &&
        mapCols[i][x + 1] &&
        mapCols[i][x + 1].classList.contains("red-spot") &&
        ((mapCols[i - 3] &&
          mapCols[i - 3][x - 2].classList.contains("red-spot")) ||
          (mapCols[i + 1] &&
            mapCols[i + 1][x + 2].classList.contains("red-spot"))))
    ) {
      gameOver = true;
      console.log("RED WIN");
    }
  }
  // SI LE DERNIER COUP EST JAUNE
  if (
    mapCols[i - 1][x] &&
    mapCols[i - 1][x].classList.contains("yellow-spot")
  ) {
    if (
      // CAS 1 : LIGNE VERTICALE JAUNE
      (mapCols[i - 1][x + 1] &&
        mapCols[i - 1][x + 1].classList.contains("yellow-spot") &&
        mapCols[i - 1][x + 2] &&
        mapCols[i - 1][x + 2].classList.contains("yellow-spot") &&
        mapCols[i - 1][x + 3] &&
        mapCols[i - 1][x + 3].classList.contains("yellow-spot")) ||
      // CAS 2.1 : LIGNE HORIZONTALE JAUNE (DROITE)
      (mapCols[i] &&
        mapCols[i][x] &&
        mapCols[i][x].classList.contains("yellow-spot") &&
        mapCols[i + 1] &&
        mapCols[i + 1][x] &&
        mapCols[i + 1][x].classList.contains("yellow-spot") &&
        mapCols[i + 2] &&
        mapCols[i + 2][x] &&
        mapCols[i + 2][x].classList.contains("yellow-spot")) ||
      // CAS 2.2 : LIGNE HORIZONTALE JAUNE (GAUCHE)
      (mapCols[i - 2] &&
        mapCols[i - 2][x] &&
        mapCols[i - 2][x].classList.contains("yellow-spot") &&
        mapCols[i - 3] &&
        mapCols[i - 3][x] &&
        mapCols[i - 3][x].classList.contains("yellow-spot") &&
        mapCols[i - 4] &&
        mapCols[i - 4][x] &&
        mapCols[i - 4][x].classList.contains("yellow-spot")) ||
      // CAS 2.3 : LIGNE HORIZONTALE JAUNE (MIX DROITE/GAUCHE)
      (mapCols[i] &&
        mapCols[i][x] &&
        mapCols[i][x].classList.contains("yellow-spot") &&
        mapCols[i - 2] &&
        mapCols[i - 2][x] &&
        mapCols[i - 2][x].classList.contains("yellow-spot") &&
        ((mapCols[i + 1] &&
          mapCols[i + 1][x] &&
          mapCols[i + 1][x].classList.contains("yellow-spot")) ||
          (mapCols[i - 3] &&
            mapCols[i - 3][x] &&
            mapCols[i - 3][x].classList.contains("yellow-spot")))) ||
      //CAS 3.1 : DIAGONALES JAUNES HAUT DROITE
      (mapCols[i] &&
        mapCols[i][x - 1] &&
        mapCols[i][x - 1].classList.contains("yellow-spot") &&
        mapCols[i + 1] &&
        mapCols[i + 1][x - 2] &&
        mapCols[i + 1][x - 2].classList.contains("yellow-spot") &&
        mapCols[i + 2] &&
        mapCols[i + 2][x - 3] &&
        mapCols[i + 2][x - 3].classList.contains("yellow-spot")) ||
      //CAS 3.2 : DIAGONALES JAUNES HAUT GAUCHE
      (mapCols[i - 2] &&
        mapCols[i - 2][x - 1] &&
        mapCols[i - 2][x - 1].classList.contains("yellow-spot") &&
        mapCols[i - 3] &&
        mapCols[i - 3][x - 2] &&
        mapCols[i - 3][x - 2].classList.contains("yellow-spot") &&
        mapCols[i - 4] &&
        mapCols[i - 4][x - 3] &&
        mapCols[i - 4][x - 3].classList.contains("yellow-spot")) ||
      //CAS 3.3 : DIAGONALES JAUNES BAS GAUCHE
      (mapCols[i - 2] &&
        mapCols[i - 2][x + 1] &&
        mapCols[i - 2][x + 1].classList.contains("yellow-spot") &&
        mapCols[i - 3] &&
        mapCols[i - 3][x + 2] &&
        mapCols[i - 3][x + 2].classList.contains("yellow-spot") &&
        mapCols[i - 4] &&
        mapCols[i - 4][x + 3] &&
        mapCols[i - 4][x + 3].classList.contains("yellow-spot")) ||
      //CAS 3.4 DIAGONALES JAUNES BAS DROITE
      (mapCols[i] &&
        mapCols[i][x + 1] &&
        mapCols[i][x + 1].classList.contains("yellow-spot") &&
        mapCols[i + 1] &&
        mapCols[i + 1][x + 2] &&
        mapCols[i + 1][x + 2].classList.contains("yellow-spot") &&
        mapCols[i + 2] &&
        mapCols[i + 2][x + 3] &&
        mapCols[i + 2][x + 3].classList.contains("yellow-spot")) || //haut droite existe, bas gauche existe, et OU 2x bas gauche OU 2x bas droite
      //CAS 3.5 DIAGONALES MIXTE HAUT/BAS DANS UN SENS
      (mapCols[i] &&
        mapCols[i][x - 1] &&
        mapCols[i][x - 1].classList.contains("yellow-spot") && //en haut a droite
        mapCols[i - 2] &&
        mapCols[i - 2][x + 1] &&
        mapCols[i - 2][x + 1].classList.contains("yellow-spot") && // en bas à gauche
        ((mapCols[i + 1] &&
          mapCols[i + 1][x - 2].classList.contains("yellow-spot")) || //2x haut droite ou gauche
          (mapCols[i - 3] &&
            mapCols[i - 3][x + 2].classList.contains("yellow-spot")))) ||
      (mapCols[i - 2] &&
        mapCols[i - 2][x - 1] &&
        mapCols[i - 2][x - 1].classList.contains("yellow-spot") &&
        mapCols[i] &&
        mapCols[i][x + 1] &&
        mapCols[i][x + 1].classList.contains("yellow-spot") &&
        ((mapCols[i - 3] &&
          mapCols[i - 3][x - 2].classList.contains("yellow-spot")) ||
          (mapCols[i + 1] &&
            mapCols[i + 1][x + 2].classList.contains("yellow-spot"))))
    ) {
      gameOver = true;
      console.log("RED WIN");
      revealWinner();
    }
  }
  return gameOver;
}

function revealWinner() {
  if (gameOver) {
    console.log("We have a winner !");
  }
  return hasRedWin;
  //vérifier les conditions de victoire
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
