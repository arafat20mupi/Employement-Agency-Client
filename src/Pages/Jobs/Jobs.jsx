import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import JobsCard from "./JobsCard";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [sortBy, setSortBy] = useState("newest");
    const [experienceOpen, setExperienceOpen] = useState(false);
    const [jobTypeOpen, setJobTypeOpen] = useState(false);
    const [salaryRangeOpen, setSalaryRangeOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const axios = useAxiosPublic();
    // Pagination done
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    console.log(setItemsPerPage);
    // Filter
    const [experience, setExperience] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [employType, setEmployType] = useState([]);
    const [salaryRange, setSalaryRange] = useState([]);

    // Toggling the dropdowns
    const toggleExperience = () => setExperienceOpen(!experienceOpen);
    const toggleJobType = () => setJobTypeOpen(!jobTypeOpen);
    const toggleSalaryRange = () => setSalaryRangeOpen(!salaryRangeOpen);

    // Fetch jobs from the backend with filtering, sorting, and searching
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`/api/getJobsByFlitterSearch`, {
                    params: {
                        page: currentPage,
                        limit: itemsPerPage,
                        sortBy,
                        searchQuery,
                        experience,
                        remoteOption: jobType,
                        salaryRange,
                        employmentType: employType,
                    },
                });
                setJobs(response?.data?.jobs);
                console.log(response?.data?.jobs);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.log(error);
            }
        };
        fetchJobs();
    }, [
        itemsPerPage,
        axios,
        currentPage,
        sortBy,
        searchQuery,
        experience,
        jobType,
        salaryRange,
        employType,
    ]);


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle JobType filter changes
    const handleJobTypeChange = (type) => {
        setJobType((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };
    const handleEmploymentTypeChange = (type) => {
        setEmployType((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    // Handle Salary Range filter changes
    const handleSalaryRangeChange = (range) => {
        setSalaryRange((prev) =>
            prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
        );
    };

    const handleExperienceChange = (type) => {
        setExperience((prev) => {
            if (prev.includes(type)) {
                return prev.filter((level) => level !== type); // Remove if already selected
            } else {
                return [...prev, type]; // Add new selection
            }
        });
    };


    return (
        <div className="p-6 bg-gray-50">
            {/* Header Section */}
            <div className="p-6 md:p-14  flex flex-col items-center border-b-4  border-blue-500">
                <h1 className="text-center text-3xl md:text-5xl font-semibold text-blue-500">
                    SEARCHING JOBS IN ONE CLICK
                </h1>
                <p className="text-center text-lg w-2/3 text-gray-600 mt-4">
                    Find your next opportunity or hire top talent for your team. Discover
                    a range of jobs that suit your skills and career aspirations.
                </p>
            </div>
            {/* Search and Sort Section */}
            <div className="flex flex-col md:flex-row items-center container mx-auto justify-start gap-2 text-blue-500 mt-4 md:mt-6">
                <div className="flex justify-end flex-col">
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 text-gray-700 border-blue-500 rounded placeholder-gray-500 bg-white outline-none focus:placeholder-transparent border-2"
                        type="text"
                        name="search"
                        placeholder="Search for jobs"
                    />
                </div>
                {/* Sort by Section */}
                <div className="flex flex-col md:flex-row items-center container mx-auto justify-end gap-2 text-blue-500 mt-4 md:mt-6">
                    <label className="text-lg font-medium">Sort by</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border rounded px-3 py-2 mt-2 md:mt-0"
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto mt-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="col-span-1 bg-gray-50 text-blue-500 p-4 rounded-lg h-auto">
                    <h2 className="text-xl font-bold mb-4 text-center">Filters</h2>
                    {/* Experience Level Dropdown */}
                    <div className="border-b mb-4">
                        <div
                            className="flex justify-between items-center cursor-pointer py-2"
                            onClick={toggleExperience}
                        >
                            <span className="text-lg font-medium">Experience level</span>
                            <span>
                                {experienceOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </div>
                        {experienceOpen && (
                            <div className="py-2">
                                {["0-1", "2-3", "3+"].map((range) => (
                                    <label key={range} className="flex items-center mt-2">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={experience.includes(range)}
                                            onChange={() => handleExperienceChange(range)}
                                        />
                                        {range === "0-1" ? "Beginner" : range === "2-3" ? "Intermediate" : "Expert"}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Job Type Dropdown */}
                    <div className="border-b mb-4">
                        <div
                            className="flex justify-between items-center cursor-pointer py-2"
                            onClick={toggleJobType}
                        >
                            <span className="text-lg font-medium">Job type</span>
                            <span>{jobTypeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </div>
                        {jobTypeOpen && (
                            <div className="py-2">
                                {["FullTime", "PartTime"].map((type) => (
                                    <label className="flex items-center mt-2" key={type}>
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={employType.includes(type)}
                                            onChange={() => handleEmploymentTypeChange(type)}
                                        />
                                        {type}
                                    </label>
                                ))}
                                {["OnSite", "Remote", "Hybrid"].map((type) => (
                                    <label className="flex items-center mt-2" key={type}>
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={jobType.includes(type)}
                                            onChange={() => handleJobTypeChange(type)}
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Salary Range Dropdown */}
                    <div className="border-b mb-4">
                        <div
                            className="flex justify-between items-center cursor-pointer py-2"
                            onClick={toggleSalaryRange}
                        >
                            <span className="text-lg font-medium">Salary Range</span>
                            <span>
                                {salaryRangeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </span>
                        </div>
                        {salaryRangeOpen && (
                            <div className="py-2">
                                {["0-100", "100-500", "500-1000", "1000-5000", "5000+"].map(
                                    (range) => (
                                        <label className="flex items-center mt-2" key={range}>
                                            <input
                                                type="checkbox"
                                                className="mr-2"
                                                checked={salaryRange.includes(range)}
                                                onChange={() => handleSalaryRangeChange(range)}
                                            />
                                            {range === "5000+"
                                                ? "$5K+"
                                                : `$${range.split("-").join(" to ")}`}
                                        </label>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Jobs Section */}
                <div className="col-span-1 lg:col-span-3 grid grid-cols-1 gap-4 md:gap-2">
                    {jobs?.length >= 0 &&
                        jobs?.map((job) => <JobsCard key={job._id} job={job} />)}
                    {!jobs && <h1>Jobs Not FOund</h1>}

                    {/* Pagination Buttons */}
                    <div className="mt-4 ml-3 md:ml-0 md:flex justify-center items-center">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-2 py-2 rounded mx-1 ${currentPage === page
                                    ? "bg-blue-700 text-white"
                                    : "bg-blue-500 text-white"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;