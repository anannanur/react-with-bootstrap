
import { Button } from 'react-bootstrap';
import './App.css';
import Cardgroup2 from './Components/Cardgroup2/Cardgroup2';


function App() {
  return (
    <div className="App">
      <h1>Using React Bootstrap</h1>
      <Button variant="primary" className='my-4'>Primary</Button>
      <Cardgroup2></Cardgroup2>
    </div>
  );
}

export default App;

// {/* <div>
//   <button type="button" className="btn btn-primary">Primary</button>
//   <button type="button" className="btn btn-secondary">Secondary</button>
//   <button type="button" className="btn btn-success">Success</button>
//   <button type="button" className="btn btn-danger">Danger</button>
//   <button type="button" className="btn btn-warning">Warning</button>
//   <button type="button" className="btn btn-info">Info</button>
//   <button type="button" className="btn btn-light">Light</button>
//   <button type="button" className="btn btn-dark">Dark</button>

//   <button type="button" className="btn btn-link">Link</button>


//   <Cardgroup></Cardgroup>
// </div> */}
