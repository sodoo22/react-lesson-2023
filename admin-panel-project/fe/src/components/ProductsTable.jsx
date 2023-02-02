import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductsTable() {
  const URL = "http://localhost:8080/products";
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  async function handleDelete(id) {
    console.log(id);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "image", headerName: "Image", width: 130 },
    { field: "title", headerName: "Title", width: 200 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 80,
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      width: 70,
    },
    {
      field: "actions",
      headerName: "Actions",
      description: "Edit user or Delele user",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        // console.log(params.row.id);
        return (
          <Box width="100%">
            <Stack direction="row" spacing={2}>
              <Link to={`/products/edit/${params.row.id}`}>
                <Button variant="outlined" color="success">
                  Edit
                </Button>
              </Link>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  handleDelete(params.row.id);
                  // console.log(params.row.id);
                }}
              >
                Delete
              </Button>
            </Stack>
          </Box>
        );
      },
    },
  ];

  return (
    <Box style={{ height: 640, width: "100%", textAlign: "left" }}>
      <Typography variant="h5">Products</Typography>
      {users && (
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      )}
    </Box>
  );
}
