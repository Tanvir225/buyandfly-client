import cruise from "../../../assets/cruise.jpg";
const CruiseCard = () => {
  return (
    <div className=" bg-base-100  shadow-md  rounded-lg p-5 space-y-5 group hover:shadow-xl">
      <figure className="w-full overflow-hidden">
        <img src={cruise} alt="cruise" className="rounded-md w-full group-hover:scale-110 duration-300 delay-100" />
      </figure>
      <div className="text-lg font-semibold">
        <h2 className="">Arabian Gulf Cruise!</h2>
      </div>
    </div>
  );
};

export default CruiseCard;
