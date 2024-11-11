import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        email: "",
        phone: "",
        jobTitle: "",
        salaryRange: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs
            .send("service_az0hv0n", "template_81ty1cl", formData, "vICNp1PsRnrgq3CJm")
            .then(
                (result) => {
                    console.log("Message sent: ", result.text);
                    toast.success("Your message has been sent successfully!");
                },
                (error) => {
                    console.error("Error sending message: ", error.text);
                    toast.error("There was an error sending your message.");
                }
            );

        // Clear form after submission
        setFormData({
            name: "",
            companyName: "",
            email: "",
            phone: "",
            jobTitle: "",
            salaryRange: "",
            message: "",
        });
    };

    return (
        <section className="w-full lg:p-10 p-6">

            {/* title */}
            <div className="w-full flex flex-col">
                <h1 className="text-[2rem] font-bold underline text-blue-500 leading-[36px]">Talent Requisition Form</h1>
            </div>

            {/* form area */}
            <form onSubmit={handleSubmit} className="w-full mt-[50px]">
                <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="relative">
                            <input
                                type="text"
                                name="name"
                                placeholder="Type Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="peer border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                            />
                            <span className="absolute -top-3 left-2 text-[#3B9DF8] bg-white transition-all duration-300">
                                Your Name
                            </span>
                        </label>
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="relative">
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Type Your Company Name"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="peer border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                            />
                            <span className="absolute -top-3 left-2 text-[#3B9DF8] bg-white transition-all duration-300">
                                Company Name
                            </span>
                        </label>
                    </div>
                </div>
                
                {/* Additional form fields */}
                <div className="flex mt-[20px] flex-col sm:flex-row items-center gap-[20px]">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="relative">
                            <input
                                type="text"
                                name="jobTitle"
                                placeholder="Type Your Job Title"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                className="peer border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                            />
                            <span className="absolute -top-3 left-2 text-[#3B9DF8] bg-white transition-all duration-300">
                                Your Role
                            </span>
                        </label>
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="relative">
                            <input
                                type="email"
                                name="email"
                                placeholder="Type Your Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="peer border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                            />
                            <span className="absolute -top-3 left-2 text-[#3B9DF8] bg-white transition-all duration-300">
                                Your Email
                            </span>
                        </label>
                    </div>
                </div>

                <div className="flex mt-[20px] flex-col sm:flex-row items-center gap-[20px]">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="relative">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Type Your Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="peer border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                            />
                            <span className="absolute -top-3 left-2 text-[#3B9DF8] bg-white transition-all duration-300">
                                Phone Number
                            </span>
                        </label>
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="relative">
                            <input
                                type="text"
                                name="salaryRange"
                                placeholder="Type Salary Range"
                                value={formData.salaryRange}
                                onChange={handleChange}
                                className="peer border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                            />
                            <span className="absolute -top-3 left-2 text-[#3B9DF8] bg-white transition-all duration-300">
                                Salary Range
                            </span>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                    <label className="relative w-full">
                        <textarea
                            name="message"
                            placeholder="Type Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="peer min-h-[200px] border rounded-md outline-none px-4 py-3 w-full border-[#3B9DF8] transition-colors duration-300"
                        ></textarea>
                        <span className="absolute -top-3 left-2 text-[#3B9DF8] bg-white transition-all duration-300">
                            Your Message
                        </span>
                    </label>
                </div>

                <button type="submit" className="py-3 px-6 text-xl border bg-blue-500 hover:bg-pink-500 rounded-md outline-none mt-[10px]">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
