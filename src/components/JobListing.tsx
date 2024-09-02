import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../components/ui/card.tsx";
import { Button } from "./ui/button.tsx";

const JobListing = () => {
  const jobListings = [
    {
      id: "1",
      title: "Frontend Developer",
      description:
        "We are looking for a skilled frontend developer with experience in React.",
      requirements: [
        "3+ years experience in frontend development",
        "Proficiency in React",
        "Experience with Tailwind CSS",
      ],
      location: "Remote",
      salaryRange: "$70,000 - $90,000",
      category: "Software Development",
      employer: "Tech Corp",
    },
    {
      id: "2",
      title: "Backend Developer",
      description:
        "Join our team as a backend developer working with Node.js and Express.",
      requirements: [
        "3+ years experience in backend development",
        "Proficiency in Node.js",
        "Experience with Express",
      ],
      location: "New York, NY",
      salaryRange: "$80,000 - $100,000",
      category: "Software Development",
      employer: "Innovate Inc",
    },
    {
      id: "3",
      title: "Full Stack Developer",
      description:
        "Looking for a full stack developer skilled in both frontend and backend technologies.",
      requirements: [
        "3+ years experience in full stack development",
        "Proficiency in React and Node.js",
        "Experience with cloud platforms",
      ],
      location: "San Francisco, CA",
      salaryRange: "$100,000 - $120,000",
      category: "Software Development",
      employer: "StartUp Co.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-7xl mt-12 mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Job Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobListings.map((job) => (
            <Card
              key={job.id}
              className="border dark border-white border-opacity-15 rounded-lg shadow-lg"
            >
              <CardHeader className="border-b border-white border-opacity-15">
                <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                <CardDescription className="text-[#9CA3AF] font-medium text-sm">
                  {job.employer}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">{job.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t flex justify-start items-start gap-1 flex-col pt-5 border-white border-opacity-15">
                <span className="text-[#9CA3AF] text-base font-medium">
                  Location: {job.location}
                </span>
                <span className="text-[#9CA3AF] text-base font-medium">
                  Salary: {job.salaryRange}
                </span>
                <span className="text-[#9CA3AF] text-base font-medium">
                  Category: {job.category}
                </span>
                <Button variant="default" size="lg" className="mt-4">Apply</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
