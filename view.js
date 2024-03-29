
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
    const buttonLAN = document.createElement("div");
    buttonLAN.className = "buttonChooseTypeGame";
    buttonLAN.id = "buttonLAN";
    buttonLAN.innerHTML = "Player<br>vs<br>LAN";
    const buttonAiLAN = document.createElement("div");
    buttonAiLAN.className = "buttonChooseTypeGame";
    buttonAiLAN.id = "buttonAiLAN";
    buttonAiLAN.innerHTML = "AI<br>vs<br>LAN";
    contChooseTypeGame.appendChild(buttonPvsP);
    contChooseTypeGame.appendChild(buttonPvsAI);
    contChooseTypeGame.appendChild(buttonAIvsAI);
    contChooseTypeGame.appendChild(buttonLAN);
    contChooseTypeGame.appendChild(buttonAiLAN);

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
      bodyShip.className = "bodyShip hor";
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

  const gameOver = function(nameWin, nameLose) {
    clearView();
    const gag = document.createElement("div");
    gag.className = "gag";
    gag.innerHTML = `Player ${nameWin.slice(1, nameWin.length)} you Win!<br><br>Player ${nameLose.slice(1, nameLose.length)} you Lose!`;
    body.appendChild(gag);
  };

  return {createStartMenu, changeOfQueue, createGamePlace, gameOver};
};

const listener = function() {
  const copyAmountShips = function(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      arr1.push([arr[i][0], arr[i][1]]);
    };
    return arr1;
  }; 

  const startMenu = function() {
    let namePlayer1 = "";
    let namePlayer2 = "";
    // typeGame: Player vs Player = 1; Player vs AI = 2; AI vs AI = 3; PlayerLAN = 4; AILAN = 5;
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
        } else if (elem.target.id == "buttonLAN") {
          type = 4
        } else if (elem.target.id == "buttonAiLAN") {
          type = 5
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
    let myShips =[];
    let idcell = null;
    let correctCoordX = 0;
    let correctCoordY = 0;
    let direction;
    let sizeShip = 0;
    let shipCoordinate = [];
    let occupiedCell = new Set();
    let posib = true;
    let countShips = copyAmountShips(amountShips);


    const cell = document.querySelectorAll(".cellShip");
    cell.forEach(elm => {elm.addEventListener("mousedown", function() {
        idcell = elm.id;
      }, false);
    });

    const eventShips = document.querySelectorAll(".bodyShip");
    eventShips.forEach(elm => {elm.addEventListener("drag", function() {
      sizeShip = Number(elm.id.slice(8, elm.id.length));
      if (elm.className.includes("hor")) {
        direction = "hor";
      } else {
        direction = "ver";
      };
      if (elm.className.includes("hor")) {
        correctCoordX = -Number(idcell.split('-')[0]);
      } else {
        correctCoordY = -Number(idcell.split('-')[0]);
      };
    })});

    eventShips.forEach(elm => (elm.addEventListener("dblclick", function() {
      if (elm.className.includes("hor")) {
        elm.classList.remove("hor")
        elm.classList.add("ver")
      } else {
        elm.classList.remove("ver")
        elm.classList.add("hor")
      };
    })));

    const cells = document.querySelectorAll(".cellmyBoardL");
    cells.forEach(elm => {elm.addEventListener("dragenter", function(event) {
      clearCell()
      posib = true; 
      shipCoordinate = [];
      let c = event.target.id.split('-');
      let x = Number(c[0]);
      let y = Number(c[1]);
      if (direction == "hor") {
        for (let xx = x + correctCoordX; xx < sizeShip - idcell.split('-')[0] + x; xx++) {
          if (xx < 0 || xx >= sizeBoard || occupiedCell.has(String(xx) + "-" + String(y))) {
            posib = false;
          };
        };
      } else {
        for (let yy = y + correctCoordY; yy < sizeShip - idcell.split('-')[0] + y; yy++) {
          if (yy < 0 || yy >= sizeBoard || occupiedCell.has(String(x) + "-" + String(yy))) {
            posib = false;
          };
        };
      };
      if (direction == "hor") {
        for (let xx = x + correctCoordX; xx < sizeShip - idcell.split('-')[0] + x; xx++) {
          if (xx >= 0 && xx < sizeBoard) {
            if (posib) {
              document.getElementById(String(xx) + "-" + String(y)).classList.add("dropZoneShip");
            } else {
              document.getElementById(String(xx) + "-" + String(y)).classList.add("busyDropZoneShip");
            };
            shipCoordinate.push([xx, y]);
          };
        };
      } else {
        for (let yy = y + correctCoordY; yy < sizeShip - idcell.split('-')[0] + y; yy++) {
          if (yy >= 0 && yy < sizeBoard) {
            if (posib) {
              document.getElementById(String(x) + "-" + String(yy)).classList.add("dropZoneShip");
            } else {
              document.getElementById(String(x) + "-" + String(yy)).classList.add("busyDropZoneShip");
            }
            shipCoordinate.push([x, yy]);
          };
        };
      };

    })});

    cells.forEach(elm => {elm.addEventListener("dragover", function(event) {
      event.preventDefault();
    })});

    cells.forEach(elm => {elm.addEventListener("drop", (event) => {
      if (posib) {
        for (let i = 0; i < countShips.length; i++) {
          if (countShips[i][0] == sizeShip) {
            countShips[i][1]--;
            if (countShips[i][1] <= 0) {
              const b = document.querySelector(`#bodyShip${sizeShip}`);
              b.draggable = false;
            }
            const count = document.querySelector(`#countShip${sizeShip}`);
            count.textContent = " - " + String(countShips[i][1]);
          }
        }
        for (let i = 0; i < shipCoordinate.length; i++) {
          document.getElementById(String(shipCoordinate[i][0]) + "-" + String(shipCoordinate[i][1])).classList.remove("dropZoneShip");
          document.getElementById(String(shipCoordinate[i][0]) + "-" + String(shipCoordinate[i][1])).classList.add("shipStay");
        };
        let arr = [sizeShip, direction];
        myShips.push(arr.concat(shipCoordinate));
        shipCoordinate = [];
        addOccupaitedCell();
      };
      clearCell();
    })});

    const addOccupaitedCell = function() {
      for (let i = 0; i < myShips.length; i++) {
        for (let c = 2; c < myShips[i].length; c++) {
          const x = myShips[i][c][0];
          const y = myShips[i][c][1];
          for (let xx = x-1; xx < x+2; xx++) {
            for (let yy = y-1; yy < y+2; yy++) {
              if (0 <= xx && xx < sizeBoard && 0 <= yy && yy < sizeBoard) {
                occupiedCell.add(String(xx) + "-" + String(yy));
              };
            };
          };
        };
      };
    };

    const clearCell = function() {
      for (let i = 0; i < shipCoordinate.length; i++) {
        const coor = String(shipCoordinate[i][0]) + "-" + String(shipCoordinate[i][1]);
        document.getElementById(coor).classList.remove("dropZoneShip");
        document.getElementById(coor).classList.remove("busyDropZoneShip");
      };
    }

    const buttonManualPlaceShip = document.querySelector(".buttonNextMove");
    const buttonAutoPlaceShip = document.querySelector(".buttonAutoPlaceShip");
    return new Promise(function (resolve, reject) {
      buttonAutoPlaceShip.addEventListener("click", function() {
        resolve(ship);
      }, false);
      buttonManualPlaceShip.addEventListener("click", function() {
        resolve(myShips);
      }, false);
    });
  };

  const nextButton = function() {
    const buttonNext = document.querySelector(".buttonNextMove");
    return new Promise(function(resolve, reject) {
      buttonNext.addEventListener("click", function() {
        resolve()
      }, false)
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

  return {startMenu, boardPlacement, attack, nextButton};
};


const game = function() {

  let namePlayer1 = "1";
  let namePlayer2 = "2";
  // typeGame: Player vs Player = 1; Player vs AI = 2; AI vs AI = 3; LANgame = 4;
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
    namePlayer1 += settingsGame.namePlayer1;
    namePlayer2 += settingsGame.namePlayer2;
    typeGame = settingsGame.typeGame;
    sizeBoard = settingsGame.sizeBoard;
    amountShips = settingsGame.amountShips;
    queuePlayer1 = settingsGame.queuePlayer1;

    game = gameBattleShip(
      namePlayer1, namePlayer2, queuePlayer1 ,sizeBoard, amountShips
    );

  };

  const receiveManualPlaceShips = function(name, place) {
    for (let i = 0; i < place.length; i++) {
      game.placementShip(name, place[i][2][0], place[i][2][1], place[i][0], (place[i][1] == "hor") ? 'horizontally':'vertically');
    };
  };

  async function placementOfShips() {
    if (typeGame == 4) {
      await view.changeOfQueue(namePlayer1);
      view.createGamePlace(namePlayer1, game.getBoards(namePlayer1), true, amountShips);
      while (!game.readyGame().readyPlayer1) {
        const place = await listen.boardPlacement(amountShips, sizeBoard);
        if (place === "auto") {
          game.autoPlacementShip(namePlayer1);
        } else {
          receiveManualPlaceShips(namePlayer1, place);
        };
        view.createGamePlace(namePlayer1, game.getBoards(namePlayer1), true, amountShips);
      };
      await listen.nextButton();
      return;
    };
    
    while (!(game.readyGame().readyPlayer1 && game.readyGame().readyPlayer2)) {
      if (typeGame == 3) {
        game.autoPlacementShip(namePlayer1);
        game.autoPlacementShip(namePlayer2);
      } else if (typeGame == 2) {
        await view.changeOfQueue(namePlayer1);
        view.createGamePlace(namePlayer1, game.getBoards(namePlayer1), true, amountShips);
        while (!game.readyGame().readyPlayer1) {
          const place = await listen.boardPlacement(amountShips, sizeBoard);
          if (place === "auto") {
            game.autoPlacementShip(namePlayer1);
          } else {
            receiveManualPlaceShips(namePlayer1, place);
          };
          view.createGamePlace(namePlayer1, game.getBoards(namePlayer1), true, amountShips);
        };
        await listen.nextButton();
        game.autoPlacementShip(namePlayer2);
      } else {
        await view.changeOfQueue(namePlayer1);
        view.createGamePlace(namePlayer1, game.getBoards(namePlayer1), true, amountShips);
        while (!game.readyGame().readyPlayer1) {
          const place = await listen.boardPlacement(amountShips, sizeBoard);
          if (place === "auto") {
            game.autoPlacementShip(namePlayer1);
          } else {
            receiveManualPlaceShips(namePlayer1, place);
          };
          view.createGamePlace(namePlayer1, game.getBoards(namePlayer1), true, amountShips);
        };
        await listen.nextButton();
        await view.changeOfQueue(namePlayer2);
        view.createGamePlace(namePlayer2, game.getBoards(namePlayer2), true, amountShips);
        while (!game.readyGame().readyPlayer2) {
          const place = await listen.boardPlacement(amountShips, sizeBoard);
          if (place === "auto" || typeGame > 1) {
            game.autoPlacementShip(namePlayer2);
          } else {
            receiveManualPlaceShips(namePlayer2, place);
          };
          view.createGamePlace(namePlayer2, game.getBoards(namePlayer2), true, amountShips);
        };
        await listen.nextButton();
      };
    };
  };

  let resaltGame = -1;

  async function battle() {
    if (typeGame == 1) {
      if (game.getQueue().player1) {
        await view.changeOfQueue(namePlayer1);
      } else {
        await view.changeOfQueue(namePlayer2);
      };
      while (resaltGame != 2) {
        if (game.getQueue().player1) {
          view.createGamePlace(namePlayer1, game.getBoards(namePlayer1));
          let coord = await listen.attack();
          coord = coord.split('-');
          resaltGame = game.attack(namePlayer1, coord[0], coord[1]);
          view.createGamePlace(namePlayer1, game.getBoards(namePlayer1));
        } else {
          view.createGamePlace(namePlayer2, game.getBoards(namePlayer2));
          let coord = await listen.attack();
          coord = coord.split('-');
          resaltGame = game.attack(namePlayer2, coord[0], coord[1]);
          view.createGamePlace(namePlayer2, game.getBoards(namePlayer2));
        };
        await listen.nextButton();
        if (game.getQueue().player1) {
          await view.changeOfQueue(namePlayer1);
        } else {
          await view.changeOfQueue(namePlayer2);
        };
      };
    } else if (typeGame == 2) {
      while (resaltGame != 2) {
        view.createGamePlace(namePlayer1, game.getBoards(namePlayer1));
        if (game.getQueue().player1) {
          let coord = await listen.attack();
          coord = coord.split('-');
          resaltGame = game.attack(namePlayer1, coord[0], coord[1]);
        } else {
          resaltGame = game.ai(namePlayer2);
        };
      };
    } else if (typeGame == 3) {
      while (resaltGame != 2) {
        const sleep = function(ms) {
          return new Promise((resolve) => {
            setTimeout(resolve, ms);
          });
        }
        let sl = await sleep(5)
        const boardP1 = game.getBoards(namePlayer1).myBoard;
        const boardP2 = game.getBoards(namePlayer2).myBoard;
        const AIbords = {myBoard: boardP1, enemyBoard: boardP2};
        view.createGamePlace(namePlayer1, AIbords);
        if (game.getQueue().player1) {
          resaltGame = game.ai(namePlayer1).result;
        } else {
          resaltGame = game.ai(namePlayer2).result;
        };
      };
    } else if (typeGame == 4) {
      while (resaltGame != 2) {
        view.createGamePlace(namePlayer1, game.getBoards(namePlayer1));
        if (queuePlayer1) {
          let coord = await waitAttackLAN();
          coord = coord.split('-');
          resaltGame = game.attack(namePlayer1, coord[0], coord[1]);
          lanPlayer.send(JSON.stringify({
            name: "P2",
            type: "result",
            data: resaltGame,
          }));
          if (resaltGame == -1) {
            game.setQueue(false);
            queuePlayer1 = false;
          };
        } else {
          let coord = await listen.attack();
          coord = coord.split('-');
          resaltGame = await attackLAN(coord[0], coord[1]);
          if (resaltGame == -1) {
            game.setQueue(true);
            queuePlayer1 = true;
          };
        };
      };
    } else if (typeGame == 5) {
      while (resaltGame != 2) {
        view.createGamePlace(namePlayer1, game.getBoards(namePlayer1));
        if (queuePlayer1) {
          let coord = await waitAttackLAN();
          coord = coord.split('-');
          resaltGame = game.ai(namePlayer1).result;
          lanPlayer.send(JSON.stringify({
            name: "P2",
            type: "result",
            data: resaltGame,
          }));
          if (resaltGame == -1) {
            game.setQueue(false);
            queuePlayer1 = false;
          };
        } else {
          let coord = await listen.attack();
          coord = coord.split('-');
          resaltGame = await attackLAN(coord[0], coord[1]);
          if (resaltGame == -1) {
            game.setQueue(true);
            queuePlayer1 = true;
          };
        };
      };
    };
  };

  let lanPlayer;

  async function connectLAN() {
    const conn = new WebSocket("ws://192.168.1.195:9098");
    console.log("connect");
    conn.onmessage = (event) => {
      console.log(event.data);
      const data = JSON.parse(event.data);
      queuePlayer1 = data.data;
    };
    lanPlayer = conn;
    conn.onopen = (e) => {
      conn.send(JSON.stringify({
        name: "P2",
        type: "state",
        data: true,
      }));
    }

  };

  async function readyLAN() {
    lanPlayer.send(JSON.stringify({
      name: "P2",
      type: "state",
      data: true,
    }));
    return new Promise(function(resolve, reject) {
      lanPlayer.onmessage = (e) => {
        e = JSON.parse(e.data)
        console.log(e, "readyLAN");
        if (e.type == "state" && e.data) {
          resolve();
        };
      };
    });
  };

  async function attackLAN (x, y) {
    lanPlayer.send(JSON.stringify({
      name: "P2",
      type: "attack",
      data: String(x) + "," + String(y),
    }));
    return new Promise( function(resolve, reject) {
      lanPlayer.onmessage = (e) => {
        e = JSON.parse(e.data)
        console.log(e, "attackLAN");
        if (e.type == "result") {
          resolve(e.data);
        };
      };
    });
  };

  async function waitAttackLAN () {
    return new Promise ( function(resolve, reject) {
      lanPlayer.onmessage = (e) => {
        e = JSON.parse(e.data)
        if (e.type == "attack") {
          resolve(e.data);
        };
      };
    })
  }

  async function startGame() {
    await startMenu();
    if (typeGame == 4 || typeGame == 5) {
      await connectLAN();
      await placementOfShips();
      await readyLAN();
      console.log("battle")
      await battle();

    } else {
      await placementOfShips();
      await battle();
      while (typeGame == 3) {
        resaltGame = -1;
        game = gameBattleShip(
          namePlayer1, namePlayer2, queuePlayer1 ,sizeBoard, amountShips
        );
        await placementOfShips();
        await battle();
      };
    };
  };

  startGame();
};


game();

