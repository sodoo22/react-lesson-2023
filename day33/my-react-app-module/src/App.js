import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Popular Products</h2><hr></hr>


      <div className="contaner">
        <div>
          <img src=" ./img/image-yellow.png" className="App-logo" alt="logo" />
        </div>
        <div className="textbox">
          <h2>55</h2>
          <p className="bluetext">Haught or Naught</p>
          <p>High-minded or absent-minded? You decide</p>
          <div className="contaner profile">
            <p>Submitted by:  </p>
            <img src=" https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" className="App-logo" alt="logo" />
          </div>
        </div>
      </div>

      <div className="contaner">
        <div>
          <img src=" ./img/image-aqua.png" className="App-logo" alt="logo" />
        </div>
        <div className="textbox">
          <h2>44</h2>
          <p className="bluetext">Yellow Pail</p>
          <p>On-demand sand castle contruction expertice</p>
          <div className="contaner profile">
            <p>Submitted by:  </p>
            <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="App-logo" alt="logo" />
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
