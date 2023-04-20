let express = require("express");
let app = express();
const bodyParser = require("body-parser");

let path = require("path");

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

//rendering html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./rendering-file-2.html"));
});

// getting data from html form through POST
app.post("/api/response", (req, res) => {
  // let title = req
  res.send("done");
  console.log(`${req.body.name}`);
  console.log(`${req.body.email}`);
});
//todo -> at very fist it will render html file
//todo -> then html content
//todo -> it will read content of form by middleware function "bodyparser"
//todo -> shows how "app.use" middle ware is used
//todo ->  after form completion , if all goes well then it sends 'done' msg and navigates to
//todo -> '/api/response' and consoles the body of the form like email and name.

app.listen(3001);
