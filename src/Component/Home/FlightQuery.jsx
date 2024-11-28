import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const FlightQuery = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="p-4">
      {/* Radio Buttons */}
      <section className="flex items-center justify-between gap-10">
        <div className="flex space-x-4 my-4">
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
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-5 border-2 p-5 rounded-md text-left uppercase">
        <div className="border-r-2 ">
          <label htmlFor="">From</label>
          <input
            type="text"
            list="location"
            className=" focus:outline-none h-12"
          />
          <p className="text-gray-500">Delhi Indira Gandhi Intl</p>

          <datalist id="location" className="">
            <option value="✈️ Delhi"></option>
            <option value="✈️ Mumbai"></option>
            <option value="✈️ Lucknow"></option>
            <option value="✈️ Kolkata"></option>
          </datalist>
        </div>
        <div className="border-r-2">
          <label htmlFor="">To</label>
          <input
            type="text"
            list="location"
            className=" focus:outline-none h-12"
          />
          <p className="text-gray-500">Chhatrapati Shivaji</p>
        </div>

        <div className="border-r-2">
          <label htmlFor="">Departure</label>
          <DatePicker
            className="focus:outline-none h-12"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showDisabledMonthNavigation
            monthsShown={1}
            dateFormat={"MMMM d, yyyy"}
          />
          <p className="text-gray-500">Select Date</p>
        </div>

        <div className="border-r-2">
          <label htmlFor="">Return</label>
          <DatePicker
            className="focus:outline-none h-12"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showDisabledMonthNavigation
            monthsShown={1}
            dateFormat={"MMMM d, yyyy"}
          />
          <p className="text-gray-500">Select Date</p>
        </div>

        <div className="">
          <label htmlFor="">Traveller & Class</label>

          <p className="text-gray-700">1 Traveller All</p>
        </div>
      </section>
    </div>
  );
};

export default FlightQuery;
