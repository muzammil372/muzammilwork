'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    
    static associate(models) {
     user.hasMany(models.Role,{
      as:"Role",
      foreignKey:"user_id"
     })
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};