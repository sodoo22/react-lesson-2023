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

export default function UserAdd() {
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
    setUsers(FETCHED_JSON);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      birthDate: e.target.birthDate.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      address: e.target.address.value,
      userRoleId: e.target.userRoleId.value,
      // password: e.target.password.value,
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
    navigate("/users");
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
          <Typography variant="h5">New User</Typography>
          <TextField name="firstName" label="First Name" variant="outlined" />
          <TextField name="lastName" label="Last Name" variant="outlined" />
          <TextField name="birthDate" label="Birthdate" variant="outlined" />
          <TextField name="email" label="E-Mail" variant="outlined" />
          <TextField
            type="number"
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
          />
          <TextField name="address" label="Address" variant="outlined" />
          <select name="userRoleId" id="">
            {users &&
              users.map((role, index) => {
                return (
                  <option key={index} value={role.id}>
                    {role.user_role_name}
                  </option>
                );
              })}
          </select>
          {/* <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="userRoleId"
            >
              <FormControlLabel value="1" control={<Radio />} label="Admin" />
              <FormControlLabel value="2" control={<Radio />} label="User" />
            </RadioGroup>
          </FormControl> */}
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Disabled
            </FormLabel>
            <FormControlLabel control={<Checkbox />} />
          </FormGroup>
          <TextField name="password" label="Password" variant="outlined" />
          <Stack spacing={2} direction="row">
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button variant="outlined">Reset</Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
        </Box>
      </form>
    </div>
  );
}
