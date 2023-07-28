import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './data/jobs.json'
import { addToDb } from './utilities/fakeDb';


const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  console.log("data",data)
  useEffect(() => {
    const jobId = Number(id); 
    const jobData = data.find(job => job.id === jobId);
    if (jobData) setJob(jobData);
  }, [id]);

  if (!job) return <h2>Job not found.</h2>;
  const handleClick = () => {
    addToDb(job.id)
  };
  return (
    <div className='flex justify-between items-center sm:flex-col md:flex-row lg:flex-row gap-[400px]'>
      <div>
      <p>Job Description:{job.description}</p>
      <h2>Job Responsibility:{job.jobresponsibility} </h2>
      <p>Educational Requirements:{job.educationalRequirements}</p>
      <p>Experiences:{job.experiences}</p>
      </div>
   
      <div>
       
      <p>Salary range: {job.salaryrange}</p>
      <p>Job Title:{job.profession }</p> 
      <p>Phone: {job.phone}</p>
      <p>Email: {job.email}</p>
          
        <p>Adress: {job.address}</p>
        <button onClick={handleClick}>Apply Now</button>
      </div>
          
         
    </div>
  );
};

export default JobDetails;