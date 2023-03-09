
const createView = function() {
  const body = document.querySelector("body");

  const createStartMenu = function() {
    const head = document.createElement("div");
    head.className = "head";
    body.appendChild(head);
    const menu = document.createElement("div");
    menu.className = "menu";
    body.appendChild(menu);
    const titleNamePlayers = document.createElement("div");
    titleNamePlayers.className = "titleNamePlayers";
    titleNamePlayers.textContent = "Enter names players";
    menu.appendChild(titleNamePlayers);

    const contNamesPlayers = document.createElement("div");
    contNamesPlayers.className = "contNamesPlayers";
    menu.appendChild(contNamesPlayers);
    const contNameP1 = document.createElement("div");
    const contNameP2 = document.createElement("div");
    contNameP1.className = "contName";
    contNameP2.className = "contName";
    contNamesPlayers.appendChild(contNameP1);
    contNamesPlayers.appendChild(contNameP2);
    const titleNameP1 = document.createElement("div");
    const titleNameP2 = document.createElement("div");
    titleNameP1.className = "titleName";
    titleNameP2.className = "titleName";
    titleNameP1.innerHTML = "Enter name player 1:";
    titleNameP2.innerHTML = "Enter name player 2:";
    contNameP1.appendChild(titleNameP1);
    contNameP2.appendChild(titleNameP2);
    const inputNameP1 = document.createElement("input");
    const inputNameP2 = document.createElement("input");
    inputNameP1.setAttribute('type', 'text');
    inputNameP2.setAttribute('type', 'text');
    inputNameP1.id = 'inputNameP1';
    inputNameP2.id = 'inputNameP2';
    inputNameP1.className = "inputName";
    inputNameP2.className = "inputName";
    inputNameP1.setAttribute('placeholder', 'Player 1');
    inputNameP2.setAttribute('placeholder', 'Player 2');
    contNameP1.appendChild(inputNameP1);
    contNameP2.appendChild(inputNameP2);

    const titleTypeGame = document.createElement("div");
    titleTypeGame.className = "titleTypeGame";
    titleTypeGame.textContent = "Choose game type";
    menu.appendChild(titleTypeGame);

    const contChooseTypeGame = document.createElement("div");
    contChooseTypeGame.className = "contChooseTypeGame";
    menu.appendChild(contChooseTypeGame);
    const buttonPvsP = document.createElement("div");
    buttonPvsP.className = "buttonChooseTypeGame";
    buttonPvsP.id = "buttonPvsP";
    buttonPvsP.innerHTML = "Player<br>vs<br>Player";
    const buttonPvsAI = document.createElement("div");
    buttonPvsAI.className = "buttonChooseTypeGame";
    buttonPvsAI.id = "buttonPvsAI";
    buttonPvsAI.innerHTML = "Player<br>vs<br>Computer";
    const buttonAIvsAI = document.createElement("div");
    buttonAIvsAI.className = "buttonChooseTypeGame";
    buttonAIvsAI.id = "buttonAIvsAI";
    buttonAIvsAI.innerHTML = "Computer<br>vs<br>Computer";
    contChooseTypeGame.appendChild(buttonPvsP);
    contChooseTypeGame.appendChild(buttonPvsAI);
    contChooseTypeGame.appendChild(buttonAIvsAI);

    const titlePriority = document.createElement("div");
    titlePriority.className = "titlePriority";
    titlePriority.textContent = "Choose whose first move";
    menu.appendChild(titlePriority);

    const contChoosePriority = document.createElement("div");
    contChoosePriority.className = "contChoosePriority";
    menu.appendChild(contChoosePriority);
    const buttonPriorityP1 = document.createElement("div");
    buttonPriorityP1.className = "buttonPriority";
    buttonPriorityP1.id = "buttonPriorityP1";
    buttonPriorityP1.innerHTML = "Player 1";
    const buttonPriorityP2 = document.createElement("div");
    buttonPriorityP2.className = "buttonPriority";
    buttonPriorityP2.id = "buttonPriorityP2";
    buttonPriorityP2.innerHTML = "Player 2";
    contChoosePriority.appendChild(buttonPriorityP1);
    contChoosePriority.appendChild(buttonPriorityP2);

    // const contAdvancedMenu = document.createElement("div");
    // contAdvancedMenu.className = "contAdvancedMenu";
    // contAdvancedMenu.setAttribute('style', 'dislay: none;');
    // menu.appendChild(contAdvancedMenu);
    // const contSizeBoard = document.createElement("div");
    // contSizeBoard.className = "contSizeBoard";
    // contAdvancedMenu.appendChild(contSizeBoard);
    // const titleSizeBoard = document.createElement("div");
    // titleSizeBoard.className = "titleSizeBoard";
    // titleSizeBoard.innerHTML = "Size board: ";
    // contSizeBoard.appendChild(titleSizeBoard);
    // const inputSizeBoard = document.createElement("input");
    // inputSizeBoard.setAttribute('type', 'number');
    // inputSizeBoard.setAttribute('min', '5');
    // inputSizeBoard.setAttribute('max', '20');
    // inputSizeBoard.setAttribute('value', '10');
    // inputSizeBoard.className = "inputSizeBoard";
    // contSizeBoard.appendChild(inputSizeBoard);
    // const contShips = document.createElement("div");
    // contShips.className = "contShips";
    // contAdvancedMenu.appendChild(contShips);

    // for (let i = 0; i < 4; i++) {
    //   addInputShip(i);
    // };

    const buttonStartGame = document.createElement("input");
    buttonStartGame.className = "buttonStartGame";
    buttonStartGame.setAttribute("type", "button");
    buttonStartGame.setAttribute("value", "Start");
    menu.appendChild(buttonStartGame);

  };

  const addInputShip = function(id, add = true) {
    const contShips = document.querySelector(".contShips");
    if (add) {
      const contShip = document.createElement("div");
      contShip.className = "contShip";
      contShip.id = id;
      contShips.appendChild(contShip);
      const titleShipSize = document.createElement("div");
      titleShipSize.className = "titleShipSize";
      titleShipSize.innerHTML = "Ship size: ";
      contShip.appendChild(titleShipSize);
      const inputShipSize = document.createElement("input");
      inputShipSize.setAttribute('type', 'number');
      inputShipSize.setAttribute('min', '1');
      inputShipSize.setAttribute('max', '20');
      inputShipSize.id = id;
      inputShipSize.className = "inputShipSize";
      contShip.appendChild(inputShipSize);
      const titleShipCount = document.createElement("div");
      titleShipCount.className = "titleShipCount";
      titleShipCount.innerHTML = "Count: ";
      contShip.appendChild(titleShipCount);
      const inputShipCount = document.createElement("input");
      inputShipCount.setAttribute('type', 'number');
      inputShipCount.setAttribute('min', '1');
      inputShipCount.setAttribute('max', '20');
      inputShipCount.id = id;
      inputShipCount.className = "inputShipCount";
      contShip.appendChild(inputShipCount);
      const buttonRemoveShip = document.createElement("input");
      buttonRemoveShip.setAttribute("type", "button");
      buttonRemoveShip.setAttribute("value", "-");
      buttonRemoveShip.className = "buttonRemoveShip";
      buttonRemoveShip.id = id;
      contShip.appendChild(buttonRemoveShip);
    } else {
      // Remove 
    }

  };

  const changeOfQueue = function(name) {
    clearView();
    const gag = document.createElement("div");
    gag.className = "gag";
    gag.innerHTML = `Player<br>${name}<br>your next move.`;
    body.appendChild(gag);
    return new Promise(function(resolve, reject) {
      gag.addEventListener("click", function() {
        clearView();
        resolve();
      }, false)
    });
  };

  const createBord = function(nameBord, board) {
    const sizeBoard = board.length;
    const container = document.createElement("div");
    const parentElement = document.querySelector(".contBoards")
    container.className = `containerBoard ${nameBord}`;
    parentElement.appendChild(container);
    for (let y = 0; y <= sizeBoard; y++) {
      for (let x = 0; x <= sizeBoard; x++) {
        const cell = document.createElement("div");
        if (x == 0 && y != 0) {
          cell.textContent = y;
          cell.className = `cell${nameBord} legend`;
        } else if (x != 0 && y == 0) {
          cell.textContent = x;
          cell.className = `cell${nameBord} legend`;
        } else if (x == 0 && y == 0) {
          cell.textContent = `\u2693`;
          cell.className = `cell${nameBord} legend`;
        } else {
          cell.className = `cell${nameBord}L`;
          cell.id = String(x-1) + "-" + String(y-1);
          if (board[y-1][x-1] == "muff") {
            cell.textContent = ".";
          } else if (board[y-1][x-1] == "hit") {
            cell.textContent = "X";
            cell.className = cellShipClassName(x-1, y-1, board, nameBord);
          } else if (board[y-1][x-1] == "ship") {
            cell.className = cellShipClassName(x-1, y-1, board, nameBord);
            //cell.textContent = "S";
          };
        };
        container.appendChild(cell);
      };
    };
  };

  // return name class: 0 - none bord, 1 - board; (top - right - bottom - left) cellShip0101
  const cellShipClassName = function(x, y, board, nameBord) {
    let cellClassName = `cell${nameBord}L ` + 'cellShip';
    if (y-1 >= 0 && (board[y-1][x] == "hit" || board[y-1][x] == "ship")) {
      cellClassName += "0";
    } else {
      cellClassName += "1";
    };
    if (x + 1 < board.length && (board[y][x+1] == "hit" || board[y][x+1] == "ship")) {
      cellClassName += "0";
    } else {
      cellClassName += "1";
    };
    if (y + 1 < board.length && (board[y+1][x] == "hit" || board[y+1][x] == "ship")) {
      cellClassName += "0";
    } else {
      cellClassName += "1";
    };
    if (x-1 >= 0 && (board[y][x-1] == "hit" || board[y][x-1] == "ship")) {
      cellClassName += "0";
    } else {
      cellClassName += "1";
    };
    return cellClassName;
  };

  const createGamePlace = function(name, boards, placement, ships) {
    clearView();
    const gamePlace = document.createElement("div");
    gamePlace.className = "gamePlace";
    body.appendChild(gamePlace);

    const contBoards = document.createElement("div");
    contBoards.className = "contBoards";
    gamePlace.appendChild(contBoards);
    createBord("myBoard", boards.myBoard);
    createBord("enemyBoard", boards.enemyBoard);

    if (placement) {
      createPlacement(ships);
    };

    const buttonNextMove = document.createElement("button");
    buttonNextMove.className = "buttonNextMove";
    buttonNextMove.textContent = "Next move";
    gamePlace.appendChild(buttonNextMove);
  };

  const createPlacement = function (ships) {
    const gamePlace = document.querySelector(".gamePlace");
    const contPlaceShips = document.createElement("div");
    contPlaceShips.className = "contPlaceShips";
    gamePlace.appendChild(contPlaceShips);
    const titlePlaceSips = document.createElement("div");
    titlePlaceSips.className = "titlePlaceSips";
    titlePlaceSips.textContent = "Ships:";
    contPlaceShips.appendChild(titlePlaceSips);
    for (let i = 0; i < ships.length; i++) {
      const contShip = document.createElement("div");
      contShip.className = "contShip";
      contPlaceShips.appendChild(contShip);
      const bodyShip = document.createElement("div");
      bodyShip.setAttribute("draggable", "true");
      bodyShip.className = "bodyShip";
      bodyShip.id = "bodyShip" + ships[i][0];
      contShip.appendChild(bodyShip);
      for (let j = 0; j < ships[i][0]; j++) {
        const cellShip = document.createElement("div");
        cellShip.className = "cellShip cellenemyBoardL";
        cellShip.id = j;
        bodyShip.appendChild(cellShip);
      };
      const countShip = document.createElement("div");
      countShip.className = "countShip";
      countShip.id = "countShip" + ships[i][0];
      countShip.textContent = " - " + ships[i][1];
      contShip.appendChild(countShip);
    };
    const buttonAutoPlaceShip = document.createElement("input");
    buttonAutoPlaceShip.className = "buttonAutoPlaceShip";
    buttonAutoPlaceShip.setAttribute("type", "button");
    buttonAutoPlaceShip.setAttribute("value", "Auto");
    gamePlace.appendChild(buttonAutoPlaceShip);
  };

  const clearView = function() {
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    };
  };

  return {createStartMenu, changeOfQueue, createGamePlace};
};

const listener = function() {

  const startMenu = function() {
    let namePlayer1 = "";
    let namePlayer2 = "";
    // typeGame: Player vs Player = 1; Player vs AI = 2; AI vs AI = 3
    let type = 0;
    let queuePlayer1 = null;
    const inputNameP1 = document.querySelector("#inputNameP1");
    const inputNameP2 = document.querySelector("#inputNameP2");
    const buttonChooseTypeGame = document.querySelectorAll(".buttonChooseTypeGame");
    const buttonPriority = document.querySelectorAll(".buttonPriority");
    const buttonStartGame = document.querySelector(".buttonStartGame");
    inputNameP1.addEventListener("keyup", function() {
      namePlayer1 = inputNameP1.value;
    },false);
    inputNameP2.addEventListener("keyup", function() {
      namePlayer2 = inputNameP2.value;
    },false);
    buttonChooseTypeGame.forEach(elem => {
      elem.addEventListener("click", function(elem) {
        if (elem.target.id == "buttonPvsP") {
          type = 1;
        } else if (elem.target.id == "buttonPvsAI") {
          type = 2;
        } else if (elem.target.id == "buttonAIvsAI") {
          type = 3;
        };
      }, false);
    });

    buttonPriority.forEach(elem => {
      elem.addEventListener("click", function(elem) {
        if (elem.target.id == "buttonPriorityP1") {
          queuePlayer1 = true;
        } else if (elem.target.id == "buttonPriorityP2") {
          queuePlayer1 = false;
        };
      }, false)
    });


    return new Promise(function (resolve, reject) {
      buttonStartGame.addEventListener("click", function() {
        if (namePlayer1 != "" && namePlayer2 != "" && type != 0 && queuePlayer1 != null) {
          resolve({
            namePlayer1: namePlayer1,
            namePlayer2: namePlayer2,
            typeGame: type,
            sizeBoard: 10,
            amountShips: [[5, 1], [4, 1], [3, 2], [2, 1]],
            queuePlayer1: queuePlayer1,
          });
        };
      }, false);
    });
  };

  const boardPlacement = function(amountShips, sizeBoard) {
    let ship = "auto";
    let ships =[];
    let idcell = null;
    let draggedShip;
    let correctCoordX = 0;
    let correctCoordY = 0;
    let direction = "h";
    let sizeShip = 0;
    let shipCoordinate = []

    const cell = document.querySelectorAll(".cellShip");
    cell.forEach(elm => {
      elm.addEventListener("mousedown", function() {
        idcell = elm.id;
      }, false);
    });



    const eventShips = document.querySelectorAll(".bodyShip");
    eventShips.forEach(elm => {elm.addEventListener("drag", function() {
      sizeShip = Number(elm.id.slice(8, elm.id.length));
      if (direction == "h") {
        correctCoordX = -Number(idcell.split('-')[0]);
      } else {

      }
      console.log(elm.id);
      console.log(idcell);
    })});

    eventShips.forEach(elm => (elm.addEventListener("dragstart", function() {
      draggedShip = elm;
    })));

    const cells = document.querySelectorAll(".cellmyBoardL");
    cells.forEach(elm => {elm.addEventListener("dragenter", function(event) {
      for (let i = 0; i < shipCoordinate.length; i++) {
        document.getElementById(String(shipCoordinate[i][0]) + "-" + String(shipCoordinate[i][1])).classList.remove("dropZoneShip");
      }
      shipCoordinate = [];
      let c = event.target.id.split('-');
      let x = Number(c[0]);
      let y = Number(c[1]);
      if (direction == "h") {
        for (let xx = x + correctCoordX; xx < sizeShip - idcell.split('-')[0] + x; xx++) {
          if (xx >= 0 && xx < sizeBoard) {
            document.getElementById(String(xx) + "-" + String(y)).classList.add("dropZoneShip");
            shipCoordinate.push([xx, y]);
          }
        }
      } else {

      };


    })})
    // cells.forEach(elm => {elm.addEventListener("dragleave", function(event) {
    //   let c = event.target.id.split('-');
    //   let x = Number(c[0]);
    //   let y = Number(c[1]);
    //   if (direction == "h") {
    //     for (let xx = x + correctCoordX; xx < sizeShip - idcell.split('-')[0] + x; xx++) {
    //       if (xx >= 0 && xx < sizeBoard) {
    //         document.getElementById(String(xx) + "-" + String(y)).classList.remove("dropZoneShip");
    //       }
    //     }
    //   } else {

    //   };
    // })})

    cells.forEach(elm => {elm.addEventListener("dragover", function(event) {
      event.preventDefault();
    })})

    cells.forEach(elm => {elm.addEventListener("drop", (event) => {

    })})



    const buttonAutoPlaceShip = document.querySelector(".buttonAutoPlaceShip");
    return new Promise(function (resolve, reject) {
      buttonAutoPlaceShip.addEventListener("click", function() {
        resolve(ship);
      }, false);
    });
  };

  const attack = function() {
    return new Promise(function (resolve, reject) {
      const cell = document.querySelectorAll(".cellenemyBoardL");
      cell.forEach(elem => {
        elem.addEventListener("click", function() {
          resolve(elem.id);
        }, false)
      })
    });
  };

  return {startMenu, boardPlacement, attack};
};

// listenerStartMenu()
// createView()
//   createStartMenu()
//   changeOfQueue(namePlayer)
//   refreshBoard(array)
//   startChangeOfQueue()
//   attack() -> coordinate "0,0"

const game = function() {

  let namePlayer1;
  let namePlayer2;
  // typeGame: Player vs Player = 1; Player vs AI = 2; AI vs AI = 3
  let typeGame;
  let sizeBoard = 10;
  let amountShips = [[5, 1], [4, 1], [3, 2], [2, 1]];
  let queuePlayer1 = true;
  const listen = listener();

  // Create menu view, where ask 
  const view = createView();
  let game;

  async function startMenu() {
    view.createStartMenu();

    const settingsGame = await listen.startMenu();
    namePlayer1 = settingsGame.namePlayer1;
    namePlayer2 = settingsGame.namePlayer2;
    typeGame = settingsGame.typeGame;
    sizeBoard = settingsGame.sizeBoard;
    amountShips = settingsGame.amountShips;
    queuePlayer1 = settingsGame.queuePlayer1;

    game = gameBattleShip(
      namePlayer1, namePlayer2, queuePlayer1 ,sizeBoard, amountShips
    );

  };

  async function placementOfShips() {
    while (!(game.readyGame().readyPlayer1 && game.readyGame().readyPlayer2)) {
      if (game.getQueue().player1) {
        await view.changeOfQueue(namePlayer1);
        view.createGamePlace(namePlayer1, game.getBoards(namePlayer1), true, amountShips);
        while (!game.readyGame().readyPlayer1) {
          const place = await listen.boardPlacement(amountShips, sizeBoard);
          if (place === "auto" || typeGame > 2) {
            game.autoPlacementShip(namePlayer1);
          } else {
            game.placementShip(namePlayer1, place.x, place.y);
          };
          view.createGamePlace(namePlayer1, game.getBoards(namePlayer1), true, amountShips);
        };
        await view.changeOfQueue(namePlayer2);
        view.createGamePlace(namePlayer2, game.getBoards(namePlayer2), true, amountShips);
        while (!game.readyGame().readyPlayer2) {
          const place = await listen.boardPlacement(amountShips, sizeBoard);
          if (place === "auto" || typeGame > 1) {
            game.autoPlacementShip(namePlayer2);
          } else {
            game.placementShip(namePlayer2, place.x, place.y);
          };
          view.createGamePlace(namePlayer2, game.getBoards(namePlayer2), true, amountShips);
        };
      } else {
        await view.changeOfQueue(namePlayer2);
        view.createGamePlace(namePlayer2, game.getBoards(namePlayer2), true, amountShips);
        while (!game.readyGame().readyPlayer2) {
          const place = await listen.boardPlacement(amountShips, sizeBoard);
          if (place === "auto" || typeGame > 1) {
            game.autoPlacementShip(namePlayer2);
          } else {
            game.placementShip(namePlayer2, place.x, place.y);
          };
          view.createGamePlace(namePlayer2, game.getBoards(namePlayer2), true, amountShips);
        };
        await view.changeOfQueue(namePlayer1);
        view.createGamePlace(namePlayer1, game.getBoards(namePlayer1), true, amountShips);
        while (!game.readyGame().readyPlayer1) {
          const place = await listen.boardPlacement(amountShips,sizeBoard);
          if (place === "auto" || typeGame > 2) {
            game.autoPlacementShip(namePlayer1);
          } else {
            game.placementShip(namePlayer1, place.x, place.y);
          };
          view.createGamePlace(namePlayer1, game.getBoards(namePlayer1), true, amountShips);
        };
      };
    };
  };

  let resaltGame = -1;

  async function battle() {
    if (game.getQueue().player1) {
      await view.changeOfQueue(namePlayer1);
    } else {
      await view.changeOfQueue(namePlayer2);
    };
    while (resaltGame != 2) {
      if (game.getQueue().player1) {
        view.createGamePlace(namePlayer1, game.getBoards(namePlayer1));
        if (typeGame === 3) {
          resaltGame = game.ai(namePlayer1);
          view.createGamePlace(namePlayer1, game.getBoards(namePlayer1));
        } else {
          let coord = await listen.attack();
          coord = coord.split('-');
          resaltGame = game.attack(namePlayer1, coord[0], coord[1]);
          view.createGamePlace(namePlayer1, game.getBoards(namePlayer1));
        };
      } else {
        view.createGamePlace(namePlayer2, game.getBoards(namePlayer2));
        if (typeGame > 1) {
          resaltGame = game.ai(namePlayer2);
          view.createGamePlace(namePlayer2, game.getBoards(namePlayer2));
        } else {
          let coord = await listen.attack();
          coord = coord.split('-');
          resaltGame = game.attack(namePlayer2, coord[0], coord[1]);
          view.createGamePlace(namePlayer2, game.getBoards(namePlayer2));
        };
      };
      if (game.getQueue().player1) {
        await view.changeOfQueue(namePlayer1);
      } else {
        await view.changeOfQueue(namePlayer2);
      };
    };
  };

  async function startGame() {
    await startMenu();
    await placementOfShips();
    await battle();
  };

  startGame();
};

game();

// const game1 = gameBattleShip("1", "2", true);
// game1.autoPlacementShip("1");
// game1.autoPlacementShip("2");

// const v = createView();
// v.createGamePlace("1", game1.getBoards("1"));
// v.createStartMenu();
// v.changeOfQueue("dkjfhsdf");