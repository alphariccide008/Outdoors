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
import UseCases from "./UseCases";
import StaticBillboard from "./StaticBillboard";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";





const Home = () => {
  const { hash } = useLocation();
  const [showScrollUp, setShowScrollUp] = useState(false);


  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-Up button action
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
     <UseCases/>
     <StaticBillboard/>
     <Overview/>
     <Blog/>
     <Faq/>

     {showScrollUp && (
        <button
        className="rounded-xl"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            padding: "10px 15px",
            backgroundColor: "#0A6535",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          ↑
        </button>
      )}
     
     
    </>
  );
};

export default Home;
