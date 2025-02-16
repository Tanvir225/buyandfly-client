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

const BannerNew = ({}) => {


  //STATE


  const [selectedLabel,setSelectedLabel] = useState('Flights')

 

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

  const handleClick = (label)=>{

    setSelectedLabel(label)
  }


  return (
    <div
      className="hero h-[1030px] w-full overflow-x-hidden"
      style={{
        backgroundImage:
          `url(${banner_bg})`
      }}
    >
      <div className="hero-overlay bg-opacity-50  w-full"></div>
      <div className="hero-content text-neutral-content">
        <div className="max-w-6xl xl:min-w-[1150px] w-full">

          <h2 className="text-center text-2xl my-5 lg:text-7xl lg:leading-snug text-base-100 banner-title ">Discover Your Next <br /> Great Adventure</h2>

          <Tab.Group>
            <Tab.List className="px-5  flex flex-wrap flex-row justify-between items-center  py-5 rounded-t-xl  bg-white">
              <div className="space-x-2 space-y-2 bg-base-200 p-2 rounded-lg">
                {tabList.map(({ label, icon: Icon }, idx) => (
                  <Tab
                    key={idx}
                    onClick={()=>handleClick(label)}
                    className={({ selected }) =>
                      ` btn btn-sm focus:outline-none font-medium    ${idx === 0 ? "rounded-tl-xl" : ""
                      } ${idx === tabList.length - 1 ? "rounded-tr-xl" : ""}
                  ${selected
                        ? "  bg-primary text-white hover:bg-primary"
                        : "text-secondary"
                      }`
                    }
                  >
                    <Icon size={24} />{" "}
                    <span className="">{label}</span>
                  </Tab>
                ))}
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
