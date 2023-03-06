import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCategoryTable() {
  const URL = "http://localhost:8080/product-category";
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchAllData();
  }, []); // ?????????????????????

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    // console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON);
  }

  async function handleDelete(id) {
    console.log(id);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON);
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "category_name", headerName: "Category Name", width: 130 },
    {
      field: "category_description",
      headerName: "Category Description",
      width: 160,
    },
    {
      field: "editDelete",
      headerName: "Edit / Delele",
      description: "Edit user or Delele user",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        // console.log(params.row.id);
        return (
          <Box width="100%">
            <Stack direction="row" spacing={2}>
              <Link
                to={`/product-category/edit/${params.row.id}`}
                state={{
                  user: users.filter((p) => p.id === params.row.id),
                }}
                style={{ textDecoration: "none" }}
              >
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
      <Typography variant="h5">Prodcut Category List</Typography>
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
