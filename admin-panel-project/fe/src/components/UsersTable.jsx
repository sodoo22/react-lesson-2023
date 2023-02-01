import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function UsersTable() {
  const URL = "http://localhost:8080/users";
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL); // Response
    const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success, data: [{id: ...}]}
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }
  console.log(users);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      type: "number",
      width: 110,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: ({ row: { access } }) => {
        return (
          <Box width="100%">
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="success">
                Edit
              </Button>
              <Button variant="outlined" color="error">
                Delete
              </Button>
            </Stack>
          </Box>
        );
      },
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      {users && (
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
}
