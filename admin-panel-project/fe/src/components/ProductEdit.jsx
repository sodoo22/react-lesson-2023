import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function ProductEdit() {
  const data = useParams();
  console.log(data);

  async function handleSubmit(e) {
    e.preventDefault();
    // const postData = {
    //   title: e.target.title.value,
    //   subTitle: e.target.subTitle.value,
    //   price: e.target.price.value,
    //   discount: e.target.discount.value,
    //   discription: e.target.discription.value,
    //   code: e.target.code.value,
    //   rating: e.target.rating.value,
    // };

    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(postData),
    // };

    // const FETCHED_DATA = await fetch(URL, options);
    // const FETCHED_JSON = await FETCHED_DATA.json();
    // // console.log(FETCHED_JSON);
    // setUsers(FETCHED_JSON.data);
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
