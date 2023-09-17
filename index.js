const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Person = require("./Models/Person");
const Person_C = require("./Controller/person-contoller");
const app = express();
const port = process.env.PORT || 8000;
const conString = process.env.URI;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose
  .connect(conString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => {
      console.log(`Express App listening on  ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(morgan("dev"));

const person_route = require("./Routes/persons-route");
app.use("/api", person_route);

app.use("/", (req, res) => {
  res.redirect("/api");
});
