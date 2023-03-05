const ship = require('./game')


// test('create ship factory and check hit() and isSunk()', () => {
//   let lengthShip = 4; 
//   const s = ship.ship(lengthShip);
//   for(let i = 0; i < lengthShip; i++){
//     expect(s.isSunk()).toBe(false);
//     expect(s.hit()).toBe(i+1);
//   };
//   expect(s.isSunk()).toBe(true);
// });

//   //   0 1 2 3 4 5 6 7 8 9
//   // 0| | | | | | | | | | |
//   // 1| | | | | | | | | | |
//   // 2| | | | | | | | | | |
//   // 3| | | | | | | | | | |
//   // 4| | | | | | | | | | |
//   // 5| | | | | | | | | | |
//   // 6| | | | | | | | | | |
//   // 7| | | | | | | | | | |
//   // 8| | | | | | | | | | |
//   // 9| | | | | | | | | | |

// test('Ship place on the board. Correct', () => {
//   let board = ship.gameboard(10, [[2, 4], [3, 4]]);
//   //   0 1 2 3 4 5 6 7 8 9
//   // 0|1| |2|2| | | | | |5|
//   // 1|1| | | | | | | | |5|
//   // 2| | | | | | | | | |5|
//   // 3| | | | | | | | | | |
//   // 4| | | | |3| |4|4|4| |
//   // 5| | | | |3| | | | | |
//   // 6| | | | | | | | | |7|
//   // 7| | | | | | | | | |7|
//   // 8| | | | | | | | | |7|
//   // 9|6|6|6| | |8|8| | | |
//   expect(() => board.placeShip(0, 0, 2, 'vertically')).not.toThrow();   // 1
//   expect(() => board.placeShip(2, 0, 2, 'horizontally')).not.toThrow(); // 2
//   expect(() => board.placeShip(4, 4, 2, 'vertically')).not.toThrow();   // 3
//   expect(() => board.placeShip(6, 4, 3, 'horizontally')).not.toThrow(); // 4
//   expect(() => board.placeShip(9, 0, 3, 'vertically')).not.toThrow();   // 5
//   expect(() => board.placeShip(0, 9, 3, 'horizontally')).not.toThrow(); // 6
//   expect(() => board.placeShip(9, 6, 3, 'vertically')).not.toThrow();   // 7
//   expect(() => board.placeShip(5, 9, 2, 'horizontally')).not.toThrow(); // 8
// });

// test('Ship place on the board. Inorrect', () => {
//   let board = ship.gameboard(10, [[11, 3], [2, 2], [3, 2], [4, 1]]);
//   //   0 1 2 3 4 5 6 7 8 9
//   // 0| | | | | | | | | | |
//   // 1| | | | | | | | | | |
//   // 2| | | | | | | | | | |
//   // 3| | | | | | | | | | |
//   // 4| | | | |x| | | | | |
//   // 5| | | | |x| | | | | |
//   // 6| | | | | | | | | | |
//   // 7| | | | | | | | | | |
//   // 8| | | | | | | | | | |
//   // 9| | | | | | | | | | |

//   expect(() => board.placeShip(0, 0, 11, 'vertically')).toThrow();
//   expect(() => board.placeShip(0, 0, 11, 'horizontally')).toThrow();
//   expect(() => board.placeShip(4, 4, 2, 'vertically')).not.toThrow();
//   expect(() => board.placeShip(4, 4, 3, 'horizontally')).toThrow();
//   expect(() => board.placeShip(4, 0, 4, 'vertically')).toThrow();
//   expect(() => board.placeShip(0, 9, 11, 'horizontally')).toThrow();
//   expect(() => board.placeShip(9, 9, 3, 'vertically')).toThrow();
//   expect(() => board.placeShip(9, 9, 2, 'horizontally')).toThrow();

//   //expect(() => board.placeShip(4, 4, 2, 'vertically')).not.toThrow();
//   expect(() => board.placeShip(3, 3, 1, 'vertically')).toThrow();
//   expect(() => board.placeShip(3, 4, 1, 'vertically')).toThrow();
//   expect(() => board.placeShip(3, 5, 1, 'vertically')).toThrow();
//   expect(() => board.placeShip(3, 6, 1, 'vertically')).toThrow();
//   expect(() => board.placeShip(5, 3, 1, 'vertically')).toThrow();
//   expect(() => board.placeShip(5, 4, 1, 'vertically')).toThrow();
//   expect(() => board.placeShip(5, 5, 1, 'vertically')).toThrow();
//   expect(() => board.placeShip(5, 6, 1, 'vertically')).toThrow();
//   expect(() => board.placeShip(4, 3, 1, 'vertically')).toThrow();
//   expect(() => board.placeShip(4, 6, 1, 'vertically')).toThrow();

//   expect(() => board.placeShip(3, 3, 2, 'vertically')).toThrow();
//   expect(() => board.placeShip(3, 2, 2, 'vertically')).toThrow();
// });

// test('Ship place on the board through Player. Inorrect', () => {
//   let p = ship.player("a", 10, [[11, 3], [2, 2], [3, 2], [4, 1]]);
//   //   0 1 2 3 4 5 6 7 8 9
//   // 0| | | | | | | | | | |
//   // 1| | | | | | | | | | |
//   // 2| | | | | | | | | | |
//   // 3| | | | | | | | | | |
//   // 4| | | | |x| | | | | |
//   // 5| | | | |x| | | | | |
//   // 6| | | | | | | | | | |
//   // 7| | | | | | | | | | |
//   // 8| | | | | | | | | | |
//   // 9| | | | | | | | | | |

//   expect(() => p.board.placeShip(0, 0, 11, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(0, 0, 11, 'horizontally')).toThrow();
//   expect(() => p.board.placeShip(4, 4, 2, 'vertically')).not.toThrow();
//   expect(() => p.board.placeShip(4, 4, 3, 'horizontally')).toThrow();
//   expect(() => p.board.placeShip(4, 0, 4, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(0, 9, 11, 'horizontally')).toThrow();
//   expect(() => p.board.placeShip(9, 9, 3, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(9, 9, 2, 'horizontally')).toThrow();

//   //expect(() => board.placeShip(4, 4, 2, 'vertically')).not.toThrow();
//   expect(() => p.board.placeShip(3, 3, 1, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(3, 4, 1, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(3, 5, 1, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(3, 6, 1, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(5, 3, 1, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(5, 4, 1, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(5, 5, 1, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(5, 6, 1, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(4, 3, 1, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(4, 6, 1, 'vertically')).toThrow();

//   expect(() => p.board.placeShip(3, 3, 2, 'vertically')).toThrow();
//   expect(() => p.board.placeShip(3, 2, 2, 'vertically')).toThrow();
// });

// test('Ship place on the board 5x5. Inorrect', () => {
//   let board = ship.gameboard(5, [[2, 3], [3, 1]]);
//   //   0 1 2 3 4 
//   // 0|3|1|1| | | 
//   // 1|3| | |2| | 
//   // 2| | | |2| | 
//   // 3| | | | | | 
//   // 4| | |4|4|4|

//   expect(() => board.placeShip(1, 0, 2, 'horizontally')).not.toThrow(); // 1
//   //expect(() => board.placeShip(3, 1, 2, 'vertically')).toThrow();       // 2
//   expect(() => board.placeShip(0, 0, 2, 'vertically')).toThrow();       // 3
//   expect(() => board.placeShip(2, 4, 3, 'horizontally')).not.toThrow(); // 4
  

// });

// test('Test attack', () => {
//   let board = ship.gameboard(10, [[4, 1], [3, 2], [2, 3], [1, 4]]);
//   //   0 1 2 3 4 5 6 7 8 9
//   // 0| | | | | | | |s|s|s|
//   // 1| |s|s|s|s| | | | | |
//   // 2| | | | | | | | | |s|
//   // 3|s| | | | | |s| | | |
//   // 4| | | | | | |s| | | |
//   // 5| | |s| | | |s| | | |
//   // 6| | |s| |s| | | | | |
//   // 7| | | | | | | |s| | |
//   // 8| | | | | | | | | | |
//   // 9| | |s|s| | |s|s| | |

//   board.placeShip(7, 0, 3, 'horizontally');
//   board.placeShip(1, 1, 4, 'horizontally');
//   board.placeShip(9, 2, 1, 'horizontally');
//   board.placeShip(0, 3, 1, 'horizontally');
//   board.placeShip(6, 3, 3, 'vertically');
//   board.placeShip(2, 5, 2, 'vertically');
//   board.placeShip(4, 6, 1, 'horizontally');
//   board.placeShip(7, 7, 1, 'horizontally');
//   board.placeShip(2, 9, 2, 'horizontally');
//   board.placeShip(6, 9, 2, 'horizontally');

//   expect(board.receiveAttack(0, 0)).toBe(-1);
//   expect(board.receiveAttack(0, 9)).toBe(-1);
//   expect(board.receiveAttack(9, 9)).toBe(-1);
//   expect(board.receiveAttack(9, 0)).toBe(0);
//   expect(board.receiveAttack(8, 0)).toBe(0);
//   expect(board.receiveAttack(7, 0)).toBe(1);
//   expect(board.receiveAttack(9, 2)).toBe(1);
// });


// test('Create player and check method randomPlaceShip', () => {
//   for (let i = 0; i < 1000; i++) {
//     const player = ship.player("a");
//     expect(() => player.randomPlaceShip()).not.toThrow();
//   };
// });

// test('Game', () => {
//   const game = ship.gameBattleShip("name1", "name2");
//   const emptyBoard = [
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//   ];
//   const fullBoard = [
//     ["ship", "ship", "null", "null", "null", "ship", "ship", "ship", "ship", "ship"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "ship", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "ship", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "ship", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "ship", "ship", "ship", "ship", "null", "null", "ship"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "ship"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "ship"], 
//   ];

//   expect(game.readyGame()).toBe(false);
//   expect(game.getBoards("name1")).toEqual({myBoard: emptyBoard, enemyBoard: emptyBoard});
//   expect(() => game.placementShip("name1", 0, 0, 2, 'horizontally')).not.toThrow();
//   expect(() => game.placementShip("name1", 2, 3, 3, 'vertically')).not.toThrow();
//   expect(() => game.placementShip("name1", 9, 7, 3, 'vertically')).not.toThrow();
//   expect(() => game.placementShip("name1", 3, 7, 4, 'horizontally')).not.toThrow();
//   expect(() => game.placementShip("name1", 5, 0, 5, 'horizontally')).not.toThrow();

//   expect(game.readyGame()).toBe(false);
//   expect(game.getBoards("name1")).toEqual({myBoard: fullBoard, enemyBoard: emptyBoard});

//   expect(() => game.placementShip("name2", 0, 0, 2, 'horizontally')).not.toThrow();
//   expect(() => game.placementShip("name2", 2, 3, 3, 'vertically')).not.toThrow();
//   expect(() => game.placementShip("name2", 9, 7, 3, 'vertically')).not.toThrow();
//   expect(() => game.placementShip("name2", 3, 7, 4, 'horizontally')).not.toThrow();
//   expect(() => game.placementShip("name2", 5, 0, 5, 'horizontally')).not.toThrow();

//   expect(game.readyGame()).toBe(true);
//   expect(game.getBoards("name2")).toEqual({myBoard: fullBoard, enemyBoard: emptyBoard});

//   const attackP1 = [
//     [0,0,0], [1,0,1], [5,0,0], [6,0,0], [7,0,0], [8,0,0], [9,0,1], [2,3,0], [2,4,0], [2,5,1],
//     [3,7,0], [4,7,0], [5,7,0], [6,7,1], [9,7,0], [0,9,-1]
//   ];

//   for (let i = 0; i < attackP1.length; i++) {
//     expect(game.getQueue()).toEqual({player1: true, player2: false});
//     expect(game.attack("name1", attackP1[i][0], attackP1[i][1])).toBe(attackP1[i][2]);
//   };
//   expect(game.getQueue()).toEqual({player1: false, player2: true});
//   expect(game.attack("name2", 0, 8)).toBe(-1);
//   expect(game.getQueue()).toEqual({player1: true, player2: false});
//   expect(game.attack("name1", 0, 3)).toBe(-1);
//   expect(game.getQueue()).toEqual({player1: false, player2: true});
//   expect(game.attack("name2", 0, 0)).toBe(0);
//   expect(game.getQueue()).toEqual({player1: false, player2: true});
//   expect(game.attack("name2", 1, 9)).toBe(-1);
//   expect(game.getQueue()).toEqual({player1: true, player2: false});
//   expect(game.attack("name1", 9, 8)).toBe(0);
//   expect(game.attack("name1", 9, 9)).toBe(2);
// });

// test('Game with AI', () => {
//   const game = ship.gameBattleShip("name1", "name2");
//   const emptyBoard = [
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], 
//   ];
//   const fullBoard = [
//     ["ship", "ship", "null", "null", "null", "ship", "ship", "ship", "ship", "ship"], // 0
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], // 1
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], // 2
//     ["null", "null", "ship", "null", "null", "null", "null", "null", "null", "null"], // 3
//     ["null", "null", "ship", "null", "null", "null", "null", "null", "null", "null"], // 4
//     ["null", "null", "ship", "null", "null", "null", "null", "null", "null", "null"], // 5
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"], // 6
//     ["null", "null", "null", "ship", "ship", "ship", "ship", "null", "null", "ship"], // 7
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "ship"], // 8
//     ["null", "null", "null", "null", "null", "null", "null", "null", "null", "ship"], // 9
//   ];
// //     0       1       2       3       4       5       6       7       8       9
//   expect(game.readyGame()).toBe(false);
//   expect(game.getBoards("name1")).toEqual({myBoard: emptyBoard, enemyBoard: emptyBoard});
//   expect(() => game.placementShip("name1", 0, 0, 2, 'horizontally')).not.toThrow();
//   expect(() => game.placementShip("name1", 2, 3, 3, 'vertically')).not.toThrow();
//   expect(() => game.placementShip("name1", 9, 7, 3, 'vertically')).not.toThrow();
//   expect(() => game.placementShip("name1", 3, 7, 4, 'horizontally')).not.toThrow();
//   expect(() => game.placementShip("name1", 5, 0, 5, 'horizontally')).not.toThrow();

//   expect(game.readyGame()).toBe(false);
//   expect(game.getBoards("name1")).toEqual({myBoard: fullBoard, enemyBoard: emptyBoard});

//   expect(() => game.placementShip("name2", 0, 0, 2, 'horizontally')).not.toThrow();
//   expect(() => game.placementShip("name2", 2, 3, 3, 'vertically')).not.toThrow();
//   expect(() => game.placementShip("name2", 9, 7, 3, 'vertically')).not.toThrow();
//   expect(() => game.placementShip("name2", 3, 7, 4, 'horizontally')).not.toThrow();
//   expect(() => game.placementShip("name2", 5, 0, 5, 'horizontally')).not.toThrow();

//   expect(game.readyGame()).toBe(true);
//   expect(game.getBoards("name2")).toEqual({myBoard: fullBoard, enemyBoard: emptyBoard});
//   let result = -1; 
//   for (let i = 0; i < 100; i++) {
//     if (result == -1) {
//       expect(game.getQueue()).toEqual({player1: true, player2: false});
//       expect(() => game.attack("name1", 0, 1)).not.toThrow();
//     };
//     result = game.ai("name2");
//   };

// });
