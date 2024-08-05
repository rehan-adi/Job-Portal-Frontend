import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="bg-black text-white fixed w-full z-50 py-5 lg:px-32 px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://github.com/mdalmamunit427/mern-job-portal-starter-files/blob/main/public/images/Linear.png?raw=true"
            alt="Linear Logo"
            className="h-8 mr-2"
          />
          <div className="text-xl lg:text-xl font-bold">
           HireSphere
          </div>
        </div>
        <nav className="hidden lg:flex flex-grow justify-center items-center space-x-14">
          <Link to="/" className="">Job Options</Link>
          <Link to="/salary-estimate" className="">Salary Estimate</Link>
          <Link to="/postjob" className="">Post a Job</Link>
        </nav>
        <div className="lg:hidden mt-1">
          <button onClick={toggleSidebar} className="text-white">
            {sidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
                className="h-7 w-7"
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
        <div className="hidden lg:flex items-center space-x-5">
          <button>Login</button>
        </div>
      </div>
      {sidebarOpen && (
        <div className="lg:hidden w-full h-96 py-5 mt-5">
          <nav className="flex flex-col space-y-4 mt-4">
            <Link to="/" className="text-white">Start a Search</Link>
            <Link to="/salary-estimate" className="text-white">Salary Estimate</Link>
            <Link to="/postjob" className="text-white">Post a Job</Link>
          </nav>
          <div className="lg:hidden flex mt-5 items-center space-x-8">
          
        </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
