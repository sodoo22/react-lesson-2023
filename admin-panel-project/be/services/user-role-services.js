import { pool } from "../config/mysql-config.js";

export async function getUserRole() {
  const [rows] = await pool.query(
    `select user_role_id as id, user_role_name from user_role`
  );
  console.log(rows);
  return rows;
}

export async function getMaxNo() {
  const [row] = await pool.query(
    "select max(user_role_id) as max from user_role"
  );
  return row[0];
}

export async function addUserRole(userRoleName) {
  const query = `INSERT INTO user_role (user_role_name) VALUES(?)`;
  const [rows] = await pool.query(query, [userRoleName]);
  return rows;
}
