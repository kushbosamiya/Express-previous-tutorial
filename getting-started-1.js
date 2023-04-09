let express = require("express");
let app = express();

// routing

app.get("/", (req, res) => {
  // res.send("hello");
  res.send("<h1>this is a landing page , lets get started</h1>");
});
app.get("/about", (req, res) => {
  // res.send("hello");
  res.send("<h1>this is a about page , lets get started</h1>");
});

app.listen(3000);
