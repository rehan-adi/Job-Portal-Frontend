import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import MyJobs from './pages/MyJobs';
import PostJobForm from './components/PostJobForm';
import Login from './components/Login';
import { isAuthenticated } from './auth/auth.js'; 

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const authenticatedUser = isAuthenticated();
    setAuthenticated(authenticatedUser);
  }, []);

  // Move useNavigate inside the Router component
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate('/login');
    }
  }, [authenticated, navigate]);

  return (
    <>
      <Navbar authenticated={authenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/postjob" element={<PostJobForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
