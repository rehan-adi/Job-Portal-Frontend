import { Outlet } from 'react-router-dom';import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
;

const Home: React.FC = (): JSX.Element => {

  return (
    <div className='min-h-screen '>
      <Navbar />
      <div className="text-white bg-black pt-36 min-h-screen w-full">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Home