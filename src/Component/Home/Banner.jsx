import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LiaHotelSolid, LiaGlassMartiniAltSolid } from "react-icons/lia";

import FlightQuery from "./FlightQuery";
import HotelQuery from "./HotelQuery";
import HolidayQuery from "./HolidayQuery";

const BannerNew = () => {
  const tabList = [
    { label: "Flights", icon: PiAirplaneTakeoffLight },
    { label: "Hotels", icon: LiaHotelSolid },
    { label: "Holiday", icon: LiaGlassMartiniAltSolid },
  ];

  const tabContent = [<FlightQuery />, <HotelQuery />, <HolidayQuery />];

  return (
    <div
      className="hero h-fit md:h-[90vh] border-secondary border-b-[20px] lg:border-b-[40px]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1536258426657-fabb174a2bbf?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content mt-32">
        <div className="max-w-6xl xl:min-w-[1184px] w-full min-h-[390px]">
          <Tab.Group>
            <Tab.List className="max-w-md flex rounded-t-xl border-b border-black/30 bg-white">
              {tabList.map(({ label, icon: Icon }, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    `w-full flex flex-col items-center py-1.5 ${
                      idx === 0 ? "rounded-tl-xl" : ""
                    } ${idx === tabList.length - 1 ? "rounded-tr-xl" : ""}
                  ${
                    selected
                      ? "outline-none text-secondary border-b-2 border-secondary"
                      : "text-black/50 hover:text-secondary"
                  }`
                  }
                >
                  <Icon size={25} color="purple" />{" "}
                  <span className="text-lg font-semibold">{label}</span>
                </Tab>
              ))}
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
