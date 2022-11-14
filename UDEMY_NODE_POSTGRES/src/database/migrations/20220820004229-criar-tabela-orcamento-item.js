'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('orcamento-item', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      idOrcamento: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      idServico: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      idPrestador: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      desconto: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      acrescimo: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      valor: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      valorTotal: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      observacao: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      criadoEm:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      atualizadoEm:{
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('orcamento-item')
  }
};
