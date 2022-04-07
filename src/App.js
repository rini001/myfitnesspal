import { MarketPlace } from "./Components/AppPage/MarketPlace";
import { FeaturedApps } from "./Components/AppPage/FeaturedApps";
import { Slides } from "./Components/AppPage/Slides";
import { Sidebar } from "./Components/AppPage/Sidebar";
// import "./App.css";
import {Navbar} from './Components/navigation/Navbar';
import { Hero } from "./Components/Home/Hero";
// import {About} from './Components/About';

function App() {
  return (
    <div className="App">
      {/* 
     <Head/>
     <About/> */}
     <Navbar/>
     
      {/* <Slides />
      <Sidebar />
      <FeaturedApps />

      <MarketPlace /> */}
    </div>
  );
}

export default App;
