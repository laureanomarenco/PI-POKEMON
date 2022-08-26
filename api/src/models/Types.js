const { DataTypes } = require("sequelize");
// We export de function that defines the model with the injection of sequelize.
module.exports = (sequelize) => {
  sequelize.define("types", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
