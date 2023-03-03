
const ship = (len) => {
  let lengthShip = len;
  let hitShip = 0;

  const hit = () => {
    if (hitShip < lengthShip) {
      hitShip++;
    };
    return hitShip;
  };

  const isSunk = () => {
    if (hitShip >= lengthShip) {
      return true;
    };
    return false;
  };

  return {hit, isSunk}
};


const gameboard = (sizeBoard = 10, amountShips = [[5, 1], [4, 1], [3, 2], [2, 1]]) => {
  let board = {};
  let shipsOnBoard = [];

  // cell board can have value: null, ship(), "muff", "hit"
  for (let y = 0; y < sizeBoard; y++) {
    for (let x = 0; x < sizeBoard; x++) {
      const coordinateProperty = String(x) + "," + String(y);
      Object.defineProperty(board, coordinateProperty, {
        value: null,
        writable: true,
      });
    };
  };

  // ship = {x: 0, y:0, size: 1, direction: vertically or horizontally}
  const placeShip = (startCoordinateX, startCoordinateY, sizeShip, directionShip) => {
    let posibleSize = false;
    let posibleAmountShipIndex = -1;

    for (let i = 0; i < amountShips.length; i++) {
      if (amountShips[i][0] == sizeShip) {
        posibleSize = true;
        posibleAmountShipIndex = i;
      };
    };

    if (posibleSize == false) {
      throw `Ship size ${sizeShip} against the rules`;
    };

    if (amountShips[posibleAmountShipIndex][1] <= 0) {
      throw `Ship size ${sizeShip} are over`;
    };

    if ((directionShip == 'vertically' && startCoordinateY + sizeShip <= sizeBoard) ||
         (directionShip == 'horizontally' && startCoordinateX + sizeShip <= sizeBoard)) {
      posiblePlace = true;
    } else {
      throw `Ship does not place. Check direction: vertically or horizontally, size and coordinate ${startCoordinateX}, ${startCoordinateY}, ${sizeShip}, ${directionShip}`;
    };
    for (let checkX = startCoordinateX - 1; 
        checkX < ((directionShip == 'vertically') ? startCoordinateX + 2: startCoordinateX + sizeShip + 1); 
        checkX++) {
      for (let checkY = startCoordinateY - 1; 
          checkY < ((directionShip == 'horizontally') ? startCoordinateY + 2: startCoordinateY + sizeShip + 1); 
          checkY++) {
        if (checkX >= 0 && checkX < sizeBoard && checkY >= 0 && checkY < sizeBoard) {
          const coordinateBoard = String(checkX) + "," + String(checkY);
          if (board[coordinateBoard] !== null) {
            throw "Ship does not place. That place not free."
          };
        };
      };
    };

    const newShip = ship(sizeShip);
    amountShips[posibleAmountShipIndex][1]--;
    shipsOnBoard.push(newShip);
    for (let i = 0; i < sizeShip; i++) {
      let coordinateBoard = '';
      if (directionShip == 'vertically') {
        coordinateBoard = String(startCoordinateX) + "," + String(startCoordinateY + i);
      } else if (directionShip == 'horizontally') {
        coordinateBoard = String(startCoordinateX + i) + "," + String(startCoordinateY);
      };
      board[coordinateBoard] = newShip;
    };
  };

  // return: -1 - "muff", 0 - "hit", 1 - that ship sunk, 2 - all ships sunk
  const receiveAttack = (x, y) => {
    const coordinateShot = String(x) + "," + String(y);
    
    if (board[coordinateShot] == null) {
      board[coordinateShot] = "muff";
      return -1;
    } else if (board[coordinateShot] == "muff") {
      board[coordinateShot] = "muff";
      return -1;
    } else {
      board[coordinateShot].hit();
      if (board[coordinateShot].isSunk()) {
        board[coordinateShot] = "hit";
        if (checkAllShipsIsSunk()) {
          return 2;
        }
        return 1;
      };
      board[coordinateShot] = "hit";
      return 0;

    };
  };

  const checkAllShipsIsSunk = () => {
    for (let i = 0; i < shipsOnBoard.length; i++) {
      if (!shipsOnBoard[i].isSunk()) {
        return false;
      };
    };
    return true;
  };

  const stateBoard = () => {
    let b = [];
    for (let y = 0; y < sizeBoard; y++) {
      b.push([]);
      for (let x = 0; x < sizeBoard; x++) {
        const coordinate = String(x) + "," + String(y);
        if (board[coordinate] == null) {
          b[y][x] = "null";
        } else if (board[coordinate] == "muff") {
          b[y][x] = "muff";
        } else if (board[coordinate] == "hit") {
          b[y][x] = "hit";
        } else {
          b[y][x] = "ship";
        };
      };
    };
    return b;
  };

  const stateCell = (x, y) => {
    if (x < 0 && sizeBoard <= x && y < 0 && sizeBoard <= y) {
      throw `Coordinate ${x}, ${y} uncorrect.`
    };
    const coordinate = String(x) + "," + String(y);
    if (board[coordinate] == null) {
      return "null";
    } else if (board[coordinate] == "muff") {
      return "muff";
    } else if (board[coordinate] == "hit") {
      return "hit";
    } else {
      return "ship";
    };
  };

  const attack = (x, y, result) => {
    const coordinate = String(x) + "," + String(y);
    if (result == -1) {
      board[coordinate] = "muff";
    } else if (result == 0) {
      board[coordinate] = "hit";
    } else if (result == 1) {
      board[coordinate] = "sunk";

      let stack = [[x, y]];
      let step = [[-1,0],[0,-1],[0,1],[1,0]];
      while (stack.length > 0) {
        let xx = stack[0][0];
        let yy = stack[0][1];
        stack.pop();
        for (let i = 0; i < step.length; i++) {
          let newX = xx + step[i][0];
          let newY = yy + step[i][1];
          if (0 <= newX && newX < sizeBoard && 0 <= newY && newY < sizeBoard) {
            let c = String(newX) + "," + String(newY);
            if (board[c] == "hit") {
              stack.push([newX, newY]);
              board[c] = "sunk";
            };
          };
        };
      };
    };
  };

  return {placeShip, receiveAttack, checkAllShipsIsSunk, stateBoard, stateCell, attack}
};

const player = (name, sizeBoard = 10, amountShips = [[5, 1], [4, 1], [3, 2], [2, 1]]) => {
  let board = gameboard(sizeBoard, amountShips);
  let boardEnemy = gameboard();

  const receiveAttack = (x, y) => {
    if (x < 0 && sizeBoard <= x && y < 0 && sizeBoard <= y) {
      throw `Coordinate ${x}, ${y} uncorrect.`
    };
    return board.receiveAttack(x, y);
  };

  const attack = (x, y, result) => {
    if (x < 0 && sizeBoard <= x && y < 0 && sizeBoard <= y) {
      throw `Coordinate ${x}, ${y} uncorrect.`
    };
    boardEnemy.attack(x, y, result);
  };

  const randomPlaceShip = () => {
    board = gameboard(sizeBoard, amountShips);
    for (let i = 0; i < amountShips.length; i++) {
      let place = true;
      let tring = 5000;
      while (place) {
        tring--;
        if (tring < 0) {
          board = gameboard(sizeBoard, amountShips);
          return false;
        };
        let direction = (Math.floor(Math.random() * 10) > 4) ? 'horizontally' : 'vertically';
        let x;
        let y;
        if (direction == 'horizontally') {
          x = Math.floor(Math.random() * (sizeBoard - amountShips[i][0]));
          y = Math.floor(Math.random() * sizeBoard);
        } else {
          x = Math.floor(Math.random() * sizeBoard);
          y = Math.floor(Math.random() * (sizeBoard - amountShips[i][0]));
        };
        try {
          board.placeShip(x, y, amountShips[i][0], direction);
          if (amountShips[i][1] == 0) {
            place = false;
          };
        } catch {

        };
      };
    };
    return true;
  };

  const checkAllShipPlace = () => {
    for (let i = 0; i < amountShips.length; i++) {
      if (amountShips[i][1] > 0) {
        return false;
      };
    };
    return true;
  };

  return {board, boardEnemy, receiveAttack, randomPlaceShip, attack, checkAllShipPlace};
};

const gameBattleShip = (p1, p2, queuePlayer1 = true, sizeBoard = 10, amountShips = [[5, 1], [4, 1], [3, 2], [2, 1]]) => {
  const namePlayer1 = p1;
  const namePlayer2 = p2;

  // Queue true = Player 1; false = Player 2
  let gameReadyPlayer1 = false;
  let gameReadyPlayer2 = false;

  const copyAmountShips = (arr) => {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      arr1.push([arr[i][0], arr[i][1]]);
    };
    return arr1;
  }; 

  const player1 = player(namePlayer1, sizeBoard, copyAmountShips(amountShips));
  const player2 = player(namePlayer2, sizeBoard, copyAmountShips(amountShips));

  const getQueue = () => {
    if (queuePlayer1) {
      return {player1: true,
              player2: false};
    } else {
      return {player1: false,
              player2: true};
    };
  };

  // return resalt attack: -1 - "muff", 0 - "hit", 1 - that ship sunk, 2 - all ships sunk
  const attack = (playerName, x, y) => {
    if (!readyGame()) {
      throw "Game don't ready";
    };
    if (queuePlayer1) {
      if (playerName != namePlayer1) {
        throw `Now it's the ${namePlayer1}'s turn`;
      };
    } else {
      if (playerName != namePlayer2) {
        throw `Now it's the ${namePlayer2}'s turn`;
      };
    };
    if (x < 0 && sizeBoard <= x && y < 0 && sizeBoard <= y) {
      throw `Coordinate ${x}, ${y} uncorrect.`
    };
    if (queuePlayer1) {
      let resaltAttack = player2.receiveAttack(x, y);
      player1.attack(x, y, resaltAttack);
      if (resaltAttack == -1) {
        queuePlayer1 = false;
      } else if (resaltAttack == 2) {
        gameReadyPlayer1 = false;
        gameReadyPlayer2 = false;
      };
      return resaltAttack;
    } else {
      let resaltAttack = player1.receiveAttack(x, y);
      player2.attack(x, y, resaltAttack);
      if (resaltAttack == -1) {
        queuePlayer1 = true;
      } else if (resaltAttack == 2) {
        gameReadyPlayer1 = false;
        gameReadyPlayer2 = false;
      };
      return resaltAttack;
    };
  };

  const getBoards = (playerName) => {
    if (playerName == namePlayer1) {
      return { myBoard: player1.board.stateBoard(), enemyBoard: player1.boardEnemy.stateBoard() };
    } else if (playerName == namePlayer2) {
      return { myBoard: player2.board.stateBoard(), enemyBoard: player2.boardEnemy.stateBoard() };
    } else {
      throw "Function getBoard() get uncorrect player name.";
    };
  };

  const placementShip = (playerName, x, y, size, direction) => {
    if (x < 0 && sizeBoard <= x && y < 0 && sizeBoard <= y) {
      throw `Coordinate ${x}, ${y} uncorrect.`
    };
    if (playerName == namePlayer1) {
      player1.board.placeShip(x, y, size, direction);
      if (player1.checkAllShipPlace()) {
        gameReadyPlayer1 = true;
      };
    } else if (playerName == namePlayer2) {
      player2.board.placeShip(x, y, size, direction);
      if (player2.checkAllShipPlace()) {
        gameReadyPlayer2 = true;
      };
    } else {
      throw "Function placementShip() get uncorrect player name.";
    };
  };

  const autoPlacementShip = (playerName) => {
    if (playerName == namePlayer1) {
      player1.randomPlaceShip();
      if (player1.checkAllShipPlace()) {
        gameReadyPlayer1 = true;
      };
    } else if (playerName == namePlayer2) {
      player2.randomPlaceShip();
      if (player2.checkAllShipPlace()) {
        gameReadyPlayer2 = true;
      };
    } else {
      throw "Function autoPlacementShip() get uncorrect player name.";
    };
  };

  const readyGame = () => {
    return {
      readyPlayer1: gameReadyPlayer1,
      readyPlayer2: gameReadyPlayer2,
    };
  };


  // Start AI
  let step1AIP1 = [];
  let step2AIP1 = [];
  let stepAfterWoundP1 = [];
  let chooseStep1P1 = Math.floor(Math.random() * 10) > 5;

  let step1AIP2 = [];
  let step2AIP2 = [];
  let stepAfterWoundP2 = [];
  let chooseStep1P2 = Math.floor(Math.random() * 10) > 5;

  for (let yy = 0; yy < sizeBoard; yy++) {
    for (let xx = 0; xx < sizeBoard; xx++) {
      if (xx % 2 == 0 && yy % 2 == 0 || xx % 2 != 0 && yy % 2 != 0) {
        step1AIP1.push([xx,yy]);
        step1AIP2.push([xx,yy]);
      } else {
        step2AIP1.push([xx,yy]);
        step2AIP2.push([xx,yy]);
      };
    };
  };

  const ai = (name) => {
    let step1AI;
    let step2AI;
    let stepAfterWound;
    let chooseStep1;
    let p;
    if (name == namePlayer1) {
      step1AI = step1AIP1;
      step2AI = step2AIP1;
      stepAfterWound = stepAfterWoundP1;
      chooseStep1 = chooseStep1P1;
      p = player1;
    } else if (name == namePlayer2) {
      step1AI = step1AIP2;
      step2AI = step2AIP2;
      stepAfterWound = stepAfterWoundP2;
      chooseStep1 = chooseStep1P2;
      p = player2;
    };

    let result = null;
    let x;
    let y;
    if (stepAfterWound.length > 0) {
        const step = [[-1,0],[0,-1],[1,0],[0,1]];
        let xx = stepAfterWound[0][0];
        let yy = stepAfterWound[0][1];
        stepAfterWound.shift();
        let tempStack = [];


        if (p.boardEnemy.stateCell(xx, yy) == "muff") {
          result = attack(name, stepAfterWound[0][0], stepAfterWound[0][1]);
          x = stepAfterWound[0][0];
          y = stepAfterWound[0][1];
        }; 

        if (0 <= xx - 1 && xx - 1 < sizeBoard && 0 <= yy && yy < sizeBoard && result == null) {
          if (p.boardEnemy.stateCell(xx - 1, yy) == "hit") {
            stepAfterWound = [];
            let i = xx;
            while (0 <= i && i < sizeBoard - 1 && p.boardEnemy.stateCell(i, yy) == "hit") {
              i--;
            };
            (i != xx && p.boardEnemy.stateCell(i, yy) != "muff") ? stepAfterWound.push([i, yy]) : null;
            i = xx;
            while (0 <= i && i < sizeBoard - 1 && p.boardEnemy.stateCell(i, yy) == "hit") {
              i++;
            };
            (i != xx && p.boardEnemy.stateCell(i, yy) != "muff") ? stepAfterWound.push([i, yy]) : null;
            result = attack(name, stepAfterWound[0][0], stepAfterWound[0][1]);
            x = stepAfterWound[0][0];
            y = stepAfterWound[0][1];
          } else if (p.boardEnemy.stateCell(xx - 1, yy) == "null") {
            tempStack.push([xx-1, yy]);
          };
        };

        if (0 <= xx && xx < sizeBoard && 0 <= yy-1 && yy-1 < sizeBoard && result == null) {
          if (p.boardEnemy.stateCell(xx, yy-1) == "hit") {
            stepAfterWound = [];
            let i = yy;
            while (0 <= i && i < sizeBoard - 1 && p.boardEnemy.stateCell(xx, i) == "hit") {
              i--;
            };
            (i != yy && p.boardEnemy.stateCell(xx, i) != "muff") ? stepAfterWound.push([xx, i]) : null;
            i = yy;
            while (0 <= i && i < sizeBoard - 1 && p.boardEnemy.stateCell(xx, i) == "hit") {
              i++;
            };
            (i != yy && p.boardEnemy.stateCell(xx, i) != "muff") ? stepAfterWound.push([xx, i]) : null;
            result = attack(name, stepAfterWound[0][0], stepAfterWound[0][1]);
            x = stepAfterWound[0][0];
            y = stepAfterWound[0][1];
          } else if (p.boardEnemy.stateCell(xx, yy-1) == "null") {
            tempStack.push([xx, yy-1]);
          };
        };

        if (0 <= xx + 1 && xx + 1 < sizeBoard && 0 <= yy && yy < sizeBoard && result == null) {
          if (p.boardEnemy.stateCell(xx + 1, yy) == "hit") {
            stepAfterWound = [];
            let i = xx;
            while (0 <= i && i < sizeBoard - 1 && p.boardEnemy.stateCell(i, yy) == "hit") {
              i--;
            };
            (i != xx && p.boardEnemy.stateCell(i, yy) != "muff") ? stepAfterWound.push([i, yy]) : null;
            i = xx;
            while (0 <= i && i < sizeBoard - 1 && p.boardEnemy.stateCell(i, yy) == "hit") {
              i++;
            };
            (i != xx && p.boardEnemy.stateCell(i, yy) != "muff") ? stepAfterWound.push([i, yy]) : null;
            result = attack(name, stepAfterWound[0][0], stepAfterWound[0][1]);
            x = stepAfterWound[0][0];
            y = stepAfterWound[0][1];
          } else if (p.boardEnemy.stateCell(xx + 1, yy) == "null") {
            tempStack.push([xx+1, yy]);
          };
        };

        if (0 <= xx && xx < sizeBoard && 0 <= yy+1 && yy+1 < sizeBoard && result == null) {
          if (p.boardEnemy.stateCell(xx, yy+1) == "hit") {
            stepAfterWound = [];
            let i = yy;
            while (0 <= i && i < sizeBoard - 1 && p.boardEnemy.stateCell(xx, i) == "hit") {
              i--;
            };
            (i != yy && p.boardEnemy.stateCell(xx, i) != "muff") ? stepAfterWound.push([xx, i]) : null;
            i = yy;
            while (0 <= i && i < sizeBoard - 1 && p.boardEnemy.stateCell(xx, i) == "hit") {
              i++;
            };
            (i != yy && p.boardEnemy.stateCell(xx, i) != "muff") ? stepAfterWound.push([xx, i]) : null;
            result = attack(name, stepAfterWound[0][0], stepAfterWound[0][1]);
            x = stepAfterWound[0][0];
            y = stepAfterWound[0][1];
          } else if (p.boardEnemy.stateCell(xx, yy+1) == "null") {
            tempStack.push([xx, yy+1]);
          };
        };

        while (tempStack.length > 0 && result == null) {
          stepAfterWound.push(tempStack.pop());
        };

        if (result == null) {
          result = attack(name, stepAfterWound[0][0], stepAfterWound[0][1]);
        } else {
          if (x % 2 == 0 && y % 2 == 0 || x % 2 != 0 && y % 2 != 0) {
            for (let i = 0; i < step1AI.length; i++) {
              if (step1AI[i][0] == x && step1AI[i][1] == y) {
                if (i == step1AI.length-1) {
                  step1AI.pop();
                } else {
                  step1AI = step1AI.slice(0, i).concat(step1AI.slice(i+1, step1AI.length));
                };
                break;
              };
            };
          } else {
            for (let i = 0; i < step2AI.length; i++) {
              if (step2AI[i][0] == x && step2AI[i][1] == y) {
                if (i == step2AI.length-1) {
                  step2AI.pop();
                } else {
                  step2AI = step2AI.slice(0, i).concat(step2AI.slice(i+1, step2AI.length));
                };
                break;
              }
            };
          };
        };  

    } else {
      if (chooseStep1 && step1AI.length > 0) {
        let ind = Math.floor(Math.random() * step1AI.length);
        result = attack(name, step1AI[ind][0], step1AI[ind][1]);
        if (result != -1) {
          stepAfterWound.push([step1AI[ind][0], step1AI[ind][1]]);
        };
        if (ind == step1AI.length - 1) {
          step1AI.pop();
        } else {
          step1AI = step1AI.slice(0, ind).concat(step1AI.slice(ind + 1, step1AI.length));
        };
      } else {
        let ind = Math.floor(Math.random() * step2AI.length);
        result = attack(name, step2AI[ind][0], step2AI[ind][1]);
        if (result != -1) {
          stepAfterWound.push([step2AI[ind][0], step2AI[ind][1]]);
        };
        if (ind == step2AI.length - 1) {
          step2AI.pop();
        } else {
          step2AI = step2AI.slice(0, ind).concat(step2AI.slice(ind + 1, step2AI.length));
        };
      };
    };
    if (result == 1) {
      stepAfterWound = [];
      //removeStepsAfterSunk(x, y);
    };
    return result;
  };

  const removeStepsAfterSunk = (x, y) => {
    const a = player2.boardEnemy.stateCell(x, y);
    if (player2.boardEnemy.stateCell(x, y) != "hit") {
      throw "Method removeStepsAfterSunk() acept coordinate hasn't 'hit'"
    };
    let stack = [[x, y]];
    let step = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    const listSteps = new Set();
    while (stack.length > 0) {
      let xx = stack[0][0];
      let yy = stack[0][1];
      stack.shift();
      for (let i = 0; i < step.length; i++) {
        const strCoor = String(xx + step[i][0]) + ',' + String(yy + step[i][1]);
        if (player2.boardEnemy.stateCell(xx + step[i][0], yy + step[i][1]) == "null" && !listSteps.has(strCoor)) {
          listSteps.add(strCoor);
        } else if (player2.boardEnemy.stateCell(xx + step[i][0], yy + step[i][1]) == "hit") {
          stack.push([xx + step[i][0], yy + step[i][1]]);
        };
      };
    };
    for (const coord of listSteps) {
      const c = coord.split(',');
      removeStepsAI(c[0], c[1]);
    };
  };

  const removeStepsAI = (x, y) => {
    if (x % 2 == 0 && y % 2 == 0 || x % 2 != 0 && y % 2 != 0) {
      for (let i = 0; i < step1AI.length; i++) {
        if (step1AI[i][0] == x && step1AI[i][1] == y) {
          if (i == step1AI.length-1) {
            step1AI.pop();
          } else {
            step1AI = step1AI.slice(0, i).concat(step1AI.slice(i+1, step1AI.length));
          };
          break;
        };
      };
    } else {
      for (let i = 0; i < step2AI.length; i++) {
        if (step2AI[i][0] == x && step2AI[i][1] == y) {
          if (i == step2AI.length-1) {
            step2AI.pop();
          } else {
            step2AI = step2AI.slice(0, i).concat(step2AI.slice(i+1, step2AI.length));
          };
          break;
        }
      };
    };
  };


  return { getQueue, placementShip, autoPlacementShip, getBoards, readyGame, attack, ai }
};


module.exports = {ship, gameboard, player, gameBattleShip};

const game = gameBattleShip("I", "AI");
game.autoPlacementShip("I");
game.autoPlacementShip("AI");
console.log(game.readyGame());
console.log(game.getBoards("I"));
console.log(game.readyGame());

