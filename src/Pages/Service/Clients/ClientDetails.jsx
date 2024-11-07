const ClientDetails = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4 md:px-10 lg:px-20">
            <div className="max-w-5xl w-full space-y-10">

                {/* Header */}
                <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Employer Services</h2>

                {/* Introduction */}
                <p className="text-center text-lg text-gray-700 mb-6">
                    Euro-Bangla partners with various businesses, organizations, and individuals to provide top-tier support and recruitment services. We are committed to ensuring our clients success and satisfaction.
                </p>

                {/* Details Sections */}
                <div className="space-y-10">

                    {/* Section: End to End Recruitment */}
                    <section className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <h3 className="text-2xl font-semibold text-blue-700">End to End Recruitment</h3>
                        <p className="text-gray-700">
                            Euro-Bangla is a leader in regional recruitment, known for our broad market reach and specialized approach. Our team sources top talent from local and international markets to meet the needs of diverse industries. With a base in Dubai and over a decade of experience, we are recognized as the largest, most diverse recruiter in Europe.
                        </p>
                    </section>

                    {/* Section: Benchmark */}
                    <section className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <h3 className="text-2xl font-semibold text-blue-700">Benchmark</h3>
                        <p className="text-gray-700">
                            Our benchmark for success is founded on delivering exceptional service, expertise, and trust. We have earned a reputation for integrity and reliability, establishing preferred partnerships with both local and global brands throughout Europe.
                        </p>
                    </section>

                    <h3 className="text-xl md:text-3xl font-semibold text-blue-700">The Euro-Bangla Approach</h3>
                    {/* Section: The Euro-Bangla Approach */}
                    <section className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <h4 className="text-xl font-medium text-blue-600">A True Partnership</h4>
                        <p className="text-gray-700">
                            Our approach is built on trust and honesty. We focus on understanding the unique needs of both our clients and candidates, ensuring a partnership that aligns with our clients goals and candidates aspirations.
                        </p>
                    </section>

                    {/* Section: International Coverage */}
                    <section className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <h3 className="text-2xl font-semibold text-blue-700">International Coverage</h3>
                        <p className="text-gray-700">
                            With global reach, we attract top talent needed to support economic growth in the Gulf region. Our local market knowledge, combined with international expertise, positions us as a reliable partner in fulfilling staffing needs.
                        </p>
                    </section>

                    {/* Section: Investment in People */}
                    <section className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <h3 className="text-2xl font-semibold text-blue-700">Investment in People</h3>
                        <p className="text-gray-700">
                            People are at the heart of our business. Our consultants bring a blend of global recruitment experience and local market insight. We continually invest in training and development to maintain our industry-leading position.
                        </p>
                    </section>

                    {/* Section: Contingency Search & Selection */}
                    <section className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <h3 className="text-2xl font-semibold text-blue-700">Contingency Search & Selection</h3>
                        <p className="text-gray-700">
                            Our contingency search leverages an expansive database across Europe, South East Asia, Africa, and Australia. Combined with targeted advertising, this approach allows us to source specialized skills and talent tailored to our clients’ specific needs.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;
