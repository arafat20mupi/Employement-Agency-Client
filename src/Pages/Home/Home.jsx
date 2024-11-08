import Hero from "./Hero/Hero";
import JoiningProcess from "./JoiningProcess/JoiningProcess";
import ServiceCard from "../Home/ServiceCard/ServiceCard";
import Text from "./Text/Text";
import Review from "./Review/Review";
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ServiceCard></ServiceCard>
            <Text></Text>
            <Review></Review>
            <JoiningProcess></JoiningProcess>
        </div>
    );
};

export default Home;