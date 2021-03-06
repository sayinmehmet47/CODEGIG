const express = require("express");
const sequelize = require("./config/database");
const gigs = require("./routes/gigs");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/gigs", gigs);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
