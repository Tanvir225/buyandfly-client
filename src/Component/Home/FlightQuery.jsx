import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../Shared/Button";
import { LiaMaleSolid } from "react-icons/lia";

const FlightQuery = () => {
  const [country, setCountries] = useState([]);
  const [journeyFrom, setJourneyFrom] = useState();
  const [journeyTo, setJourneyTo] = useState();
  const [departure, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const [tripType, setTripType] = useState("oneway");
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  let totalpassenger = 0;

  const [isAirClass, setIsAirClass] = useState(false);
  const [isTravell, setIsTravel] = useState(false);
  const [travellers, setTravellers] = useState(1);
  const [airClass, setAirClass] = useState("Economy");
  // array of options
  const airClassoptions = ["Premium", "Business", "First Class"];

  // handle change
  const handleChange = (event) => {
    setAirClass(event.target.value);
  };

  // handleIncrement function
  const handleIncrement = (adult, setAdult) => {
    setAdult(adult + 1);
  };

  // handleIncrement function
  const handleDecrement = (adult, setAdult) => {
    if (adult > 0) {
      setAdult(adult - 1);
    }
  };

  totalpassenger = adult + child + infant;
  console.log(tripType);

  // handTripTypeChange function
  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  // handleSubmit Function
  const handleSubmit = (event) => {
    event.preventDefault();

    const journeyTo = event.target.journeyTo.value;

    console.log(
      tripType,

      journeyTo,
      departure,
      returnDate,
      adult,
      child,
      infant,
      airClass
    );
  };

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

  //handle
  const handleCountryChangeFrom = (value) => {
    setJourneyFrom(value);
    countryData(value);
  };
  //handle
  const handleCountryChangeTo = (value) => {
    setJourneyTo(value);
    countryData(value);
  };

  return (
    <div className="p-5 bg-white rounded-xl rounded-tl-none">
      <form onSubmit={handleSubmit}>
        {/* Radio Buttons */}
        <section className="flex flex-col md:flex-row justify-between  gap-5 lg:gap-10 text-primary">
          <div className="flex items-center  space-x-4 md:mb-4">
            <label className="flex items-center  space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                className="radio"
                value="oneway"
                checked={tripType === "oneway"}
                onChange={handleTripTypeChange}
              />
              <span>Oneway</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                className="radio"
                value="round trip"
                checked={tripType === "round trip"}
                onChange={handleTripTypeChange}
              />
              <span>Round Trip</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                className="radio"
                value="multicity"
                checked={tripType === "multicity"}
                onChange={handleTripTypeChange}
              />
              <span>Multicity</span>
            </label>
          </div>

          {/*people and economy  */}
          <section className="flex items-center gap-5">
            <div className="relative">
              {/* dropdown - btn */}
              <div
                onClick={() => setIsTravel(!isTravell)}
                className="mx-auto bg-sky-100  flex w-40 items-center justify-between rounded-xl  px-3 py-2 border"
              >
                <h1 className="font-medium text-gray-600" role="button">
                  {totalpassenger} Travellers
                </h1>
                <svg
                  className={`${
                    isTravell ? "-rotate-180" : "rotate-0"
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
                  isTravell
                    ? "visible top-0 opacity-100"
                    : "invisible -top-4 opacity-0"
                } absolute mx-auto my-12 w-48  rounded-xl py-4 border bg-base-100 duration-300`}
              >
                <div className="flex justify-center items-center gap-5 text-center ">
                  <h2 className="flex items-center">
                    <LiaMaleSolid size={25}></LiaMaleSolid> Adults
                  </h2>
                  <p
                    role="button"
                    onClick={() => handleDecrement(travellers, setTravellers)}
                    className="rounded-full border-2 w-10 border-secondary"
                  >
                    -
                  </p>
                  <p className="rounded-full border-2 w-10 border-secondary">
                    {travellers}
                  </p>
                  <p
                    role="button"
                    onClick={() => handleIncrement(travellers, setTravellers)}
                    className="rounded-full border-2 w-10 border-secondary"
                  >
                    +
                  </p>
                </div>
              </div>
            </div>

            {/* economy */}
            <div className="relative">
              {/* dropdown - btn */}
              <div
                onClick={() => setIsAirClass(!isAirClass)}
                className="mx-auto bg-sky-100 w-32 flex  items-center justify-between rounded-xl  px-3 py-2 border"
              >
                <h1 className="font-medium text-gray-600" role="button">
                  {airClass}
                </h1>
                <svg
                  className={`${
                    isAirClass ? "-rotate-180" : "rotate-0"
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
                  isAirClass
                    ? "visible top-0 opacity-100"
                    : "invisible -top-4 opacity-0"
                } absolute mx-auto my-12 w-36  rounded-xl py-4 border bg-base-100 duration-300`}
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
          </section>
        </section>

        {/* Inputs */}
        <section
          className={`grid gap-5 border-2 p-5 mt-2 rounded-md text-left uppercase bg-gradient-to-b from-secondary to-primary text-transparent bg-clip-text ${
            tripType === "oneway"
              ? "lg:grid-cols-5 !important"
              : "lg:grid-cols-6 !important"
          } grid-cols-1`}
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b-2 lg:border-r-2 lg:border-b-0"
          >
            <label htmlFor="" className="font-semibold ">
              From
            </label>{" "}
            <br />
            <input
              type="text"
              className="h-12 border-none focus:outline-none text-gray-700 font-semibold"
              value={journeyFrom}
              placeholder="Bangaldesh"
              onChange={(e) => handleCountryChangeFrom(e.target.value)}
            />
            <div
              className={`text-black ${
                journeyFrom ? "absolute" : "hidden"
              } h-36 overflow-y-auto bg-base-100 shadow-xl w-48  p-3 rounded-md`}
            >
              {country?.map((c, index) => (
                <div
                  key={index}
                  className="flex gap-2 text-sm items-center py-2 "
                  role="button"
                  onClick={() => setJourneyFrom(c?.name?.common)}
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
            transition={{ duration: 0.5, delay: 0.25 }}
            className="border-b-2 lg:border-r-2 lg:border-b-0"
          >
            <label htmlFor="" className="font-semibold ">
              To
            </label>{" "}
            <br />
            <input
              type="text"
              className="h-12 border-none focus:outline-none text-gray-700 font-semibold"
              value={journeyTo}
              placeholder="Nepal"
              onChange={(e) => handleCountryChangeTo(e.target.value)}
            />
            <div
              className={`text-black ${
                journeyTo ? "absolute" : "hidden"
              } h-36 overflow-y-auto bg-base-100 shadow-xl w-48  p-3 rounded-md`}
            >
              {country?.map((c, index) => (
                <div
                  key={index}
                  className="flex gap-2 text-sm items-center py-2 "
                  role="button"
                  onClick={() => setJourneyTo(c?.name?.common)}
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
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border-b-2 lg:border-r-2 lg:border-b-0"
          >
            <label htmlFor="" className="font-semibold ">
              Departure
            </label>{" "}
            <br />
            <DatePicker
              className="focus:outline-none h-12  text-gray-700 font-semibold "
              selected={departure}
              onChange={(date) => setDepartureDate(date)}
              showDisabledMonthNavigation
              monthsShown={1}
              dateFormat={"MMMM d, yyyy"}
            />
          </motion.div>

          {tripType !== "oneway" && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-b-2 lg:border-r-2 lg:border-b-0"
            >
              <label htmlFor="" className="font-semibold ">
                Return
              </label>
              <br />
              <DatePicker
                className="focus:outline-none h-12  font-semibold text-gray-700"
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                showDisabledMonthNavigation
                monthsShown={1}
                dateFormat={"MMMM d, yyyy"}
              />
            </motion.div>
          )}
        </section>

        {/* fare section */}
        <section className="flex space-x-4 md:mb-4 text-gray-700 my-5 font-semibold">
          <label className="flex items-center  space-x-2 cursor-pointer">
            <input type="radio" name="fare" className="radio" />
            <span>Regular Fare</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="fare" className="radio" />
            <span>Student Fare</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="fare" className="radio" />
            <span>Hotel</span>
          </label>
        </section>

        <div className="text-center absolute  mt-2 left-[35%] md:left-[40%] lg:left-[45%]  ">
          <Button text="Search" width={32}></Button>
        </div>
      </form>
    </div>
  );
};

export default FlightQuery;
