import Banner from "../../Component/Home/Banner";
import CountryPackageCard from "../../Component/Home/Card/CountryPackageCard";
import CruiseCard from "../../Component/Home/Card/CruiseCard";
import OfferCard from "../../Component/Home/Card/OfferCard";

import PackageCard from "../../Component/Home/Card/PackageCard";
import PackageCard1 from "../../Component/Home/Card/PackageCard1";
import VisaCard from "../../Component/Home/Card/VisaCard";
import Gallery from "../../Component/Home/Gallery";
import MemoriesSection from "../../Component/Home/MemoriesSection";
import SubscribeSection from "../../Component/Home/SubscribeSection";
import Testimonial from "../../Component/Home/Testimonial";
import Title from "../../Component/Shared/Title";

import brack from "../../assets/brack_Offer.png";
import bkash from "../../assets/bkash_offer.png";
import enjoy from "../../assets/enjoy_offer.png";
import umrah from "../../assets/umrah_Offer.png";
import health from "../../assets/health_Offer.png";
import singapore from "../../assets/singapre_Offer.png";
import notice1 from "../../assets/notice1.jpeg";
import notice2 from "../../assets/notice2.jpeg";
import notice3 from "../../assets/notice3.jpeg";
import Summary from "../../Component/Home/Summary";
import MemberPartner from "../../Component/Home/MemberPartner";

const Home = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  return (
    <section>
      {/* banner */}
      <Banner></Banner>

      {/* all section into a container */}
      <div className="max-w-6xl mx-auto px-5 lg:px-2">
        {/* exclusive Offer */}
        <section className="space-y-5 my-16">
          <Title title="Exclusive Offers" />
          <OfferCard
            slider1={brack}
            slider2={bkash}
            slider3={enjoy}
            slider4={umrah}
            slider5={health}
            slider6={singapore}
          ></OfferCard>
        </section>

        {/* best sellers */}
        <section className="my-16">
          <Title title="Bestsellers..."></Title>
          <Gallery></Gallery>
        </section>

        {/* cruise package  */}

        <section className="space-y-5 my-16">
          <Title title="Cruise Packages from Dubai"></Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <CruiseCard></CruiseCard>
            <CruiseCard></CruiseCard>
          </div>
        </section>

        {/* tourist visa card */}

        <section className="space-y-5 my-16">
          <Title title="Tourist Visa Offer"></Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <VisaCard></VisaCard>
            <VisaCard></VisaCard>
            <VisaCard></VisaCard>
          </div>
        </section>

        {/*  Holiday Packages */}
        <section className="space-y-5 my-16">
          <Title title="Budget Holiday Packages"></Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <PackageCard></PackageCard>
            <PackageCard></PackageCard>
            <PackageCard></PackageCard>
            <PackageCard></PackageCard>
            <PackageCard></PackageCard>
            <PackageCard></PackageCard>
            <PackageCard></PackageCard>
            <PackageCard></PackageCard>
          </div>
        </section>

        {/* Europe city package */}
        <section className="space-y-5 my-16">
          <Title title="Europe City Packages"></Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <PackageCard1></PackageCard1>
            <PackageCard1></PackageCard1>
            <PackageCard1></PackageCard1>
            <PackageCard1></PackageCard1>
            <PackageCard1></PackageCard1>
            <PackageCard1></PackageCard1>
            <PackageCard1></PackageCard1>
            <PackageCard1></PackageCard1>
          </div>
        </section>

        {/* Abu Dabi & Dubai Package */}
        <section className="space-y-10 my-16">
          <Title title="Explre Abu Dhabi & Dubai Packages"></Title>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <CountryPackageCard></CountryPackageCard>
            <CountryPackageCard></CountryPackageCard>
            <CountryPackageCard></CountryPackageCard>
          </div>
        </section>

        {/* subcriber section */}
        <section className="space-y-5 my-16">
          <Title
            title="Get the best deals inyour inbox!"
            center="center"
          ></Title>
          <p className="text-center font-semibold">Subscribe us now !</p>
          <SubscribeSection></SubscribeSection>
        </section>

        {/* memory section */}
        <section className=" my-16">
          <MemoriesSection></MemoriesSection>
        </section>

        {/* notice */}
        <section className="space-y-5 my-16">
          <Title title="Notice"></Title>
          <OfferCard
            slider1={notice1}
            slider2={notice2}
            slider3={notice3}
            slider4={umrah}
            slider5={brack}
            slider6={bkash}
          ></OfferCard>
        </section>

        {/* Today's Summmary */}
        <section className="space-y-5 my-16">
          <Title title={`Today's Summary | ${today}`} size="md"></Title>
          <Summary></Summary>
        </section>

        {/* member & partners */}

        <section className="space-y-5 my-16 lg:w-[1170px]">
          <MemberPartner></MemberPartner>
        </section>
        {/* review section */}
        <section className="space-y-5 my-20">
          <Title title="Our customer speaks" center="center"></Title>
          <Testimonial reviews={reviews}></Testimonial>
        </section>
      </div>
    </section>
  );
};

export default Home;

// reviews fake data
const reviews = [
  {
    id: 1,
    name: "John Doe",
    place: "Switzerland",
    review: "Thank you for the quick response and even faster ",
  },
  {
    id: 2,
    name: "Jam Doe",
    place: "Dubai",
    review: "It's just awesome ",
  },
  {
    id: 3,
    name: "Alex Doe",
    place: "Paris",
    review: "I am so happy with the service ",
  },
];
