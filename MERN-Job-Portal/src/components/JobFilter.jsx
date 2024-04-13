// JobFilter.js
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
        setFilteredJobs(data); // Initialize filtered jobs with all jobs initially
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Filter jobs based on selected category
      const filtered = jobs.filter(job => job.category === selectedCategory);
      setFilteredJobs(filtered);
    } else {
      // If no category selected, show all jobs
      setFilteredJobs(jobs);
    }
  }, [selectedCategory, jobs]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      {/* Radio buttons for selecting category */}
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
          value="Tech"
          checked={selectedCategory === "Tech"}
          onChange={handleCategoryChange}
        />
        <label htmlFor="category-tech">Tech</label>
      </div>
      <div>
        <input
          type="radio"
          id="category-engineering"
          name="category"
          value="Engineering"
          checked={selectedCategory === "Engineering"}
          onChange={handleCategoryChange}
        />
        <label htmlFor="category-engineering">Engineering</label>
      </div>
      {/* Render filtered jobs */}
      {filteredJobs.map(job => (
        <div key={job.id}>
          <h2>{job.jobTitle}</h2>
          <p>{job.jobDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default JobFilter;
