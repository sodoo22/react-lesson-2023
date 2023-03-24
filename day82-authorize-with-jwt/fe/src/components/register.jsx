import { useEffect, useState } from "react";

export default function Register() {
  const ROLE_URL = "http://localhost:8080/admin/role/list";
  const REGISTER_URL = "http://localhost:8080/admin/register";

  const initialFormData = Object.freeze({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    userRole: 0,
    address: "",
  });

  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    fetchRoles();
  }, [formData]);

  const fetchRoles = async () => {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    console.log(dataForm);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const FETCHED_DATA = await fetch(REGISTER_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON.data);
  };

  return (
    <div>
      <h1>Regiser</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "end",
          width: 300,
        }}
      >
        <label htmlFor="firstName">
          {""}
          First Name:
          <input type="text" name="firstName" onChange={handleChange} />
        </label>
        <label htmlFor="firstName">
          {""}
          Last Name:
          <input type="text" name="lastName" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          {""}
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          {""}
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          {""}
          Phone Number:
          <input type="number" name="phoneNumber" onChange={handleChange} />
        </label>
        <label htmlFor="address">
          {""}
          Address:
          <textarea type="te" name="address" onChange={handleChange} />
        </label>
        <label htmlFor="roles">
          Roles:
          <select name="userRole" onChange={handleChange}>
            {roles &&
              roles.map((role, index) => (
                <option key={index} value={role._id} id={role._id}>
                  {role.name}
                </option>
              ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
