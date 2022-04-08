// <<<<<<< HEAD
// import { MarketPlace } from "./Components/AppPage/MarketPlace";
// import { FeaturedApps } from "./Components/AppPage/FeaturedApps";
// import { Slides } from "./Components/AppPage/Slides";
// import { Sidebar } from "./Components/AppPage/Sidebar";
// // import "./App.css";
// =======
// import { MarketPlace } from "./Components/AppPage/MarketPlace";
// import { FeaturedApps } from "./Components/AppPage/FeaturedApps";
// import { Slides } from "./Components/AppPage/Slides";
// import { Sidebar } from "./Components/AppPage/Sidebar";
// import "./App.css";
import {Provider} from 'react-redux'
// >>>>>>> cf2ffc154b4e7e92b8cecf76b035b3d974c4ce59
import {Navbar} from './Components/navigation/Navbar';
// import { Hero } from "./Components/Home/Hero";
// import {About} from './Components/About';
// <<<<<<< HEAD
// import {Myhome} from './Components/Home/myHome/Myhome'
// =======
import {store} from './Redux/store'

// >>>>>>> cf2ffc154b4e7e92b8cecf76b035b3d974c4ce59
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
      {/* <Myhome/> */}
    </div>
    </Provider>
  );
}

export default App;
