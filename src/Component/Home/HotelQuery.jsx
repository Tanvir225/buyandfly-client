import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../Shared/Button";



const HotelQuery = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="p-2 bg-white rounded-xl rounded-tl-none">
      <form>
        {/* Inputs */}
        <section className="grid grid-cols-1 lg:grid-cols-6 gap-5 p-7 rounded-xl text-left uppercase text-black bg-white rounded-tl-none">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b-2 lg:border-r-2 lg:border-b-0 "
          >
            <label htmlFor="" className="font-semibold text-primary">
              Region, City, Area
            </label><br />
            <input
              type="text"
              placeholder="Region, City, Area"
              className=" focus:outline-none h-12 text-gray-800 w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-b-2 lg:border-r-2 lg:border-b-0"
          >
            <label htmlFor="" className="font-semibold text-primary">
              Check-in
            </label> <br />
            <DatePicker
              className="focus:outline-none h-12"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showDisabledMonthNavigation
              monthsShown={1}
              dateFormat={"MMMM d, yyyy"}
            />
            <p className="text-gray-500">Select Date</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-b-2 lg:border-r-2 lg:border-b-0"
          >
            <label htmlFor="" className="font-semibold text-primary">
              Check-out
            </label> <br />
            <DatePicker
              className="focus:outline-none h-12"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showDisabledMonthNavigation
              monthsShown={1}
              dateFormat={"MMMM d, yyyy"}
            />
            <p className="text-gray-500">Select Date</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="border-b-2 lg:border-r-2 lg:border-b-0"
          >
            <label htmlFor="" className="font-semibold text-primary">
              Nights
            </label>
            <p className="mt-2">nights</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="border-b-2 lg:border-r-2 lg:border-b-0 pb-2"
          >
            <label htmlFor="" className="font-semibold text-primary">
              Nationality
            </label>

            <select className="w-full h-12">
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Thailand">Thailand</option>
              <option value="Iran">Iran</option>
              <option value="Guyana">Guyana</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Kuwait">Kuwait</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=""
          >
            <label htmlFor="" className="font-semibold text-primary">
              Select Rooms
            </label>
            <br />
            <div className="dropdown text-gray-700">
              <div tabIndex={0} role="button" className="">
                2 Rooms
              </div>
              <ul
                tabIndex={0}
                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-6 w-72  p-2 shadow space-y-5"
              >
                <section className="flex justify-between items-center px-1 border-b-2">
                  <p className="font-semibold ">Room : 1</p>
                  <div className="flex justify-center items-center gap-5 text-center ">
                    <select>
                      <option value="1" selected>
                        1 adult
                      </option>
                      <option value="2" selected>
                        2 adult
                      </option>
                      <option value="3" selected>
                        3 adult
                      </option>
                      <option value="4" selected>
                        4 adult
                      </option>
                    </select>
                    <select>
                      <option value="1" selected>
                        1 child
                      </option>
                      <option value="2" selected>
                        2 child
                      </option>
                      <option value="3" selected>
                        3 child
                      </option>
                      <option value="4" selected>
                        4 child
                      </option>
                    </select>
                  </div>
                </section>
                <section className="flex justify-between items-center px-1 border-b-2">
                  <p className="font-semibold ">Room : 2</p>
                  <div className="flex justify-center items-center gap-5 text-center ">
                    <select>
                      <option value="1" selected>
                        1 adult
                      </option>
                      <option value="2" selected>
                        2 adult
                      </option>
                      <option value="3" selected>
                        3 adult
                      </option>
                      <option value="4" selected>
                        4 adult
                      </option>
                    </select>
                    <select>
                      <option value="1" selected>
                        1 child
                      </option>
                      <option value="2" selected>
                        2 child
                      </option>
                      <option value="3" selected>
                        3 child
                      </option>
                      <option value="4" selected>
                        4 child
                      </option>
                    </select>
                  </div>
                </section>
                <section className="flex justify-between items-center px-1 border-b-2">
                  <p className="font-semibold ">Room : 3</p>
                  <div className="flex justify-center items-center gap-5 text-center ">
                    <select>
                      <option value="1" selected>
                        1 adult
                      </option>
                      <option value="2" selected>
                        2 adult
                      </option>
                      <option value="3" selected>
                        3 adult
                      </option>
                      <option value="4" selected>
                        4 adult
                      </option>
                    </select>
                    <select>
                      <option value="1" selected>
                        1 child
                      </option>
                      <option value="2" selected>
                        2 child
                      </option>
                      <option value="3" selected>
                        3 child
                      </option>
                      <option value="4" selected>
                        4 child
                      </option>
                    </select>
                  </div>
                </section>

                <div className="text-right">
                  <button className="btn btn-sm bg-primary text-white hover:bg-secondary">
                    Done
                  </button>
                </div>
              </ul>
            </div>
          </motion.div>
        </section>
        <div className="text-center absolute  -mt-5 left-[35%] md:left-[40%] lg:left-[45%]  ">
          <Button text="Search" width={32}></Button>
        </div>
      </form>
    </div>
  );
};

export default HotelQuery;
