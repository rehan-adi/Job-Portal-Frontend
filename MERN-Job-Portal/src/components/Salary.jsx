import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaLevelUpAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

function Salary() {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const response = await axios.get("http://localhost:1000/postjob/salary");
        setSalaries(response.data.salary);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSalaries();

    // Cleanup function (optional)
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div className="max-h-fit bg-[#F2F3F4] py-32 w-full">
      <h1 className="text-4xl text-black font-bold px-24 mb-16">Salaries</h1>
      <div className="flex px-24 justify-center">
        <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {salaries.map((salary, index) => (
            <li key={index} className="bg-white border shadow-md p-6 w-[28vw] rounded-lg">
                <div className="flex justify-between">
                <div>
                <div className="mb-4 font-semibold text-xl">
                {salary.jobTitle}
              </div>
              <div className="mb-4 font-semibold text-gray-600">
                {salary.companyName}
              </div>
                </div>
              <div className="mb-4">
                <img
                  src={salary.companyUrl}
                  alt={salary.companyName}
                  className="w-20 h-20 object-contain mx-auto mb-2"
                />
              </div>
              </div>
              <div className="flex items-center gap-6 mt-4">
              <div className="mb-4">
                <span className="font-semibold"><MdAttachMoney className="inline-block text-lg mb-1" /></span> {salary.salaryType}
              </div>
              <div className="mb-4">
              <span className="font-semibold"><HiOutlineCurrencyDollar className="inline-block mb-1 text-lg"/></span> {salary.minSalary} - {salary.maxSalary}
              </div>
              <div className="mb-4">
                <span className="font-semibold"><FaLevelUpAlt className="inline-block mb-1 mr-1" /></span>{" "}
                {salary.experienceLevel}
              </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Salary;
