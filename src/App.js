import { MarketPlace } from "./Components/AppPage/MarketPlace";
import { FeaturedApps } from "./Components/AppPage/FeaturedApps";
import { Slides } from "./Components/AppPage/Slides";
import { Sidebar } from "./Components/AppPage/Sidebar";
// import "./App.css";
import {Provider} from 'react-redux'
import {Navbar} from './Components/navigation/Navbar';
import { Hero } from "./Components/Home/Hero";
// import {About} from './Components/About';
import {store} from './Redux/store'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
