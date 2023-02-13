import { useEffect, useState } from "react";
import useTheme from "../context/ThemeContext";
import { useFetch } from "../context/UseFetch";

export default function Body() {
  //   const URL = "http://dog.ceo/api/breeds/image/random";
  const URL =
    "https://images.unsplash.com/photo-1675629172984-adaffe2ad47e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  const { theme, setTheme } = useTheme();
  const { response, error } = useFetch(URL, {});
  console.log(response);

  const [styleClass, setStyleClass] = useState();

  useEffect(() => {
    setStyleClass(`${theme} middle-container`);
  }, [theme]);

  return (
    <div className={styleClass}>
      <p>Body</p>
      {response.message && <img src={response.message} alt="dog" />}
    </div>
  );
}
