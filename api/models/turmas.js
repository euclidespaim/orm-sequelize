'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
 
    static associate(models) {
      // define association here
      Turmas.hasMany(models.Matriculas, {
        foreignKey: 'turma_id',
      })
      Turmas.belongsTo(models.Pessoas, {
        foreignKey: 'docente_id',
      })
      Turmas.belongsTo(models.Niveis, {
        foreignKey: 'nivel_id'
      })
    }
  } { paranoid: true}

  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Turmas',
  });
  return Turmas;
};