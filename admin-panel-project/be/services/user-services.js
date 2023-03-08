import { pool } from "../config/mysql-config.js";

export async function getUsers() {
  const [rows] = await pool.query(
    `select u.user_id as id, u.first_name, u.last_name, u.birthdate, u.email, u.phone_number, u.address, ur.user_role_name  from user u inner join user_role ur on ur.user_role_id = u.user_role_id`
  );
  console.log(rows);
  return rows;
}

export async function getMaxNo() {
  const [row] = await pool.query("select max(user_id) as max from user");
  return row[0];
}

export async function addUser(
  firstName,
  lastName,
  birthDate,
  email,
  phoneNumber,
  address,
  userRoleId
) {
  const query = `INSERT INTO user(first_name, last_name, birthdate, email, phone_number, address, user_role_id) VALUES(?,?,?,?,?,?,?)`;
  const [rows] = await pool.query(query, [
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    address,
    userRoleId,
  ]);
  return rows;
}

export async function deleteUser(id) {
  const query = `DELETE FROM user WHERE user_id=${id}`;
  const [row] = await pool.query(query);
  return row;
}
