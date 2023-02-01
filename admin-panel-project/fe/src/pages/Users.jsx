import { Button } from "@mui/material";
import UsersTable from "../components/UsersTable";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ListItem from "@mui/material/ListItem";

export default function Users() {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography variant="h5">Users</Typography>
      <Button to="/user/add" variant="contained">
        NEW
      </Button>

      <UsersTable />
    </Box>
  );
}
