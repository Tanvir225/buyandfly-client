
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Button from "../Shared/Button";

const VisaQuery = () => {

  const [allCountries, setAllCountries] = useState(flights);
  const [country, setCountry] = useState(flights);
  const [journeyFrom, setJourneyFrom] = useState([]);
  const [journeyTo, setJourneyTo] = useState([]);
  const [searchToggleFrom, setSearchToggleFrom] = useState(false)
  const [searchToggleTo, setSearchToggleTo] = useState(false)

  const [residentOF, setResidentOf] = useState();
  const [travellingTo, setTravellingTo] = useState();

  const [isVisaCategory, setIsVisaCategory] = useState(false);
  const [visaCategory, setVisaCategory] = useState("Select Visa category");
  // array of options
  const visaCategoryOption = ["Student", "Business", "Mediacal"];

  const [isVisaType, setIsVisaType] = useState(false);
  const [visaType, setVisaType] = useState("Select Visa type");
  // array of options
  const visaTypeOption = ["E-visa", "Sticker Visa"];


  //handle resident of function
  const handleResidentOf = (value) => {
    setResidentOf(value);
    countryData(value);
  };

  //handle travelling to function
  const handelTavellingTo = (value) => {
    setTravellingTo(value);
    countryData(value);
  };




  // Handle search input change
  const handleCountryChangeFrom = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setCountry(allCountries);  // Reset to full list if input is empty
    } else {
      const filteredCountries = allCountries.filter((c) =>
        c?.city.toLowerCase().includes(value)
      );
      setCountry(filteredCountries);
    }
  };

  // Handle search input change
  const handleCountryChangeTo = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setCountry(allCountries);  // Reset to full list if input is empty
    } else {
      const filteredCountries = allCountries.filter((c) =>
        c?.city.toLowerCase().includes(value)
      );
      setCountry(filteredCountries);
    }
  };






  // Handle country selection from
  const handleCountrySelect = (city, code, airport) => {
    setJourneyFrom([
      {
        city: city,
        code: code,
        airport: airport

      }
    ]);  // Set selected country
    setSearchToggleFrom(false);           // Close the dropdown
  };

  // Handle country selection To
  const handleCountrySelectTo = (city, code, airport) => {
    setJourneyTo([
      {
        city: city,
        code: code,
        airport: airport

      }
    ]
    );  // Set selected country
    setSearchToggleTo(false);           // Close the dropdown
  };

  // handle searchClick FROM
  const handleSearchClick = () => {
    setSearchToggleFrom(true)
  }

  // handle searchClick TO
  const handleSearchClickTo = () => {
    setSearchToggleTo(true)
  }


  return (
    <div className="p-2 bg-white  rounded-b-lg rounded-tl-none w-full">
      <form>
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-7 rounded-xl text-left  text-black bg-white rounded-tl-none">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <label htmlFor="" className=" ">
              Resident OF
            </label>{" "}
            <br />
            <div onClick={handleSearchClick} className={`flex items-center mt-2  border rounded-lg h-16 w-full`}>
              <span className="text-sm font-bold p-2 border-r-2">{journeyFrom[0]?.code || 'DAC'}</span>
              <div className="flex flex-col items-start gap-1 p-2">
                <span className="text-sm font-medium">{journeyFrom[0]?.city || "Dhaka"}</span>
                <span className="text-xs text-gray-500  w-full">{journeyFrom[0]?.airport || "Bangladesh, Hazrat Shahjalal"}</span>
              </div>
            </div>

            <div
              className={`text-black space-y-3 ${searchToggleFrom ? "absolute" : "hidden"
                } h-52 overflow-y-auto bg-base-100 shadow-xl w-64  z-20 p-3 px-2 rounded-md`}
            >
              <input
                onChange={handleCountryChangeFrom}
                name="search"
                type="text"
                className="input-sm w-full focus:outline-none border-b-2 h-14 rounded-md"
                placeholder="🛪 Type for airport name or code"
              />
              {country?.map((c, index) => (
                <div onClick={() => handleCountrySelect(c?.city, c?.code, c?.airport)} key={index} className="flex items-center gap-5 cursor-pointer p-2">
                  <h2 className="border-r-2 border-b-2 p-2 ">{c?.code}</h2>
                  <div>
                    <p>{c?.city}</p>
                    <p className="text-[12px]">{c?.airport}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <label htmlFor="" className=" ">
              Travelling To
            </label>{" "}
            <br />
            <div onClick={handleSearchClickTo} className={`flex items-center mt-2  border rounded-lg h-16 text-wrap truncate w-full`}>
              <span className="text-sm font-bold p-2 border-r-2 ml-1">{journeyTo[0]?.code || "JED"}</span>
              <div className="flex flex-col items-start gap-1 p-2">
                <span className="text-sm font-medium">{journeyTo[0]?.city || "Saudi Arabia"}</span>
                <span className="text-xs text-gray-500 truncate w-full">{journeyTo[0]?.airport || "King Abdulaziz Int Airport"}</span>
              </div>
            </div>
            <div
              className={` text-black ${searchToggleTo ? "absolute" : "hidden"
                }  h-52 space-y-3 overflow-y-auto bg-base-100 shadow-xl  z-20  p-3 px-2 w-64 rounded-md`}
            >

              <input
                onChange={handleCountryChangeTo}
                name="search"
                type="text"
                className="input-sm w-full focus:outline-none border-b-2 h-12 rounded-md"
                placeholder="🛪 Type for airport name or code"
              />
              {country?.map((c, index) => (
                <div onClick={() => handleCountrySelectTo(c?.city, c?.code, c?.airport)} key={index} className="flex items-center gap-5 cursor-pointer p-2">
                  <h2 className="border-r-2 border-b-2 p-2 ">{c?.code}</h2>
                  <div>
                    <p>{c?.city}</p>
                    <p className="text-[12px]">{c?.airport}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <label htmlFor="" className=" ">
              Visa Category
            </label>
            <div className="relative">
              {/* dropdown - btn */}
              <div
                onClick={() => setIsVisaCategory(!isVisaCategory)}
                className=" h-16 input mt-1 input-bordered focus:outline-none w-full flex items-center justify-between"
              >
                <h1 className=" text-gray-600" role="button">
                  {visaCategory}
                </h1>
                <svg
                  className={`${isVisaCategory ? "-rotate-180" : "rotate-0"
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
                className={`${isVisaCategory
                  ? "visible top-0 opacity-100"
                  : "invisible -top-4 opacity-0"
                  } absolute z-20 mx-auto my-12 w-full  rounded-xl py-4 border bg-base-100 duration-300`}
              >
                {visaCategoryOption?.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      setVisaCategory(e.target.textContent);
                      setIsVisaCategory(false);
                    }}
                    className="px-6 py-2 text-gray-500 hover:bg-sky-100"
                    role="button"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <label htmlFor="" className=" ">
              Visa Type
            </label>
            <div className="relative">
              {/* dropdown - btn */}
              <div
                onClick={() => setIsVisaType(!isVisaType)}
                className=" h-16 mt-1 input input-bordered focus:outline-none w-full flex items-center justify-between"
              >
                <h1 className=" text-gray-600" role="button">
                  {visaType}
                </h1>
                <svg
                  className={`${isVisaType ? "-rotate-180" : "rotate-0"
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
                className={`${isVisaType
                  ? "visible top-0 opacity-100"
                  : "invisible -top-4 opacity-0"
                  } absolute z-20 mx-auto my-12 w-full  rounded-xl py-4 border bg-base-100 duration-300`}
              >
                {visaTypeOption?.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      setVisaType(e.target.textContent);
                      setIsVisaType(false);
                    }}
                    className="px-6 py-2 text-gray-500 hover:bg-sky-100"
                    role="button"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>


        </section>

        {/* visa approve section */}
        <section className="flex flex-wrap items-center justify-between  md:mb-4 text-secondary my-5 ">
          <div className="flex space-x-3">
            <label htmlFor="" className="">Approval Type : </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="eta" className="checkbox-primary" />
              <span className="text-secondary font-medium">ETA</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="invariable" className="checkbox-secondary" />
              <span className="text-secondary font-medium">Invariable</span>
            </label>
          </div>

          <div className="px-5 lg:mt-0 mt-5">
            <Button width={44} text="Search"></Button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default VisaQuery;


// fake data
const flights = [
  {
    code: "DAC",
    city: "Dhaka",
    country: "Bangladesh",
    airport: "Hazrat Shahjalal International Airport",
  },
  {
    code: "CXB",
    city: "Cox's Bazar",
    country: "Bangladesh",
    airport: "Cox's Bazar Airport",
  },
  {
    code: "JFK",
    city: "New York",
    country: "United States",
    airport: "John F Kennedy International Airport",
  },
  {
    code: "LHR",
    city: "London",
    country: "United Kingdom",
    airport: "Heathrow Airport",
  },
  {
    code: "DXB",
    city: "Dubai",
    country: "United Arab Emirates",
    airport: "Dubai International Airport",
  },
  {
    code: "SIN",
    city: "Singapore",
    country: "Singapore",
    airport: "Changi Airport",
  },
  {
    code: "HND",
    city: "Tokyo",
    country: "Japan",
    airport: "Haneda Airport",
  },
  {
    code: "SYD",
    city: "Sydney",
    country: "Australia",
    airport: "Sydney Kingsford Smith Airport",
  },
  {
    code: "CDG",
    city: "Paris",
    country: "France",
    airport: "Charles de Gaulle Airport",
  },
  {
    code: "IST",
    city: "Istanbul",
    country: "Turkey",
    airport: "Istanbul Airport",
  },
];
