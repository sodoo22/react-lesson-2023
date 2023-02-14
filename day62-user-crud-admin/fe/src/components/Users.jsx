import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function Users() {
  const URL = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users Page</h1>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <table>
            <thead>
              <tr>
                <th>First Namme</th>
                <th>Last Namme</th>
                <th>Email</th>
                <th>Address</th>
                <th>Roles</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.role.name}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </div>
  );
}
