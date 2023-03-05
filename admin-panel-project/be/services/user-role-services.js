import { pool } from "../config/mysql-config.js";

export async function getUserRole() {
  const [rows] = await pool.query(
    `select user_role_id as id, user_role_name from user_role`
  );
  console.log(rows);
  return rows;
}

export async function addUserRole(userRoleName) {
  const query = `INSERT INTO user_role (user_role_name) VALUES(?)`;
  const [rows] = await pool.query(query, [userRoleName]);
  return rows;
}

export async function deleteUserRole(id) {
  const query = `DELETE FROM user_role WHERE user_role_id=${id}`;
  const [row] = await pool.query(query);
  return row;
}

export async function updateUserRole(id, userRoleName) {
  const query = `UPDATE user_role SET user_role_name="${userRoleName}" WHERE user_role_id=${id}`;
  const [row] = await pool.query(query);
  return row;
}

// export async function getMaxNo() {
//   const [row] = await pool.query(
//     "select max(user_role_id) as max from user_role"
//   );
//   return row[0];
// }
