const Mysql = require("mysql");

// config mysql
const db = Mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "uas-backend",
});

// connect to mysql
db.connect((err) => {
  if (err) {
    throw err;
  }
});

module.exports = db;