import React from "react";

function Footer() {
  return (
    <div className="py-5 bg-white flex justify-between shadow-md items-center px-32 border-t w-full">
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
      <div>
          <ul className="flex items-center font-semibold justify-center gap-20">
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Developer @Rehan</li>
          </ul>
      </div>
    </div>
  );
}

export default Footer;
