import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const Text = () => {
    return (
        <div className="text-start p-6 bg-gray-50 space-y-6">
            <Marquee speed={100}>
                <h1 className="text-2xl md:text-3xl font-bold ">Find Jobs in  Europe ,USA , UK, Middle East And Asia.</h1>
            </Marquee>
            <p className="text-2xl font-bold">
                <span className="text-blue-500">
                    Euro-Bangla
                </span> represents the best and most sought-after job opportunities in <span className="text-blue-500">
                    Croatia
                </span> . Our coverage & expertise is designed to assist professionals transitioning their career in the region or as an entry point into the <span className="text-blue-500">
                    Europe Job markets
                </span>. The challenge of this is unique and can’t be under-estimated, but our reputation and ability to consult, ranks us at the top of the recruitment industry. With capabilities across areas of <span className="text-blue-500">
                    Accounting & Finance, Banking & Financial Services, Emiratisation, Human Resources, IT & Technology, Legal, Professional Support, Real Estate & Facilities Management, Retail & Hospitality, Sales & Marketing and Supply Chain sectors, Euro-Bangla
                </span>  has you covered.
                <br />
                <span className=" text-blue-500">
                    Euro-Bangla Labour Solutions
                </span> provides Employee Outsourcing Services within the UAE, making Euro-Bangla one of a handful of organisations offering this service with a government license issued by the Economic Development Department. Employee outsourcing can be provided independently or seamlessly integrated with our recruitment services. We strive to deliver flexible, reliable and tailored solutions to meet the unique business needs of both our existing and new clients.
            </p>
            <div className="flex justify-end ">
                <Link to={'/jobs'} className="justify-end shadow-2xl hover:bg-pink-500 text-white text-xl btn bg-blue-500">
                    Veiw All
                    <GoArrowRight className="text-xl " />
                </Link>
            </div>
        </div>
    );
};

export default Text;