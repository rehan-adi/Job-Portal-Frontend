import { Outlet } from 'react-router-dom';import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
;

function Home() {

  return (
    <div className='min-h-screen '>
      <Navbar />
      <div className="text-black min-h-screen w-full">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Home