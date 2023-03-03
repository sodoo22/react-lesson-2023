import { Button } from "@mui/material";
import UsersTable from "../components/UsersTable";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import UsersRoleTable from "../components/UsersRoleTable";

export default function UserRoleList() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Link to="/users-role/add" style={{ textDecoration: "none" }}>
        <Button variant="contained">New User Role</Button>
      </Link>

      <UsersRoleTable />
    </Box>
  );
}
