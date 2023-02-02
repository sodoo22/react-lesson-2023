import ProductsTable from "../components/ProductsTable";

export default function Products({ form, setForm }) {
  return (
    <div>
      <h1>PRODUCTS LIST PAGE</h1>
      <ProductsTable form={form} setForm={setForm} />
    </div>
  );
}
