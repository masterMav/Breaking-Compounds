const express = require("express");
const db = require("./models");
const compoundRoutes = require("./routes/compoundRoutes");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// routes
app.use("/compounds", compoundRoutes);

db.sequelize.sync({ alter: true }).then((req) => {
  app.listen("5000", () => {
    console.log("Server started on port 5000.");
  });
});
