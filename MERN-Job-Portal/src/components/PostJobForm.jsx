import React, { useState } from 'react';
import axios from 'axios';

function PostJobForm() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    minSalary: '',
    maxSalary: '',
    salaryType: '', // Dropdown
    jobLocation: '',
    postingDate: '',
    experienceLevel: '', // Dropdown
    requiredSkills: '',
    companyLogo: '',
    employmentType: '', // Dropdown
    jobDescription: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:1000/postjob/", formData);
      console.log("Response from backend:", response.data);
  } catch (error) {
      console.error("Error sending data to backend:", error);
  }
  };

  return (
    <div className="lg:px-8  py-20">
      <form className='bg-white py-12 lg:py-16 flex justify-between items-center flex-col' onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-sm mb-2 font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              id="jobTitle"
              placeholder="Job Title"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[40vw] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm mb-2 font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              id="companyName"
              placeholder="Company Name"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[40vw] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="minSalary" className="block text-sm mb-2 font-medium text-gray-700">Minimum Salary</label>
            <input
              type="number"
              name="minSalary"
              value={formData.minSalary}
              onChange={handleChange}
              id="minSalary"
              placeholder="Minimum Salary"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[40vw] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="maxSalary" className="block text-sm mb-2 font-medium text-gray-700">Maximum Salary</label>
            <input
              type="number"
              name="maxSalary"
              value={formData.maxSalary}
              onChange={handleChange}
              id="maxSalary"
              placeholder="Maximum Salary"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[40vw] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="salaryType" className="block text-sm mb-2 font-medium text-gray-700">Salary Type</label>
            <select
              name="salaryType"
              value={formData.salaryType}
              onChange={handleChange}
              id="salaryType"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[40vw] rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Salary Type</option>
              <option value="Hourly">Hourly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="jobLocation" className="block text-sm mb-2 font-medium text-gray-700">Job Location</label>
            <input
              type="text"
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              id="jobLocation"
              placeholder="Job Location"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[40vw] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postingDate" className="block text-sm mb-2 font-medium text-gray-700">Posting Date</label>
            <input
              type="date"
              name="postingDate"
              value={formData.postingDate}
              onChange={handleChange}
              id="postingDate"
              placeholder="Posting Date"
              className="border-gray-300 border px-2 py-[6px] w-[80vw] lg:w-[40vw] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experienceLevel" className="block text-sm mb-2 font-medium text-gray-700">Experience Level</label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              id="experienceLevel"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[40vw] rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Experience Level</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="employmentType" className="block text-sm mb-2 font-medium text-gray-700">Employment Type</label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              id="employmentType"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[40vw] rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Employment Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">internship</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="companyLogo" className="block text-sm mb-2 font-medium text-gray-700">Company Logo URL</label>
            <input
              type="text"
              name="companyLogo"
              value={formData.companyLogo}
              onChange={handleChange}
              id="companyLogo"
              placeholder="Company Logo URL"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[40vw] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
         <label htmlFor="requiredSkills" className="block text-sm mb-2 font-medium text-gray-700">Required Skills</label>
            <input
              type="text"
              name="requiredSkills"
              value={formData.requiredSkills}
              onChange={handleChange}
              id="requiredSkills"
              placeholder="Required Skills"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[81vw] rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        <div className="mb-4">
            <label htmlFor="jobDescription" className="block text-sm mb-2 font-medium text-gray-700">Job Description</label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              id="jobDescription"
              placeholder="Job Description"
              className="border-gray-300 border p-2 w-[80vw] lg:w-[81vw] rounded-md focus:outline-none focus:border-blue-500 resize-none h-32"
            />
          </div>
       <div className='w-full px-10 lg:px-28'>
       <button type="submit" className="bg-blue-500 text-white rounded-md py-2 px-6 mt-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Submit
        </button>
       </div>
      </form>
    </div>
  );
}

export default PostJobForm;
