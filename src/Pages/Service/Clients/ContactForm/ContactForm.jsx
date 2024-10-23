

const ContactForm = () => {

    return (
        <section className="w-full lg:p-10 p-6">

            {/* title */}
            <div className="w-full flex flex-col ">
                <h1 className="text-[2rem] font-bold underline text-blue-500 leading-[36px]">Talent Requisition Form</h1>
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
                                placeholder="Type Your Company Name "
                                className="peer  border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                            />
                            <span
                                className="  absolute   -top-3  left-2  text-[#3B9DF8] bg-white transition-all duration-300 ">
                                Company Name
                            </span>
                        </label>
                    </div>
                </div>
                <div className="flex  mt-[20px] flex-col sm:flex-row items-center gap-[20px]">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="relative">
                            <input type="text"
                                placeholder="Type Your Job Title"
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
                                placeholder="Type Sellary Range"
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
    );
};

export default ContactForm;
