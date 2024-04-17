import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ authenticated, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <header className="bg-white fixed shadow-lg w-full z-50 py-5 lg:px-24 px-10">
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
          <Link to="/" className="text-blue-700">Start a Search</Link>
          <Link to="/my-jobs" className="text-gray-800">My Jobs</Link>
          <Link to="/salary-estimate" className="text-gray-800">Salary Estimate</Link>
          <Link to="/postjob" className="text-gray-800">Post a Job</Link>
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
        {authenticated ? (
            <>
              <Link
                to="/logout"
                onClick={handleLogout}
                className="bg-blue-600 text-white rounded-sm border px-5 py-1 font-semibold"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-800 bg-white rounded-sm border px-5 py-1 font-semibold"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white bg-blue-700 rounded-sm px-5 py-1 font-semibold"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
      {sidebarOpen && (
        <div className="lg:hidden border-2 w-[80vw] px-4 py-5 mt-5">
          <nav className="flex flex-col space-y-4 mt-4">
            <Link to="/" className="text-gray-800">Start a Search</Link>
            <Link to="/my-jobs" className="text-gray-800">My Jobs</Link>
            <Link to="/salary-estimate" className="text-gray-800">Salary Estimate</Link>
            <Link to="/postjob" className="text-gray-800">Post a Job</Link>
          </nav>
          <divvv className="lg:hidden flex mt-5 items-center space-x-8">
          {authenticated ? (
            <>
              <Link
                to="/logout"
                onClick={handleLogout}
                className="bg-blue-600 text-white rounded-sm border px-5 py-1 font-semibold"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-800 bg-white rounded-sm border px-5 py-1 font-semibold"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white bg-blue-700 rounded-sm px-5 py-1 font-semibold"
              >
                Sign Up
              </Link>
            </>
          )}
        </divvv>
        </div>
      )}
    </header>
  );
};

export default Navbar;
