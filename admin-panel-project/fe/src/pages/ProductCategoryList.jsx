import { Button } from "@mui/material";
import UsersTable from "../components/UsersTable";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import UsersRoleTable from "../components/UsersRoleTable";
import ProductCategoryTable from "../components/ProductCategoryTable";

export default function ProductCategoryList() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Link to="/product-category/add" style={{ textDecoration: "none" }}>
        <Button variant="contained">New Category Name</Button>
      </Link>

      <ProductCategoryTable />
    </Box>
  );
}
