import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../Shared/Button";
import Travellers from "./Utility/Travellers";
import { GoArrowSwitch } from "react-icons/go";
import MultiCity from "./Utility/MultiCity";
import HotelQuery from "./HotelQuery";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGet_all_citiesQuery } from "../../features/city/city_api";

const FlightQuery = ({ toggleFlight }) => {
  const navigate = useNavigate()

  const { adult_travellers_number, child_travellers_number, infant_travellers_number } = useSelector(state => state.travellers)

  const [allFromCountries, setAllFromCountries] = useState(flights);
  const [allToCountries, setAllToCountries] = useState(flights);
  const [country, setCountry] = useState(flights);
  const [journeyFrom, setJourneyFrom] = useState([]);
  const [journeyTo, setJourneyTo] = useState([]);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const [tripType, setTripType] = useState("oneway");
  const [fareType, setFareType] = useState("");
  const [searchToggleFrom, setSearchToggleFrom] = useState(false)
  const [isAirClass, setIsAirClass] = useState(false);
  const [airClass, setAirClass] = useState("Flight Class");

  const [searchToggleTo, setSearchToggleTo] = useState(false)

  // array of options
  const airClassoptions = ['Economy', "Premium", "Business", "First Class"];
  // Automatically set returnDate to tomorrow next day
  const [returnDate, setReturnDate] = useState(() => {
    const tomorrowNext = new Date();
    tomorrowNext.setDate(tomorrowNext.getDate() + 2);
    return tomorrowNext;
  });

  const [visible, setVisiable] = useState(false)


  const { data } = useGet_all_citiesQuery()
  console.log(data)

  useEffect(() => {
    if (data?.data?.length > 0) {
      setAllFromCountries(
        [...flights, ...data.data.map((item, i) => {
          return {
            code: item.code,
            city: item.city_name,
            country: item.country_name,
            airport: item.name
          }
        }),
        ]
      )
      setAllToCountries(
        [...flights, ...data.data.map((item, i) => {
          return {
            code: item.code,
            city: item.city_name,
            country: item.country_name,
            airport: item.name
          }
        }),
        ]
      )
    }
  }, [data?.data])
  // handTripTypeChange function
  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  // handleSubmit Function
  const handleSubmit = (event) => {

    event.preventDefault();

    const params = new URLSearchParams()
    params.set("journeyFrom", journeyFrom[0].code)
    params.set("journeyTo", journeyTo[0].code)
    params.set("tripType", tripType)
    params.set("departureDate", departureDate)
    params.set("returnDate", returnDate)
    params.set("fareType", fareType)
    params.set("airClass", airClass)
    params.set("adult", adult_travellers_number)
    params.set("child", child_travellers_number)
    params.set("infant", infant_travellers_number)

    // navigate to search page
    navigate(`/prices?${params.toString()}`);
  };




  // Handle search input change
  const handleCountryChangeFrom = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      // setCountry(allFromCountries);  // Reset to full list if input is empty
      setAllFromCountries([...flights, ...data.data.map((item, i) => {
        return {
          code: item.code,
          city: item.city_name,
          country: item.country_name,
          airport: item.name
        }
      }),
      ])
    } else {
      const filteredCountries = [...flights, ...data.data.map((item, i) => {
        return {
          code: item.code,
          city: item.city_name,
          country: item.country_name,
          airport: item.name
        }
      })].filter((c) =>
        c?.city?.toLowerCase()?.includes(value)
      );
      setAllFromCountries(filteredCountries);
    }
  };

  // Handle search input change
  const handleCountryChangeTo = (e) => {
    const value = e.target.value.toLowerCase();
    console.log(value)
    if (value === "") {
      // setCountry(allFromCountries);  // Reset to full list if input is empty
      setAllToCountries([...flights, ...data.data.map((item, i) => {
        return {
          code: item.code,
          city: item.city_name,
          country: item.country_name,
          airport: item.name
        }
      })])
    } else {
      const filteredCountries = [...flights, ...data.data.map((item, i) => {
        return {
          code: item.code,
          city: item.city_name,
          country: item.country_name,
          airport: item.name
        }
      })].filter((c) =>
        c?.city?.toLowerCase()?.includes(value)
      );
      setAllToCountries(filteredCountries);
    }
  };






  // Handle country selection from
  const handleCountrySelect = (city, code, airport, countryName) => {
    setJourneyFrom([
      {
        city: city,
        code: code,
        airport: airport,
        countryName
      }
    ]);  // Set selected country
    setSearchToggleFrom(false);           // Close the dropdown
  };

  // Handle country selection To
  const handleCountrySelectTo = (city, code, airport, countryName) => {
    console.log(countryName)
    setJourneyTo([
      {
        city: city,
        code: code,
        airport: airport,
        countryName
      }
    ]
    );  // Set selected country
    setSearchToggleTo(false);           // Close the dropdown
  };

  // handle searchClick FROM
  const handleSearchClick = () => {
    setSearchToggleFrom(true)
  }

  // handle searchClick TO
  const handleSearchClickTo = () => {
    setSearchToggleTo(true)
  }

  // handle fareType
  const handleFareType = (e) => {
    setFareType(e.target.value)
  }
  console.log(allFromCountries)

  return (
    <div className="p-5 bg-white rounded-b-lg rounded-tl-none">
      <form onSubmit={handleSubmit}>
        {/* Radio Buttons */}
        <section className="flex flex-col md:flex-row justify-between   gap-5 lg:gap-5 text-secondary">
          <div className="flex items-center  space-x-4 md:mb-4 text-sm font-semibold">
            <label className="flex items-center  space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                className="radio checked:bg-primary"
                value="oneway"
                checked={tripType === "oneway"}
                onChange={handleTripTypeChange}
              />
              <span className="">Oneway</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                className="radio checked:bg-primary"
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
                className="radio checked:bg-primary"
                value="multicity"
                checked={tripType === "multicity"}
                onChange={handleTripTypeChange}
              />
              <span>Multicity</span>
            </label>
          </div>

          <section className="flex items-center gap-5">

            <div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Travellers></Travellers>
              </motion.div>
            </div>
            {/* economy */}
            <div className={`relative`}>
              {/* dropdown - btn */}
              <div
                onClick={() => setIsAirClass(!isAirClass)}
                className="mx-auto w-44  flex items-center justify-between rounded-lg px-3 py-2 border"
              >
                <h1 className=" text-gray-600 font-medium" role="button">
                  {airClass}
                </h1>
                <svg
                  className={`${isAirClass ? "-rotate-180" : "rotate-0"
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
                className={`${isAirClass
                  ? "visible top-0 opacity-100"
                  : "invisible -top-4 opacity-0"
                  } absolute z-20 mx-auto my-12 w-48  rounded-xl py-4 border bg-base-100 duration-300`}
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
          className={`grid gap-3  text-left  bg-gradient-to-b from-secondary to-primary text-secondary bg-clip-text ${tripType === "oneway"
            ? "lg:gap-72 lg:grid-cols-4 !important"
            : "lg:-space-x-5 lg:grid-cols-3 !important"
            } grid-cols-1`}
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            {/* <label htmlFor="" className="">
              From
            </label> */}
            <br />
            <div onClick={handleSearchClick} className={`flex items-center mt-2  border rounded-lg h-16 w-full lg:w-[340px] `}>
              <span className="text-sm font-bold p-2 border-r-2">{journeyFrom[0]?.code || 'DAC'}</span>
              <div className="flex flex-col items-start gap-1 p-2">
                <span className="text-sm font-medium">{journeyFrom[0]?.city || "Dhaka"}</span>
                <span className="text-xs text-gray-500  w-full">{journeyFrom[0]?.countryName || 'Bangladesh'}, {journeyFrom[0]?.airport || "Hazrat Shahjalal"}</span>
              </div>
            </div>

            <div
              className={`text-black space-y-3 ${searchToggleFrom ? "absolute" : "hidden"
                } h-52 overflow-y-auto bg-base-100 shadow-xl w-full lg:w-80  z-20 p-3 px-2 rounded-md`}
            >
              <input
                onChange={handleCountryChangeFrom}
                name="search"
                type="text"
                className="input-sm w-full focus:outline-none border-b-2 h-14 rounded-md"
                placeholder="🛪 Type for airport name or code"
              />
              {allFromCountries?.map((c, index) => (
                <div onClick={() => handleCountrySelect(c?.city, c?.code, c?.airport, c.country)} key={index} className="flex items-center gap-5 cursor-pointer p-2">
                  <h2 className="border-r-2 border-b-2 p-2 ">{c?.code}</h2>
                  <div>
                    <p>{c?.city}</p>
                    <p className="text-[12px]">{c.country}, {c?.airport}</p>
                  </div>
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
            {/* <label htmlFor="" className="">
              To
            </label> */}
            <br />
            <div onClick={handleSearchClickTo} className={`flex items-center mt-2  border rounded-lg h-16 text-wrap truncate w-full lg:w-[340px] `}>
              <span className="text-sm font-bold p-2 border-r-2 ml-1">{journeyTo[0]?.code || "JED"}</span>
              <div className="flex flex-col items-start gap-1 p-2">
                <span className="text-sm font-medium">{journeyTo[0]?.city || "Saudi Arabia"}</span>
                <span className="text-xs text-gray-500 truncate w-[80%]">{journeyTo[0]?.countryName || 'Saudi Arabia'}, {journeyTo[0]?.airport || "King Abdulaziz Int Airport"}</span>
              </div>
            </div>
            <div
              className={` text-black ${searchToggleTo ? "absolute" : "hidden"
                }  h-52 space-y-3 overflow-y-auto bg-base-100 shadow-xl  z-20  p-3 px-2 w-full lg:w-80 rounded-md`}
            >

              <input
                onChange={handleCountryChangeTo}
                name="search"
                type="text"
                className="input-sm w-full focus:outline-none border-b-2 h-12 rounded-md"
                placeholder="🛪 Type for airport name or code"
              />
              {allToCountries?.map((c, index) => (
                <div onClick={() => handleCountrySelectTo(c?.city, c?.code, c?.airport, c?.country)} key={index} className="flex items-center gap-5 cursor-pointer p-2">
                  <h2 className="border-r-2 border-b-2 p-2 ">{c?.code}</h2>
                  <div>
                    <p>{c?.city}</p>
                    <p className="text-[12px]">{c?.airport}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute top-12 -left-6">
              <GoArrowSwitch size={34} className="bg-base-100 shadow-md text-primary rounded-full p-1"></GoArrowSwitch>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}

          >
            {/* <label htmlFor="" className="">
              {tripType === 'oneway' ? "Journey Date" : "Add Dates"}
            </label> */}

            {/* one way trip */}

            {
              (tripType === 'oneway' || tripType === 'multicity') && <motion.div className={`input input-bordered h-16 mt-8  flex items-center w-full lg:w-[340px] focus:outline-none ${tripType === 'multicity' && 'lg:-ml-7'}`}>



                <DatePicker

                  className="focus:outline-none "
                  selected={departureDate}
                  onChange={(date) => setDepartureDate(date)}
                  showDisabledMonthNavigation
                  monthsShown={1}
                  dateFormat={"dd MMMM, yyyy "}
                />



              </motion.div>
            }

            {/* round trip */}

            {
              tripType === 'round trip' &&
              <motion.div className="relative flex lg:w-[50%] -ml-5">
                <div className="input input-bordered h-16 flex items-center focus:outline-none w-full mt-8 border-r-0">
                  <DatePicker

                    className="focus:outline-none"

                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    showDisabledMonthNavigation
                    monthsShown={1}
                    dateFormat={"dd MMMM, yyyy "}
                  />
                </div>
                <div className="input input-bordered h-16 flex items-center focus:outline-none w-full mt-8 border-l-0">

                  <DatePicker

                    className="pl-2 "
                    selected={returnDate}
                    onChange={(date) => setReturnDate(date)}
                    showDisabledMonthNavigation
                    monthsShown={1}
                    dateFormat={"MMMM d, yyyy "}
                  />
                </div>

                <div className="absolute bottom-3 w-8 text-center mask mask-hexagon bg-sky-300  shadow-lg p-2 font-medium left-[90%] ">
                  {/* <HiOutlineCalendarDays  size={16} color="black" ></HiOutlineCalendarDays  >
                   */}
                  2
                </div>
              </motion.div>
            }

            {/* {
              tripType === 'round trip' && <p className="capitalize text-sm text-secondary my-1">Total Trip Duration : 00 days</p>
            } */}

          </motion.div>



          <div className={`mt-8`}>

            <div className={`${tripType === 'oneway' ? 'block' : 'hidden'} `}>
              <Button width={28} height={16}></Button>
            </div>
          </div>


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
        <section className=" flex flex-col lg:flex-row justify-between items-center text-secondary my-5 ">
          <div className="flex flex-wrap lg:gap-0 gap-5 lg:flex-row space-x-3">
            <label htmlFor="" className="">Fare Type:</label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input onChange={handleFareType} type="radio" name="fare" value={'Regular Fare'} className="radio checked:bg-primary" />
              <span className="text-secondary font-medium">Regular Fare</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input onChange={handleFareType} type="radio" name="fare" value={'Student Fare'} className="radio checked:bg-primary" />
              <span className="text-secondary font-medium">Student Fare</span>
            </label>
          </div>


          <div className={`flex items-center   gap-5 ${(toggle || toggleFlight) && 'opacity-0'}`}>
            <button className={`btn btn-outline btn-primary ${tripType === 'oneway' && 'hidden'}`} onClick={() => setToggle(!toggle)}><FaPlus></FaPlus> Add Hotel</button>
            <div className={`${tripType === 'oneway' ? 'hidden' : 'block'} `}>
              <Button width={32} text="Search"></Button>
            </div>
          </div>

        </section>

        {/* add hotel content */}
        <section>
          {
            toggle ? <section className="w-[100%]">
              <HotelQuery toggleButton={toggle}></HotelQuery>

              <div className={`flex justify-end gap-3  text-right`}>
                <button className="btn btn-outline btn-primary" onClick={() => setToggle(!toggle)}>Remove Hotel</button>
                <Button width={36} text="Search"></Button>

              </div>
            </section> :
              ""
          }

        </section>

      </form>
    </div>
  );
};

export default FlightQuery;


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
    airport: "Cox's Bazar Airportt",
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
