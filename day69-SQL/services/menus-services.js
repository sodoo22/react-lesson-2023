import { pool } from "../config/mysql-config.js";

export async function getParentMenus() {
  const [rows] = await pool.query(
    `select * from menus WHERE parent_id is NULL;`
  );
  console.log(rows);
  return rows;
}

export async function getChildenMenu(parentId) {
  const [rows] = await pool.query(`select * from menus WHERE parent_id=?;`, [
    parentId,
  ]);
  //   console.log(rows);
  return rows;
}
