import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../Shared/Button";
import HButton from "../Shared/HButton";
import Travellers from "./Utility/Travellers";
import { GoArrowSwitch } from "react-icons/go";
import MultiCity from "./Utility/MultiCity";

const FlightQuery = () => {
  const [country, setCountries] = useState([]);
  const [journeyFrom, setJourneyFrom] = useState();
  const [journeyTo, setJourneyTo] = useState();
  const [departure, setDepartureDate] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const [tripType, setTripType] = useState("oneway");


  // Automatically set returnDate to tomorrow
  const [returnDate, setReturnDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });

  const [visible, setVisiable] = useState(false)

  // filter serach state
  const [filter, setFilter] = useState([])


  // const [adult, setAdult] = useState(0);
  // const [child, setChild] = useState(0);
  // const [infant, setInfant] = useState(0);
  // const [kids, setKids] = useState(0);


  const [airClass, setAirClass] = useState("Economy");
  // array of options
  const airClassoptions = ['Economy', "Premium", "Business", "First Class"];






  // handTripTypeChange function
  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  // handleSubmit Function
  const handleSubmit = (event) => {
    event.preventDefault();



    console.log(
      tripType,
      journeyTo,
      departure,
      returnDate,
      // adult,
      // child,
      // infant,
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
  const handleCountryChangeFrom = (e) => {
    const value = e.target.value;
    setJourneyFrom(value);
    setFilter(
      value ? country.filter((c) => c.toLowerCase().startsWith(value.toLowerCase())) : []
    )
  };


  const handleSelect = (country) => {
    setInput(country);
    setFilter([]); // Hide suggestions
  };

  //handle
  const handleCountryChangeTo = (value) => {
    setJourneyTo(value);
    countryData(value);
  };

  return (
    <div className="p-5 bg-white rounded-b-lg rounded-tl-none">
      <form onSubmit={handleSubmit}>
        {/* Radio Buttons */}
        <section className="flex flex-col md:flex-row justify-between  gap-5 lg:gap-10 text-secondary">
          <div className="flex items-center  space-x-4 md:mb-4 text-sm font-semibold">
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


        </section>

        {/* Inputs */}
        <section
          className={`grid gap-3   text-left uppercase bg-gradient-to-b from-secondary to-primary text-secondary bg-clip-text ${tripType === "oneway"
            ? "lg:grid-cols-4 !important"
            : "lg:grid-cols-4 !important"
            } grid-cols-1`}
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <label htmlFor="" className="text-black">
              From
            </label>{" "}
            <br />
            <input
              readOnly
              className="border-2 w-full focus:outline-none h-10 p-3 mt-2 rounded-lg "
              value={journeyFrom}
              placeholder="Bangaldesh"
             
            />
            <div
              className={`text-black ${journeyFrom ? "absolute" : "hidden"
                } h-36 overflow-y-auto bg-base-100 shadow-xl w-60 z-20 p-3 rounded-md`}
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
            className="relative"
          >
            <label htmlFor="" className="text-black">
              To
            </label>{" "}
            <br />
            <input
              readOnly
              className={`w-full focus:outline-none border-2 mt-2 h-10 p-3 rounded-lg`}
              value={journeyTo}
              placeholder="Nepal"
              
            />
            <div
              className={`text-black ${journeyTo ? "absolute" : "hidden"
                }  h-36 overflow-y-auto bg-base-100 shadow-xl w-60 z-20  p-3 rounded-md`}
            >
              {country?.map((c, index) => (
                <div
                  key={index}
                  className="flex gap-2 text-sm items-center py-2 "
                  role="button"
                  onClick={() => setJourneyTo(c?.name?.common) && setToggle(!toggle)}
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

            <div className="absolute top-9 -left-6">
              <GoArrowSwitch size={32} className="bg-base-100 shadow-md text-primary rounded-full p-1"></GoArrowSwitch>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}

          >
            <label htmlFor="" className="text-black ">
              {tripType === 'oneway' ? "Journey Date" : "Add Dates"}
            </label>

            <motion.div className="input input-bordered h-10 mt-2 flex items-center -space-x-10 focus:outline-none">
              <DatePicker

                className="focus:outline-none "
                selected={departure}
                onChange={(date) => setDepartureDate(date)}
                showDisabledMonthNavigation
                monthsShown={1}
                dateFormat={"dd/MM/yyyy"}
              />



              {
                tripType === 'round trip' && <DatePicker

                  className="border-l-2 pl-1 focus:outline-none "
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  showDisabledMonthNavigation
                  monthsShown={1}
                  dateFormat={"dd/MM/yyyy"}
                />
              }
            </motion.div>

            {
              tripType === 'round trip' && <p className="capitalize text-sm text-secondary my-1">Total Trip Duration : 00 days</p>
            }
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}

          >
            <Travellers></Travellers>
          </motion.div>



        </section>

        {/* multicity */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=""
        >
          {tripType === 'multicity' && <MultiCity visible={visible} setVisiable={setVisiable}></MultiCity>}
          {visible && <MultiCity visible={visible} setVisiable={setVisiable}></MultiCity>}
        </motion.div>

        {/* fare section */}
        <section className="flex items-center justify-between  md:mb-4 text-secondary my-5 ">
          <div className="flex space-x-3">
            <label htmlFor="" className="font-semibold">Fare Type : </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="radio" name="fare" className="radio" />
              <span className="text-secondary">Regular Fare</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="radio" name="fare" className="radio" />
              <span className="text-secondary">Student Fare</span>
            </label>
          </div>

          <div className=" space-x-5">
            <HButton text="Add Hotel"></HButton>
            <Button width={36} text="Search"></Button>
          </div>
        </section>


      </form>
    </div>
  );
};

export default FlightQuery;
