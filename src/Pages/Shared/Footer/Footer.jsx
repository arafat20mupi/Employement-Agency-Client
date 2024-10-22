
// react icons
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {

    return (
        <footer className="bg-pink-50 boxShadow rounded-xl w-full p-6 sm:p-9">
            <div
                className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full">
                <div className="w-full sm:w-[25%] ">
                    <img src="logo.png" alt="logo"
                        className="w-[100px] mb-[20px]" />
                    <div className="flex flex-col gap-[20px] text-primary">
                        <span><a
                            className="text-lg flex items-center gap-[8px] cursor-pointer">
                            <IoLocationOutline className="text-[1.1rem]" />
                            Kulaura, Moulvibazar, Sylhet
                        </a></span>
                        <span><a
                            className="text-lg flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                            <MdOutlineEmail className="text-[1.1rem]" />
                            EuroBanglaEmployment@gmail.com
                        </a></span>
                        <span><a
                            className="text-lg flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                            <MdOutlineLocalPhone className="text-[1.1rem]" />
                            +8801305282768
                        </a></span>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-3xl font-semibold text-text mb-2">Services</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">International Recruitment</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Employee Training & Onboarding</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">HR Outsourcing & Payroll</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Employee Training & Onboarding</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Market Insights & HR Consulting</p>
                    </div>
                </div>


                <div className="">
                    <h3 className="text-3xl font-semibold text-text mb-2">Company</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Service</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Features</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Our
                            Team</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Blog</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Contact
                            Us</p>
                    </div>
                </div>


                <div className="">
                    <h3 className="text-3xl font-semibold mb-2">Our Social Media</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Instagram</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Facebook</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Twitter</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Linkedin</p>
                        <p className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Medium</p>
                    </div>
                </div>


            </div>
            <div
                className="border-t pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
                <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-600">
                    © {new Date().getFullYear()} <span className="font-bold">Euro-Bangla Employment Company</span>. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
