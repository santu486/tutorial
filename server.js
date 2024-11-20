const express = require("express");
const cors = require("cors");
// const route = require("../tutorial/routes/tutorials.route.js");
const router = require("../tutorial/routes/tutorials.route.js");
const app = express();

require("dotenv").config();
//console.log(process.env); // Should display all environment variables


// parse   requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// set port, listen for requests
const PORT = 8080;
console.log("router "+router)
    // simple route
    app.get("/hello", (req, res) => {
      res.json({ message: "Welcome to node js application.", tets : "c"  });
    });

app.use('/api', router);

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. ${process.env.SERVER} `);
  console.log(`Server is running on port ${PORT}. ${process.env.USER} `);
  console.log(`Server is running on port ${PORT}. ${process.env.PASSWORD} `);
  console.log(`Server is running on port ${PORT}. ${process.env.DATABASE} `);
});
