import DatePicker from "react-datepicker";
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Button from "../Shared/Button";

const VisaQuery = () => {
  const [travellers, setTravellers] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [residentOF, setResidentOf] = useState();
  const [travellingTo, setTravellingTo] = useState();
  const [country, setCountries] = useState([]);

  const [isVisaCategory, setIsVisaCategory] = useState(false);
  const [visaCategory, setVisaCategory] = useState("Select Visa category");
  // array of options
  const visaCategoryOption = ["Student", "Business", "Mediacal"];

  const [isVisaType, setIsVisaType] = useState(false);
  const [visaType, setVisaType] = useState("Select Visa type");
  // array of options
  const visaTypeOption = ["E-visa", "Sticker Visa", "Eta/Approval","Invariable"];


  //set countries into state
  const countryData = (value) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const result = data.filter((c) => {
          return (
            c?.flags?.png &&
            c?.name?.common &&
            c?.name?.common.toLowerCase().includes(value.toLowerCase())
          );
        });
        setCountries(result);
      });
  };
  // console.log(country[0]?.flags?.png);

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

  return (
    <div className="p-2 bg-white rounded-xl rounded-tl-none w-full">
      <form>
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-7 rounded-xl text-left uppercase text-black bg-white rounded-tl-none">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b-2 lg:border-r-2 lg:border-b-0"
          >
            <label htmlFor="" className="font-semibold ">
              Resident OF
            </label>{" "}
            <br />
            <input
              type="text"
              className="h-12 border-none focus:outline-none text-gray-700 font-semibold"
              value={residentOF}
              placeholder="BD | Bangaldesh"
              onChange={(e) => handleResidentOf(e.target.value)}
            />
            <div
              className={`text-black ${
                residentOF ? "absolute" : "hidden"
              } h-36 overflow-y-auto bg-base-100 shadow-xl w-60 z-20 p-3 rounded-md`}
            >
              {country?.map((c, index) => (
                <div
                  key={index}
                  className="flex gap-2 text-sm items-center py-2 "
                  role="button"
                  onClick={() => setResidentOf(c?.name?.common)}
                >
                  <img
                    className="w-10"
                    src={c?.flags?.png}
                    alt={c?.name?.common}
                  />
                  <p>{c?.name?.common}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b-2 lg:border-r-2 lg:border-b-0"
          >
            <label htmlFor="" className="font-semibold ">
              Travelling To
            </label>{" "}
            <br />
            <input
              type="text"
              className="h-12 border-none focus:outline-none text-gray-700 font-semibold"
              value={travellingTo}
              placeholder="TH | Thailand"
              onChange={(e) => handelTavellingTo(e.target.value)}
            />
            <div
              className={`text-black ${
                travellingTo ? "absolute" : "hidden"
              } h-36 overflow-y-auto bg-base-100 shadow-xl w-60 z-20 p-3 rounded-md`}
            >
              {country?.map((c, index) => (
                <div
                  key={index}
                  className="flex gap-2 text-sm items-center py-2 "
                  role="button"
                  onClick={() => setTravellingTo(c?.name?.common)}
                >
                  <img
                    className="w-10"
                    src={c?.flags?.png}
                    alt={c?.name?.common}
                  />
                  <p>{c?.name?.common}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 lg:border-r-2"
          >
            <label htmlFor="" className="font-semibold ">
              Visa Category
            </label>
            <div className="relative">
              {/* dropdown - btn */}
              <div
                onClick={() => setIsVisaCategory(!isVisaCategory)}
                className=" flex  items-center justify-between w-52 rounded-xl   py-2 "
              >
                <h1 className="font-semibold text-gray-600" role="button">
                  {visaCategory}
                </h1>
                <svg
                  className={`${
                    isVisaCategory ? "-rotate-180" : "rotate-0"
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
                className={`${
                  isVisaCategory
                    ? "visible top-0 opacity-100"
                    : "invisible -top-4 opacity-0"
                } absolute z-20 mx-auto my-12 w-36  rounded-xl py-4 border bg-base-100 duration-300`}
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
            className="space-y-2"
          >
            <label htmlFor="" className="font-semibold ">
              Visa Type
            </label>
            <div className="relative">
              {/* dropdown - btn */}
              <div
                onClick={() => setIsVisaType(!isVisaType)}
                className=" flex  items-center justify-between w-52 rounded-xl   py-2 "
              >
                <h1 className="font-semibold text-gray-600" role="button">
                  {visaType}
                </h1>
                <svg
                  className={`${
                    isVisaType ? "-rotate-180" : "rotate-0"
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
                className={`${
                  isVisaType
                    ? "visible top-0 opacity-100"
                    : "invisible -top-4 opacity-0"
                } absolute z-20 mx-auto my-12 w-42  rounded-xl py-4 border bg-base-100 duration-300`}
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

        <div className="text-center absolute   left-[35%] md:left-[40%] lg:left-[45%]  ">
          <Button text="Check Details" width={32}></Button>
        </div>
      </form>
    </div>
  );
};

export default VisaQuery;
