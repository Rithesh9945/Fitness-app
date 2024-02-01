import './App.css';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protect from './components/Protect';
import Profile from './components/Profile';
import Login from './components/Login';
import Fitness from './components/Fitness';
import Workouts from './components/Workouts';
import Trainerdashboard from './components/Trainerdashboard';
import Myworkouts from './components/Myworkouts';



function App() {
  return (
    // <div className="App">
    //  <Signin/>
    //  <Signup/>
    // </div>

// https://fit-bit-sigma.vercel.app/signup

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />

          <Route path="/login" element={<Login/>} />

          <Route path="/home" element={<Protect child={<Dashboard />} />} />

          <Route path="/profile" element={<Protect child={<Profile />} />} />

          <Route path="/bmi" element={ <Protect child={<Fitness/>}/> }/>

          <Route path="/trainerdashboard" element={ <Protect child={<Trainerdashboard/>}/> }/>

        <Route path="/workouts" element={ <Protect child={<Workouts/>}/> }/>
        <Route path="/myworkouts" element={ <Protect child={<Myworkouts/>}/> }/>

        

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
