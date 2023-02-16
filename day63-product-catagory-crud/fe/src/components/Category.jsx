import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Category() {
  const URL = "http://localhost:8080/category";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategories(FETCHED_JSON.data);
    }
  }

  async function handleCategoryDetete(categoryId) {
    console.log(categoryId);

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: categoryId,
      }),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategories(FETCHED_JSON.data);
      toast.error(`Category with id = ${categoryId} deleted successfully`);
    }
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    const searchInput = e.target.search.value;

    const SEARCH_URL = `http://localhost:8080/search?value=${searchInput}`;
    const FETCHED_DATA = await fetch(SEARCH_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategories(FETCHED_JSON.data);
    }
  }

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="">
          Search
          <input name="search" />
        </label>
        <button>Search</button>
      </form>
      <h1>Category List</h1>
      <table>
        <thead>
          <tr>
            <td>Category ID</td>
            <td>Category Name</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category, index) => {
              return (
                <tr key={index}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    <a href={`/category/edit/${category.id}`}>Edit</a>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleCategoryDetete(category.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <select name="" id="">
        {categories &&
          categories.map((category, index) => {
            return (
              <option key={index} value="">
                {category.name}
              </option>
            );
          })}
      </select>
    </div>
  );
}
