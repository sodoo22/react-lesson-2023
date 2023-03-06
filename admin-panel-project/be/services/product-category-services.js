import { pool } from "../config/mysql-config.js";

export async function getProductCategory() {
  const [rows] = await pool.query(
    `select category_id as id, category_name, category_description from product_category`
  );
  console.log(rows);
  return rows;
}

export async function addProductCategory(categoryName, categoryDescription) {
  if (categoryName) {
    const query = `INSERT INTO product_category (category_name, category_description) VALUES(?,?)`;
    const [rows] = await pool.query(query, [categoryName, categoryDescription]);
    return rows;
  } else {
    return [];
  }
}

export async function deleteProductCategory(id) {
  const query = `DELETE FROM product_category WHERE category_id=${id}`;
  const [row] = await pool.query(query);
  return row;
}

export async function updateProductCategory(
  id,
  categoryName,
  categoryDescription
) {
  const query = `UPDATE product_category SET category_name="${categoryName}", category_description="${categoryDescription}" WHERE category_id=${id}`;
  const [row] = await pool.query(query);
  return row;
}
