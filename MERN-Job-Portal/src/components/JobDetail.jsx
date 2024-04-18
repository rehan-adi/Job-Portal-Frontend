import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { FaLevelUpAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/postjob/${id}`);
        console.log('Response:', response.data); 
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!job || !job.jobTitle || !job.jobDescription) {
    return <div>Job details not found.</div>;
  }

  return (
    <div className='w-full h-screen bg-[#f8f9fa] px-28 py-28'>
      <h1 className='font-semibold text-4xl '>Job <span className='text-blue-600'>Details</span></h1>
      <div className='mt-10 shadow-md py-6 px-6 rounded-xl w-[55vw]'>
      <h1 className='font-semibold text-lg'>{job.jobTitle}</h1>
      <h1 className='font-semibold text-gray-600'>{job.companyName}</h1>
      <div className='flex mt-4 gap-5'>
      <p><span><MdAttachMoney className='inline-block text-lg mb-1 mr-1'/></span>{job.salaryType}</p>
      {/* <p><span>Salary Type : </span>{job.salaryType}</p> */}
      <p><span><FaLevelUpAlt className='inline-block mb-1 mr-1' /></span>{job.experienceLevel}</p>
      <p><span><FaBusinessTime className='inline-block mb-1 mr-1'/></span>{job.employmentType}</p>
      <p><span><MdLocationPin className='inline-block mb-1 mr-1' /></span>{job.jobLocation}</p>
      </div>
      <p className="lg:pr-24 w-[70vw] mt-4 lg:w-auto opacity-80">{job.jobDescription}</p>
      <div className='border-b w-[47vw] py-3'></div>
      <div className='mt-5 flex gap-5'>
         <p className=''><span><BsCalendar3 className='inline-block text-xs mb-1 mr-3'/></span><span>Posted: </span>{new Date(job.createdAt).toLocaleDateString()}</p>
         <div className='border'></div>
         <p><span className='mr-1'>Posted By: </span>{job.email}</p>
      </div>
         <p className='mt-2'><span><FaLaptopCode  className='inline-block mr-1 mb-1'/> <span className='mr-2'>Skills: </span> </span>{job.requiredSkills}</p>
      </div>
    </div>
  );
}

export default JobDetail;
