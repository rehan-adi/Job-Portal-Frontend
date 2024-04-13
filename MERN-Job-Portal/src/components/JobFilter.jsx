import React, { useEffect, useState } from 'react';
import { MdLocationPin } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

function JobFilter() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = jobs.filter(job => job.jobTitle === selectedCategory);
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs);
    }
  }, [selectedCategory, jobs]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="flex justify-between items-start px-24">
      {/* Filter options on the left */}
      <div className="w-1/3 max-h-fit">
        <h1 className='text-lg mb-8 font-semibold'>Filters</h1>
        <div>
          <h1 className='mb-3 font-semibold'>Job Role</h1>
          <div className='mb-2'>
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
          <div className='mb-2'>
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
        </div>
      </div>
      {/* Display filtered jobs on the right */}
      <div className="w-2/3 bg-white max-h-fit overflow-y-auto">
        <h1 className='text-lg mb-8 font-semibold'> ({filteredJobs.length})Jobs</h1>
        {filteredJobs.map((job, index) => (
          <div key={index} className="border p-5 mb-4">
            <h3>{job.companyName}</h3>
            <h2>{job.jobTitle}</h2>
           <div className='flex items-center gap-3'>
           <p><strong><MdLocationPin className='inline-block'/></strong> {job.jobLocation}</p>
            <p><span><IoMdTime className='inline-block'/></span> {job.employmentType}</p>
            <p><span className='inline-block'><FaDollarSign /></span> {job.minPrice} - {job.maxPrice} {job.salaryType}</p>
            <p><span><BsCalendar3 className='inline-block'/></span> {job.postingDate}</p>
           </div>
            {/* <p><strong>Experience Level:</strong> {job.experienceLevel}</p> */}
            <p className='pr-40'>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobFilter;
