//todo -> make another file called 'routecontroller' which mainly control and showcase all the routes and its callback function

let registredUser = (req, res) => {
  //todo -> first get or request all the data from the form itself.
  let userName = req.body.name;
  let userMail = req.body.email; // use 'email' instead of 'userMail'
  let fName = req.body.fruitname; // use 'fruitname' instead of 'fName'

  console.log(userName + "  " + userMail + "  " + fName);

  //todo -> pass that requested data in json object with "success" msg.
  res.json({
    success: true,
    name: userName,
    email: userMail,
    fruitname: fName,
  });
};

//todo -> export the  'routecontroller'

module.exports = registredUser;
