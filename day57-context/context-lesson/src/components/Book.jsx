export default function Book({ item }) {
  console.log(item);
  return (
    <li>
      {item.title} - {item.price}
    </li>
  );
}
