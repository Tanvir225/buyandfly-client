import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "/logo.svg";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setFilter } from "../../features/customizedFilter/customizedFilterSlice";


export default function CustomaizeFilter({airlines}) {
  const [isAirlines, setIsAirline] = useState(true);
  const [isPrices, setIsPrices] = useState(true);
  const [isPopular, setIsPopular] = useState(true);
  const [isTime, setIsTime] = useState(false);
  const [isCities, setIsCities] = useState(false);
  const [isFSchedule, setIsFSchedule] = useState(false);
  const [isNonStop, setIsNonStop] = useState(true)
  const [isOneStop, setIsOneStop] = useState(false)
  const [filterObject, setFilterObject] = useState({
    isNonStop:false,
    isOneStop: false
  })
  const [price, setPrice] = useState(0);
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  // const [filters, setFilters] = useState({
  //   nonStop: "",
  //   oneStop: "",
  //   earlyMorningDepartures: "",
  //   lateDepartures: "",
  //   refundable: "",
  // });

  const toggleFilter = (filter, setFilter) => {
    setFilter(!filter);
  };
  const handleRangeChange = (e) => {
    setPrice(e.target.value);
  };
  console.log(price);

  // const handleCheckboxChange = (e) => {
  //   const { name, value, checked } = e.target;
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [name]: checked ? value : "",
  //   }));
  // };

  // console.log(filters.value)

  // checked={filters.name !== ""}
  //         onChange={handleCheckboxChange}

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setFilter(filterObject))
  }, [filterObject])
  return (
    <div>
      {/* popular filter start */}
      <div className="rounded-[10px] max-w-sm shadow-md">
        {/* dropdown start */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer text-black p-3"
            onClick={() => toggleFilter(isPopular, setIsPopular)}
          >
            <p className="text-[#111111] font-medium text-sm">Popular Filter</p>
            <div className="text-[#111111]">
              {isPopular ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
          <div className="border-t-2 border-[#DEE2E6]"></div>
        </div>
        {/* dropdown end */}

        {/* checkbox start */}
        <div
          className={`mt-2 px-2  pb-3 space-y-5 transition-all duration-300 ease-in-out overflow-hidden ${isPopular ? "max-h-52 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                onChange={(e) => {
                  setFilterObject({
                    ...filterObject,
                    isNonStop: !filterObject.isNonStop
                  })
                }}
                type="checkbox"
                name="nonStop"
                checked = {filterObject.isNonStop}
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">Non Stop({airlines.filter(item => item.flights.length===1).length})</span>
            </label>
            <p className="text-sm text-[#111111]">BDT 179885</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                onChange={(e) => {
                  setFilterObject({
                    ...filterObject,
                    isOneStop: !filterObject.isOneStop
                  })
                }}
                type="checkbox"
                name="oneStop"
                value="oneStop"
                checked = {filterObject.isOneStop}
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">1 Stop({airlines.filter(item => item.flights.length===2).length})</span>
            </label>
            <p className="text-sm text-[#111111]">BDT 179885</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="earlyMorningDepartures"
                value="earlyMorningDepartures"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">Early Morning(16)</span>
            </label>
            <p className="text-sm text-[#111111]">BDT 179885</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="lateDepartures"
                value="lateDepartures"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">Late Departures(38)</span>
            </label>
            <p className="text-sm text-[#111111]">BDT 179885</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="refundable"
                value="refundable"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">Refundable(38)</span>
            </label>
            <p className="text-sm text-[#111111]">BDT 179885</p>
          </div>
        </div>
        {/* checkbox end */}
      </div>
      {/* popular filter end */}


      {/* airline start */}
      <div className="rounded-[10px] max-w-sm shadow-md mt-3">
        {/* dropdown start */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer text-black p-3"
            onClick={() => toggleFilter(isAirlines, setIsAirline)}
          >
            <p className="text-[#111111] font-medium text-sm">Airlines</p>
            <div className="text-[#111111]">
              {isAirlines ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
          <div className="border-t-2 border-[#DEE2E6]"></div>
        </div>
        {/* dropdown end */}

        {/* checkbox start */}
        <div
          className={`mt-2 px-2 pb-3 space-y-5 transition-all duration-300 ease-in-out overflow-hidden ${isAirlines ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="usBangla"
                value="usBangla"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <div>
                <img src={logo} alt="" />
              </div>
              <span className="text-sm text-[#111111]">US-Bangla Air(25)</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="qatarAirways"
                value="qatarAirways"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <div>
                <img src={logo} alt="" />
              </div>
              <span className="text-sm text-[#111111]">Qatar Airways(12)</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="emirates"
                value="emirates"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <div>
                <img src={logo} alt="" />
              </div>
              <span className="text-sm text-[#111111]">Emirates(12)</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="indigo"
                value="indigo"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <div>
                <img src={logo} alt="" />
              </div>
              <span className="text-sm text-[#111111]">Indigo(12)</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="airIndia"
                value="airIndia"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <div>
                <img src={logo} alt="" />
              </div>
              <span className="text-sm text-[#111111]">Air India(12)</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="singaporeAirlines"
                value="singaporeAirlines"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <div>
                <img src={logo} alt="" />
              </div>
              <span className="text-sm text-[#111111]">Singapore Air(12)</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

         
        </div>
        {/* checkbox end */}
      </div>
      {/* airline end */}

      {/* price range start */}
      <div className="rounded-[10px] max-w-sm shadow-md mt-3">
        {/* dropdown start */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer text-black p-3"
            onClick={() => toggleFilter(isPrices, setIsPrices)}
          >
            <p className="text-[#111111] font-medium text-sm">Price Range</p>
            <div className="text-[#111111]">
              {isPrices ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
          <div className="border-t-2 border-[#DEE2E6]"></div>
        </div>
        {/* dropdown end */}

        {/* range start */}
        <div
          className={`mt-2 px-3 pb-3 space-y-3 transition-all duration-300 ease-in-out overflow-hidden ${isPrices ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="100"
                value={price}
                onChange={handleRangeChange}
                className="w-full h-2 bg-[#FDEADF] rounded-lg appearance-none cursor-pointer accent-[#EF5B0C] mt-1"
              />
            </label>
            <div className="text-center text-sm font-medium text-[#111111] mt-2">
              <p>BDT 140,256 - BDT 2,015,431</p>
            </div>
          </div>
        </div>
        {/* range end */}
      </div>
      {/* price range end */}


      {/* flight schedules start */}
      <div className="rounded-[10px] max-w-sm shadow-md mt-3">
        {/* dropdown start */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer text-black p-3"
            onClick={() => toggleFilter(isFSchedule, setIsFSchedule)}
          >
            <p className="text-[#111111] font-medium text-sm">Flight Schedules</p>
            <div className="text-[#111111]">
              {isFSchedule ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
          <div className="border-t-2 border-[#DEE2E6]"></div>
        </div>
        {/* dropdown end */}

        {
          isFSchedule && <div>

            {/* time start */}
            <div className="px-3 mt-3">
              <p className="text-[#111111] text-sm font-semibold">Departure From Dhaka</p>

              <div className="my-2 space-y-2">
                <button
                  className={`flex justify-between rounded gap-5 p-2 border w-full ${departureTime === "00-06 AM"
                    ? "bg-[#FDEADF] text-[#EF5B0C] text-sm  font-medium"
                    : "bg-[#F6F6F5] text-secondary text-sm font-medium"
                    }`}
                  onClick={() => setDepartureTime("00-06 AM")}
                >
                  <div className="flex items-center gap-2">
                    <FiSunrise size={20} className="text-lg text-[#7B6E7E] text-center mb-1" />
                    00-06 AM
                  </div>
                  <div>
                    <p className="text-[#111111] text-sm font-medium">BDT 565814</p>
                  </div>
                </button>

                <button
                  className={`flex justify-between border rounded gap-5 p-2 w-full ${departureTime === "06-12 AM"
                    ? "bg-[#FDEADF] text-[#EF5B0C] text-sm font-medium"
                    : "bg-[#F6F6F5] text-secondary text-sm font-medium"
                    }`}
                  onClick={() => setDepartureTime("06-12 AM")}
                >
                  <div className="flex items-center gap-2">
                    <MdOutlineWbSunny size={20} className="text-lg text-[#7B6E7E] text-center mb-1" />
                    06-12 AM
                  </div>
                  <div>
                    <p className="text-[#111111] text-sm font-medium">BDT 565814</p>
                  </div>
                </button>

                <button
                  className={`flex justify-between border rounded gap-5 p-2  w-full ${departureTime === "12-06 PM"
                    ? "bg-[#FDEADF] text-[#EF5B0C] text-sm font-medium"
                    : "bg-[#F6F6F5] text-secondary text-sm font-medium"
                    }`}
                  onClick={() => setDepartureTime("12-06 PM")}
                >
                  <div className="flex items-center gap-2">
                    <FiSunset className="text-lg text-[#7B6E7E] text-center mb-1" />
                    12-06 PM
                  </div>

                  <div>
                    <p className="text-[#111111] text-sm font-medium">BDT 565814</p>
                  </div>
                </button>

                <button
                  className={`flex justify-between rounded gap-5 p-2 border  w-full ${departureTime === "06-12 PM"
                    ? "bg-[#FDEADF] text-[#EF5B0C] text-sm font-medium"
                    : "bg-[#F6F6F5] text-secondary text-sm font-medium"
                    }`}
                  onClick={() => setDepartureTime("06-12 PM")}
                >
                  <div className="flex items-center gap-2">
                    <IoMoonOutline size={20} className="text-lg text-[#7B6E7E] text-center mb-1" />
                    06-12 PM
                  </div>

                  <div>
                    <p className="text-[#111111] text-sm font-medium">BDT 565814</p>
                  </div>
                </button>


                {/*arrival time  */}
                <p className="font-semibold text-sm">Arrival At Jeddah</p>

                <div className="my-2 space-y-2 pb-3">
                  <button
                    className={`flex justify-between rounded gap-5 p-2 border w-full ${arrivalTime === "00-06 AM"
                      ? "bg-[#FDEADF] text-[#EF5B0C] text-sm  font-medium"
                      : "bg-[#F6F6F5] text-secondary text-sm font-medium"
                      }`}
                    onClick={() => setArrivalTime("00-06 AM")}
                  >
                    <div className="flex items-center gap-2">
                      <FiSunrise size={20} className="text-lg text-[#7B6E7E] text-center mb-1" />
                      00-06 AM
                    </div>
                    <div>
                      <p className="text-[#111111] text-sm font-medium">BDT 565814</p>
                    </div>
                  </button>

                  <button
                    className={`flex justify-between border rounded gap-5 p-2 w-full ${arrivalTime === "06-12 AM"
                      ? "bg-[#FDEADF] text-[#EF5B0C] text-sm font-medium"
                      : "bg-[#F6F6F5] text-secondary text-sm font-medium"
                      }`}
                    onClick={() => setArrivalTime("06-12 AM")}
                  >
                    <div className="flex items-center gap-2">
                      <MdOutlineWbSunny size={20} className="text-lg text-[#7B6E7E] text-center mb-1" />
                      06-12 AM
                    </div>
                    <div>
                      <p className="text-[#111111] text-sm font-medium">BDT 565814</p>
                    </div>
                  </button>

                  <button
                    className={`flex justify-between border rounded gap-5 p-2  w-full ${arrivalTime === "12-06 PM"
                      ? "bg-[#FDEADF] text-[#EF5B0C] text-sm font-medium"
                      : "bg-[#F6F6F5] text-secondary text-sm font-medium"
                      }`}
                    onClick={() => setArrivalTime("12-06 PM")}
                  >
                    <div className="flex items-center gap-2">
                      <FiSunset className="text-lg text-[#7B6E7E] text-center mb-1" />
                      12-06 PM
                    </div>

                    <div>
                      <p className="text-[#111111] text-sm font-medium">BDT 565814</p>
                    </div>
                  </button>

                  <button
                    className={`flex justify-between rounded gap-5 p-2 border  w-full ${arrivalTime === "06-12 PM"
                      ? "bg-[#FDEADF] text-[#EF5B0C] text-sm font-medium"
                      : "bg-[#F6F6F5] text-secondary text-sm font-medium"
                      }`}
                    onClick={() => setArrivalTime("06-12 PM")}
                  >
                    <div className="flex items-center gap-2">
                      <IoMoonOutline size={20} className="text-lg text-[#7B6E7E] text-center mb-1" />
                      06-12 PM
                    </div>

                    <div>
                      <p className="text-[#111111] text-sm font-medium">BDT 565814</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* time end */}
          </div>
        }
      </div>
      {/* flight schedules end */}

      {/* time start */}
      <div className="rounded-[10px] max-w-sm shadow-md mt-3">
        {/* dropdown start */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer text-black p-3"
            onClick={() => toggleFilter(isTime, setIsTime)}
          >
            <p className="text-[#111111] font-medium text-sm">Times</p>
            <div className="text-[#111111]">
              {isTime ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
          <div className="border-t-2 border-[#DEE2E6]"></div>
        </div>
        {/* dropdown end */}

        {/* range start */}
        <div
          className={`mt-2 px-3 pb-3 space-y-3 transition-all duration-300 ease-in-out overflow-hidden ${isTime ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="items-center justify-between">
            <p className="mt-1 text-[#7B6E7E] font-medium text-sm">Departure Time 00:00 - 24:00</p>
            <label className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="24"
                className="w-full h-2 bg-[#FDEADF] rounded-lg appearance-none cursor-pointer accent-[#EF5B0C] mt-2"
              />
            </label>
            <div className="flex justify-between mt-2 text-[#7B6E7E] font-medium text-sm">
              <span className="text-sm text-gray-600">00:00</span>
              <span className="text-sm text-gray-600">24:00</span>
            </div>
          </div>

          <div className="items-center justify-between mt-3">
            <p className="mt-1 text-[#7B6E7E] font-medium text-sm">Arrival Time 00:00 - 24:00</p>
            <label className="flex items-center space-x-2">
              <input
                type="range"
                min="0"
                max="24"
                className="w-full h-2 bg-[#FDEADF] rounded-lg appearance-none cursor-pointer accent-[#EF5B0C] mt-2"
              />
            </label>
            <div className="flex justify-between mt-2 text-[#7B6E7E] font-medium text-sm">
              <span className="text-sm text-gray-600">00:00</span>
              <span className="text-sm text-gray-600">24:00</span>
            </div>
          </div>
        </div>
        {/* range end */}
      </div>
      {/* time end */}


      {/* stopover cities start */}
      <div className="rounded-[10px] max-w-sm shadow-md mt-3">
        {/* dropdown start */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer text-black p-3"
            onClick={() => toggleFilter(isCities, setIsCities)}
          >
            <p className="text-[#111111] font-medium text-sm">Stopover Cities</p>
            <div className="text-[#111111]">
              {isCities ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>
          <div className="border-t-2 border-[#DEE2E6]"></div>
        </div>
        {/* dropdown end */}

        {/* checkbox start */}
        <div
          className={`mt-2 px-3 pb-3 space-y-3 transition-all duration-300 ease-in-out overflow-hidden ${isCities ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="doha"
                value="doha"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">Doha</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="istanbul"
                value="istanbul"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">Istanbul</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="kolkata"
                value="kolkata"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">Kolkata</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="dubai"
                value="dubai"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">Dubai</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="mumbai"
                value="mumbai"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">Mumbai</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="jeddah"
                value="jeddah"
                className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
              />
              <span className="text-sm text-[#111111]">Jeddah</span>
            </label>
            <p className="text-sm text-[#111111]">BDT565814</p>
          </div>
        </div>
        {/* checkbox end */}
      </div>
      {/* stopover cities end */}


    </div>
  );
}



//  {/* number of stop start */}
//  <div className="rounded-[10px] max-w-sm shadow-md mt-3">
//  {/* dropdown start */}
//  <div>
//    <div
//      className="flex justify-between items-center cursor-pointer text-black p-3"
//      onClick={toggleFilter}
//    >
//      <p className="text-[#111111] font-medium text-sm">Number of Stop</p>
//      <div className="text-[#111111]">
//        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//      </div>
//    </div>
//    <div className="border-t-2 border-[#DEE2E6]"></div>
//  </div>
//  {/* dropdown end */}

//  {/* radio start */}
//  <div
//    className={`mt-2 px-3 pb-3 space-y-3 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//      }`}
//  >
//    <div className="flex items-center justify-between">
//      <label className="flex items-center space-x-2">
//        <input
//          type="radio"
//          name="1transfer"
//          value="1transfer"
//          className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
//        />
//        <span className="text-sm text-[#111111]">1 transfer or fewer</span>
//      </label>
//      <p className="text-sm text-[#111111]">US$777</p>
//    </div>

//    <div className="flex items-center justify-between">
//      <label className="flex items-center space-x-2">
//        <input
//          type="radio"
//          name="2transfer"
//          value="2transfer"
//          className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
//        />
//        <span className="text-sm text-[#111111]">2 transfer or fewer</span>
//      </label>
//      <p className="text-sm text-[#111111]">US$456</p>
//    </div>

//    <div className="flex items-center justify-between">
//      <label className="flex items-center space-x-2">
//        <input
//          type="radio"
//          name="3transfer"
//          value="3transfer"
//          className="w-4 h-4 accent-[#EF5B0C] border-gray-300 rounded"
//        />
//        <span className="text-sm text-[#111111]">3 transfer or fewer</span>
//      </label>
//      <p className="text-sm text-[#111111]">US$456</p>
//    </div>
//  </div>
//  {/* radio end */}
// </div>
// {/* number of stop end */}