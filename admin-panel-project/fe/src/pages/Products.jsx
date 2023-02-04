import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ProductsTable from "../components/ProductsTable";

export default function Products({ form, setForm }) {
  return (
    <div>
      <Link to="/products/add" style={{ textDecoration: "none" }}>
        <Button variant="contained">New Product</Button>
      </Link>
      <ProductsTable form={form} setForm={setForm} />
    </div>
  );
}
