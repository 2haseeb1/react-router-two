import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import jobsDataLoader from "./loader/jobsDataLoader";
import Home from "./Home";
import JobDetails from "./JobDetails";
import StoredData from "./StoredData";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "job/:id",
    element: <JobDetails />,
    loader: jobsDataLoader,
  },
  {
    path: "applied-jobs",
    element: <StoredData/>, 
  },
  {
    path: "item/:id",
    element: <JobDetails/>, 
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
