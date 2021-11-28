const express = require("express");
const Gig = require("../models/Gig");
const router = express.Router();

router.get("/", function (req, res) {
  Gig.findAll()
    .then((gigs) => console.log(gigs))
    .catch((err) => console.log(err));
});

router.get("/add", function (req, res) {
  Gig.create({
    title: "Mehmet",
    technologies: "NodeJS,MongoDb,PostgrSql",
    description:
      "Note, from the usage of await in the snippet above, that save is an asynchronous method. In fact, almost every Sequelize method is asynchronous; build is one of the very few exceptions.",
    contact_email: "sayinmehmet47@gmail.com",
  })
    .then((gigs) => res.redirect("/gigs"))
    .catch((err) => console.log(err));
});

module.exports = router;
