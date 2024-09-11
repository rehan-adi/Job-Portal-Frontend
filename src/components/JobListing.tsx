import { Loader2 } from "lucide-react";
import { Button } from "./ui/button.tsx";
import { useJobListing } from "@/hooks/useJobListing.ts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "../components/ui/card.tsx";

const JobListing = () => {
  const { jobListings, loading } = useJobListing();

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <Loader2 className="h-7 w-7 animate-spin mr-3"/> 
          <p className="text-center text-sm">Loading job listings...</p>
        </div>
      ) : Array.isArray(jobListings) && jobListings.length > 0 ? (
        <div className="max-w-7xl mt-12 mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">Job Listings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobListings.map((job) => (
              <Card
                key={job.id}
                className="border dark border-white border-opacity-15 rounded-lg shadow-lg"
              >
                <CardHeader className="border-b border-white border-opacity-15">
                  <CardTitle className="text-xl font-bold">
                    {job.title}
                  </CardTitle>
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
                    Salary:
                    {typeof job.salaryRange === "object"
                      ? `${job.salaryRange.min} - ${job.salaryRange.max}`
                      : job.salaryRange}
                  </span>
                  <span className="text-[#9CA3AF] text-base font-medium">
                    Category: {job.category}
                  </span>
                  <Button variant="default" size="lg" className="mt-4">
                    Apply
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-white">No job listings available.</p>
      )}
    </div>
  );
};

export default JobListing;
