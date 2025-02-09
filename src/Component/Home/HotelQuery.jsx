import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Shared/Button";
import HotelPerson from "./Utility/HotelPerson";
import FlightQuery from "./FlightQuery";
import { HiOutlineCalendarDays } from "react-icons/hi2";



const HotelQuery = ({ toggleButton }) => {

  //STATE
  const [isTravellers, setIsTravellers] = useState(false);
  const [toggleFlight, setToggleFlight] = useState(false);

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
            <label htmlFor="" className="text-sm ">
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
            <label htmlFor="" className="">
              Add Dates
            </label>

            {/* date picker */}

            <motion.div className="relative flex">
              <div className="input input-bordered h-10 flex items-center focus:outline-none w-1/2 mt-2 border-r-0">
                <DatePicker

                  className="focus:outline-none"
                  selected={departure}
                  onChange={(date) => setDepartureDate(date)}
                  showDisabledMonthNavigation
                  monthsShown={1}
                  dateFormat={"dd/MM/yyyy"}
                />
              </div>
              <div className="input input-bordered h-10 flex items-center focus:outline-none w-1/2 mt-2 border-l-0">

                <DatePicker

                  className="pl-2"
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  showDisabledMonthNavigation
                  monthsShown={1}
                  dateFormat={"dd/MM/yyyy"}
                />
              </div>

              <div className="absolute bottom-2  bg-sky-200 shadow-lg rounded-2xl p-1 left-[45%]">
                <HiOutlineCalendarDays  size={16} color="black" ></HiOutlineCalendarDays  >
              </div>
            </motion.div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className=""
          >
            <label htmlFor="" className="">
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
            <label htmlFor="" className="">
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
        <section className="flex flex-wrap gap-5  lg:gap-0 items-center justify-between  md:mb-4  my-5 ">
          <div className="flex flex-wrap gap-2 space-x-3">
            <label htmlFor="" className="font-semibold text-secondary">Search For : </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="business" className="checkbox-primary" />
              <span className="">Business</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="couples" className="checkbox-primary" />
              <span className="">Couples</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="family" className="checkbox-primary" />
              <span className="">Family</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="friends" className="checkbox-primary" />
              <span className="">Friends</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="friends" className="checkbox-primary" />
              <span className="">Solo</span>
            </label>
          </div>

          <div className={`px-5 space-x-5 ${toggleButton && 'opacity-0'}`}>
            <button type="button" className="btn btn-outline btn-primary" onClick={() => setToggleFlight(!toggleFlight)}>{toggleFlight ? 'Remove Flight' : 'Add Flight'}</button>
            <Button width={44} text="Search"></Button>
          </div>
        </section>

        {/* add hotel content */}
        <section>
          {
            toggleFlight ? <section>
              <FlightQuery toggleButton={toggle} toggleFlight={toggleFlight}></FlightQuery>
            </section> :
              ""
          }

        </section>

      </form>
    </div>
  );
};

export default HotelQuery;


