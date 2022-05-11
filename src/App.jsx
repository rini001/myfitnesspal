import "./App.css";

import { HomePage } from "./Components/Homepage";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { Food } from "./Components/Food";
import { Payment } from "./Components/Payment";
import { Welcome } from "./Components/signup/welcome";
import { LooseWeight } from "./Components/signup/weightgoal";
import { BaselineActivity } from "./Components/signup/activitylevelpage";
import { Detail } from "./Components/signup/detailspage";
import { BodyCheckout } from "./Components/signup/bodyscanpg";
import { WeightReduce } from "./Components/signup/WeightReducepg";
import { AllApps } from "./Components/allApps/AllApps";
import { Goals } from "./Components/goals/Goals";
import { CreateAccount } from "./Components/signup/createaccountpg";
import { Login } from "./Components/signup/loginpg";
import { CreateUsername } from "./Components/signup/createusernamepg";
import {Exercise} from './Components/Exercise/Exercise'
import { Premium } from "./Components/Premium/Premium";
import { About } from "./Components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/food/:name" element={<Food />}></Route>

        <Route path="/about" element={<About/>}/>
        <Route path="/goals" element={<Goals />}></Route>
        <Route path="/apps" element={<AllApps />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/premium" element={<Premium />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/exercise" element = {<Exercise/>}/>
        {/* Signup Page 1 */}
        <Route path="/signup/welcome" element={<Welcome />}></Route>

        {/* Signup Page 2 */}
        <Route path="/signup/weightgoal" element={<LooseWeight />}></Route>

        {/* Signup  Page 3 */}
        <Route
          path="/signup/activitylevel"
          element={<BaselineActivity />}
        ></Route>

        {/* Signup Page 4 */}
        <Route path="/signup/details" element={<Detail />}></Route>

        {/* Signup Page 5 - Goals*/}
        <Route path="/signup/checkout" element={<BodyCheckout />}></Route>

        {/* Signup Page 6 */}
        <Route path="/signup/weeklygoal" element={<WeightReduce />}></Route>

        {/* signup page 7 */}
        <Route path="/signup/createaccount" element={<CreateAccount />}></Route>

        {/* signup page 8 */}
        <Route path="/signup/login" element={<Login />}></Route>

        {/* signup page 9 */}
        <Route
          path="/signup/createusername"
          element={<CreateUsername />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
