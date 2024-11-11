import { Link } from "react-router-dom";
import CanditateContact from "./CanditateContact/CanditateContact";

const Candidates = () => {
    return (
        <div className="px-6">
            <div className="hero  bg-gray-50 p-6">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full md:w-1/2">
                        <img
                            src="labor-market.webp"
                            className=" rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3">
                        <h1 className="text-5xl font-bold underline  text-blue-500">Candidates</h1>
                        <h1 className="text-xl font-bold">Find jobs in Europe wherever, whenever</h1>
                        <p className="py-6">
                            <span className="font-bold">Euro-Bangla Employment Company</span> specializes in helping qualified and experienced candidates find their dream jobs with a full range of vacant positions available throughout Singapore.  We are well aware that job searching processes can often be stressful and frustrating. This is why Nala offers its services to help you better ease through it.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="text-4xl  text-blue-500 font-bold py-5">
                Our Services
            </h2>
            <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div 
                data-aos="fade-up" data-aos-duration="1000"
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="steel recruitment services.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">steel recruitment services</h1>
                        <Link to={'/candidateDetails'}
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </Link>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000"
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="Hotel & Catering Recruitment Consultancy Services.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Hotel & Resturent Recruitment Consultancy Services</h1>
                        <Link to={'/candidateDetails'}
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </Link>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000"
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="Mining Recruitment Services.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Mining Recruitment Services</h1>
                        <Link to={'/candidateDetails'}
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </Link>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000"
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="Security Guard Recruitment Services.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Security Guard Recruitment Services</h1>
                        <Link to={'/candidateDetails'}
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </Link>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000"
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="Hospitality Recruitment Services.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Hospitality Recruitment Services</h1>
                        <Link to={'/candidateDetails'}
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </Link>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000"
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="recruitment-service-for-construction-industry-500x500.webp"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Construction recruitment services</h1>
                        <Link to={'/candidateDetails'}
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </Link>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000"
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="farmer_training.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Agreculture recruitment services</h1>
                        <Link to={'/candidateDetails'}
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </Link>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
            </div>
           <CanditateContact></CanditateContact>
        </div>

    );
};

export default Candidates;