const { gameBattleShip } = require("./game");

const createView = () => {

  const createBord = (nameBord, sizeBoard = 10) => {
    const container = document.createElement("div");
    const parentElement = document.querySelector(".gamePlac")
    container.className(nameBord);
    container.className("containerBoard");
    parentElement.appendChild(container);
    for (let y = 0; y <= sizeBoard; y++) {
      for (let x = 0; x <= sizeBoard; x++) {
        const cell = document.createElement("div");
        cell.className(nameBord);
        cell.className("cell");
        cell.id(String(x-1) + "," + String(y-1));
        if (x == 0 && y != 0) {
          cell.innerHTML(y);
        } else if (x != 0 && y == 0) {
          cell.innerHTML(x);
        };
        container.appendChild(cell);
      };
    };
  };

  const createGamePlace = () => {
    const body = document.querySelector("body");
    const gamePlace = document.createElement("div");
    gamePlace.className("gamePlace");
    body.appendChild(gamePlace);


  };

  return {createStartMenu, };
};

// listenerStartMenu()
// createView()
//   createStartMenu()
//   changeOfQueue(namePlayer)
//   refreshBoard(array)
//   startChangeOfQueue()
//   attack() -> coordinate "0,0"

const game = () => {
  let namePlayer1;
  let namePlayer2;
  // typeGame: Player vs Player = 1; Player vs AI = 2; AI vs AI = 3
  let typeGame;
  let sizeBoard = 10;
  let amountShips = [[5, 1], [4, 1], [3, 2], [2, 1]];
  let queuePlayer1 = true;

  // Create menu view, where ask 
  const view = createView();
  let game;

  async function startMenu() {
    view.createStartMenu();

    const settingsGame = await listenerStartMenu();
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
    while (game.getQueuePlayer1().player1 && game.getQueuePlayer1().player2) {
      if (game.getQueuePlayer1().player1) {
        await view.changeOfQueue(namePlayer1);
        while (game.readyGame().readyPlayer1) {
          const place = await listenerPlace();
          if (place === "auto" || typeGame > 2) {
            game.autoPlacementShip(namePlayer1);
          } else {
            game.placementShip(namePlayer1, place.x, place.y);
          };
          view.refreshBoard(game.getBoards(namePlayer1));
        };
        await view.changeOfQueue(namePlayer2);
        while (game.readyGame().readyPlayer2) {
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
        while (game.readyGame().readyPlayer2) {
          const place = await listenerPlace();
          if (place === "auto" || typeGame > 1) {
            game.autoPlacementShip(namePlayer2);
          } else {
            game.placementShip(namePlayer2, place.x, place.y);
          };
          view.refreshBoard(game.getBoards(namePlayer2));
        };
        await view.changeOfQueue(namePlayer1);
        while (game.readyGame().readyPlayer1) {
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
    if (game.getQueuePlayer1().player1) {
      await view.changeOfQueue(namePlayer1);
    } else {
      await view.changeOfQueue(namePlayer2);
    };
    while (resaltGame != 2) {
      if (game.getQueuePlayer1().player1) {
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