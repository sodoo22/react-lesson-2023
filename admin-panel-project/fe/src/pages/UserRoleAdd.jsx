import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserRoleAdd() {
  const URL = "http://localhost:8080/user-role";
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL); // Response
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success, data: [{id: ...}]}
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      userRoleName: e.target.roleName.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    // console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
    navigate("/users-role");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            margin: "0 auto",
            maxWidth: 400,
            textAlign: "left",
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5">Add User Role</Typography>
          <TextField name="roleName" label="Role Name" variant="outlined" />

          <Stack sx={{ justifyContent: "center" }} spacing={2} direction="row">
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
        </Box>
      </form>
    </div>
  );
}
