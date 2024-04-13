import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import JobFilter from '../components/JobFilter';

function Home() {

  const [jobRole, setJobRole] = useState('');

    const handleJobRoleChange = (event) => {
      setJobRole(event.target.value);
    };

  return (
    <div>
      <Banner jobRole={jobRole} handleJobRoleChange={handleJobRoleChange}/>
      <JobFilter />
    </div>
  )
}

export default Home