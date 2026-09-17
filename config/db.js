import mysql from 'mysql2/promise.js';

const pool = mysql.createPoolCluster({
  host: "localhost",
  user: "admin",
  password: "",
  database: "Librarydb"
})

export default pool;