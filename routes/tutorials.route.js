const tutorialController = require("../controllers/tutorial.controller.js");
const express = require("express");
const router = express.Router();
const sql = require("../../tutorial/config/db.config.js");


// Home page route.
router.get("/home", function (req, res) {
  res.send("Wiki home page "+tutorialController);
});

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});


// Create a new Tutorial
router.post("/", tutorialController.create);


// Retrieve all tutorialController
router.get("/", tutorialController.findAll);


// Retrieve all published tutorialController
// router.get("/published", tutorialController.findAllPublished);


// Retrieve a single Tutorial with id
// router.get("/:id", tutorialController.findOne);


// Update a Tutorial with id
router.put("/:id", tutorialController.update);



// Delete a Tutorial with id
router.delete("/:id", tutorialController.delete);


// Delete all tutorialController
 router.delete("/", tutorialController.deleteAll);


// Define route for fetching data from SQL Server
router.get("/lists", (request, response) => {
  // Execute a SELECT query
  new sql.Request().query("SELECT * FROM person", (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      response.send(result.recordset); // Send query result as response
      console.dir(result.recordset);
    }
  });
});



// Define route for fetching data from SQL Server
  router.get("/lists1", tutorialController.lists1);

module.exports = router;