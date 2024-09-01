import React from "react";
import Login from "./components/auth/Login.tsx";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/SignUp.tsx";
import LandingPage from "./components/LandingPage.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

const App: React.FC = () => {
  return (
    <>
      <Toaster position="bottom-right" richColors theme="dark" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
