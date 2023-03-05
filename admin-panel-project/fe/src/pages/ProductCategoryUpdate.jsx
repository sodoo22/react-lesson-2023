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

export default function ProductCategoryUpdate() {
  const URL = "http://localhost:8080/product-category";
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
    setUsers(FETCHED_JSON);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const putData = {
      id: currentUser.id,
      categoryName: e.target.categoryName.value,
      categoryDescription: e.target.categoryDescription.value,
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
    navigate("/product-category");
  }

  function handleRoleName(e) {
    setUsers({
      ...currentUser,
      categoryName: e.target.value,
      categoryDescription: e.target.value,
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
          <Typography variant="h5">Product Category Edit</Typography>
          <TextField
            name="categoryName"
            label="Category Name"
            variant="outlined"
            defaultValue={currentUser.category_name}
            onChange={handleRoleName}
          />
          <TextField
            name="categoryDescription"
            label="Category Description"
            variant="outlined"
            defaultValue={currentUser.category_description}
            onChange={handleRoleName}
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
