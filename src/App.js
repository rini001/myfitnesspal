import { MarketPlace } from "./Components/AppPage/MarketPlace";
import { FeaturedApps } from "./Components/AppPage/FeaturedApps";
import { Slides } from "./Components/AppPage/Slides";
import { Sidebar } from "./Components/AppPage/Sidebar";
import "./App.css";
// import { Head } from './Components/Head';
// import {Navbar} from './Components/Navbar';
// import {About} from './Components/About';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
     <Head/>
     <About/> */}
      <Slides />
      <Sidebar />
      <FeaturedApps />

      <MarketPlace />
    </div>
  );
}

export default App;
