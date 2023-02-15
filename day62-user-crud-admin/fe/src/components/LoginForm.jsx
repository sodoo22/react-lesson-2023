import {
  Grid,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function LoginForm() {
  const URL = "http://localhost:8080/login";
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
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

    if (FETCHED_JSON.status === "success") {
      toast.success("You are approved to login");
      navigate("/users");
    } else {
      toast.error(FETCHED_JSON.status);
    }

    console.log(FETCHED_JSON);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              type="email"
              variant="filled"
              size="small"
              label="Email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="password"
              type="password"
              name="password"
              variant="filled"
              size="small"
              label="Password"
            />
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
