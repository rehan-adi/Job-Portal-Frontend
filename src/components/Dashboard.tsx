import { Outlet } from "react-router-dom"
import Navbar from "@/components/Navbar.tsx"
import Footer from "@/components/Footer.tsx"

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