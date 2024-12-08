import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../Shared/Button";

const FlightQuery = () => {
  const [country, setCountries] = useState([]);
  const [departure, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const [tripType, setTripType] = useState("oneway");
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [airClass, setAirClass] = useState("All");
  let totalpassenger = 0;

  // handle total

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
    const journeyFrom = event.target.journeyFrom.value;
    const journeyTo = event.target.journeyTo.value;

    console.log(
      tripType,
      journeyFrom,
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
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => setCountries(data))
  },[])

  // console.log(country[0]?.flags?.png);

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
          {
            <p>
              {tripType === "oneway" ? (
                "Book Domestic and International flights"
              ) : (
                <div className="text-right mx-auto p-2 bg-gradient-to-t  from-secondary to-primary  text-transparent bg-clip-text font-semibold">
                  -- Days
                </div>
              )}
            </p>
          }
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
              list="location"
              name="journeyFrom"
              placeholder="Dellhi"
              className="border-hidden focus:outline-none h-12  font-semibold text-gray-700"
            />
            <datalist id="location" className="">
              <option value="✈️ Delhi"></option>
              <option value="✈️ Mumbai"></option>
              <option value="✈️ Lucknow"></option>
              <option value="✈️ Kolkata"></option>
            </datalist>
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
              list="location"
              placeholder="Australia"
              name="journeyTo"
              className=" focus:outline-none h-12 font-semibold text-gray-700"
            />
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
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={`border-b-2 lg:border-r-2 lg:border-b-0 text-sm ${
              tripType === "oneway" ? "h-full" : "h-8"
            }`}
          >
            <label htmlFor="" className="font-semibold  ">
              Traveller
            </label>
            <br />
            <div className="dropdown  ">
              <div
                className="mt-5 font-semibold text-gray-700"
                role="button"
                onClick={() => setToggle(!toggle)}
              >
                {totalpassenger} Travellers | {airClass}
              </div>
              <ul
                className={`bg-base-100 rounded-box z-[1] mt-6 w-80  p-5 shadow space-y-5 text-gray-700 ${
                  toggle ? "absolute" : "hidden"
                }`}
              >
                <section className="flex justify-between items-center px-2">
                  <p className="font-semibold ">Adult (12+)</p>
                  <div className="flex justify-center items-center gap-5 text-center ">
                    <p
                      role="button"
                      onClick={() => handleDecrement(adult, setAdult)}
                      className="rounded-full border-2 w-10 border-secondary"
                    >
                      -
                    </p>
                    <p className="rounded-full border-2 w-10 border-secondary">
                      {adult}
                    </p>
                    <p
                      role="button"
                      onClick={() => handleIncrement(adult, setAdult)}
                      className="rounded-full border-2 w-10 border-secondary"
                    >
                      +
                    </p>
                  </div>
                </section>
                <section className="flex justify-between items-center px-1">
                  <p className="font-semibold ">Child (2-11)</p>
                  <div className="flex justify-center items-center gap-5 text-center ">
                    <p
                      role="button"
                      onClick={() => handleDecrement(child, setChild)}
                      className="rounded-full border-2 w-10 border-secondary"
                    >
                      -
                    </p>
                    <p className="rounded-full border-2 w-10 border-secondary">
                      {child}
                    </p>
                    <p
                      role="button"
                      onClick={() => handleIncrement(child, setChild)}
                      className="rounded-full border-2 w-10 border-secondary"
                    >
                      +
                    </p>
                  </div>
                </section>
                <section className="flex justify-between items-center px-1">
                  <p className="font-semibold ">Infant (0-2)</p>
                  <div className="flex justify-center items-center gap-5 text-center ">
                    <p
                      role="button"
                      onClick={() => handleDecrement(infant, setInfant)}
                      className="rounded-full border-2 w-10 border-secondary"
                    >
                      -
                    </p>
                    <p className="rounded-full border-2 w-10 border-secondary">
                      {infant}
                    </p>
                    <p
                      role="button"
                      onClick={() => handleIncrement(infant, setInfant)}
                      className="rounded-full border-2 w-10 border-secondary"
                    >
                      +
                    </p>
                  </div>
                </section>

                <div className="text-right">
                  <p
                    onClick={() => setToggle(false)}
                    className="btn btn-sm bg-primary text-white hover:bg-secondary"
                  >
                    Done
                  </p>
                </div>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor="" className="font-semibold">
              Class
            </label>
            <div className="mt-1">
              <select
                value={airClass}
                onChange={handleChange}
                className="rounded-sm font-semibold p-2 w-full border-none focus:outline-none text-gray-700"
              >
                <option value="All">All</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
              </select>
            </div>
          </motion.div>
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
