let express = require("express");

let registeredUser = require("./routecontroller-4");

let router = express.Router();

//todo -> make another file called 'routeHandler' which handle routes of 'routecontroller' by package or concept called 'Router' and then we target mentioned request like 'get , post, put,delete'

router.route("/formresponse").post(registeredUser);

//todo -> then export 'routeHandler' function
module.exports = router;
