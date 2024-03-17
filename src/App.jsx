// App.jsx
import React from 'react';
import Home from './Home';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm'; // Import SignUpForm component
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import AdminSignupForm from './components/HSignUpForm';
import AdminLoginForm from './components/HLoginForm';
import HospitalPage from "./pages/HospitalPage";
import DonorPage from "./pages/DonorPage";

const App = () => (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/h-signup' element={<AdminSignupForm />}></Route>
        <Route path='/h-login' element={<AdminLoginForm />}></Route>
        <Route path='/h-dashboard' element={<HospitalPage />}></Route>
        <Route path='/d-dashboard' element={<DonorPage />}></Route>
      </Routes>
    </Router>
  );

export default App;
