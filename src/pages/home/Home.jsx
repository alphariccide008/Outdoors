import Clients from "../../components/Clients";
import Banner from "./Banner";
import Billboard from "./Billboard";
import Carousel from "./Carousel";
import Discover from "./Discover";
import Hero from "./Hero";
import MarketAgency from "./MarketAgency";
import Story from "./Story";




const Home = () => {
  return (
    <>
     <Hero/>
     <Billboard/>
     <Clients/>
     <MarketAgency/>
     <Carousel/>
     <Discover/>
     <Banner/>
     <Story/>
     
    </>
  );
};

export default Home;
