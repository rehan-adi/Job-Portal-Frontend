import React from "react";
import { Button } from "./ui/button.tsx";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-black w-full h-screen flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to JobPortal</h1>
      <p className="text-base  text-[#9CA3AF] font-medium mb-8">
        Discover your dream job with ease. Explore thousands of opportunities
        and accelerate your career growth today!
      </p>
      <div className="flex gap-4">
        <Button
          type="button"
          variant="primary"
          size="lg"
        >
          Get Started
        </Button>
        <Button
          type="button"
          variant="default"
          size="lg"
        >
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
