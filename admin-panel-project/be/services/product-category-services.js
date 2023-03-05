import { pool } from "../config/mysql-config.js";

export async function getProductCategory() {
  const [rows] = await pool.query(
    `select category_id as id, category_name, category_description from product_category`
  );
  console.log(rows);
  return rows;
}

export async function addProductCategory(categoryName, categoryDescription) {
  const query = `INSERT INTO product_category (category_name, category_description) VALUES(?,?)`;
  const [rows] = await pool.query(query, [categoryName, categoryDescription]);
  return rows;
}

export async function deleteProductCategory(id) {
  const query = `DELETE FROM product_category WHERE category_id=${id}`;
  const [row] = await pool.query(query);
  return row;
}
