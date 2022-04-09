import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AllApps} from '../src/Components/AppPage/AllApps'
import {About} from '../src/Components/About'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Hero } from './Components/Home/Hero';
import {Premium} from './Components/Premium/Premium'
import { Exercise } from './Components/Exercise/Exercise';
import { Find } from './Components/Search/Find';
import { AppsDetail } from './Components/AppPage/AppsDetail';
import { Search } from './Components/AppPage/Search';
import {Myhome} from './Components/Home/myHome/Myhome'
import { UploadPhoto } from './Components/Home/myHome/UploadPhoto';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<App/>}>
          <Route index element={<Hero/>}/>
          <Route path="/Home" element={<Myhome />}></Route>
          <Route path="/Apps" element={<AllApps />}></Route>
          <Route path="/Apps/:userId" element={<AppsDetail />}></Route>	
          <Route path="/activityTrackers" element={<Search />}></Route>
          <Route path="/activityTrackers/:userId" element={<AppsDetail />}></Route>	
          <Route path='about' element={<About/>}/>
          <Route path='premium' element={<Premium/>}/>
          <Route path='exercise' element={<Exercise/>}/>
          <Route path='food' element={<Find/>}/>
          <Route path='choosephoto' element={<UploadPhoto/>}/>
       </Route>
       
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
