// Set up MySQL connection.
var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "alphaCoder90",
  database: "burgers_db"
});
}
  // jawsdb info
  // host: "ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  // port: 3306,
  // user: "ncyc0reyu2j5q6vq",
  // password: "g8kumct43n36bn4y",
  // database: "tybi410szf0bgs4p"

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
