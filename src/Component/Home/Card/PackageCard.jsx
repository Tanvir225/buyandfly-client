import nepal from "../../../assets/nepal.jpg";

const PackageCard = () => {
  return (
    <div className=" bg-white my-5  pb-5 card shadow-md rounded-xl space-y-5 group">
      {/* profile image & bg  */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-[200px]  rounded-t-xl bg-gray-500 group-hover:scale-110 duration-300 delay-100 "
          src={nepal}
          alt="card navigate ui"
        />
      </div>
      {/* profile name & des */}
      <div className="md:px-4">
        <h1 className="text-lg md:text-xl font-semibold text-primary">
          Winter in Baku
        </h1>
        <p>Tbilisi 3 nights</p>
      </div>
      {/* pricing */}
      <div className="flex flex-wrap px-4 gap-5  md:px-4 justify-between items-center text-gray-600 font-semibold">
        AED 3099 per person
      </div>
    </div>
  );
};

export default PackageCard;
