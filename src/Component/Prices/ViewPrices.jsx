import { AiOutlineDollar } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdStarOutline } from "react-icons/io";
import { MdLuggage, MdOutlineEventSeat } from "react-icons/md";
import { PiBagSimple } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

export default function ViewPrices({setPrice}) {
  return (
    <div className="grid grid-cols-4 gap-2 text-[13px]">
      {/* start fare type */}
      <div className="bg-white p-4 rounded-xl mr-3">
        <p className="font-medium border-b-2 border-[#DEE2E6] pb-2">Fare Type</p>

        <p className="mt-2 border-b-2 border-[#DEE2E6] pb-2 flex items-center gap-2">
          <span className="">
            <PiBagSimple />
          </span>{" "}
          Hand Baggage
        </p>

        <p className="mt-2 border-b-2 border-[#DEE2E6] pb-2 flex items-center gap-2">
          <span className="">
            <MdLuggage />
          </span>{" "}
          Checked Baggage
        </p>

        <p className="mt-2 border-b-2 border-[#DEE2E6] pb-2 flex items-center gap-2">
          <span className="">
            <ImSpoonKnife />
          </span>{" "}
          Meal
        </p>

        <p className="mt-2 border-b-2 border-[#DEE2E6] pb-2 flex items-center gap-2">
          <span className="">
            <MdOutlineEventSeat />
          </span>{" "}
          Seat Selection
        </p>

        <p className="mt-2 border-b-2 border-[#DEE2E6] pb-2 flex items-center gap-2">
          <span className="">
            <FaRegCalendarAlt />
          </span>{" "}
          Rebooking
        </p>

        <p className="mt-2 border-b-2 border-[#DEE2E6] pb-2 flex items-center gap-2">
          <span className="">
            <AiOutlineDollar />
          </span>{" "}
          Cancellation
        </p>

        <p className="mt-2 border-b-2 border-[#DEE2E6] pb-2 flex items-center gap-2">
          <span className="">
            <IoMdStarOutline />
          </span>{" "}
          Miles
        </p>

        <p className="mt-2 border-b-2 border-[#DEE2E6] pb-2 flex items-center gap-2">
          <span className="">
            <FaRegCalendarAlt />
          </span>{" "}
          Booking Class
        </p>

        <p className="text-green-500 font-medium text-center mt-2 border-b-2 border-green-500 ">
          Fare Terms & Policies
        </p>
      </div>
      {/* end fare type */}

      {/* start eco value */}
      <div className="bg-white p-4 rounded-xl w-full">
        <p className=" border-b-2 border-[#DEE2E6] pb-4">
          ECO BUSINESS CLASSIC
        </p>

        <p className="text-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">SB</p>

        <p className="text-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">40kg</p>

        <p className="text-center text-green-500 flex justify-center items-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          <TiTick />
        </p>

        <p className="text-center text-orange-500 flex justify-center items-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          <RxCross2 />
        </p>

        <p className="text-center text-orange-500 font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          Penalties Apply
        </p>

        <p className="text-center text-orange-500 font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          Penalties Apply
        </p>

        <p className="text-center text-orange-500 flex justify-center items-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          <RxCross2 />
        </p>

        <p className="text-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">Q;Q;C</p>

        <div className="text-center text-green-500 font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2 flex flex-col">
          <p>
            Agent fare : <span className="text-black">BDT178818</span>
          </p>
          <p className="text-orange-500 self-end text-xs lg:mr-[90px]">incl. AIT VAT</p>
        </div>

        <p className="text-orange-500 font-bold text-center mt-2">
          Gross Fare : <span className="text-black line-through">BDT190388</span>
        </p>

        <div>
          <button className="font-bold text-white py-2 px-4 bg-gray-800 rounded-md w-full mt-2">
            Book Now
          </button>
        </div>
      </div>
      {/* end eco value */}

      {/* business classic start */}
      <div className="bg-white p-4 rounded-xl w-full">
        <p className="border-b-2 border-[#DEE2E6] pb-4">
          BUSINESS CLASSIC
        </p>

        <p className="text-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">SB</p>

        <p className="text-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">35kg</p>

        <p className="text-center text-green-500 flex justify-center items-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          <TiTick />
        </p>

        <p className="text-center text-orange-500 flex justify-center items-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          <RxCross2 />
        </p>

        <p className="text-center text-orange-500 font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          Penalties Apply
        </p>

        <p className="text-center text-orange-500 font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          Penalties Apply
        </p>

        <p className="text-center text-orange-500 flex justify-center items-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          <RxCross2 />
        </p>

        <p className="text-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">Z;C;C</p>

        <div className="text-center text-green-500 font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2 flex flex-col">
          <p>
            Agent fare : <span className="text-black">BDT211881</span>
          </p>
          <p className="text-orange-500 self-end text-xs lg:mr-[90px]">incl. AIT VAT</p>
        </div>

        <p className="text-orange-500 font-bold text-center mt-2">
          Gross Fare : <span className="text-black line-through">BDT225396</span>
        </p>

        <div>
          <button className="font-bold text-white py-2 px-4 bg-gray-800 rounded-md w-full mt-2">
            Book Now
          </button>
        </div>
      </div>
      {/* business classic start */}

      {/* business flex start */}
      <div className="bg-white p-4 rounded-xl w-full">
        <p className=" border-b-2 border-[#DEE2E6] pb-4">
          BUSINESS CLASSIC FLEX
        </p>

        <p className="text-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">SB</p>

        <p className="text-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">45kg</p>

        <p className="text-center text-green-500 flex justify-center items-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          <TiTick />
        </p>

        <p className="text-center text-orange-500 flex justify-center items-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          <RxCross2 />
        </p>

        <p className="text-center text-orange-500 font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          Penalties Apply
        </p>

        <p className="text-center text-orange-500 font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          Penalties Apply
        </p>

        <p className="text-center text-orange-500 flex justify-center items-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">
          <RxCross2 />
        </p>

        <p className="text-center font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2">Z;C;C</p>

        <div className="text-center text-green-500 font-medium mt-2 border-b-2 border-[#DEE2E6] pb-2 flex flex-col">
          <p>
            Agent fare : <span className="text-black">BDT218651</span>
          </p>
          <p className="text-orange-500 self-end text-xs lg:mr-[90px]">incl. AIT VAT</p>
        </div>

        <p className="text-orange-500 font-bold text-center mt-2">
          Gross Fare : <span className="text-black line-through">BDT233081</span>
        </p>

        <div>
          <button className="font-bold text-white py-2 px-4 bg-gray-800 rounded-md w-full mt-2">
            Book Now
          </button>
        </div>
      </div>
      {/* business flex start */}
      <div className="text-right w-full col-span-4">
        <button className="btn btn-outline btn-error " onClick={()=>setPrice(false)}>Close</button>
      </div>
    </div>
  );
}
