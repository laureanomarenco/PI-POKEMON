const { DataTypes, Sequelize } = require('sequelize');
// We export de function that defines the model with the injection of sequelize.
module.exports = (sequelize) => {
  sequelize.define('pokemons', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    attack: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    velocity: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    imageDefault: {
      type: DataTypes.STRING,
    },
    imageBack: {
      type: DataTypes.STRING,
    },
    imageShiny: {
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
  });
};
