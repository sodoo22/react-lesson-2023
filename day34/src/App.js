
import './App.css';

import HelloWolrd from './HelloWorld'

function App() {
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }


  const customStyle = {
    color: "#1d0ed1",
    fontSize: "56px",
    textAlign: "center",
  };




  const element = (<h1 style={customStyle}>Hello, Teacher</h1>)
  const secondElement = (<p className="my-text">My text</p>)

  // const element = (
  //   <h1>
  //     Hello, {formatName(user)}!
  //   </h1>
  // )




  return (
    <div>
      {element}
      {secondElement}
      <HelloWolrd />
    </div>
  );
}

export default App;
