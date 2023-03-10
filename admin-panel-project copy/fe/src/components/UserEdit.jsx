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
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function UserEdit() {
  const URL = "http://localhost:8080/users";
  let data = useLocation();
  console.log("Data from Link", data.state.user[0]);
  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState(data.state.user[0]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const putData = {
      id: currentUser.id,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      age: e.target.age.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      userRole: e.target.userRole.value,
      password: e.target.password.value,
    };

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    // console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
    navigate("/users");
  }

  function handleFirstName(e) {
    setUsers({
      ...currentUser,
      firstName: e.target.value,
    });
  }

  function handleLastName(e) {
    setUsers({
      ...currentUser,
      lastName: e.target.value,
    });
  }

  function handleAge(e) {
    setUsers({
      ...currentUser,
      age: e.target.value,
    });
  }

  function handlePhoneNumber(e) {
    setUsers({
      ...currentUser,
      phoneNumber: e.target.value,
    });
  }

  function handleEmail(e) {
    setUsers({
      ...currentUser,
      email: e.target.value,
    });
  }

  function handlePassword(e) {
    setUsers({
      ...currentUser,
      password: e.target.value,
    });
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
          <Typography variant="h5">Edit User</Typography>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            defaultValue={currentUser.firstName}
            onChange={handleFirstName}
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            defaultValue={currentUser.lastName}
            onChange={handleLastName}
          />
          <TextField
            name="age"
            label="Age"
            variant="outlined"
            defaultValue={currentUser.age}
            onChange={handleAge}
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            defaultValue={currentUser.phoneNumber}
            onChange={handlePhoneNumber}
          />
          <TextField
            name="email"
            label="E-Mail"
            variant="outlined"
            defaultValue={currentUser.email}
            onChange={handleEmail}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="userRole"
            >
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
              <FormControlLabel value="user" control={<Radio />} label="User" />
            </RadioGroup>
          </FormControl>
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Disabled
            </FormLabel>
            <FormControlLabel control={<Checkbox />} />
          </FormGroup>
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            onChange={handlePassword}
          />
          <Stack spacing={2} direction="row">
            <Button type="submit" variant="contained">
              Edit
            </Button>
            <Button variant="outlined">Cancel</Button>
          </Stack>
        </Box>
      </form>
    </div>
  );
}
