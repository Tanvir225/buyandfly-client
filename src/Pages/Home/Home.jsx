import Banner from "../../Component/Home/Banner";
import CruiseCard from "../../Component/Home/Card/CruiseCard";
import VisaCard from "../../Component/Home/Card/VisaCard";
import Gallery from "../../Component/Home/Gallery";
import Title from "../../Component/Shared/Title";

const Home = () => {
  return (
    <section>
      {/* banner */}
      <Banner></Banner>

      {/* all section into a container */}
      <div className="max-w-6xl mx-auto">
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
          <VisaCard></VisaCard>
        </section>
      </div>
    </section>
  );
};

export default Home;
