import React, { useState } from 'react'
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';


function Banner({onSearch}) {

    const [jobRole, setJobRole] = useState('');
    // const [location, setLocation] = useState('');
  
    const handleJobRoleChange = (event) => {
      setJobRole(event.target.value);
    };

    const handleSearch = (event) => {
      event.preventDefault();
      const searchQuery = `${jobRole}`.trim();
      onSearch(searchQuery);
    };

  return (
    <div className='w-full py-14 bg-[#F2F3F4] max-h-fit px-10 lg:px-24'>
        <h1 className='text-4xl font-semibold mb-3'>Find your <span className='text-blue-600'>new job</span> today</h1>
        <p>Thousand of jobs in the computer, engineering and technology sectors are waiting for you.</p>
        <form onSubmit={handleSearch} className="mt-6 flex lg:gap-2 z-10 gap-5 flex-col lg:flex-row">
          <div className="relative flex">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Enter Job Role"
              value={jobRole}
              onChange={handleJobRoleChange}
              className=" w-[80vw] lg:w-[37vw] py-2 px-12 border-2 lg:border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="relative flex">
          <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Enter Location"
              // value={location}
              // onChange={handleLocationChange}
              className=" w-[80vw] lg:w-[37vw] px-12 py-2 border-2 lg:border border-gray-300 rounded-md focus:outline-none "
            />
          </div>
          <button type="submit" className="px-7 py-2 bg-blue-600 text-white rounded-md focus:outline-none">
            Search
          </button>
        </form>
    </div>
  )
}

export default Banner