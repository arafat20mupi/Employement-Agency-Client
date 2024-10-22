import { Link } from "react-router-dom";

const TeamCard = () => {
    return (
        <div className="hero bg-pink-50 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full text-center">
                    <img
                        src="https://www.investopedia.com/thmb/BfGymZ2lBJSA-fLOWLzC5I_WCeo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1401984594-00b7d79713fa45acbb7d3fc2a66738bb.jpg"
                        className="w-full rounded-lg shadow-2xl"
                    />
                    <h2 className="text-blue-400 text-6xl mt-2">Rana Bakul</h2>
                    <h2 className="text-black text-2xl mt-2">
                        Group Chairman</h2>
                </div>
                <div className="text-start space-y-4">
                    <h1 className="text-2xl font-bold text-blue-500">OUR TEAM</h1>
                    <h1 className="text-5xl font-bold">Meet Our Leader</h1>
                    <p className="py-6 text-xl">
                        Rana Bakul He is Our most dedicated, capable, and experienced leaders is indeed crucial for ensuring sustained success and growth.
                    </p>
                    <Link to={'/team'} className="px-4 bg-blue-400 hover:bg-pink-500 text-xl py-2 rounded-xl border">
                        Our Team
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;