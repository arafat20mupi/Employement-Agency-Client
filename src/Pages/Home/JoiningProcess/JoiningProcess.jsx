import { useState } from "react";

// icons
import { FaPlus } from "react-icons/fa6";

const JoiningProcess = () => {
    const [isAccordingOpen, setIsAccordingOpen] = useState(null);

    // according data
    const accordingData = [
        {
            title: "Step 1: Client Consultation and Requirement Gathering",
            description:
                "Initiating the recruitment process involves conducting thorough consultations with client companies. Our representatives work closely with clients to understand their organisational structure, culture, and specific hiring needs. By gathering detailed information on job roles, qualifications, and desired skill sets, we set the foundation for a targeted recruitment strategy.",
        },
        {
            title: "Step 2: Talent Sourcing and Acquisition",
            description:
                "With the information we have gathered about the client’s requirements, we leverage their networks, job portals, and industry databases to identify potential candidates. This step involves proactive sourcing through various channels, including referrals and partnering with universities in Singapore. With this, our goal is to create a pool of qualified candidates ready for the next stages of the recruitment process.",
        },
        {
            title: "Step 3: Candidate Screening and Shortlisting",
            description:
                `Our recruitment team conducts thorough screenings of candidates to assess their qualifications, experience, and cultural fit. This process may involve initial interviews, skills assessments, and reference checks. Our shortlisting criteria are aligned with the client’s specifications, ensuring that only the most suitable candidates move forward.`,
        },

        {
            title: `Step 4: Client Presentation and Coordination`,
            description:
                `Once a pool of qualified candidates is identified, our recruitment team presents the shortlisted profiles to the client for review. This step involves coordinating interviews, managing scheduling logistics, and providing necessary documentation to facilitate the client’s decision-making process.`,
        },

        {
            title: `Step 5: Client-Candidate Interview Facilitation`,
            description:
                `We will then coordinate and facilitate interviews between clients and candidates. This includes preparing candidates for interviews, providing feedback to both parties and ensuring effective communication between them.`,
        },
        {
            title: `Step 6: Offer Negotiation and Acceptance`,
            description:
                `Upon successful interviews, our representatives will assist in the negotiation of job offers between clients and candidates. They act as intermediaries to ensure a fair and satisfactory agreement for both parties. Once an offer is accepted, we then guide candidates through the subsequent steps, such as background checks, onboarding procedures, work permit or work pass applications, and more.`,
        },
        {
            title: `Step 7: Follow-Up and Onboarding Support`,
            description:
                `We believe that the recruitment process should extend beyond the offer acceptance. That’s why we maintain communication with both clients and candidates to ensure a smooth onboarding experience. We will address any concerns, facilitate the resolution of issues, and gather feedback to continually improve the recruitment strategies.`,
        },
    ];

    const handleBorderClick = (index) =>
        setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="flex gap-1 bg-gray-50 p-10 flex-col w-full">
            <div className="text-center my-10">
                <h1 className="text-4xl font-bold underline underline-offset-auto text-blue-500">THE RECRUITMENT PROCESS</h1>
                <p className="mt-6 text-black text-xl">
                    For our staffing agency in Crotia, we implement a well-defined and efficient recruitment process to match skilled candidates with the diverse needs of client companies. Here’s a comprehensive breakdown of the key steps in the recruitment process:
                </p>
            </div>
            {accordingData?.map((according, index) => (
                <article key={index} className="border  border-[#e5eaf2] rounded p-3">
                    <div
                        className="flex gap-2 cursor-pointer items-center justify-between w-full"
                        onClick={() => handleBorderClick(index)}>
                        <h2 className="text-[#3B9DF8] font-[600] text-[1.2rem]">
                            {according.title}
                        </h2>
                        <p>
                            <FaPlus
                                className={`text-[1.3rem] text-[#424242] transition-all duration-300 ${isAccordingOpen === index && "rotate-[45deg] !text-[#3B9DF8]"
                                    }`}
                            />
                        </p>
                    </div>
                    <div
                        className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordingOpen === index
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                            }`}>
                        <p className="text-[#424242] text-[0.9rem] overflow-hidden">
                            {according.description}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default JoiningProcess;
