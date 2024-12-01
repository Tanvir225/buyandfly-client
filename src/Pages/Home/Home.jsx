import Banner from "../../Component/Home/Banner";
import CruiseCard from "../../Component/Home/Card/CruiseCard";
import PackageCard from "../../Component/Home/Card/PackageCard";
import PackageCard1 from "../../Component/Home/Card/PackageCard1";
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
      </div>
    </section>
  );
};

export default Home;
