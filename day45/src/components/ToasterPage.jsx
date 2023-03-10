import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToasterPage() {
  const notify = () => toast("Амжилттай хадгалагдлаа.!");
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer position="top-center" />
    </div>
  );
}
