import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  //   port: "3307",
  password: "",
  database: "ecommerce",
});
