/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemons, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemons.sync({ force: true })
    .then(() => Pokemons.create(pokemon)));
  describe('/pokemons', () => {
    it('should get 200', () =>
      agent.get('/api/pokemons').expect(200)
    );
    it('should return a list of at least 40 pokemons', () =>
      agent.get('/api/pokemons').then((res) => {
      expect(res.body.length).to.be.gt(39)
      })
    );
  });
});
