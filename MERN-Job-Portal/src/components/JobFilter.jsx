import React, { useEffect, useState } from 'react';

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
    <div>
      <div>
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
      <div>
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
      {/* Render filtered jobs */}
      {filteredJobs.map((job, index) => (
        <div key={index}>
          <h2>{job.jobTitle}</h2>
          <p>{job.jobDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default JobFilter;
