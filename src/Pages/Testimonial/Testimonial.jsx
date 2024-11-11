import { useState } from "react";

const Testimonial = () => {
    // Toggle state to switch between Job Seeker and Client testimonials
    const [showJobSeeker, setShowJobSeeker] = useState(true);

    const forJobSeaker = [
        { name: "Al-Amin", review: "The agency was very professional in helping me find a job that matched my skills perfectly. Highly recommended!", avatar: "https://microbiology.nstu.edu.bd/uploads/2023/12/medium_1703512759.jpg" },
        { name: "Md. Monir", review: "চমৎকার সেবা! আমার অভিজ্ঞতার সাথে মানানসই চাকরি খুঁজে পেতে তাদের সহায়তা অনেক উপকারে এসেছে।", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-mPeLx-uQRtn4yQUnGL3uxQf3SgHR3imVg&s" },
        { name: "Ibrahim Khan", review: "They guided me every step of the way, from interview prep to salary negotiation. Very grateful for their support!", avatar: "https://www.observerbd.com/2024/04/17/ob_1713285208.jpg" },
        { name: "Shamim Ahmed", review: "Amazing experience! I found a fantastic job within a week of contacting them. Professional and efficient service.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLV_HEdHCHEIF-JkTzfEe4tS5ok1L2APNsg&s" },
        { name: "Karim Hossain", review: "The agency helped me update my CV and guided me through the application process. Very supportive and helpful!", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2_N0x4XsdoNdn-rsqcVPFEpxY8AMY-fBjQ&s" },
        { name: "Rafiq Rahman", review: "Great experience! They provided insights on potential employers, which made my job search so much easier.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKR7OiVvOyLq90LRiYXpGt6leSuHqsZ1TUg&s" },
    ];
    const forClient = [
        { CompanyName: "Infobip Croatia", ClientName: "Luka Jurić", review: "Infobip has been an exceptional partner in expanding our global operations. The team at Euro-Bangla Employment helped us quickly find top talent that matched our requirements perfectly.", Photo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Infobip.svg' },
        { CompanyName: "Siemens AG, Germany", ClientName: "Klaus Müller", review: "We had a fantastic experience working with Euro-Bangla Employment. Their understanding of the European market is invaluable, and they were instrumental in securing our top hires.", Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkBtnU6mo2L7Pcgrv5d1BR97Ckrboge5k6g&s'},
        { CompanyName: "Adidas, Netherlands", ClientName: "Sophie van den Berg", review: "Euro-Bangla provided us with candidates who are not only highly skilled but also fit our corporate culture. Their expertise in recruitment is unmatched!", Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_orGtBHn1u0mtRlWfjYeJzsMDJzabaQ0jmxpRgMXVpXSrJ8Dr3dPa7suuls1Pf4i8Sk&usqp=CAU' },
        { CompanyName: "Nestlé, Switzerland", ClientName: "Francesca Romano", review: "Thanks to Euro-Bangla Employment, we managed to quickly fill key positions in our European offices. Their professionalism and knowledge of the industry made the process seamless.", Photo: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F4e988efa-c4a0-42b5-8983-8b98de64b3f9.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1' },
        { CompanyName: "Rimac Automobili, Croatia", ClientName: "Mate Rimac", review: "Euro-Bangla Employment was crucial in helping us find talented engineers for Rimac's rapid expansion. Their personalized service and attention to detail set them apart from other agencies.", Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrzq91wYKDOhl0iuLZdcf3iuKG0zcktYX7w&s' },
        { CompanyName: "Infinum, Croatia", ClientName: "Davorin Korman", review: "Working with Euro-Bangla Employment has been a smooth experience. They understood our needs and provided us with top candidates for our tech roles in a timely manner.", Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3xNCANrffiNEVFXRvJzsSsxV7gM45J5ikA&s' },
    ];
    

    return (
        <div className="px-6 py-6  md:px-12 ">
            <h1 className="py-6 text-center text-4xl font-bold text-blue-500">
                Our Client And Job Seaker Feadback
            </h1>
            <div className="flex gap-3 justify-center mb-4">
                <button
                    onClick={() => setShowJobSeeker(false)}
                    className={`px-4 py-2  rounded-lg font-semibold ${!showJobSeeker ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Our Clients
                </button>
                <button
                    onClick={() => setShowJobSeeker(true)}
                    className={`px-4 rounded-lg py-2 font-semibold ${showJobSeeker ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Job Seekers
                </button>
            </div>

            <div className="grid gap-3 mt-3 py-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {(showJobSeeker ? forJobSeaker : forClient).map((testimonial, index) => (
                    <div 
                    data-aos="fade-up" data-aos-duration="1000"
                    key={index} className="relative bg-white rounded-xl shadow-lg p-6 min-h-52">
                        {/* Header with Avatar/Photo */}
                        <div className="flex items-center mb-4">
                            <img
                                className="w-12 h-12 rounded-full mr-4 border-2 border-gray-300"
                                src={showJobSeeker ? testimonial.avatar : testimonial.Photo}
                                alt={`${showJobSeeker ? testimonial.name : testimonial.ClientName}'s photo`}

                            />
                            <div >
                                <div className="text-lg font-bold text-black">
                                    {showJobSeeker ? testimonial.name : testimonial.ClientName}
                                </div>
                                {/* Optional Company Name */}
                                {!showJobSeeker && <p className="text-gray-600 text-sm mt-2">{testimonial.CompanyName}</p>}
                            </div>
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-700 font-semibold">{testimonial.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
