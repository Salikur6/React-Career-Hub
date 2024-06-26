import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import Jobs from './components/Jobs/Jobs.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {

        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/statistic',
        element: <Statistics></Statistics>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../public/jobs.json')
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../public/jobs.json')
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
