import {
  Grid,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserRegisterForm() {
  const URL = "http://localhost:8080/register";
  const ROLE_URL = "http://localhost:8080/users/roles";

  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(1);

  useEffect(() => {
    fetchRoles();
  }, []);

  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    // console.log(FETCHED_JSON);
    setRoles(FETCHED_JSON.data);
    // console.log(roles);
  }

  function handleSelectChange(e) {
    console.log(e.target.value);
    setCurrentRole(e.target.value);
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target);

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
      role: currentRole,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    if (FETCHED_JSON.status === "success") {
      console.log("TEST");
      navigate("/users");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="firtName"
              name="firstName"
              variant="filled"
              size="small"
              label="First Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastName"
              name="lastName"
              variant="filled"
              size="small"
              label="Last Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              variant="filled"
              size="small"
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              variant="filled"
              size="small"
              label="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirm-password"
              name="confirm"
              variant="filled"
              size="small"
              label="Confirm Password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              variant="filled"
              size="small"
              label="Address"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>User Role</InputLabel>
            <Select
              id="role-selector"
              value={currentRole}
              label="Roles"
              onChange={handleSelectChange}
            >
              {roles &&
                roles.map((role, index) => {
                  return (
                    <MenuItem key={index} value={role.id}>
                      {role.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
