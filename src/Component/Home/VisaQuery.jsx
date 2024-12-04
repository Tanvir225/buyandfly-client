import DatePicker from "react-datepicker";
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Button from "../Shared/Button";

const VisaQuery = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [travellers, setTravellers] = useState(1);
  const [toggle, setToggle] = useState(false);

  const isSmallScreen = window.innerWidth <= 768;

  //   date range
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // handleIncrement function
  const handleIncrement = (travellers, setTravellers) => {
    setTravellers(travellers + 1);
  };

  // handleIncrement function
  const handleDecrement = (travellers, setTravellers) => {
    if (travellers > 1) {
      setTravellers(travellers - 1);
    }
  };

  return (
    <div className="p-2 bg-white rounded-xl rounded-tl-none">
      <form>
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-7 rounded-xl text-left uppercase text-black bg-white rounded-tl-none">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 "
          >
            <label htmlFor="" className="font-semibold text-primary">
              Flying Form Airport / City
            </label>
            <input
              type="text"
              list="location"
              placeholder="TH | Thailand"
              className="input-bordered input  focus:outline-none h-12 text-gray-800 w-full"
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
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <label htmlFor="" className="font-semibold text-primary">
              Select Date
            </label>{" "}
            <br />
            <DatePicker
              className="input input-bordered focus:outline-none h-12  font-semibold text-gray-600"
              onChange={onChange}
              startDate={startDate}
              selectsRange
              monthsShown={isSmallScreen ? 1 : 2}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <label htmlFor="" className="font-semibold text-primary">
              End Date
            </label>
            <br />
            <DatePicker
              disabled
              className=" input input-bordered focus:outline-none h-12 bg-transparent  font-semibold text-gray-600"
              endDate={endDate}
              selected={endDate ? endDate : startDate}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="space-y-2"
          >
            <label htmlFor="" className="font-semibold text-primary ">
              Traveller
            </label>
            <br />
            <div className="dropdown text-gray-700 ">
              <div
                className="input input-bordered flex  items-center w-64"
                role="button"
                onClick={() => setToggle(!toggle)}
              >
                {travellers} Travellers
              </div>
              <ul
                className={`bg-base-100 rounded-box z-[1] mt-6 w-72  p-2 shadow space-y-5 ${
                  toggle ? "absolute" : "hidden"
                }`}
              >
                <section className="flex justify-between items-center px-1">
                  <p className="font-semibold ">Travellers</p>
                  <div className="flex justify-center items-center gap-5 text-center ">
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
        </section>

        <div className="text-center absolute   left-[35%] md:left-[40%] lg:left-[45%]  ">
          <Button text="Search" width={32}></Button>
        </div>
      </form>
    </div>
  );
};

export default VisaQuery;
