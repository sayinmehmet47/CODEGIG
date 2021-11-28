const { Sequelize } = require("sequelize");

module.exports = new Sequelize("postgres", "postgres", "123456789", {
  host: "localhost",
  dialect: "postgres",
});
