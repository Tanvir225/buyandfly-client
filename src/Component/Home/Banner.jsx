import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LiaHotelSolid, LiaGlassMartiniAltSolid } from "react-icons/lia";
import { IoIdCardOutline } from "react-icons/io5";
import banner_bg from "../../assets/banner_bg.jpg"
import FlightQuery from "./FlightQuery";
import HotelQuery from "./HotelQuery";
import HolidayQuery from "./HolidayQuery";
import VisaQuery from "./VisaQuery";
import { useState } from "react";

const BannerNew = () => {


  //STATE
  const [isAirClass, setIsAirClass] = useState(false);
  const [airClass, setAirClass] = useState("Select Flight Class");

  // array of options
  const airClassoptions = ['Economy', "Premium", "Business", "First Class"];

  const tabList = [
    { label: "Flights", icon: PiAirplaneTakeoffLight },
    { label: "Hotels", icon: LiaHotelSolid },
    { label: "Holiday", icon: LiaGlassMartiniAltSolid },
    { label: "Visa", icon: IoIdCardOutline },
  ];

  const tabContent = [
    <FlightQuery />,
    <HotelQuery />,
    <HolidayQuery />,
    <VisaQuery />,
  ];


  return (
    <div
      className="hero min-h-screen overflow-x-hidden mt-10"
      style={{
        backgroundImage:
          `url(${banner_bg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 w-full h-[100vh]"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-6xl xl:min-w-[1150px] w-full">

          <h2 className="text-center lg:text-5xl lg:leading-normal text-base-100">Discover Your Next <br /> Great Adventure</h2>

          <Tab.Group>
            <Tab.List className="px-5 flex justify-between items-center  py-5 rounded-t-xl  bg-white">
              <div className="space-x-2">
                {tabList.map(({ label, icon: Icon }, idx) => (
                  <Tab
                    key={idx}
                    className={({ selected }) =>
                      ` btn btn-sm focus:outline-none ${idx === 0 ? "rounded-tl-xl" : ""
                      } ${idx === tabList.length - 1 ? "rounded-tr-xl" : ""}
                  ${selected
                        ? "  bg-primary text-white hover:bg-primary"
                        : "text-secondary"
                      }`
                    }
                  >
                    <Icon size={24} />{" "}
                    <span className=" font-semibold">{label}</span>
                  </Tab>
                ))}
              </div>

              {/* economy */}
              <div className="relative ">
                {/* dropdown - btn */}
                <div
                  onClick={() => setIsAirClass(!isAirClass)}
                  className="mx-auto w-48  flex items-center justify-between rounded-lg px-3 py-2 border"
                >
                  <h1 className=" text-gray-600" role="button">
                    {airClass}
                  </h1>
                  <svg
                    className={`${isAirClass ? "-rotate-180" : "rotate-0"
                      } duration-300`}
                    width={25}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                {/* dropdown - options  */}
                <div
                  className={`${isAirClass
                    ? "visible top-0 opacity-100"
                    : "invisible -top-4 opacity-0"
                    } absolute z-20 mx-auto my-12 w-44  rounded-xl py-4 border bg-base-100 duration-300`}
                >
                  {airClassoptions?.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={(e) => {
                        setAirClass(e.target.textContent);
                        setIsAirClass(false);
                      }}
                      className="px-6 py-2 text-gray-500 hover:bg-sky-100"
                      role="button"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>

            </Tab.List>
            <Tab.Panels className="">
              {tabContent.map((Component, index) => (
                <Tab.Panel key={index} className="">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {Component}
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default BannerNew;
