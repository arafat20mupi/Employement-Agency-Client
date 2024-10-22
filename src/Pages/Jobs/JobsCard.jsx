/* eslint-disable react/prop-types */
import { useState } from "react";
import JobDetails from "./JobDetails";

const JobsCard = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const {
    jobTitle,
    jobDescription,
    skills,
    salaryRange,
    company,
    location,
    employmentType,
    remoteOption,
    experience,
  } = job;

  const toggleDetails = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectedJob(job);
    } else {
      setSelectedJob(null);
    }
  };

  const closeDetails = () => {
    setIsOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <div
        onClick={toggleDetails}
        className="border p-4 mb-4 rounded-lg shadow-lg hover:border-2 bg-gray-50 hover:border-blue-500 cursor-pointer transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 space-y-2 md:space-y-0">
          <h1 className="text-lg md:text-xl font-semibold">{jobTitle}</h1>
          <p className="text-gray-500 text-sm md:text-base">{location}</p>
        </div>

        <div className="text-gray-700 text-sm md:text-base mb-2 break-words whitespace-pre-wrap">
  {jobDescription}
</div>


        <div className="flex flex-wrap space-x-2 mb-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-50 text-xs md:text-sm px-3 py-1 md:py-2 text-blue-500 rounded-full mb-2"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-gray-500 text-sm md:text-base">
          <p>
            {employmentType} - {remoteOption}
          </p>
          <p>
            Experience: {experience ? `${experience} Years` : "No Experience Needed"}
          </p>
          <p>Company: {company}</p>
          <p className="text-blue-500 mt-2 md:mt-0">{salaryRange}</p>
        </div>
      </div>

      {isOpen && selectedJob && (
        <JobDetails
          toggleDetails={toggleDetails}
          closeDetails={closeDetails}
          isOpen={isOpen}
          job={selectedJob}
        />
      )}
    </>
  );
};

export default JobsCard;