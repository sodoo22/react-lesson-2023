import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
}
