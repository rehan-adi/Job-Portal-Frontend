import axios from "axios";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export const useJobListing = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await axios.get(
          "https://hiresphere.onrender.com/api/v1/job-listing/get"
        );
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
