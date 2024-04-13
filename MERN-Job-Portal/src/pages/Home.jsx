import React, { useState } from 'react'
import Banner from '../components/Banner'

function Home() {

  const [jobRole, setJobRole] = useState('');
  
    const handleJobRoleChange = (event) => {
      setJobRole(event.target.value);
    };

  return (
    <div>
      <Banner query={jobRole} handleJobRoleChange={handleJobRoleChange}/>
    </div>
  )
}

export default Home