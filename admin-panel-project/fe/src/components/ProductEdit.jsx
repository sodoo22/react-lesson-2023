import { useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductEdit() {
  const URL = "http://localhost:8080/products";
  let data = useLocation();
  console.log("data", data.state.product);
  const [productsData, setProductsData] = useState();
  const [currentProduct, setCurrentProduct] = useState(data.state.product[0]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setProductsData(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const putData = {
      id: currentProduct.id,
      title: e.target.title.value,
      subTitle: e.target.subTitle.value,
      price: e.target.price.value,
      discount: e.target.discount.value,
      discription: e.target.discription.value,
      code: e.target.code.value,
      rating: e.target.rating.value,
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
    setProductsData(FETCHED_JSON.data);
    navigate("/");
  }

  function handleTitle(e) {
    setCurrentProduct({
      ...currentProduct,
      title: e.target.value,
    });
  }

  function handleSubTitle(e) {
    setCurrentProduct({
      ...currentProduct,
      subTitle: e.target.value,
    });
  }

  function handlePrice(e) {
    setCurrentProduct({
      ...currentProduct,
      price: e.target.value,
    });
  }

  function handleRating(e) {
    setCurrentProduct({
      ...currentProduct,
      rating: e.target.value,
    });
  }

  return (
    <div>
      <h1>Product Edit Page</h1>

      <form onSubmit={handleSubmit}>
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
          <Typography variant="h5">Edit Product</Typography>
          <TextField name="image" label="Image URL" variant="outlined" />
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            defaultValue={currentProduct.title}
            onChange={handleTitle}
          />
          <TextField
            name="subTitle"
            label="Sub Title"
            variant="outlined"
            defaultValue={currentProduct.subTitle}
            onChange={handleSubTitle}
          />
          <TextField
            name="price"
            label="Price"
            variant="outlined"
            defaultValue={currentProduct.price}
            onChange={handlePrice}
          />
          <TextField name="discount" label="Discount" variant="outlined" />
          <TextField
            name="discription"
            label="Discription"
            variant="outlined"
          />
          <TextField name="code" label="Code" variant="outlined" />
          <TextField name="hashtag" label="Hashtag" variant="outlined" />
          <TextField name="technology" label="Technology" variant="outlined" />
          <TextField
            name="rating"
            label="Rating"
            variant="outlined"
            defaultValue={currentProduct.rating}
            onChange={handleRating}
          />
          <Stack spacing={2} direction="row">
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button variant="outlined">Back</Button>
          </Stack>
        </Box>
      </form>
    </div>
  );
}
