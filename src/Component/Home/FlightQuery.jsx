import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";

import "react-datepicker/dist/react-datepicker.css";
import Button from "../Shared/Button";
import HButton from "../Shared/HButton";
import Travellers from "./Utility/Travellers";
import { GoArrowSwitch } from "react-icons/go";
import MultiCity from "./Utility/MultiCity";
import HotelQuery from "./HotelQuery";
import { LucideCalendarSync } from "lucide-react";
import Loading from "../Shared/Loading";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const FlightQuery = ({loading,setLoading,toggleFlight}) => {

  const [allCountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [journeyFrom, setJourneyFrom] = useState();
  const [journeyTo, setJourneyTo] = useState();
  const [departure, setDepartureDate] = useState(new Date());
  const [toggle, setToggle] = useState(false);
  const [tripType, setTripType] = useState("oneway");
  const [searchToggleFrom, setSearchToggleFrom] = useState(false)

  const [searchToggleTo, setSearchToggleTo] = useState(false)


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


  // Fetch data and set the states
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data);
        setCountry(data);  // Show all countries initially
        setLoading(false)
      });
  }, []);



  // Handle search input change
  const handleCountryChangeFrom = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setCountry(allCountries);  // Reset to full list if input is empty
    } else {
      const filteredCountries = allCountries.filter((c) =>
        c?.name?.common.toLowerCase().includes(value)
      );
      setCountry(filteredCountries);
    }
  };

  // Handle search input change
  const handleCountryChangeTo = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setCountry(allCountries);  // Reset to full list if input is empty
    } else {
      const filteredCountries = allCountries.filter((c) =>
        c?.name?.common.toLowerCase().includes(value)
      );
      setCountry(filteredCountries);
    }
  };






  // Handle country selection from
  const handleCountrySelect = (selectedCountry) => {
    setJourneyFrom(selectedCountry);  // Set selected country
    setSearchToggleFrom(false);           // Close the dropdown
  };

  // Handle country selection To
  const handleCountrySelectTo = (selectedCountry) => {
    setJourneyTo(selectedCountry);  // Set selected country
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
            <label htmlFor="" className="">
              From
            </label>{" "}
            <br />
            <input
              readOnly
              onClick={handleSearchClick}
              className="border-2 w-full focus:outline-none h-10 p-3 mt-2 rounded-lg "
              value={journeyFrom}
              placeholder="Bangaldesh"

            />
            <div
              className={`text-black space-y-3 ${searchToggleFrom ? "absolute" : "hidden"
                } h-48 overflow-y-auto bg-base-100 shadow-xl w-60 z-20 p-3 rounded-md`}
            >
              <input
                onChange={handleCountryChangeFrom}
                name="search"
                type="text"
                className="input-sm w-full focus:outline-none border-b-2 h-12 rounded-md"
                placeholder="🛪 Type for airport name or code"
              />
              {country?.map((c, index) => (
                <div onClick={() => handleCountrySelect(c?.name?.common)} key={index} className="flex items-center gap-5 cursor-pointer p-2">
                  <img src={`${c?.flags?.png}`} alt={`${c?.name?.common}`} className="w-10" />
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
            <label htmlFor="" className="">
              To
            </label>{" "}
            <br />
            <input
              readOnly
              onClick={handleSearchClickTo}
              className={`w-full focus:outline-none border-2 mt-2 h-10 p-3 rounded-lg`}
              value={journeyTo}
              placeholder="Nepal"

            />
            <div
              className={` text-black ${searchToggleTo ? "absolute" : "hidden"
                }  h-48 space-y-3 overflow-y-auto bg-base-100 shadow-xl w-60 z-20  p-3 rounded-md`}
            >

              <input
                onChange={handleCountryChangeTo}
                name="search"
                type="text"
                className="input-sm w-full focus:outline-none border-b-2 h-12 rounded-md"
                placeholder="🛪 Type for airport name or code"
              />
              {country?.map((c, index) => (
                <div onClick={() => handleCountrySelectTo(c?.name?.common)} key={index} className="flex items-center gap-5 cursor-pointer p-2">
                  <img src={`${c?.flags?.png}`} alt={`${c?.name?.common}`} className="w-10" />
                  <p>{c?.name?.common}</p>
                </div>
              ))}
            </div>

            <div className="absolute top-9 -left-5">
              <GoArrowSwitch size={32} className="bg-base-100 shadow-md text-primary rounded-full p-1"></GoArrowSwitch>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}

          >
            <label htmlFor="" className="">
              {tripType === 'oneway' ? "Journey Date" : "Add Dates"}
            </label>

            {/* one way trip */}

            {
              (tripType === 'oneway' || tripType === 'multicity') && <motion.div className="input input-bordered h-10 mt-2 flex items-center -space-x-10 focus:outline-none">



                <DatePicker

                  className="focus:outline-none "
                  selected={departure}
                  onChange={(date) => setDepartureDate(date)}
                  showDisabledMonthNavigation
                  monthsShown={1}
                  dateFormat={"dd/MM/yyyy"}
                />



              </motion.div>
            }

            {/* round trip */}

            {
              tripType === 'round trip' &&
              <motion.div className="relative flex">
                <div className="input input-bordered h-10 flex items-center focus:outline-none w-1/2 mt-2 border-r-0">
                  <DatePicker

                    className="focus:outline-none "
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

                <div className="absolute bottom-2  bg-sky-200 rounded-2xl shadow-lg p-1 left-[44%]">
                  <HiOutlineCalendarDays  size={16} color="black" ></HiOutlineCalendarDays  >
                </div>
              </motion.div>
            }

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
        <section className=" flex flex-col lg:flex-row justify-between  md:mb-4 text-secondary my-5 ">
          <div className="flex flex-col lg:flex-row space-x-3">
            <label htmlFor="" className="">Fare Type:</label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="radio" name="fare" className="radio" />
              <span className="text-secondary">Regular Fare</span>
            </label>
            <label className="flex items-center btn btn-sm   cursor-pointer">
              <input type="radio" name="fare" className="radio" />
              <span className="text-secondary">Student Fare</span>
            </label>
          </div>

          <div className={`space-x-5   ${(toggle || toggleFlight) && 'opacity-0'}`}>
            <button className="btn btn-outline btn-primary" onClick={() => setToggle(!toggle)}>Add Hotel</button>
            <Button width={36} text="Search"></Button>

          </div>
        </section>

        {/* add hotel content */}
        <section>
          {
            toggle ? <section>
              <HotelQuery toggleButton={toggle}></HotelQuery>

              <div className={`space-x-5  text-right`}>
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


