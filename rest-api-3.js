let express = require("express");
let app = express();
const bodyParser = require("body-parser");
let path = require("path");
let router = require("./routeHandler-5");

// todo -> this piece of code , let you parse the requested data in json format by using middleware function
app.use(express.json());

// todo -> middleware function
app.use(bodyParser.urlencoded({ extended: true }));

//todo -> then import 'routeHandler' to parent file and used that file using middleware functions
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("<h1>just hop onto /api/fruits ,this is landing page </h1>");
});

//todo -> array of object that we are sending
let fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "orange", color: "orange" },
];

//todo -> routing in url
app.get("/api/fruits", (req, res) => {
  let response = {
    message: `for more,goto /api/formresponse`,
    data: fruits.map((item) => item.name),
  };
  res.json(response.data + " --> " + response.message);
});

//todo -> make post request of having 'x' route name .

//todo -> (conditional) for more transparency if you really want to reflect your content in form jst change the routes of <form> tag in html file to '/api/formresponse' and duriing GET request send that html to '/api/formresponse' route .
app.get("/api/renderform", (req, res) => {
  res.sendFile(path.join(__dirname, "./rest-api-3.html"));
});

app.listen(3002);

//todo -> jst go to thunderclient and make a post request and enter the data in json inside body format and send it

//todo ______________________________________________________________________________________________________________

//todo -> to diffrentiate all the routes we uses a package or concept called 'Router' inbuilt fucntion of express
