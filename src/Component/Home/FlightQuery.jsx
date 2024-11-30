import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";

const FlightQuery = () => {
  const [departure, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [airClass, setAirClass] = useState();

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

  // handleSubmit Function
  const handleSubmit = (event) => {
    event.preventDefault();
    const tripType = event.target.tripType.value;
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

  return (
    <div className="p-5 bg-white rounded-xl rounded-tl-none">
      <form onSubmit={handleSubmit}>
        {/* Radio Buttons */}
        <section className="flex items-center justify-between gap-10 text-primary">
          <div className="flex space-x-4 mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="tripType" className="radio" />
              <span>Oneway</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="tripType" className="radio" />
              <span>Round Trip</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="radio" name="tripType" className="radio" />
              <span>Multicity</span>
            </label>
          </div>
          <p>Book Domestic and International flights</p>
        </section>

        {/* Inputs */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-5 border-2 p-5 rounded-md text-left uppercase text-primary">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border-r-2 "
          >
            <label htmlFor="" className="font-semibold text-primary">
              From
            </label>
            <input
              type="text"
              list="location"
              name="journeyFrom"
              className=" focus:outline-none h-12"
            />
            <p className="text-gray-700">Delhi Indira Gandhi Intl</p>

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
            className="border-r-2"
          >
            <label htmlFor="" className="font-semibold text-primary">
              To
            </label>
            <input
              type="text"
              list="location"
              name="journeyTo"
              className=" focus:outline-none h-12"
            />
            <p className="text-gray-700">Chhatrapati Shivaji</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="border-r-2"
          >
            <label htmlFor="" className="font-semibold text-primary">
              Departure
            </label>
            <DatePicker
              className="focus:outline-none h-12 text-gray-700"
              selected={departure}
              onChange={(date) => setDepartureDate(date)}
              showDisabledMonthNavigation
              monthsShown={1}
              dateFormat={"MMMM d, yyyy"}
            />
            <p className="text-gray-500">Select Date</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="border-r-2"
          >
            <label htmlFor="" className="font-semibold text-primary">
              Return
            </label>
            <DatePicker
              className="focus:outline-none h-12 text-gray-700"
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              showDisabledMonthNavigation
              monthsShown={1}
              dateFormat={"MMMM d, yyyy"}
            />
            <p className="text-gray-500">Select Date</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=""
          >
            <label htmlFor="" className="font-semibold text-primary ">
              Traveller & Class
            </label>
            <div className="dropdown text-gray-700">
              <div
                className=""
                role="button"
                onClick={() => setToggle(!toggle)}
              >
                1 Travellers {airClass}
              </div>
              <ul
                className={`bg-base-100 rounded-box z-[1] mt-6 w-72  p-2 shadow space-y-5 ${
                  toggle ? "absolute" : "hidden"
                }`}
              >
                <section className="flex justify-between items-center px-1">
                  <p className="font-semibold ">Adult (12+)</p>
                  <div className="flex justify-center items-center gap-5 text-center ">
                    <p
                      onClick={() => handleDecrement(adult, setAdult)}
                      className="rounded-full border-2 w-10 border-secondary"
                    >
                      -
                    </p>
                    <p className="rounded-full border-2 w-10 border-secondary">
                      {adult}
                    </p>
                    <p
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
                      onClick={() => handleDecrement(child, setChild)}
                      className="rounded-full border-2 w-10 border-secondary"
                    >
                      -
                    </p>
                    <p className="rounded-full border-2 w-10 border-secondary">
                      {child}
                    </p>
                    <p
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
                      onClick={() => handleDecrement(infant, setInfant)}
                      className="rounded-full border-2 w-10 border-secondary"
                    >
                      -
                    </p>
                    <p className="rounded-full border-2 w-10 border-secondary">
                      {infant}
                    </p>
                    <p
                      onClick={() => handleIncrement(infant, setInfant)}
                      className="rounded-full border-2 w-10 border-secondary"
                    >
                      +
                    </p>
                  </div>
                </section>
                <div className="px-2 font-semibold flex justify-between">
                  <p>Class</p>
                  <select
                    value={airClass}
                    onChange={handleChange}
                    className="border-2 rounded-sm p-1 border-secondary"
                  >
                    <option value="All">All</option>
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                    <option value="First">First</option>
                  </select>
                </div>
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
        </section>
        <div className="text-center absolute mt-2 left-1/2 ">
          <button
            type="submit"
            className="btn btn-outline text-white w-40  bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-t hover:from-secondary hover:to-primary "
          >
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightQuery;
