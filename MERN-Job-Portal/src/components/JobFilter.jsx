import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import axios from 'axios'

function JobFilter({ searchQuery }) {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:1000/postjob/");
        if (Array.isArray(response.data.jobs)) {
          setJobs(response.data.jobs);
          setFilteredJobs(response.data.jobs); 
        } else {
          console.error("Invalid response data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
  
    fetchJobs();
  }, []);
  

  useEffect(() => {
    console.log("Search Query:", searchQuery); // Add console log for search query
    let filtered = [...jobs];
    if (selectedCategory) {
      filtered = filtered.filter((job) => job.jobTitle === selectedCategory);
    }
    if (selectedExperienceLevel) {
      filtered = filtered.filter(
        (job) => job.experienceLevel === selectedExperienceLevel
      );
    }
  
    if (searchQuery) {
      filtered = filtered.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    setFilteredJobs(filtered);
  }, [selectedCategory, selectedExperienceLevel, searchQuery, jobs]);  

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleExperienceLevelChange = (event) => {
    setSelectedExperienceLevel(event.target.value);
  };

  return (
    <div className="flex lg:justify-start justify-center gap-24 items-start lg:px-24">
      {/* Filter options on the left */}
      <div className="w-[25vw] lg:flex flex-col hidden px-7 py-3 max-h-fit">
        <h1 className="text-lg mb-8 font-semibold">Filters</h1>
        <div className="px-2 py-3">
          <h1 className="mb-3 font-semibold">Job Role</h1>
          <div className="mb-2">
            <input
              type="radio"
              id="category-all"
              name="category"
              value=""
              checked={selectedCategory === null}
              onChange={handleCategoryChange}
            />
            <label htmlFor="category-all">All</label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="category-tech"
              name="category"
              value="Software Engineer"
              checked={selectedCategory === "Software Engineer"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="category-tech">Software Engineer</label>
          </div>
          <div>
            <input
              type="radio"
              id="category-engineering"
              name="category"
              value="Web Developer"
              checked={selectedCategory === "Web Developer"}
              onChange={handleCategoryChange}
            />
            <label htmlFor="category-engineering">Web Developer</label>
          </div>
          <h1 className="mb-3 font-semibold mt-8">Experience Level</h1>
          <div className="mb-2">
            <input
              type="radio"
              id="experience-all"
              name="experience"
              value=""
              checked={selectedExperienceLevel === null}
              onChange={handleExperienceLevelChange}
            />
            <label htmlFor="experience-all">All</label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="experience-internship"
              name="experience"
              value="Internship"
              checked={selectedExperienceLevel === "Internship"}
              onChange={handleExperienceLevelChange}
            />
            <label htmlFor="experience-internship">Internship</label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="experience-any"
              name="experience"
              value="Any experience"
              checked={selectedExperienceLevel === "Any experience"}
              onChange={handleExperienceLevelChange}
            />
            <label htmlFor="experience-any">Any experience</label>
          </div>
          <div>
            <input
              type="radio"
              id="Work remotely"
              name="experience"
              value="Work remotely"
              checked={selectedExperienceLevel === "Work remotely"}
              onChange={handleExperienceLevelChange}
            />
            <label htmlFor="experience-any">Work remotely</label>
          </div>
        </div>
      </div>
      {/* Display filtered jobs on the right */}
      <div className="lg:w-[50vw] w-[90vw] bg-white max-h-fit overflow-y-auto">
        <h1 className="text-lg mb-8 font-semibold">
          {" "}
          ({filteredJobs.length})Jobs
        </h1>
        {filteredJobs.map((job, index)  => (
          <div key={index} className="lg:border border-2 p-5 mb-4 flex-col lg:flex-row flex">
            <div className="w-1/6">
              <img
                src={job.companyLogo}
                alt={job.companyName}
                className="w-[4vw] h-[4vw]"
              />
            </div>
            <div className="w-5/6">
              <h3 className="mt-3 lg:mt-0">{job.companyName}</h3>
              <h2 className="text-lg mt-1 font-semibold">{job.jobTitle}</h2>
              <div className="flex flex-wrap items-center my-2 gap-4">
                <p className="flex justify-center items-center">
                  <strong>
                    <MdLocationPin className="inline-block mb-1 mr-1" />
                  </strong>{" "}
                  {job.jobLocation}
                </p>
                <p className="flex justify-center items-center">
                  <span>
                    <IoMdTime className="inline-block mb-1 mr-1" />
                  </span>{" "}
                  {job.employmentType}
                </p>
                <p className="flex justify-center items-center">
                  <span className="inline-block mr-1">
                    <FaDollarSign />
                  </span>{" "}
                  {job.minPrice} - {job.maxPrice} {job.salaryType}
                </p>
                <p className="flex justify-center items-center">
                  <span>
                    <BsCalendar3 className="inline-block mr-2 mb-1 text-xs" />
                  </span>{" "}
                  {job.postingDate}
                </p>
              </div>
              <p className="lg:pr-40 w-[70vw] lg:w-auto opacity-80">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobFilter;
