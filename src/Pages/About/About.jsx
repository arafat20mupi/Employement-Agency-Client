import Contact from "../Contact/Contact";

const About = () => {
    return (
        <div>
            <div className="  bg-gray-50 p-6">
                <h1 className="text-3xl  font-bold underline  text-blue-500">How can we help ease your recruitment process?</h1>

                <div className="grid grid-cols-1 gap-3 p-3 md:grid-cols-2">

                    <div className="space-y-3 mt-2">
                        <h1 className="text-2xl  font-bold">Our Vision</h1>
                        <p className="tracking-wider font-medium text-lg">
                            To be the preferred recruitment firm in South East Asia. Whether you are a global organization or a small start-up, we are devoted to helping you grow rapidly with minimum risks, losses, as well as maximum satisfaction and results.
                        </p>
                    </div>
                    <div className="space-y-3 mt-2">
                        <h1 className="text-2xl  font-bold">Our Mission</h1>
                        <p className="tracking-wider font-medium text-lg">
                            At Euro-Bangla Employment Company, we aim to successfully connect businesses and job seekers for a better future by offering smart, measurable, and efficient recruitment services. We understand how this can often be a challenge as workforce solutions in every industry may vary significantly from one another. Hence, we constantly strive to recognize these needs and continuously adapt our services accordingly.</p>
                    </div>
                </div>
            </div>
            <header className="flex bg-pink-50 lg:flex-row flex-col gap-[50px] lg:gap-0 items-center ">
                <div className="px-8 mt-8 lg:mt-0 w-full lg:w-[50%]">
                    <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-[500]">
                        World-Class Recruitment is Humanly Possible
                    </h1 >
                    <p className="text-lg font-medium mt-2"> Hiring right makes all the difference between healthy business profits and dismal losses. Nala utilizes best-practice methodologies to ensure you find the right people and reduce the amount of time as well as costs spent on these procedures. </p>
                </div>

                {/* image */}
                <div className="w-full  p-6 md:p-10 lg:w-[50%]">
                    <img
                        src="About.webp"
                        alt="image"
                        className="w-full rounded-lg"
                    />
                </div>
            </header>
            <div className="  bg-gray-50 p-6">
                <h1 className="text-3xl  font-bold underline  text-blue-500">Why choose us?</h1>

                <div className="grid grid-cols-1 gap-3 p-3 md:grid-cols-3">

                    <div className="space-y-3 mt-2">
                        <h1 className="text-2xl  font-bold">Transparent Services</h1>
                        <p className="tracking-wider font-medium text-lg">
                            <span className="font-bold">At Euro-Bangla Employment Company ,</span> we believe that being candid fosters trust and goodwill. As such, we will provide any information you need on both the company and available jobs, so that you can make an informed decision.
                            <br />
                            This includes a clear presentation of salary ranges, working hours, responsibilities, as well as requirements.specializes in helping qualified and experienced candidates find their dream jobs with a full range of vacant positions available throughout Europe.  We are well aware that job searching processes can often be stressful and frustrating. This is why Euro-Bangla offers its services to help you better ease through it.
                        </p>
                    </div>
                    <div className="space-y-3 mt-2">
                        <h1 className="text-2xl  font-bold">Hassle-free Application</h1>
                        <p className="tracking-wider font-medium text-lg">
                            We value your time as much as you do. This is why we strive to make your application process as quick as possible. With Euro-Bangla, you can easily apply to multiple jobs with just a few clicks!
                        </p>
                    </div>
                    <div className="space-y-3 mt-2">
                        <h1 className="text-2xl  font-bold">Network of Passive Employers</h1>
                        <p className="tracking-wider font-medium text-lg">
                            There are actually more opportunities lined up for you to choose than you think. We can help bridge you with employers who are actively looking as well as those who are not..
                        </p>
                    </div>
                </div>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default About;