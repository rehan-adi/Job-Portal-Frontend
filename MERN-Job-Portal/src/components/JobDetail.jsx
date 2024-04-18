import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/postjob/${id}`);
        console.log('Response:', response.data); 
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!job || !job.jobTitle || !job.jobDescription) {
    return <div>Job details not found.</div>;
  }

  return (
    <div className='w-full h-screen bg-red-950 py-28'>
      <h1>Hiiiiiiiiiiiiiiiiiii</h1>
      <h1>{job.jobTitle}</h1>
      <p className="lg:pr-40 w-[70vw] lg:w-auto opacity-80">{job.jobDescription}</p>
    </div>
  );
}

export default JobDetail;
