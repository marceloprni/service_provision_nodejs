'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', 

      [
        {
          nome: "Nilza da Silva",
          email: "nilza@gmail.com",
          cpfOuCnpj: "36598745855",
          telefone: "1196357845",
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes');
  }
};
