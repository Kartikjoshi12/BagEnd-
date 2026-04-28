const express = require("express");
const app = express();
const router = express.Router();

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);
app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get("/", (req, res) => {
  console.log("Received a request to the users path");
  res.send(
    ' This is the /users path from router file -> you can use "/users/:id" , "/contact" , "/about" to access a specific user',
  );
});

router.get("/about", (req, res) => {
  console.log("Received a request to the about path");
  res.send("This is the /about path");
});

router.get("/contact", (req, res) => {
  console.log("Received a request to the contact path");
  res.send("This is the /contact path");
});


 //---------------all methods for /:id path----------------

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send("GET id: " + req.params.id+ " name: " + req.user.name);
  })
  .put((req, res) => {
    res.send("PUT id: " + req.params.id);
  })
  .delete((req, res) => {
    res.send("DELETE id: " + req.params.id);
  })
  .patch((req, res) => {
    res.send("PATCH id: " + req.params.id);
  })
  .post((req, res) => {
    res.send("POST id: " + req.params.id);
  });

//----------------

const users = [
  {  name: "Alice" },
  {  name: "Bob" },
  {  name: "Charlie" },
];

router.param("id", (req, res, next, id) => {
  console.log("Param middleware called with id: " + id);
  req.user  = users[parseInt(id) - 1];
  next();
});


module.exports = router;