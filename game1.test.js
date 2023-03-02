const game = require('./game');

describe('testing ship', () => {

  let ship;

beforeEach(() => {
  ship = game.ship(4);
});

  test('create ship', () => {
    //expect(() => game.ship(0)).toThrow('Can\'t create ship of size 0');
    //expect(() => game.ship(6)).toThrow('Can\'t create ship of size 6');
    expect(Object.hasOwn(ship, 'hit')).toBe(true);
    expect(Object.hasOwn(ship, 'isSunk')).toBe(true);
  });

  test('testing ship.hit()', () => {
    for (let i = 1; i < 8; i++) {
      if (i <= 4) {
        expect(ship.hit()).toBe(i);
        expect(ship.isSunk()).toBe(i == 4?true:false);
      } else {
        expect(ship.hit()).toBe(4);
        expect(ship.isSunk()).toBe(true);
      }
    }
  });
});