const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database.js");

const Gig = db.define("gigs", {
  title: {
    type: DataTypes.STRING,
  },
  technologies: {
    type: DataTypes.STRING,
  },
  budget: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  contact_email: {
    type: DataTypes.STRING,
  },
});

module.exports = Gig;
