import Hero from "./Hero/Hero";
import JoiningProcess from "./JoiningProcess/JoiningProcess";
import ServiceCard from "../Home/ServiceCard/ServiceCard";
import Text from "./Text/Text";
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Text></Text>
            <ServiceCard></ServiceCard>
            <JoiningProcess></JoiningProcess>
        </div>
    );
};

export default Home;