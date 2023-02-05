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
import { Link, useNavigate } from "react-router-dom";

export default function ProductAdd() {
  const URL = "http://localhost:8080/products";
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
      productImageUrl: e.target.productImageUrl.value,
      title: e.target.title.value,
      subTitle: e.target.subTitle.value,
      price: e.target.price.value,
      discount: e.target.discount.value,
      discription: e.target.discription.value,
      code: e.target.code.value,
      rating: e.target.rating.value,
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
    navigate("/");
  }

  return (
    <div>
      <form action="localhost:3000" onSubmit={handleSubmit}>
        <Box
          sx={{
            margin: "0 auto",
            maxWidth: 600,
            textAlign: "left",
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5">New Product</Typography>
          <TextField
            name="productImageUrl"
            label="Image URL"
            variant="outlined"
          />
          <TextField name="title" label="Title" variant="outlined" />
          <TextField name="subTitle" label="Sub Title" variant="outlined" />
          <TextField name="price" label="Price" variant="outlined" />
          <TextField name="discount" label="Discount" variant="outlined" />
          <TextField
            name="discription"
            label="Discription"
            variant="outlined"
          />
          <TextField name="code" label="Code" variant="outlined" />
          <TextField name="hashtag" label="Hashtag" variant="outlined" />
          <TextField name="technology" label="Technology" variant="outlined" />
          <TextField name="rating" label="Rating" variant="outlined" />
          <Stack spacing={2} direction="row">
            {/* <Link to={"/"}> */}
            <Button type="submit" variant="contained">
              Save
            </Button>
            {/* </Link> */}
            <Button variant="outlined">Back</Button>
          </Stack>
        </Box>
      </form>
    </div>
  );
}
