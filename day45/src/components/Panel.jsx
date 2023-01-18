export default function Panel({ children, title, onShow, isActive }) {
  return (
    <div className="con">
      <h3>{title}</h3>
      {isActive ? (
        <div>
          <p>{children}</p>
          {/* <button onClick={onShow}>Hide</button> */}
        </div>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </div>
  );
}
