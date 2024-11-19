const sql = require("mssql");
// SQL Server configuration
require("dotenv").config();
const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: "webapp486.database.windows.net", // e.g., localhost or IP
    database: process.env.DATABASE,
    options: {
        encrypt: true, // Use true for Azure
        trustServerCertificate: true // Change to false for production
    }

};

sql.connect(config)
    .then(pool => {
        console.log("Connected to SQL Server");
        return pool;
    })
    .catch(err => {
        console.error("Connection Error: ", err);
    });
module.exports = sql;
