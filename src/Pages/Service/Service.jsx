import { Link } from "react-router-dom";

const Service = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-6 bg-gray-50 min-h-screen">
                <div
                    className="hero "
                    style={{
                        backgroundImage: "url(jobSeeker.jpg)",
                        opacity: 0.75
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <p className="mb-5">
                                I’m a
                            </p>
                            <h1 className="mb-5 text-5xl font-bold">
                                JOB SEEKER
                            </h1>
                            <p className="mb-5">
                                Discover more job opportunities by joining our talent pool.
                            </p>
                            <Link to={'/candidate'} className="px-3 hover:bg-blue-300 hover:text-black text-lg py-2 border-white border rounded-xl"> Tell Me More</Link>
                        </div>
                    </div>
                </div>

                <div
                    className="hero "
                    style={{
                        backgroundImage: "url(employer.jpg)",
                        opacity: 0.75
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <p className="mb-5">
                                I’m an
                            </p>
                            <h1 className="mb-5 text-5xl font-bold">EMPLOYER</h1>
                            <p className="mb-5">
                                Find qualified foreign professionals to fill your employment gaps.
                            </p>
                            <Link to={'/employer'} className="px-3 py-2 hover:bg-blue-300 hover:text-black text-lg border-white border rounded-xl">Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="  bg-gray-50 p-6">
                <h1 className="text-3xl  font-bold underline  text-blue-500">Why choose us?</h1>

                <div className="grid grid-cols-1 gap-3 p-3 md:grid-cols-3">

                    <div className="space-y-3 mt-2">
                        <h1 className="text-2xl  font-bold">Transparent Services</h1>
                        <p className="tracking-wider font-medium text-lg">
                            <span className="font-bold">At Euro-Bangla Employment Company ,</span> we believe that being candid fosters trust and goodwill. As such, we will provide any information you need on both the company and available jobs, so that you can make an informed decision.
                            <br />
                            This includes a clear presentation of salary ranges, working hours, responsibilities, as well as requirements.specializes in helping qualified and experienced candidates find their dream jobs with a full range of vacant positions available throughout Europe.  We are well aware that job searching processes can often be stressful and frustrating. This is why Euro-Bangla offers its services to help you better ease through it.
                        </p>
                    </div>
                    <div className="space-y-3 mt-2">
                        <h1 className="text-2xl  font-bold">Hassle-free Application</h1>
                        <p className="tracking-wider font-medium text-lg">
                            We value your time as much as you do. This is why we strive to make your application process as quick as possible. With Euro-Bangla, you can easily apply to multiple jobs with just a few clicks!
                        </p>
                    </div>
                    <div className="space-y-3 mt-2">
                        <h1 className="text-2xl  font-bold">Network of Passive Employers</h1>
                        <p className="tracking-wider font-medium text-lg">
                            There are actually more opportunities lined up for you to choose than you think. We can help bridge you with employers who are actively looking as well as those who are not..
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;