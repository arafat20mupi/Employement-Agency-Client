import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
const Text = () => {
    return (
        <div className="text-start p-6 bg-pink-50 space-y-6">
            <h1 className="text-3xl font-bold ">Find Jobs in Crotia, UAE , Europe & Middle East.</h1>
            <p className="text-2xl font-bold">
                Charterhouse represents the best and most sought-after job opportunities in <span className="text-blue-500">
                    Europe markets
                </span> . Our coverage & expertise is designed to assist professionals transitioning their career in the region or as an entry point into the <span className="text-blue-500">
                    Europe Job markets
                </span>. The challenge of this is unique and can’t be under-estimated, but our reputation and ability to consult, ranks us at the top of the recruitment industry. With capabilities across areas of <span className="text-blue-500">
                    Accounting & Finance, Banking & Financial Services, Emiratisation, Human Resources, IT & Technology, Legal, Professional Support, Real Estate & Facilities Management, Retail & Hospitality, Sales & Marketing and Supply Chain sectors, Charterhouse
                </span>  has you covered.
                <br />
                <span className=" text-blue-500">
                    Charterhouse Labour Solutions
                </span> provides Employee Outsourcing Services within the UAE, making Charterhouse one of a handful of organisations offering this service with a government license issued by the Economic Development Department. Employee outsourcing can be provided independently or seamlessly integrated with our recruitment services. We strive to deliver flexible, reliable and tailored solutions to meet the unique business needs of both our existing and new clients.
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