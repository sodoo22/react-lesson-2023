import { Button } from "@mui/material";
import UsersTable from "../components/UsersTable";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";

export default function Users() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Link to="/users/add" style={{ textDecoration: "none" }}>
        <Button variant="contained">New User</Button>
      </Link>

      <UsersTable />
    </Box>
  );
}
