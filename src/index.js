import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {About} from '../src/Components/About'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Hero } from './Components/Home/Hero';
import {Premium} from './Components/Premium/Premium'
import { Exercise } from './Components/Exercise/Exercise';
import { Find } from './Components/Search/Find';
import { Top } from './Components/navigation/Top';
import Stage1st from './Components/SignUP/Stage1st';
import Stage2nd from './Components/SignUP/Stage2nd';
import Stage3rd from './Components/SignUP/Stage3rd';
import Stage4th from './Components/SignUP/Stage4th ';
import Stage5th from './Components/SignUP/Stage5th';
import Stage6th from './Components/SignUP/Stage6th'
import Stage7th from './Components/SignUP/Stage7th'
import { Board } from './Components/EBoard/Board';
// import Stage1st from './Components/SignUP/Stage1st';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<App/>}>
          <Route index element={<Hero/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='premium' element={<Premium/>}/>
          <Route path='exercise' element={<Exercise/>}>
          <Route path='board' element={<Board/>}/>
          </Route>
          <Route path='food' element={<Find/>}/>
          

          
       </Route>
       <Route path='signup' element={<Stage1st/>}/>
         
       {/* </Route> */}
       <Route path='Stage2' element={<Stage2nd/>}/>
       <Route path='s3' element={<Stage3rd/>}/>
       {/* <Route path='s4' element={<Stage4th/>}/>
       <Route path='s5' element={<Stage5th/>}/> */}
       <Route path='s6' element={<Stage6th/>}/>
       {/* <Route path='s7' element={<Stage7th/>}/> */}
      
         
      
       
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
