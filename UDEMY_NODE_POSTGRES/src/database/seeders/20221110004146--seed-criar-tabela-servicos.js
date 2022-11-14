'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('servicos', 

      [
        {
          descricao: "Pintura interna m2",
          valor: 100,
          observacao: "Feito com até 3 demões de tintas",
          
        },
        {
          descricao: "Pintura Externa m2",
          valor: 300,
          observacao: "Feito com até 3 demões de tintas",
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicos');
  }
};
