import Banner from "../../Component/Home/Banner";
import OfferCard from "../../Component/Home/Card/OfferCard";
import MemoriesSection from "../../Component/Home/MemoriesSection";
import SubscribeSection from "../../Component/Home/SubscribeSection";
import Testimonial from "../../Component/Home/Testimonial";
import Title from "../../Component/Shared/Title";
import Summary from "../../Component/Home/Summary";
import FreeVisa from "../../Component/Home/Card/FreeVisa";
import FlightCards from "../../Component/Home/Card/FlightCards";
import HolidayCard from "../../Component/Home/Card/HolidayCard";
import TrendingHotel from "../../Component/Home/Card/TrendingHotel";
import { useState } from "react";
import Loading from "../../Component/Shared/Loading";

const Home = () => {



  const date = new Date();
  const today = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);






  return (
    <section>

      {
        <section>
          {/* banner */}
          <Banner ></Banner>

          {/* exclusive travels deals */}
          <section>
            <OfferCard></OfferCard>
          </section>

          {/* free visa */}
          <section >
            <FreeVisa></FreeVisa>
          </section>

          {/* flights section */}
          <section>
            <FlightCards></FlightCards>
          </section>

          {/* Holiday cards */}
          <section>
            <HolidayCard></HolidayCard>
          </section>

          {/* Trending Hotel */}
          <section>
            <TrendingHotel></TrendingHotel>
          </section>

          {/* memory section */}
          <section className="">
            <MemoriesSection></MemoriesSection>
          </section>

          {/* review section */}
          <section className="">
            <Testimonial></Testimonial>
          </section>


          {/* Today's Summmary */}
          <section className="space-y-5 bg-[#FFF9F5] py-16 px-5">
            <Title title={`Today's Summary | ${today}`} size="md" ></Title>
            <Summary></Summary>
          </section>


          {/* subcriber section */}
          <section className="">
            <SubscribeSection></SubscribeSection>
          </section>


        </section>
      }
    </section>
  );
};

export default Home;
