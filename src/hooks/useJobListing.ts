import axios from "axios";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface JobListing {
  id: string;
  title: string;
  employer: string;
  description: string;
  requirements: string[];
  location: string;
  salaryRange: string;
  category: string;
}

export const useJobListing = () => {
  const [jobListings, setJobListings] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/job-listing/get"
        );

        console.log('API Response:', response.data);
        
        if (response.status === 200) {
          setJobListings(response.data);
          toast.success("Job listings fetched successfully.");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch job listings.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobListings();
  }, []);

  return { jobListings, loading };
};
