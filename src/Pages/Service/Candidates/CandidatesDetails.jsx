const CandidatesDetails = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4 md:px-10 lg:px-20">
            <div className="max-w-5xl w-full space-y-8">

                {/* Header */}
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Our Commitment to Candidates</h2>

                {/* Introduction */}
                <p className="text-center text-lg text-gray-700 mb-6">
                    At Euro-Bangla, we believe that brilliant work starts with brilliant people. Our commitment is to provide you with the best service and opportunities to advance your career.
                </p>

                {/* Requirements Section */}
                <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-blue-700">Job Application Requirements</h3>
                    <ul className="list-disc  list-inside text-gray-700 space-y-2">
                        <li>Passport</li>
                        <li>National ID Card</li>
                        <li>Police Clearance Certificate</li>
                        <li>Educational Certificate</li>
                        <li>Recent Photograph</li>
                        <li>Experience in this field</li>
                    </ul>
                </div>

                {/* Commitment Section */}
                <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-blue-700">Our Commitment to Candidates</h3>
                    <p>
                        At Euro-Bangla, we prioritize our candidates. From your first interaction, we’re here to support and promote your unique skills, connecting you with positions where you can reach—and surpass—your potential.
                    </p>
                    <p>
                        We value diversity and work closely with our clients to ensure decisions are based on individual merit and capability.
                    </p>
                    <p>
                        We’re dedicated to making your job search successful, using our expertise and network to find the best role for you. We understand the stress that comes with uncertainty, so we commit to keeping you informed at every step.
                    </p>
                </div>

                {/* Outsourced Staff Section */}
                <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-blue-700">Our Approach for Outsourced Staff</h3>
                    <p>
                        You are a valued member of our workforce. Our Europe-based team is here to guide and support you throughout your journey, ensuring a smooth and positive experience for both our clients and staff.
                    </p>
                    <p>
                        Euro-Bangla Labour Solutions treats all outsourced staff with respect and care, maintaining open communication and providing exceptional customer service.
                    </p>
                </div>

                {/* Testimonials Section */}
                <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-blue-700">Testimonials</h3>
                    <blockquote className="italic text-gray-600 border-l-4 border-blue-700 pl-4">
                        Whether you have been in the region for years or are new, Euro-Bangla is the best first stop for a remarkable recruitment experience. I hold my experience with them very close to my heart.
                    </blockquote>
                    <p className="text-sm text-gray-500">- Candidate, Legal Assistant</p>
                </div>

                {/* Job Opportunities Section */}
                <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-blue-700">Find Jobs in Europe, Croatia & Middle East</h3>
                    <p>
                        Euro-Bangla offers premier job opportunities across Europe, Europe, and the Middle East. Our expertise covers sectors such as Accounting, Finance, IT, and more, making us a trusted partner for professionals aiming to advance their careers.
                    </p>
                    <p>
                        Additionally, Euro-Bangla Labour Solutions provides tailored employee outsourcing services within Europe, allowing clients to seamlessly integrate skilled talent to meet their unique business needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CandidatesDetails;
