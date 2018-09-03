import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(`${__dirname}/client/build`));

app.get("/test", (req, res) => {
  res.json({
    msg: "funbox-test-work start - OK"
  });
});

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(port, () => {
  console.log(`funbox-test-work start - OK on port ${port}`);
});
