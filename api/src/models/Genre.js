const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Genre', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoincrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    timestamps: false,
  });
};