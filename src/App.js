import './App.css';
import { Head } from './Components/Head';
import {Navbar} from './Components/Navbar';
import {About} from './Components/About';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Head/>
     <About/>
    </div>
  );
}

export default App;
