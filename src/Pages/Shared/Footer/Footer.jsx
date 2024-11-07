import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaMedium } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-pink-50 boxShadow rounded-xl w-full p-6 sm:p-9">
            <div className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full">
                <div className="w-full sm:w-[25%] ">
                    <img src="logo.png" alt="logo" className="w-[100px] mb-[20px]" />
                    <div className="flex flex-col gap-[20px] text-primary">
                        <span><a className="text-lg flex items-center gap-[8px] cursor-pointer">
                            <IoLocationOutline className="text-[1.1rem]" />
                            1st FLOOR, MODINA MARKET, SYLHET
                        </a></span>
                        <span><a className="text-lg flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                            <MdOutlineEmail className="text-[1.1rem]" />
                            EuroBanglaEmployment@gmail.com
                        </a></span>
                        <span><a className="text-lg flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                            <MdOutlineLocalPhone className="text-[1.1rem]" />
                            +8801334543645
                        </a></span>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-3xl font-semibold mb-4 text-blue-700">Services</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <Link to='/employer' className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">International Recruitment</Link>
                        <Link to='/employer' className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Employee Training & Onboarding</Link>
                        <Link to='/employer' className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">HR Outsourcing & Payroll</Link>
                        <Link to='/employer' className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Employee Training & Onboarding</Link>
                        <Link to='/employer' className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Market Insights & HR Consulting</Link>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-3xl font-semibold mb-4 text-blue-700">Company</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <Link to='/service' className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Service</Link>
                        <Link to='/' className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Features</Link>
                        <Link to='/about' className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">About</Link>
                        <Link to='/' className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Blog</Link>
                        <Link to='/contact' className="text-lg text-text hover:text-primary cursor-pointer transition-all duration-200">Contact Us</Link>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-3xl font-semibold mb-4 text-blue-700">Our Social Media</h3>
                    <div className="flex flex-col gap-3">
                        {[
                            { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com" },
                            { name: "Facebook", icon: <FaFacebook />, link: "https://facebook.com" },
                            { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com" },
                            { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com" },
                            { name: "Medium", icon: <FaMedium />, link: "https://medium.com" },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer transition-all duration-200"
                            >
                                <span className="text-2xl">{social.icon}</span>
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center">
                <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-600">
                    © {new Date().getFullYear()} <span className="font-bold">Euro-Bangla Employment Company</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
