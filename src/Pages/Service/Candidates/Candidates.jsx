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
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="Oil & Gas Recruitment Services.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Oil & Gas Recruitment Services</h1>
                        <button
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div
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
                        <button
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="Hotel & Catering Recruitment Consultancy Services.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Hotel & Catering Recruitment Consultancy Services</h1>
                        <button
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="Retail & FMCG Recruitment Services.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h className="text-[1.5rem] font-bold text-white text-center capitalize">Retail & FMCG Recruitment Services
                        </h>
                        <button
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div
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
                        <button
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div
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
                        <button
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div
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
                        <button
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="EPC Recruitment Services.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">EPC Recruitment Services</h1>
                        <button
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div
                    className="w-full  h-[400px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="Healthcare & Nursing Recruitment Services.jpg"
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Healthcare & Nursing Recruitment Services</h1>
                        <button
                            className="bg-blue-500 hover:bg-pink-500 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3  transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>

            </div>
            <section className="w-full lg:p-10 p-6">

                {/* title */}
                <div className="w-full flex flex-col ">
                    <h1 className="text-[2rem] font-bold underline text-blue-500 leading-[36px]">Job Requisition Form</h1>
                </div>

                {/* form area */}
                <form className="w-full mt-[50px]">
                    <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="relative">
                                <input type="text"
                                    placeholder="Type Your Name"
                                    className="peer  border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                                />
                                <span
                                    className="  absolute   -top-3  left-2  text-[#3B9DF8] bg-white transition-all duration-300 ">
                                    Your name
                                </span>
                            </label>
                        </div>

                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="relative">
                                <input
                                    type="text"
                                    placeholder="Type Your Name "
                                    className="peer  border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                                />
                                <span
                                    className="  absolute   -top-3  left-2  text-[#3B9DF8] bg-white transition-all duration-300 ">
                                    Your Name
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="flex  mt-[20px] flex-col sm:flex-row items-center gap-[20px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="relative">
                                <input type="text"
                                    placeholder="Type Your Job Interest"
                                    className="peer  border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                                />
                                <span
                                    className="  absolute   -top-3  left-2  text-[#3B9DF8] bg-white transition-all duration-300 ">
                                    Your Role
                                </span>
                            </label>
                        </div>

                        <div className="flex  flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="relative">
                                <input type="email"
                                    placeholder="Type Your Email Address"
                                    className="peer  border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                                />
                                <span
                                    className="  absolute   -top-3  left-2  text-[#3B9DF8] bg-white transition-all duration-300 ">
                                    Your Email
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="flex  mt-[20px] flex-col sm:flex-row items-center gap-[20px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="relative">
                                <input type="text"
                                    placeholder="Type Your Phone Number"
                                    className="peer  border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                                />
                                <span
                                    className="  absolute   -top-3  left-2  text-[#3B9DF8] bg-white transition-all duration-300 ">
                                    Phone Number
                                </span>
                            </label>
                        </div>

                        <div className="flex  flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="relative">
                                <input type=""
                                    placeholder="Your Expected Sellary Range"
                                    className="peer  border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                                />
                                <span
                                    className="  absolute   -top-3  left-2  text-[#3B9DF8] bg-white transition-all duration-300 ">
                                    Sellary Range
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                        <label className="relative w-full">
                            <textarea
                                placeholder="Type Your Message "
                                className="peer min-h-[200px]  border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                            ></textarea>
                            <span
                                className=" absolute   -top-3  left-2  text-[#3B9DF8] bg-white transition-all duration-300 ">
                                Your Message
                            </span>
                        </label>
                    </div>


                    <button type="submit" className={`py-3 px-6 text-xl border bg-blue-500 hover:bg-pink-500  rounded-md outline-none mt-[10px]`}>Submit</button>

                </form>
            </section>
        </div>

    );
};

export default Candidates;