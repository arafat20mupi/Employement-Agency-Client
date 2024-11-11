
// react icons
import { BsSearch } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="bg-gray-50 "
    >
      {/* header */}
      <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center ">
        <div  className="px-8 mt-8 lg:mt-0 w-full lg:w-[50%]">
          <h1 data-aos="fade-right" data-aos-duration="1000" className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-[500]">
            FIND YOUR
            HUMANPOWER
          </h1>
          <div  className="mt-3 flex">
            <input data-aos="fade-right" data-aos-duration="1200" className="input" type="text" placeholder="Job Title , Skills , Company" />
            <button data-aos="fade-right" data-aos-duration="1400" className="text-3xl flex justify-center items-center ml-2 bg-blue-400 hover:bg-pink-500 btn">
              <BsSearch data-aos="fade-right" data-aos-duration="1400"/>
            </button>
          </div>

          <Link data-aos="fade-right" data-aos-duration="1600" to={'/jobs'} className="flex items-center underline flex-wrap gap-[20px] mt-6">
            Browse All Available Jobs
            <GoArrowRight className="text-xl "/>
          </Link>
        </div>

        {/* image */}
        <div  className="w-full  p-6 md:p-10 lg:w-[50%]">
          <img
            src="a6.png"
            alt="image"
            className="w-full rounded-lg"
          />
        </div>
      </header>
    </div>
  );
};

export default Hero;
