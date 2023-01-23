export default function Input({ label, value, onChange }) {
  return (
    <label>
      {label}
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
