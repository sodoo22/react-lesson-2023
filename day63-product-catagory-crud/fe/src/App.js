import logo from "./logo.svg";
import "./App.css";
import CategoryForm from "./components/CategoryForm";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import { ToastContainer } from "react-toastify";
import CategoryEditForm from "./components/CategoryEditForm";

function App() {
  return (
    <div className="App">
      <h1>Day 63</h1>
      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Category />} />
        <Route path="/category/edit/:id" element={<CategoryEditForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
