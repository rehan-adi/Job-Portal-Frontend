import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './pages/Navbar.tsx';
import Footer from './pages/Footer.tsx';
import Home from './pages/Home.tsx';
import PostJobForm from './components/PostJobForm.tsx';
import JobDetail from './components/JobDetail.tsx';
import Login from './components/auth/Login.tsx';
import SignUp from './components/auth/SignUp.tsx';
import { isAuthenticated } from './auth/auth.ts'; 
import Profile from './components/Profile.tsx';
import Salary from './components/Salary.tsx';
import ProfileDetails from './components/ProfileDetails.tsx';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authenticatedUser = isAuthenticated();
    setAuthenticated(authenticatedUser);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated && window.location.pathname === '/login') {
      navigate('/');
    }
  }, [authenticated, navigate]);

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      {/* <Navbar authenticated={authenticated} onLogout={handleLogout} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/postjob" element={<PostJobForm />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createprofile" element={<Profile />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
        <Route path="/salary-estimate" element={<Salary />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;