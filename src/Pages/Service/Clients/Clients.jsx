import { Link } from "react-router-dom";
import ContactForm from "./ContactForm/ContactForm";

const Clients = () => {
    return (
        <div>
            <div className="hero  bg-gray-50 p-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-full md:w-1/2">
                        <img
                            src="candidate_deal.jpg"
                            className=" rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3">
                        <h1 className="text-5xl font-bold underline  text-blue-500">Employers</h1>
                        <h1 className="text-xl font-bold">Find jobs in Europe wherever, whenever</h1>
                        <p className="py-6">
                            <span className="font-bold">Euro-Bangla Employment Company</span> specializes in helping qualified and experienced candidates find their dream jobs with a full range of vacant positions available throughout Singapore.  We are well aware that job searching processes can often be stressful and frustrating. This is why Nala offers its services to help you better ease through it.
                        </p>
                    </div>
                </div>
            </div>
            {/* Services We Offer */}
            <div className=" bg-pink-50  p-6" >
                <h1 className=" text-4xl text-blue-500 font-semibold ml-2 ">Services We Offer</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
                    <div className='shadow-md p-3'>
                        <img className='w-full shadow-lg h-72  rounded-lg' src="Compliance Services.webp" alt="" />
                        <div className='p-3 '>
                            <h2 className='text-xl font-medium my-6 text-blue-400'>Compliance Services</h2>
                            <Link className='text-lg rounded-md px-3 py-2  bg-blue-500 hover:bg-pink-500 text-white'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md p-3'>
                        <img className='w-full shadow-lg h-72  rounded-lg' src="PermanentRecruitment.jpg" alt="" />
                        <div className='p-3 '>
                            <h2 className='text-xl font-medium my-6 text-blue-400'>Permanent Recruitment</h2>
                            <Link className='text-lg rounded-md px-3 py-2  bg-blue-500 hover:bg-pink-500 text-white'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md p-3'>
                        <img className='w-full shadow-lg h-72  rounded-lg' src="news-5pack-greenjobs.jpeg" alt="" />
                        <div className='p-3 '>
                            <h2 className='text-xl font-medium my-6 text-blue-400'>Green Recruitment and Consultancy</h2>
                            <Link className='text-lg rounded-md px-3 py-2  bg-blue-500 hover:bg-pink-500 text-white'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md p-3'>
                        <img className='w-full shadow-lg h-72  rounded-lg' src="Talent-Acquisition-Job-Description.jpeg" alt="" />
                        <div className='p-3 '>
                            <h2 className='text-xl font-medium my-6 text-blue-400'>Talent Acquisition</h2>
                            <Link className='text-lg rounded-md px-3 py-2  bg-blue-500 hover:bg-pink-500 text-white'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md p-3'>
                        <img className='w-full shadow-lg h-72  rounded-lg' src="Performance-Management.jpg" alt="" />
                        <div className='p-3 '>
                            <h2 className='text-xl font-medium my-6 text-blue-400'>Performance Management</h2>
                            <Link className='text-lg rounded-md px-3 py-2  bg-blue-500 hover:bg-pink-500 text-white'>See More</Link>
                        </div>
                    </div>
                    <div className='shadow-md p-3'>
                        <img className='w-full shadow-lg h-72  rounded-lg' src="BackgroundChecks.webp" alt="" />
                        <div className='p-3 '>
                            <h2 className='text-xl font-medium my-6 text-blue-400'>Background Checks</h2>
                            <Link className='text-lg rounded-md px-3 py-2  bg-blue-500 hover:bg-pink-500 text-white'>See More</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* why deal */}
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
            {/*  */}
            <ContactForm></ContactForm>
        </div>
    );
};

export default Clients;