
const createView = function() {
  const body = document.querySelector("body");

  const createStartMenu = function() {
    const head = document.createElement("div");
    head.className = "head";
    body.appendChild(head);
    const menu = document.createElement("div");
    menu.className = "menu";
    body.appendChild(menu);
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

    const contChooseTypeGame = document.createElement("div");
    contChooseTypeGame.className = "contChooseTypeGame";
    menu.appendChild(contChooseTypeGame);
    const buttonPvsP = document.createElement("div");
    buttonPvsP.className = "buttonChooseTypeGame";
    buttonPvsP.id = "buttonPvsP";
    buttonPvsP.innerHTML = "Player vs Player";
    const buttonPvsAI = document.createElement("div");
    buttonPvsAI.className = "buttonChooseTypeGame";
    buttonPvsAI.id = "buttonPvsAI";
    buttonPvsAI.innerHTML = "Player vs Computer";
    const buttonAIvsAI = document.createElement("div");
    buttonAIvsAI.className = "buttonChooseTypeGame";
    buttonAIvsAI.id = "buttonAIvsAI";
    buttonAIvsAI.innerHTML = "Computer vs Computer";
    contChooseTypeGame.appendChild(buttonPvsP);
    contChooseTypeGame.appendChild(buttonPvsAI);
    contChooseTypeGame.appendChild(buttonAIvsAI);

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

    const contAdvancedMenu = document.createElement("div");
    contAdvancedMenu.className = "contAdvancedMenu";
    contAdvancedMenu.setAttribute('style', 'dislay: none;');
    menu.appendChild(contAdvancedMenu);
    const contSizeBoard = document.createElement("div");
    contSizeBoard.className = "contSizeBoard";
    contAdvancedMenu.appendChild(contSizeBoard);
    const titleSizeBoard = document.createElement("div");
    titleSizeBoard.className = "titleSizeBoard";
    titleSizeBoard.innerHTML = "Size board: ";
    contSizeBoard.appendChild(titleSizeBoard);
    const inputSizeBoard = document.createElement("input");
    inputSizeBoard.setAttribute('type', 'number');
    inputSizeBoard.setAttribute('min', '5');
    inputSizeBoard.setAttribute('max', '20');
    inputSizeBoard.setAttribute('value', '10');
    inputSizeBoard.className = "inputSizeBoard";
    contSizeBoard.appendChild(inputSizeBoard);
    const contShips = document.createElement("div");
    contShips.className = "contShips";
    contAdvancedMenu.appendChild(contShips);

    for (let i = 0; i < 4; i++) {
      addInputShip(i);
    };

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
    gag.innerHTML = `Player ${name}, your next move.`;
    body.appendChild(gag);
    return new Promise(function(resolve, reject) {
      gag.addEventListener("click", function() {
        clearView();
        resolve();
      }, false)
    });
  };

  const createBord = function(nameBord, board) {
    const container = document.createElement("div");
    const parentElement = document.querySelector(".contBoards")
    container.className = nameBord;
    container.className = "containerBoard";
    parentElement.appendChild(container);
    for (let y = 0; y <= sizeBoard; y++) {
      for (let x = 0; x <= sizeBoard; x++) {
        const cell = document.createElement("div");
        cell.className = nameBord;
        cell.className = "cell";
        cell.id(String(x-1) + "," + String(y-1));
        if (x == 0 && y != 0) {
          cell.innerHTML = y;
        } else if (x != 0 && y == 0) {
          cell.innerHTML = x;
        } else {
          if (board[x-1][y-1] == "muff") {
            cell.innerHTML = ".";
          } else if (board[x-1][y-1] == "hit") {
            cell.innerHTML = "X";
          } else if (board[x-1][y-1] == "ship") {
            cell.innerHTML = "S";
          };
        };
        container.appendChild(cell);
      };
    };
  };

  const createGamePlace = function(name, boards) {
    const gamePlace = document.createElement("div");
    gamePlace.className = "gamePlace";
    body.appendChild(gamePlace);

    const contBoards = document.createElement("div");
    contBoards.className = "contBoards";
    gamePlace.appendChild(contBoards);
    createBord("myBoard", boards.myBoards);
    createBord("enemyBoard", boards.enemyBoards);

    const buttonAutoPlaceShip = document.createElement("input");
    buttonAutoPlaceShip.className = "buttonAutoPlaceShip";
    buttonAutoPlaceShip.setAttribute("type", "button");
    buttonAutoPlaceShip.setAttribute("value", "Auto");
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

  const boardPlacement = function() {
    
  };

  const attack = function() {
    return new Promise(function (resolve, reject) {
      const enemyBoard = document.querySelectorAll(".enemyBoard");
      const cell = enemyBoard.querySelectorAll(".cell");
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
    while (!game.getQueue().player1 || !game.getQueue().player2) {
      if (game.getQueue().player1) {
        await view.changeOfQueue(namePlayer1);
        view.createGamePlace(namePlayer1, game.getBoards(namePlayer1));
        while (!game.readyGame().readyPlayer1) {
          const place = await listen.boardPlacement();
          if (place === "auto" || typeGame > 2) {
            game.autoPlacementShip(namePlayer1);
          } else {
            game.placementShip(namePlayer1, place.x, place.y);
          };
          view.refreshBoard(game.getBoards(namePlayer1));
        };
        await view.changeOfQueue(namePlayer2);
        while (!game.readyGame().readyPlayer2) {
          const place = await listenerPlace();
          if (place === "auto" || typeGame > 1) {
            game.autoPlacementShip(namePlayer2);
          } else {
            game.placementShip(namePlayer2, place.x, place.y);
          };
          view.refreshBoard(game.getBoards(namePlayer2));
        };
      } else {
        await view.changeOfQueue(namePlayer2);
        while (!game.readyGame().readyPlayer2) {
          const place = await listenerPlace();
          if (place === "auto" || typeGame > 1) {
            game.autoPlacementShip(namePlayer2);
          } else {
            game.placementShip(namePlayer2, place.x, place.y);
          };
          view.refreshBoard(game.getBoards(namePlayer2));
        };
        await view.changeOfQueue(namePlayer1);
        while (!game.readyGame().readyPlayer1) {
          const place = await listenerPlace();
          if (place === "auto" || typeGame > 2) {
            game.autoPlacementShip(namePlayer1);
          } else {
            game.placementShip(namePlayer1, place.x, place.y);
          };
          view.refreshBoard(game.getBoards(namePlayer1));
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
        if (typeGame === 3) {
          resaltGame = game.ai(namePlayer1);
          view.refreshBoard(game.getBoards(namePlayer1));
          await view.startChangeOfQueue();
        } else {
          let coord = await view.attack();
          coord = coord.split(',');
          resaltGame = game.attack(namePlayer1, coord[0], coord[1]);
          view.refreshBoard(game.getBoards(namePlayer1));
          await view.startChangeOfQueue();
        };
      } else {
        if (typeGame > 1) {
          resaltGame = game.ai(namePlayer2);
          view.refreshBoard(game.getBoards(namePlayer2));
          await view.startChangeOfQueue();
        } else {
          let coord = await view.attack();
          coord = coord.split(',');
          resaltGame = game.attack(namePlayer2, coord[0], coord[1]);
          view.refreshBoard(game.getBoards(namePlayer2));
          await view.startChangeOfQueue();
        };
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