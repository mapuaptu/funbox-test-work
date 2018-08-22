const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.static(`${__dirname}/client/build/`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.get("/test", (req, res) => {
  res.json({
    msg: "TEST OK"
  });
});

app.listen(port, () => {
  console.log(`app start at port ${port}`);
});
