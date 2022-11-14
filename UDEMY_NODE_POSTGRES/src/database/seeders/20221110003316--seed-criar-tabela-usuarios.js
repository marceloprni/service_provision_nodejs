'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', 

      [
        {
          nome: "administrador",
          email: "administrador@gmail.com",
          senha: "b075703a9b30ddc015c6592c76520562",
          idPerfil: 1,
          dataInativacao: null
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios');
  }
};
