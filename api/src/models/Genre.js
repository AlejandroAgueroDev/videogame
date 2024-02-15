const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Genre', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};