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
  const visaTypeOption = ["E-visa", "Sticker Visa", "Eta/Approval"];


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
    <div className="p-2 bg-white  rounded-b-lg rounded-tl-none w-full">
      <form>
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-7 rounded-xl text-left uppercase text-black bg-white rounded-tl-none">
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
            <input
              type="text"
              className="h-12 input input-bordered focus:outline-none w-full "
              value={residentOF}
              placeholder="BD | Bangaldesh"
              onChange={(e) => handleResidentOf(e.target.value)}
            />
            <div
              className={`text-black ${residentOF ? "absolute" : "hidden"
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
            className=""
          >
            <label htmlFor="" className=" ">
              Travelling To
            </label>{" "}
            <br />
            <input
              type="text"
              className="h-12 input input-bordered focus:outline-none w-full"
              value={travellingTo}
              placeholder="TH | Thailand"
              onChange={(e) => handelTavellingTo(e.target.value)}
            />
            <div
              className={`text-black ${travellingTo ? "absolute" : "hidden"
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
            className=""
          >
            <label htmlFor="" className=" ">
              Visa Category
            </label>
            <div className="relative">
              {/* dropdown - btn */}
              <div
                onClick={() => setIsVisaCategory(!isVisaCategory)}
                className=" h-12 input input-bordered focus:outline-none w-full flex items-center justify-between"
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
                className=" h-12 input input-bordered focus:outline-none w-full flex items-center justify-between"
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

        {/* fare section */}
        <section className="flex items-center justify-between  md:mb-4 text-secondary my-5 ">
          <div className="flex space-x-3">
            <label htmlFor="" className="font-semibold">Approval Type : </label>
            <label className="flex items-center btn btn-sm btn-outline  cursor-pointer">
              <input type="checkbox" name="eta" className="checkbox-primary" />
              <span className="text-secondary">ETA</span>
            </label>
            <label className="flex items-center btn btn-sm btn-outline   cursor-pointer">
              <input type="checkbox" name="invariable" className="checkbox-primary" />
              <span className="text-secondary">Invariable</span>
            </label>
          </div>

          <div className="">
            <Button width={36} text="Search"></Button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default VisaQuery;
