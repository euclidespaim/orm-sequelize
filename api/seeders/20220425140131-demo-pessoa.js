"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "John Doe",
          ativo: true,
          email: "fulana@mail.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "José Pequeno",
          ativo: true,
          email: "jose@mail.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Maria Joaquina",
          ativo: true,
          email: "maria@mail.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "João da Silva",
          ativo: false,
          email: "joao@mail.com",
          role: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sergio Lopes",
          ativo: true,
          email: "sergio@mail.com",
          role: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pessoas", null, {});
  },
};
