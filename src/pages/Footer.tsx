import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="lg:py-5 py-10 bg-white lg:flex lg:flex-row flex-col justify-between shadow-lg lg:shadow-md items-center px-4 lg:px-32 border-t-2 lg:border-t w-full">
      <div className="flex items-center mb-4 lg:mb-0">
        <img
          src="https://github.com/mdalmamunit427/mern-job-portal-starter-files/blob/main/public/images/Linear.png?raw=true"
          alt="Linear Logo"
          className="h-7 mr-2"
        />
        <div className="text-gray-800 text-xl lg:text-lg font-bold">
          JobPortal
        </div>
      </div>
      <div>
        <ul className="flex flex-col lg:flex-row items-start lg:mt-0 mt-10 lg:items-center text-sm font-semibold justify-center gap-4 lg:gap-8">
          <li className="mb-2 lg:mb-0">Privacy Policy</li>
          <li className="mb-2 lg:mb-0">Terms &amp; Conditions</li>
          <li>Developer @Rehan</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer