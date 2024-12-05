import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";

const Summary = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-5 w-full">
      {/* flight */}
      <section className="flex gap-5 md:gap-16 bg-base-100 shadow-md p-5 rounded-lg font-semibold text-lg w-full">
        <div className="flex items-center gap-3">
          <PiAirplaneTakeoffLight
            size={40}
            color="purple"
            className="rounded-full bg-sky-100 p-2"
          ></PiAirplaneTakeoffLight>
          <div>
            <p>0</p>
            <p>Searched</p>
          </div>
        </div>

        <div className="border-l-2 px-2">
          <p>0</p>
          <p>Booked</p>
        </div>

        <div className="border-l-2 px-2">
          <p>0</p>
          <p>Issued</p>
        </div>
        <div></div>
        <div></div>
      </section>

      {/* hotes */}
      <section className="flex gap-5 md:gap-16 bg-base-100 shadow-md p-5 rounded-lg font-semibold text-lg w-full">
        <div className="flex items-center gap-3">
          <LiaHotelSolid
            size={40}
            color="purple"
            className="rounded-full bg-sky-100 p-2"
          ></LiaHotelSolid>
          <div>
            <p>0</p>
            <p>Searched</p>
          </div>
        </div>

        <div className="border-l-2 px-2">
          <p>0</p>
          <p>Booked</p>
        </div>

        <div className="border-l-2 px-2">
          <p>0</p>
          <p>Issued</p>
        </div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
};

export default Summary;
