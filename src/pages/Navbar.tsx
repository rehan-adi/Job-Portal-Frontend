import React from "react";

const Navbar: React.FC = (): JSX.Element => {

  return (
    <header className="bg-black text-white border-b border-white border-opacity-15 fixed w-full z-50 py-5 lg:px-32 px-8">
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
        <div className="lg:hidden mt-1">
        </div>
        <div className="hidden lg:flex items-center space-x-5">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
