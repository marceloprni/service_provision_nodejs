'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     
      await queryInterface.bulkInsert('perfis', 

      [
        {
          descricao: "ADMIN"
        },
        {
          descricao: "MANAGER"
        },
        {
          descricao: "STANDARD"
        }
      ]);
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('perfis');
     
  }
};
