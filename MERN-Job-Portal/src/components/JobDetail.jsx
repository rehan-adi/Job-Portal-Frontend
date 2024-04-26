import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
        console.log("Response:", response.data);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!job || !job.jobTitle || !job.jobDescription) {
    return <div>Job details not found.</div>;
  }

  return (
    <div className="w-full h-screen lg:px-28 px-8 py-28 bg-[#F2F3F4]">
      <h1 className="font-semibold text-4xl ">
        Job <span className="text-blue-600">Details</span>
      </h1>

      <div className="flex justify-between flex-col lg:flex-row lg:items-start items-center">
        {/* left side  */}
        <div className="mt-10 shadow-lg lg:shadow-md bg-white border-2 lg:border py-8 px-6 rounded-xl lg:w-[55vw] w-[90vw]">
          <div className="flex justify-between">
           <div>
           <h1 className="font-semibold text-lg">{job.jobTitle}</h1>
            <h1 className="font-semibold mt-2 text-gray-600">
              {job.companyName}
            </h1>
           </div>
            <img
                src={job.companyUrl}
                alt={job.companyName}
                className="w-[4vw] h-[4vw]"
              />
          </div>
          <div className="flex flex-wrap mt-5 gap-5">
            <p>
              <span>
                <MdAttachMoney className="inline-block text-lg mb-1 mr-1" />
              </span>
              {job.salaryType}
            </p>
            <p>
              <span>
                <FaLevelUpAlt className="inline-block mb-1 mr-1" />
              </span>
              {job.experienceLevel}
            </p>
            <p>
              <span>
                <FaBusinessTime className="inline-block mb-1 mr-1" />
              </span>
              {job.employmentType}
            </p>
            <p>
              <span>
                <MdLocationPin className="inline-block mb-1 mr-1" />
              </span>
              {job.jobLocation}
            </p>
          </div>
          <p className="lg:pr-24 w-[70vw] mt-5 lg:w-auto opacity-80">
            {job.jobDescription}
          </p>
          <div className="border-b border-[#E7E5F1] w-[47vw] py-3"></div>
          <div className="mt-5 flex flex-col lg:flex-row gap-1 lg:gap-5">
            <p className="">
              <span>
                <BsCalendar3 className="inline-block text-xs mb-1 mr-3" />
              </span>
              <span>Posted: </span>
              {new Date(job.createdAt).toLocaleDateString()}
            </p>
            <div className="border"></div>
            <p>
              <span className="mr-1">Posted By: </span>
              {job.email}
            </p>
          </div>
          <p className="lg:mt-2 mt-3">
            <span>
              <FaLaptopCode className="inline-block mr-1 mb-1" />{" "}
              <span className="mr-2 ">Skills: </span>{" "}
            </span>
            <span className="opacity-80">{job.requiredSkills}</span>
          </p>
        </div>

        {/* right section  */}
        <div className="mt-10 lg:w-[27vw] w-[90vw] bg-white border-2 lg:border p-6 rounded-xl shadow-lg">
          <h2 className="font-semibold text-lg mb-5">Apply to this job:</h2>
          <form>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border focus:outline-none focus:shadow-outline px-2 py-1 rounded-md shadow-sm "
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border focus:outline-none focus:shadow-outline px-2 py-1 "
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700"
              >
                Resume/CV (PDF)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                className="mt-1 block w-full border-gray-300 focus:outline-none focus:shadow-outline rounded-md shadow-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-block bg-[#F05537] text-white py-1 mt-4 px-4 rounded-md transition duration-300 "
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
