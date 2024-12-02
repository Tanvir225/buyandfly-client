import Banner from "../../Component/Home/Banner";
import CountryPackageCard from "../../Component/Home/Card/CountryPackageCard";
import CruiseCard from "../../Component/Home/Card/CruiseCard";

import PackageCard from "../../Component/Home/Card/PackageCard";
import PackageCard1 from "../../Component/Home/Card/PackageCard1";
import VisaCard from "../../Component/Home/Card/VisaCard";
import Gallery from "../../Component/Home/Gallery";
import MemoriesSection from "../../Component/Home/MemoriesSection";
import SubscribeSection from "../../Component/Home/SubscribeSection";
import Testimonial from "../../Component/Home/Testimonial";
import Title from "../../Component/Shared/Title";

const Home = () => {
  return (
    <section>
      {/* banner */}
      <Banner></Banner>

      {/* all section into a container */}
      <div className="max-w-6xl mx-auto px-5 lg:px-0">
        {/* best sellers */}
        <section className="md:my-16">
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
