import Clients from "../../components/Clients";
import Banner from "./Banner";
import Billboard from "./Billboard";
import Blog from "./Blog";
import BrandStory from "./BrandStory";
import Campaign from "./Campaign";
import Carousel from "./Carousel";
import Discover from "./Discover";
import Hero from "./Hero";
import MarketAgency from "./MarketAgency";
import Story from "./Story";
import FindBillboard from "./FindBillboard";
import HomeDeals from "./HomeDeals";
import TopAdvertising from "./TopAdvertising";
import { Faq } from "../../components/Faq";
import Overview from "./Overview";




const Home = () => {
  return (
    <>
     <Hero/>
     <Billboard/>
     <Clients/>
     <MarketAgency/>
     <Carousel/>
     <Discover/>
     <BrandStory/>
     <Campaign/>
     <FindBillboard/>
     <HomeDeals/>
     <Banner/>
     <TopAdvertising/>
     <Faq/>
     <Overview/>
     <Blog/>
     
    </>
  );
};

export default Home;
