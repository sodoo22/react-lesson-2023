import { pool } from "../config/mysql-config.js";

export async function getEmployees() {
  const [rows] = await pool.query(
    `select * from employees order by emp_no desc limit 10`
  );
  console.log(rows);
  return rows;
}

export async function getMaxNo() {
  const [row] = await pool.query("select max(emp_no) as max from employees");
  return row[0];
}

export async function hireEmployee(
  empNo,
  birthDate,
  firstName,
  lastName,
  gender,
  hireDate
) {
  // const query = ` INSERT INTO employees VALUES(${empNo}, ${birthDate}, ${firstName}, 'McKay', 'M', '2000-01-01')`;
  const query = ` INSERT INTO employees VALUES(?,?,?,?,?,?)`;
  const [rows] = await pool.query(query, [
    empNo,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate,
  ]);
  return rows;
}

export async function updateEmployee(empNo, lastName, gender) {
  const query = `UPDATE employees SET last_name='${lastName}', gender='${gender}' WHERE emp_no=${empNo}`;
  const [row] = await pool.query(query);

  return row;
}

export async function fireEmployee(empNo) {
  const query = `DELETE FROM employees WHERE emp_no=${empNo}`;
  const [row] = await pool.query(query);

  return row;
}
