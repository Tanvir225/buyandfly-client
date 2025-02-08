import { BadgeAlert, CalendarCheck, Search } from "lucide-react";
import { useState } from "react";

const Summary = () => {

  const details = [
    {
      categories: "Flight",
      searched: 1200,
      booked: 800,
      issued: 750,
    },
    {
      categories: "Hotel",
      searched: 900,
      booked: 600,
      issued: 580,
    },
    {
      categories: "Holidays",
      searched: 700,
      booked: 400,
      issued: 380,
    },
    {
      categories: "Visa",
      searched: 500,
      booked: 300,
      issued: 290,
    },
  ];

  const [activeTab, setActiveTab] = useState("Flight");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  //   console.log(activeTab);

  const matchData = details.find((detail) => detail.categories === activeTab);

  console.log(matchData);

  return (
    <section className="space-y-7 p-5">
      <div className="max-w-6xl mx-auto">
        <div className=" grid md:grid-cols-4 grid-cols-4 border-2 border-[#DEE2E6] p-2 w-fit md:mx-0 mx-auto rounded-md  bg-white">
          <button
            className={`px-4 flex gap-2 items-center ${activeTab === "Flight"
              ? "bg-[#EF5B0C] px-5 py-2 items-center font-medium text-[#FFFFFF] rounded-[10px]"
              : "font-medium px-4 py-2 items-center leading-[22px] text-[#7B6E7E]"
              }`}
            onClick={() => handleTabClick("Flight")}
          >
            Flight
          </button>

          <button
            className={`px-4 flex gap-2 items-center ${activeTab === "Hotel"
              ? "bg-[#EF5B0C] px-5 py-2 items-center font-medium text-[#FFFFFF] rounded-[10px]"
              : "font-medium px-4 py-2 items-center leading-[22px] text-[#7B6E7E]"
              }`}
            onClick={() => handleTabClick("Hotel")}
          >
            Hotel
          </button>

          <button
            className={`px-4 flex gap-2 items-center ${activeTab === "Holidays"
              ? "bg-[#EF5B0C] px-5 py-2 items-center font-medium text-[#FFFFFF] rounded-[10px]"
              : "font-medium px-4 py-2 items-center leading-[22px] text-[#7B6E7E]"
              }`}
            onClick={() => handleTabClick("Holidays")}
          >
            Holidays
          </button>

          <button
            className={`px-4 flex gap-2 items-center ${activeTab === "Visa"
              ? "bg-[#EF5B0C] px-5 py-2 items-center font-medium text-[#FFFFFF] rounded-[10px]"
              : "font-medium px-4 py-2 items-center leading-[22px] text-[#7B6E7E]"
              }`}
            onClick={() => handleTabClick("Visa")}
          >
            Visa
          </button>
        </div>
      </div>


      <div className="max-w-6xl mx-auto grid md:gap-4 md:grid-cols-3 grid-cols-1 gap-5">
        <div className="border border-[#E2E2E2] bg-base-100 shadow-sm rounded-xl h-32 p-4">
          <div className="text-[#883DCF] bg-[#F4ECFB]  rounded-xl w-fit">
            <Search size={24} />
          </div>
          <p className="font-medium text-[#7B6E7E] mt-4">Searched</p>
          <p className="font-semibold text-2xl text-[#111111] mt-2">{matchData.searched}</p>
        </div>

        <div className="border border-[#E2E2E2] bg-base-100 shadow-sm rounded-xl h-32 p-4">
          <div className="text-[#F86624] bg-[#FFF0EA]  rounded-xl w-fit">
            <CalendarCheck size={24} />
          </div>
          <p className="font-medium text-[#7B6E7E] mt-4">Booked</p>
          <p className="font-semibold text-2xl text-[#111111] mt-2">{matchData.booked}</p>
        </div>

        <div className="border border-[#E2E2E2] bg-base-100 shadow-sm rounded-xl h-32 p-4">
          <div className="text-[#EB3D4D] bg-[#FEECEE]  rounded-xl w-fit">
            <BadgeAlert size={24} />
          </div>
          <p className="font-medium text-[#7B6E7E] mt-4">Issued</p>
          <p className="font-semibold text-2xl text-[#111111] mt-2">{matchData.issued}</p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
