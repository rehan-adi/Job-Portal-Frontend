import { Outlet } from "react-router-dom"
import Footer from "@/components/Footer.tsx"
import Navbar from "@/components/Footer.tsx"

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