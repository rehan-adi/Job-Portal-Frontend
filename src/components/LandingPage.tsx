import React from "react";
import { Button } from "./ui/button.tsx";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/profile");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-black w-full h-screen px-3 flex flex-col justify-center items-center text-center text-white">
      <h1 className="lg:text-5xl text-4xl font-bold mb-6">Welcome to JobPortal</h1>
      <p className="text-base  text-[#9CA3AF] font-medium mb-8">
        Discover your dream job with ease. Explore thousands of opportunities
        and accelerate your career growth today!
      </p>
      <div className="flex gap-4">
        <Button type="button" variant="secondary" size="lg"  onClick={handleGetStarted}>
          Get Started
        </Button>
        <Button type="button" variant="default" size="lg" onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>
      <footer className="absolute bottom-4 text-sm  text-[#9CA3AF] font-medium">
        &copy; 2024 JobPortal. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
