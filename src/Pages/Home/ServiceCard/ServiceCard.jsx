import { Link } from "react-router-dom";

const ServiceCard = () => {
    return (
        <div className="flex gap-2 p-6 bg-gray-50 min-h-screen">
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
                        <Link className="px-3 py-2 border-white border rounded-xl"> Tell Me More</Link>
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
                        <Link className="px-3 py-2 border-white border rounded-xl">Our Services</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;