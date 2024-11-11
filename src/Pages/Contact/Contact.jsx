import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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
      .send("service_az0hv0n", "template_y2kxwwr", formData, "vICNp1PsRnrgq3CJm")
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
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="px-6 md:px-16 bg-gray-50 lg:px-36 mx-auto text-base text-gray-700 leading-relaxed space-y-8 py-16">
      <div>
        <h1 className="text-5xl font-bold my-10 text-blue-500">Contact Us</h1>
        <p className="my-1 md:w-1/2 text-black">
          Fill in the below form to receive a detailed estimation. One of our
          friendly team members will be in touch soon.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-10">
          <label htmlFor="name" className="text-black">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
            placeholder="Enter your Name"
          />
          <div className="grid sm:grid-cols-2 gap-y-6 gap-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-black">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-black">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
                placeholder="Enter your Phone"
              />
            </div>
          </div>
          <label htmlFor="service" className="text-black">
            Services <span className="text-red-600">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
          >
            <option disabled value="">Select Services</option>
            <option value="Talent Acquisition">Talent Acquisition</option>
            <option value="Background Checks">Background Checks</option>
            <option value="Performance Management">Performance Management</option>
            <option value="Market Analysis">Market Analysis</option>
            <option value="Permanent Recruitment">Permanent Recruitment</option>
            <option value="Green Recruitment and Consultancy">Green Recruitment and Consultancy</option>
            <option value="steel recruitment services">steel recruitment services</option>
            <option value="Hotel & Resturent Recruitment Consultancy Services">Hotel & Resturent Recruitment Consultancy Services</option>
            <option value="Mining Recruitment Services">Mining Recruitment Services</option>
            <option value="Security Guard Recruitment Services">Security Guard Recruitment Services</option>
            <option value="Hospitality Recruitment Services">Hospitality Recruitment Services</option>
            <option value="Construction recruitment services">Construction recruitment services</option>
          </select>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-black">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full h-[140px] px-5 py-[15px] ring-slate-400 ring-2 rounded outline-[#1891C8]"
            ></textarea>
          </div>
          <p className="my-2 md:w-1/2 text-black">
            I consent to the processing of my personal data for Project
            purposes. For more information, please refer to our privacy policy.
          </p>
          <input
            type="submit"
            value="Submit"
            className="w-1/3 md:w-1/6 cursor-pointer bg-blue-500 hover:bg-pink-500 text-white px-5 py-[15px] shadow-md rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
