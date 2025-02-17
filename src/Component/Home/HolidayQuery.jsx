import { motion } from "motion/react";
import Button from "../Shared/Button";
import DatePicker from "react-datepicker";
import { useState } from "react";
import HotelPerson from "./Utility/HotelPerson";

const HolidayQuery = () => {

  const [allCountries, setAllCountries] = useState(flights);
  const [country, setCountry] = useState(flights);
  const [searchToggleFrom, setSearchToggleFrom] = useState(false)
  const [journeyFrom, setJourneyFrom] = useState([]);

  const [departure, setDepartureDate] = useState(new Date());
  // Automatically set returnDate to tomorrow next
  const [returnDate, setReturnDate] = useState(() => {
    const tomorrowNext = new Date();
    tomorrowNext.setDate(tomorrowNext.getDate() + 2);
    return tomorrowNext;
  });


  const [adult, setAdult] = useState(0)
  const [child, setChild] = useState(0)
  const [room, setRoom] = useState(1)

  const [adult2, setAdult2] = useState(0)
  const [child2, setChild2] = useState(0)
  const [toggle, setToggle] = useState(false)



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


  // Handle search input change
  const handleCountryChangeFrom = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setCountry(allCountries);  // Reset to full list if input is empty
    } else {
      const filteredCountries = allCountries.filter((c) =>
        c?.city.toLowerCase().includes(value)
      );
      setCountry(filteredCountries);
    }
  };


  // Handle country selection from
  const handleCountrySelect = (city, code, airport) => {
    setJourneyFrom([
      {
        city: city,
        code: code,
        airport: airport

      }
    ]);  // Set selected country
    setSearchToggleFrom(false);           // Close the dropdown
  };

  // handle searchClick FROM
  const handleSearchClick = () => {
    setSearchToggleFrom(true)
  }





  return (
    <div className="">
      <form className=" w-full lg:w-[1152px] gap-7 text-black   bg-white p-10">
        <section className="flex items-center gap-5">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <label htmlFor="" className="">
             Destination
            </label>
            <div onClick={handleSearchClick} className={`flex items-center mt-2  border rounded-lg h-16 w-full  `}>
              <span className="text-sm font-bold p-2 border-r-2">{journeyFrom[0]?.code || 'DAC'}</span>
              <div className="flex flex-col items-start gap-1 p-2">
                <span className="text-sm font-medium">{journeyFrom[0]?.city || "Dhaka"}</span>
                <span className="text-xs text-gray-500  w-full">{journeyFrom[0]?.airport || "Bangladesh, Hazrat Shahjalal"}</span>
              </div>
            </div>

            <div
              className={`text-black space-y-3 ${searchToggleFrom ? "absolute" : "hidden"
                } h-52 overflow-y-auto bg-base-100 shadow-xl w-64 -ml-5  z-20 p-3 px-2 rounded-md`}
            >
              <input
                onChange={handleCountryChangeFrom}
                name="search"
                type="text"
                className="input-sm w-full focus:outline-none border-b-2 h-14 rounded-md"
                placeholder="🛪 Type for airport name or code"
              />
              {country?.map((c, index) => (
                <div onClick={() => handleCountrySelect(c?.city, c?.code, c?.airport)} key={index} className="flex items-center gap-5 cursor-pointer p-2">
                  <h2 className="border-r-2 border-b-2 p-2 ">{c?.code}</h2>
                  <div>
                    <p>{c?.city}</p>
                    <p className="text-[12px]">{c?.airport}</p>
                  </div>
                </div>
              ))}
            </div>
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
              <div className="input input-bordered h-16 flex items-center focus:outline-none w-fit mt-2 border-r-0">
                <DatePicker

                  className="focus:outline-none "
                  selected={departure}
                  onChange={(date) => setDepartureDate(date)}
                  showDisabledMonthNavigation
                  monthsShown={1}
                  dateFormat={"dd MMMM, yyyy"}
                />
              </div>
              <div className="input input-bordered h-16 flex items-center focus:outline-none w-fit mt-2 border-l-0">

                <DatePicker

                  className="pl-2"
                  selected={returnDate}
                  onChange={(date) => setReturnDate(date)}
                  showDisabledMonthNavigation
                  monthsShown={1}
                  dateFormat={"dd MMMM, yyyy"}
                />
              </div>

              <div className="absolute w-8 text-center mask mask-hexagon bg-sky-300  shadow-lg p-2 font-medium left-[45%] bottom-3 ">
                {/* <HiOutlineCalendarDays  size={16} color="black" ></HiOutlineCalendarDays  >
                   */}
                2
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
              Your Budget
            </label>

            <select className="w-full focus:outline-none mt-2 input input-bordered h-16">
              <option selected>Budget Range</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>

            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className=""
          >
            <label htmlFor="" className="">
             Travellers
            </label>
            <br />
            <div className="dropdown text-gray-700 input input-bordered h-16 mt-2 focus:outline-none w-full transition-all">
              <div tabIndex={0} role="button" className="my-1">
                {adult || child ? `${room} rooms ${adult + child + adult2 + child2} guest` : " Room & Guest "}
              </div>
              <ul
                tabIndex={0}
                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-6 w-52  p-2 shadow space-y-2"
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
        <section className="flex flex-wrap gap-5 lg:gap-0 items-center justify-between  md:mb-4  my-5 ">
          <div className="flex flex-wrap gap-5 space-x-3">
            <label htmlFor="" className=" text-secondary">Search For : </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="business" className="checkbox-primary" />
              <span className="font-medium">Beach</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="couples" className="checkbox-primary" />
              <span className="font-medium">Adventure</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="family" className="checkbox-primary" />
              <span className="font-medium">Family</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="friends" className="checkbox-primary" />
              <span className="font-medium">Romantic</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="checkbox" name="friends" className="checkbox-primary" />
              <span className="font-medium">Solo</span>
            </label>
          </div>

          <div className="px-5 space-x-5">

            <Button width={44} text="Search"></Button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default HolidayQuery;


// fake data
const flights = [
  {
    code: "DAC",
    city: "Dhaka",
    country: "Bangladesh",
    airport: "Hazrat Shahjalal International Airport",
  },
  {
    code: "CXB",
    city: "Cox's Bazar",
    country: "Bangladesh",
    airport: "Cox's Bazar Airport",
  },
  {
    code: "JFK",
    city: "New York",
    country: "United States",
    airport: "John F Kennedy International Airport",
  },
  {
    code: "LHR",
    city: "London",
    country: "United Kingdom",
    airport: "Heathrow Airport",
  },
  {
    code: "DXB",
    city: "Dubai",
    country: "United Arab Emirates",
    airport: "Dubai International Airport",
  },
  {
    code: "SIN",
    city: "Singapore",
    country: "Singapore",
    airport: "Changi Airport",
  },
  {
    code: "HND",
    city: "Tokyo",
    country: "Japan",
    airport: "Haneda Airport",
  },
  {
    code: "SYD",
    city: "Sydney",
    country: "Australia",
    airport: "Sydney Kingsford Smith Airport",
  },
  {
    code: "CDG",
    city: "Paris",
    country: "France",
    airport: "Charles de Gaulle Airport",
  },
  {
    code: "IST",
    city: "Istanbul",
    country: "Turkey",
    airport: "Istanbul Airport",
  },
];
