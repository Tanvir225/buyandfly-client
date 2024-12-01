import cruise from "../../../assets/cruise.jpg";
const CruiseCard = () => {
  return (
    <div className=" bg-base-100  shadow-xl  rounded-lg p-5 space-y-5">
      <figure className="w-full">
        <img src={cruise} alt="cruise" className="rounded-md w-full" />
      </figure>
      <div className="text-lg font-semibold">
        <h2 className="">Arabian Gulf Cruise!</h2>
      </div>
    </div>
  );
};

export default CruiseCard;
