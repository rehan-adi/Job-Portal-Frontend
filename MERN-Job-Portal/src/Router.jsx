import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './pages/Home'
import MyJobs from './pages/MyJobs'
import PostJobForm from "./components/PostJobForm";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/my-jobs",
          element: <MyJobs />,
        },
        {
          path: "/postjob",
          element: <PostJobForm />,
        },
        {
          path: "*",
          element: <h1>404</h1>,
        },
      ],
    },
  ]);


  export default router