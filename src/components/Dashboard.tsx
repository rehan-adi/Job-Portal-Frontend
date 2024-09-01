import Footer from "@/pages/Footer.tsx"
import Navbar from "@/pages/Navbar.tsx"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-black w-full'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Dashboard