// import { MarketPlace } from "./Components/appPage/MarketPlace";
// import { FeaturedApps } from "./Components/appPage/FeaturedApps";
// import { Slides } from "./Components/appPage/Slides";
// import { Sidebar } from "./Components/appPage/Sidebar";
import "./App.css";
import { DailySummary } from "./Components/home/DailySummary";
import { Invite } from "./Components/home/Invite";
import { NewsFeed } from "./Components/home/NewsFeed";
// import { Head } from './Components/Head';
// import {Navbar} from './Components/Navbar';
// import {About} from './Components/About';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
     <Head/>
     <About/> */}
      {/* <Slides />
      <Sidebar />
      <FeaturedApps />
      <MarketPlace /> */}
      <DailySummary/>
      <NewsFeed/>
      <Invite/>
    </div>
  );
}

export default App;
