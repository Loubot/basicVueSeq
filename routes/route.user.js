const { authJwt } = require("../middleware");
const users = require("../controllers/controller.users.js");

var router = require("express").Router();
const controller = require("../controllers/controller.users");

module.exports = app => {


app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.get("/api/test/all", controller.allAccess);

app.get(
  "/api/test/user",
  [authJwt.verifyToken],
  controller.userBoard
);

  // Create a new user
  router.post("/", users.create);

  // Retrieve all users
  router.get("/", users.findAll);

  // // Retrieve all published users
  // router.get("/published", users.findAllPublished);

  // // Retrieve a single user with id
  // router.get("/:id", users.findOne);

  // // Update a user with id
  // router.put("/:id", users.update);

  // // Delete a user with id
  // router.delete("/:id", users.delete);

  // // Delete all users
  // router.delete("/", users.deleteAll);

  app.use('/api/users', router);
};