import { pool } from "../config/mysql-config.js";

export async function getUsers() {
  const [rows] = await pool.query(
    `select user_id as id, first_name, last_name, birthdate, email, phone_number, address, user_role_id from user`
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
  const query = `INSERT INTO employees VALUES(?,?,?,?,?,?,?,?)`;
  const [rows] = await pool.query(query, [
    userId,
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
