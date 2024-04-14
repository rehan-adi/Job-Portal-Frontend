import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import JobFilter from '../components/JobFilter';

function Home() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Banner onSearch={handleSearch}/>
      <JobFilter searchQuery={searchQuery}/>
    </div>
  )
}

export default Home