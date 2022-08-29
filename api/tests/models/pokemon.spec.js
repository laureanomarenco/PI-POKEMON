const { Pokemons, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemons.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemons.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemons.create({ name: 'Pikachu' });
      });});
    describe('all properties', () => {
      it('should work when pass a valid complete pokemon', () => {
        Pokemons.create({ 
          name: 'Pikachu',
          hp: 35,
          attack: 20,
          defense: 18,
          velocity: 36,
          height: 13,
          weight: 10,
          imageDefault: 'https://assets.puzzlefactory.pl/puzzle/254/191/original.jpg'
       });
      });
      it('should throw an error if some value is incorrect', (done) => {
        Pokemons.create({
          name: 'Pikachu',
          hp: 35,
          attack: 20,
          defense: 18,
          velocity: 'string',
          height: 13,
          weight: 10,
          imageDefault: 'https://assets.puzzlefactory.pl/puzzle/254/191/original.jpg'
        })
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
    });
  });
});
