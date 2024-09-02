import React, { Profiler } from "react";
import Login from "./components/auth/Login.tsx";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/SignUp.tsx";
import LandingPage from "./components/LandingPage.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import Dashboard from "./components/Dashboard.tsx";
import Profile from "./components/Profile.tsx";
import JobListing from "./components/JobListing.tsx";

const App: React.FC = () => {
  return (
    <>
      <Toaster position="bottom-right" richColors theme="dark" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<JobListing />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
