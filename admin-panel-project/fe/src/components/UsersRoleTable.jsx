import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UsersRoleTable() {
  const URL = "http://localhost:8080/user-role";
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []); // ?????????????????????????????????????

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
        userRoleId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    // const FETCHED_JSON = await FETCHED_DATA.json();
    // console.log(FETCHED_JSON);
    // setUsers(FETCHED_JSON.data);
    // navigate("/users-role");
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "user_role_name", headerName: "Role Name", width: 130 },
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
                to={`/users-role/edit/${params.row.id}`}
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
      <Typography variant="h5">Users Role List</Typography>
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
