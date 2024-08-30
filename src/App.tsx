import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./components/auth/Login.tsx";
import SignUp from "./components/auth/SignUp.tsx";
import Banner from "./components/Banner.tsx";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Banner />} />
        </Route>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
};

export default App;
