const sql = require("../../tutorial/config/db.config.js");
// Create and Save a new Tutorial
exports.create = async (req, res) => {

  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  try {

   // await sql.connect(config);
    const insertQuery = `INSERT INTO tutorial (title,descr) VALUES ('${req.body.title}','${req.body.description}');` ; 
    console.log(' sql '+insertQuery) ;
    const result = await sql.query(insertQuery);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  } finally {
    //sql.close();
  }


};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

  // Execute a SELECT query  
  new sql.Request().query("SELECT * FROM tutorial", (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      res.send(result.recordset); // Send query result as response
      console.dir(result.recordset);
    }
  });
}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = async (req, res) => {

  try {

    // await sql.connect(config);
     const insertQuery = `DELETE FROM tutorial ;` ; 
     console.log(' sql '+insertQuery) ;
     const result = await sql.query(insertQuery);
     res.send(result);
   } catch (err) {
     console.error(err);
     res.status(500).send('Internal Server Error');
   } finally {
     //sql.close();
   }
 

};


// Find all published Tutorials
exports.lists1 = (req, res) => {
  // Execute a SELECT query  tutorial
  new sql.Request().query("SELECT * FROM person", (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      res.send(result.recordset); // Send query result as response
      console.dir(result.recordset);
    }
  });
}   