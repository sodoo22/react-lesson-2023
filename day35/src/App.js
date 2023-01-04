import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function Profile({ img, name, age, gender, profession }) {
  // destructuring
  // const { img, name, age, gender, profession } = props
  return (

    <div className="profile">
      <img src={img} alt="" />
      <p>Name: <span className='utga'>{name}</span></p>
      <p>Age: <span className='utga'>{age}</span></p>
      <p>Gender: <span className='utga'>{gender}</span></p>
      <p>Profession: <span className='utga'>{profession}</span></p>
    </div>
  )
}

function App() {
  const users = [
    {
      img: "img/kristy.png",
      name: "Kristy",
      age: 23,
      gender: "female",
      profession: "MERN Stack Developer"
    },
    {
      img: "img/jenny.jpg",
      name: "Jenny",
      age: 27,
      gender: "female",
      profession: "Backend Developer"
    },
    {
      img: "img/elyse.png",
      name: "John Smith",
      age: 27,
      gender: "female",
      profession: "Full Stack Developer"
    },
    {
      img: "img/matthew.png",
      name: "Matthew",
      age: 38,
      gender: "female",
      profession: "Frontend Developer"
    },
  ];


  return (
    <div className="App container">
      <h2>Our Team</h2>
      <div className="App2">
        <Profile
          img="img/kristy.png"
          name="Kristy"
          age={23}
          gender="female"
          profession="MERN Stack Developer"
        />
        <Profile
          img="img/jenny.jpg"
          name="Jenny"
          age={27}
          gender="female"
          profession="Backend Developer"
        />
        <Profile
          img="img/elyse.png"
          name="John Smith"
          age={20}
          gender="female"
          profession="Full Stack Developer"
        />
        <Profile
          img="img/matthew.png"
          name="Matthew"
          age={38}
          gender="male"
          profession="Frontend Developer"
        />
      </div>
    </div>
  );
}

export default App;
