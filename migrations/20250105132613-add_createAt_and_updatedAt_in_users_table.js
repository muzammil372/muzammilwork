'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
   
    await queryInterface.addColumn('users', 'updatedAt', { type: Sequelize.DATE, allowNull: false });

    

    

     
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.removeColumn('users', 'createdAt');
      await queryInterface.removeColumn('users', 'updatedAt');

     
  }
};
