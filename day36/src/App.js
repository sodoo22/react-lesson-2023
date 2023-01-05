import './App.css';
import MainMenu from './components/MainMenu';
import { Button } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <div className='menu-container'>
        <MainMenu />
      </div>
      <button className='btn btn-primary'>Test</button>
      <Button variant="danger">Test</Button>


    </div>
  );
}

export default App;
