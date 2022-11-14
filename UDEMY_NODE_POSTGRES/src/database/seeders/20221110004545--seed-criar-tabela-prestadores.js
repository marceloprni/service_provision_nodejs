'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('prestadores', 

      [
        {
          nome: "Silvio Santos",
          email: "silva@gmail.com",
          cpfouCnpj: "98765432169",
          telefone: "1187963214",
          observacao: "Faz tudo" 
        },
        {
          nome: "Luiza de Nero",
          email: "luiza@gmail.com",
          cpfouCnpj: "98765432134",
          telefone: "1187963987",
          observacao: "Faz tudo" 
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicos');
  }
};
