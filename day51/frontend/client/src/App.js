import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import UpdateForm from "./components/UpdateForm";

const GET_DATA_URL = "http://localhost:8080/data";
const DELETE_DATA_URL = "http://localhost:8080/data";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const FETCHED_DATA = await fetch(GET_DATA_URL);
    const dataOK = await FETCHED_DATA.json();
    console.log(dataOK);
    setData(dataOK);
  }

  async function deleteData(data) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(DELETE_DATA_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }

  function handleDelete(id) {
    // console.log(id);
    const data = {
      id: id,
    };
    deleteData(data);
  }

  function handleEdit(data) {
    console.log(data);
    setCurrentData(data);
    setIsOpenForm(true);
  }
  return (
    <div className="App">
      <h1>Day-51-React/Express FullStack APP - without Database</h1>
      <InputForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setData={setData}
      />
      {isOpenForm ? (
        <UpdateForm
          currentData={currentData}
          setCurrentData={setCurrentData}
          setData={setData}
          setIsOpenForm={setIsOpenForm}
        />
      ) : (
        <div></div>
      )}
      {isLoading
        ? "...Loading"
        : data &&
          data.map((d, index) => {
            return (
              <div key={index}>
                {" "}
                <p>
                  {d.name} -- {d.major}
                </p>
                <button onClick={() => handleDelete(d.id)}>Delete</button>
                <button
                  onClick={() => {
                    handleEdit(d);
                    // console.log("update buttton = ", d.id);
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })}
    </div>
  );
}

export default App;
