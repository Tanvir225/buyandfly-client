import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../Shared/Button";

import HotelPerson from "./Utility/HotelPerson";
import HButton from "../Shared/HButton";



const HotelQuery = () => {

  //STATE
  const [isTravellers, setIsTravellers] = useState(false);

  const [adult, setAdult] = useState(0)
  const [child, setChild] = useState(0)
  const [room, setRoom] = useState(1)

  const [adult2, setAdult2] = useState(0)
  const [child2, setChild2] = useState(0)
  const [toggle, setToggle] = useState(false)

  const [departure, setDepartureDate] = useState(new Date());
  // Automatically set returnDate to tomorrow
  const [returnDate, setReturnDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });


  //handle click
  const handleClick = () => {
    if (!toggle) {
      setRoom(room + 1)
    }
    else {
      setRoom(room - 1)
    }
    setToggle(!toggle)

  }





  return (
    <div className="p-2 bg-white ">
      <form>
        {/* Inputs */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-7 rounded-xl text-left uppercase text-black bg-white rounded-tl-none">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <label htmlFor="" className="font-semibold text-secondary">
              Where Do you want to stay
            </label>
            <input
              className="border-2 w-full focus:outline-none h-10 p-3 mt-2 rounded-lg "
              placeholder="Bangaldesh"

            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}

          >
            <label htmlFor="" className="font-semibold text-secondary ">
              Add Dates
            </label>

            <motion.div className="input input-bordered h-10 mt-2 flex items-center -space-x-11 focus:outline-none">
              <DatePicker

                className="focus:outline-none "
                selected={departure}
                onChange={(date) => setDepartureDate(date)}
                showDisabledMonthNavigation
                monthsShown={1}
                dateFormat={"dd/MM/yyyy"}
              />



              <DatePicker

                className="border-l-2 -pl-2  focus:outline-none "
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                showDisabledMonthNavigation
                monthsShown={1}
                dateFormat={"dd/MM/yyyy"}
              />

            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className=""
          >
            <label htmlFor="" className="font-semibold text-secondary">
              Hotel Rating
            </label>

            <select className="w-full focus:outline-none mt-2 input input-bordered h-10">
              <option selected>Choose rating</option>
              <option value="1">1 Star</option>
              <option value="2">2 Star</option>
              <option value="3">3 star</option>
              <option value="4">4 star</option>
              <option value="5">5 star</option>
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=""
          >
            <label htmlFor="" className="font-semibold text-secondary">
              How Many Are Travelling
            </label>
            <br />
            <div className="dropdown text-gray-700 input input-bordered h-10 mt-2 focus:outline-none w-full transition-all">
              <div tabIndex={0} role="button" className="my-1">
                {adult || child ? `${room} rooms ${adult + child + adult2 + child2} guest` : " Room & Guest "}
              </div>
              <ul
                tabIndex={0}
                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-6 w-72  p-2 shadow space-y-2"
              >

                <div>
                  <HotelPerson adult={adult} child={child} room_no={1} setAdult={setAdult} setChild={setChild}></HotelPerson>
                </div>

                <div>
                  {
                    toggle ? <HotelPerson adult={adult2} child={child2} room_no={2} setAdult={setAdult2} setChild={setChild2}></HotelPerson> : ""
                  }
                </div>


                <div className="text-right">
                  <button type="button" onClick={handleClick} className="btn btn-sm bg-primary text-white hover:bg-secondary">
                    {toggle ? "close" : "Add Another Room"}
                  </button>
                </div>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* hotel type section */}
        <section className="flex items-center justify-between  md:mb-4 text-secondary my-5 ">
          <div className="flex space-x-3">
            <label htmlFor="" className="font-semibold">Search For : </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="business" className="checkbox-primary" />
              <span className="text-secondary">Business</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="couples" className="checkbox-primary" />
              <span className="text-secondary">Couples</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="family" className="checkbox-primary" />
              <span className="text-secondary">Family</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="friends" className="checkbox-primary" />
              <span className="text-secondary">Friends</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="friends" className="checkbox-primary" />
              <span className="text-secondary">Solo</span>
            </label>
          </div>

          <div className="px-5 space-x-5">
            <HButton width={44} text="Add Flights"></HButton>
            <Button width={44} text="Search"></Button>
          </div>
        </section>

      </form>
    </div>
  );
};

export default HotelQuery;
