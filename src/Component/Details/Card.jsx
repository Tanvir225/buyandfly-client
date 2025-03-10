
import { useState } from "react";
import { AiFillTag } from "react-icons/ai";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaPlaneDeparture } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { MdError } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import DetailsForm from "./DetailsForm";
import AddonService from "./AddonService";

export default function Card() {

  // top bar
  const [activeTab, setActiveTab] = useState("bookingDetails");
  // top bar

  // booking details sidebar
  const [selectedBookingSide, setSelectedBookingSide] = useState("travelerDetails");
  // booking details sidebar



  // airFare
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };
  // airFare




  return (
    <div className="mt-32 mb-5 flex flex-col justify-center items-center gap-2 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto border p-5 rounded-lg ring-1">
      {/* top bar start*/}
      <div className="flex items-center gap-5 bg-white py-1 px-3 rounded-lg">
        {/* time part start */}
        <div className="flex gap-5 items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-xl text-blue-600">
              <LuAlarmClock />
            </p>
            <p className="text-sm font-semibold text-black">Time Remaining</p>
          </div>
          <p className="text-blue-600 font-bold">26:30</p>
        </div>
        {/* time part end */}

        {/* bar start */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setActiveTab("bookingDetails")}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 font-semibold text-sm ${activeTab === "bookingDetails"
              ? "bg-orange-100 text-orange-500"
              : "bg-white text-gray-500"
              }`}
          >
            <span className="px-[8px] py-[1px] rounded-full bg-orange-500 w-fit text-sm text-white font-semibold">
              1
            </span>
            Booking Details
          </button>

          <button
            onClick={() => setActiveTab("addOnService")}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 font-semibold text-sm ${activeTab === "addOnService"
              ? "bg-orange-100 text-orange-500"
              : "bg-white text-gray-500"
              }`}
          >
            <span className="px-[8px] py-[1px] rounded-full bg-orange-500 w-fit text-sm text-white font-semibold">
              2
            </span>
            Add-On Service
          </button>

          <button
            onClick={() => setActiveTab("reviewPayment")}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 font-semibold text-sm ${activeTab === "reviewPayment"
              ? "bg-orange-100 text-orange-500"
              : "bg-white text-gray-500"
              }`}
          >
            <span className="px-[8px] py-[1px] rounded-full bg-orange-500 w-fit text-sm text-white font-semibold">
              3
            </span>
            Review & Payment
          </button>
        </div>
        {/* bar end */}
      </div>
      {/* top bar end*/}

      {/* data show start */}
      <div className="">
        <div className="mt-4 p-3 bg-base-100 rounded-lg">
          {/* booking details start */}
          {activeTab === "bookingDetails" && (
            <div className="flex gap-5">
              <div className="flex">
                {/* sidebar start */}
                <div>
                  <p className="text-black font-bold  p-2 w-64">Booking Details</p>

                  <div className="mt-3">
                    <button
                      className={`text-black font-medium${selectedBookingSide === "travelerDetails"
                        ? "text-black border-l-4 border-blue-600 px-3 py-3 w-full bg-gray-300 flex items-center gap-2"
                        : "bg-white flex items-center gap-3"
                        }`}
                      onClick={() => setSelectedBookingSide("travelerDetails")}
                    >
                      <span className="px-[6px] py-[1px] rounded-full bg-blue-600 text-white text-xs font-normal">
                        1
                      </span>
                      Traveler Details
                    </button>
                  </div>
                </div>
                {/* sidebar end */}

                {/* form start */}
                <DetailsForm selectedBookingSide={selectedBookingSide} setSelectedBookingSide={setSelectedBookingSide}></DetailsForm>
                {/* form end */}
              </div>

              {/* price details start */}
              <div className="min-w-96 max-h-fit shadow-md rounded-md">
                <div className="flex items-center justify-between bg-gray-200 px-3 py-2">
                  <div className="flex gap-3 items-center">
                    <p className=" text-blue-800">
                      <FaPlaneDeparture />
                    </p>
                    <div>
                      <p className="flex gap-3 items-center font-bold ">
                        DAC{" "}
                        <span>
                          <GoArrowSwitch />
                        </span>{" "}
                        CXB
                      </p>
                      <p className="text-gray-600">One-Way • 02 Mar - 02 Mar</p>
                    </div>
                  </div>
                  <p className="text-blue-800 bg-blue-100 font-medium py-2 px-3 w-fit rounded-md">
                    Details
                  </p>
                </div>

                {/* airFare Start */}
                <div
                  className={`px-3 py-2 rounded-md transition-colors mt-2
                        ${isOpen ? "bg-gray-200" : "bg-white hover:bg-gray-200"}`}
                  onClick={toggleFilter}
                >
                  <div className="flex items-center justify-between">
                    <p className="flex gap-2 items-center text-gray-600">
                      <span className="text-2xl">
                        <BiSolidPlaneAlt />
                      </span>{" "}
                      <span className="font-medium">Air Fare</span>
                      <span>
                        <IoMdArrowDropdown />
                      </span>
                    </p>
                    <p className="font-medium">5692S BDT</p>
                  </div>

                  {isOpen && (
                    <div>
                      <div className="mt-2 border-b border-gray-400 -px-3"></div>
                      <div className="flex items-center justify-between mt-1 text-sm text-gray-600">
                        <p>1 x BaseFare (Adult)</p>
                        <p>4,524 BDT</p>
                      </div>
                      <div className="flex items-center justify-between mt-1 text-sm text-gray-600">
                        <p>1 x Tax (Adult)</p>
                        <p>1,175 BDT</p>
                      </div>
                    </div>
                  )}
                </div>
                {/* airFare end */}

                <div className="text-orange-500 flex items-center justify-between px-3">
                  <p className="flex items-center gap-2 font-medium">
                    <span className="text-xl">
                      <AiFillTag />
                    </span>
                    Discount Availed
                  </p>
                  <p className="font-medium">- 907 BDT</p>
                </div>

                <div className="px-3 mt-1 flex items-center justify-between">
                  <p className="text-gray-600 flex items-center gap-2">
                    <span>
                      <RiDiscountPercentFill />
                    </span>
                    Convenience Fee
                    <span>
                      <MdError />
                    </span>
                  </p>
                  <p className="text-black font-medium">+ 96 BDT</p>
                </div>

                <div className="flex items-center justify-between bg-gray-200 px-3 py-2 mt-2">
                  <p className="text-gray-600">Total Price</p>

                  <p className="font-semibold ">4,888 BDT</p>
                </div>
              </div>
              {/* price details end */}
            </div>
          )}
          {/* booking details end */}

          {/* addOnService start */}
          {activeTab === "addOnService" && (
              <AddonService></AddonService>
          )}
          {/* addOnService end */}
          {activeTab === "reviewPayment" && <div>payment</div>}
        </div>
      </div>
      {/* data show end */}

    </div>
  );


}



