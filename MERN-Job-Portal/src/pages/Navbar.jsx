import React, { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="bg-white shadow-lg py-5 lg:px-24 px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://github.com/mdalmamunit427/mern-job-portal-starter-files/blob/main/public/images/Linear.png?raw=true"
            alt="Linear Logo"
            className="h-8 mr-2"
          />
          <div className="text-gray-800 text-2xl lg:text-xl font-bold">
            JobPortal
          </div>
        </div>
        <nav className="hidden lg:flex flex-grow justify-center items-center space-x-14">
          <a href="#" className="text-blue-700">
            Start a Search
          </a>
          <a href="#" className="text-gray-800">
            My Jobs
          </a>
          <a href="#" className="text-gray-800">
            Salary Estimate
          </a>
          <a href="#" className="text-gray-800">
            Post a Job
          </a>
        </nav>
        <div className="lg:hidden">
          <button onClick={toggleSidebar} className="text-gray-800">
            {sidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-800 bg-white rounded-sm border px-5 py-1 font-semibold"
          >
            Login
          </a>
          <a
            href="#"
            className="text-white bg-blue-700 rounded-sm px-5 py-1 font-semibold"
          >
            Sign Up
          </a>
        </div>
      </div>
      {sidebarOpen && (
        <div className="lg:hidden border-2 w-[80vw] px-4 py-5 mt-5">
          <nav className="flex flex-col space-y-4 mt-4">
            <a href="#" className="text-gray-800">
              Start a Search
            </a>
            <a href="#" className="text-gray-800">
              My Jobs
            </a>
            <a href="#" className="text-gray-800">
              Salary Estimate
            </a>
            <a href="#" className="text-gray-800">
              Post a Job
            </a>
          </nav>
          <div className="lg:hidden flex mt-5 items-center space-x-8">
          <a
            href="#"
            className="text-gray-800 bg-white rounded-sm border-2 px-5 py-1 font-semibold"
          >
            Login
          </a>
          <a
            href="#"
            className="text-white bg-blue-700 rounded-sm px-5 py-1 font-semibold"
          >
            Sign Up
          </a>
        </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
