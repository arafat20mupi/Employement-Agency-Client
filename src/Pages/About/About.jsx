/* eslint-disable react/prop-types */
import Contact from "../Contact/Contact";

const About = () => {
    return (
        <div className="bg-gray-50">
            {/* About Section */}
            <section className="p-6">
                <h1 className="text-3xl font-bold underline text-blue-500 mb-4">About Euro-Bangla Employment Company</h1>
                <p className="tracking-wide mt-2 font-medium text-lg max-w-3xl">
                    Euro-Bangla Employment Company is a leading recruitment firm in South East Asia. Our mission is to provide world-class services that connect businesses and job seekers, ensuring a smooth and successful recruitment process.
                </p>
            </section>

            {/* Branches Section */}
            <section className="bg-white shadow-sm p-6 rounded-lg mt-6">
                <h1 className="text-3xl font-bold underline text-blue-500 mb-4">Our Branches</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <BranchInfo name="Head Office" address="MODINA MARKET, SYLHET" phone="+8801334543645" email="EuroBanglaEmployment@gmail.com" />
                    <BranchInfo name="UAE Branch Office" address="ROLLA MALL, SHARJAH, UAE" phone="+971 55 936 2915" email="UAE@euro-bangla.com" />
                    <BranchInfo name="Croatia Branch Office" address="ZAGREB, CROATIA" phone="+385 95 510 8167" email="Croatia@euro-bangla.com" />
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="p-6">
                <h1 className="text-3xl font-bold underline text-blue-500 mb-4">How can we help ease your recruitment process?</h1>
                <div className="grid grid-cols-1 gap-3 p-3 md:grid-cols-2 bg-white shadow-sm rounded-lg">
                    <InfoCard title="Our Vision" description="To be the preferred recruitment firm in South East Asia, helping you grow rapidly with minimal risks and maximum results." />
                    <InfoCard title="Our Mission" description="To successfully connect businesses and job seekers through measurable and efficient recruitment services tailored to industry needs." />
                </div>
            </section>

            {/* Recruitment Header */}
            <header className="flex bg-pink-50 flex-col lg:flex-row items-center gap-6 p-6 rounded-lg mt-6 shadow-sm">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">World-Class Recruitment is Humanly Possible</h1>
                    <p className="text-lg font-medium mt-3">Hiring right is crucial for business success. We use best-practice methodologies to find the right people efficiently.</p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src="About.webp" alt="World-Class Recruitment" className="w-full rounded-lg shadow-md" />
                </div>
            </header>

            {/* Why Choose Us */}
            <section className="p-6 mt-6">
                <h1 className="text-3xl font-bold underline text-blue-500 mb-4">Why Choose Us?</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InfoCard title="Transparent Services" description="We provide candid information about the company and job roles to help you make informed decisions." />
                    <InfoCard title="Hassle-free Application" description="Our streamlined application process allows you to apply to multiple jobs with just a few clicks." />
                    <InfoCard title="Network of Employers" description="We connect you with both active and passive employers, opening up more job opportunities." />
                </div>
            </section>

            {/* Contact Section */}
            <Contact />
        </div>
    );
};

// Branch Info Component
const BranchInfo = ({ name, address, phone, email }) => (
    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-700">{name}</h2>
        <p className="text-gray-700">Address: {address}</p>
        <p className="text-gray-700">Phone: {phone}</p>
        <p className="text-gray-700">Email: {email}</p>
    </div>
);

// Info Card Component
const InfoCard = ({ title, description }) => (
    <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-blue-700">{title}</h2>
        <p className="text-gray-700">{description}</p>
    </div>
);

export default About;
