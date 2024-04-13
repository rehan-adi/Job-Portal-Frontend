import React, { useEffect, useState } from "react";
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
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = jobs.filter((job) => job.jobTitle === selectedCategory);
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
      <div className="w-[25vw] px-7 py-5 max-h-fit">
        <h1 className="text-lg mb-8 font-semibold">Filters</h1>
        <div className="px-2 py-5">
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
        </div>
      </div>
      {/* Display filtered jobs on the right */}
      <div className="w-2/3 bg-white max-h-fit overflow-y-auto">
        <h1 className="text-lg mb-8 font-semibold">
          {" "}
          ({filteredJobs.length})Jobs
        </h1>
        {filteredJobs.map((job, index) => (
          <div key={index} className="border p-5 mb-4">
            <h3>{job.companyName}</h3>
            <h2 className="text-lg mt-1 font-semibold">{job.jobTitle}</h2>
            <div className="flex items-center my-2 gap-4">
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

            {/* <p><strong>Experience Level:</strong> {job.experienceLevel}</p> */}
            <p className="pr-40 opacity-80">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobFilter;
