const express = require("express");
const Gig = require("../models/Gig");
const router = express.Router();

router.get("/", function (req, res) {
  Gig.findAll()
    .then((gigs) => console.log(gigs))
    .catch((err) => console.log(err));
});

module.exports = router;
