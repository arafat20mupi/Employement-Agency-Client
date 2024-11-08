import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles and required modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Review = () => {
    const reviews = [
        { name: "Al-Amin", review: "The agency was very professional in helping me find a job that matched my skills perfectly. Highly recommended!", avatar: "https://microbiology.nstu.edu.bd/uploads/2023/12/medium_1703512759.jpg" },
        { name: "Md. Monir", review: "চমৎকার সেবা! আমার অভিজ্ঞতার সাথে মানানসই চাকরি খুঁজে পেতে তাদের সহায়তা অনেক উপকারে এসেছে।", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-mPeLx-uQRtn4yQUnGL3uxQf3SgHR3imVg&s" },
        { name: "Ibrahim Khan", review: "They guided me every step of the way, from interview prep to salary negotiation. Very grateful for their support!", avatar: "https://www.observerbd.com/2024/04/17/ob_1713285208.jpg" },
        { name: "Shamim Ahmed", review: "Amazing experience! I found a fantastic job within a week of contacting them. Professional and efficient service.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLV_HEdHCHEIF-JkTzfEe4tS5ok1L2APNsg&s" },
        { name: "Karim Hossain", review: "The agency helped me update my CV and guided me through the application process. Very supportive and helpful!", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2_N0x4XsdoNdn-rsqcVPFEpxY8AMY-fBjQ&s" },
        { name: "Rafiq Rahman", review: "Great experience! They provided insights on potential employers, which made my job search so much easier.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKR7OiVvOyLq90LRiYXpGt6leSuHqsZ1TUg&s" },
    ];



    return (
        <div className="bg-pink-50 py-5">
            {/* Title */}
            <h2 className="text-center text-4xl font-bold mb-8 text-black">Customer Review</h2>

            {/* Swiper Slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="w-full max-w-6xl mx-auto relative"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative bg-white rounded-xl shadow-lg p-6 h-44">
                            {/* Review Header with Avatar */}
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-gray-300"
                                    src={review.avatar}
                                    alt={`${review.name}'s avatar`}
                                />
                                <div className="text-lg font-bold text-black">{review.name}</div>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-700 font-semibold">{review.review}</p>

                            {/* Pagination Bullets Positioned Inside the Card */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 swiper-pagination-bullets"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;