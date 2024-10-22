import Hero from "./Hero/Hero";
import JoiningProcess from "./JoiningProcess/JoiningProcess";
import TeamCard from "./TeamCard/TeamCard";
import ServiceCard from "../Home/ServiceCard/ServiceCard";
import Text from "./Text/Text";
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Text></Text>
            <ServiceCard></ServiceCard>
            <TeamCard></TeamCard>
            <JoiningProcess></JoiningProcess>
        </div>
    );
};

export default Home;