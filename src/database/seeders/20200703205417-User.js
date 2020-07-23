'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Jane Doe',
          email: 'janedoe@example.com',
          senha: '12233',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jon Doe',
          email: 'jondoe@example.com',
          senha: '123456',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Users', null, {}),
};
