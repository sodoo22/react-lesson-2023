import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

async function App() {
  // --------------------------- Promise Exercise ------------------------

  const myPromise = new Promise((resolve, rejected) => {
    let isPlaying = true;
    if (isPlaying) {
      return resolve(isPlaying);
    } else {
      return rejected(isPlaying);
    }
  });
  // console.log(myPromise);

  const id = 45;
  const URL = `https://api.jikan.moe/v4/anime/${id}`;

  // const fetchResult = fetch(URL);
  // fetchResult
  //   .then((result) => result.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  const fetchedResult = await fetch(URL);
  console.log(fetchedResult);
  const JSONResult = await fetchedResult.json();
  console.log(JSONResult);

  // --------------------------- Promise Exercise ------------------------

  // --------------------------- Callback Function Exercise ------------------------
  function khuslen(callbackFunction) {
    let a = 4;
    callbackFunction(a);
  }

  function forex(param) {
    console.log(param + 4);
  }

  // khuslen(forex);
  // --------------------------- Callback Function Exercise------------------------

  return (
    <div className="App">
      <h1>Day-40 React States</h1>
      <User />
    </div>
  );
}

export default App;
