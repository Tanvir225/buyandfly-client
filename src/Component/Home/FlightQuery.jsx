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
          <label htmlFor="" className="font-semibold text-primary">
            From
          </label>
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
          <label htmlFor="" className="font-semibold text-primary">
            To
          </label>
          <input
            type="text"
            list="location"
            className=" focus:outline-none h-12"
          />
          <p className="text-gray-500">Chhatrapati Shivaji</p>
        </div>

        <div className="border-r-2">
          <label htmlFor="" className="font-semibold text-primary">
            Departure
          </label>
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
          <label htmlFor="" className="font-semibold text-primary">
            Return
          </label>
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
          <label htmlFor="" className="font-semibold text-primary">
            Traveller & Class
          </label>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="">
              1 Travellers ALL
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-6 w-72  p-2 shadow space-y-5"
            >
              <section className="flex justify-between items-center px-1">
                <p className="font-semibold ">Adult (12+)</p>
                <div className="flex justify-center items-center gap-5 text-center ">
                  <button className="rounded-full border-2 w-10 border-secondary">
                    -
                  </button>
                  <p className="rounded-full border-2 w-10 border-secondary">
                    0
                  </p>
                  <button className="rounded-full border-2 w-10 border-secondary">
                    +
                  </button>
                </div>
              </section>
              <section className="flex justify-between items-center px-1">
                <p className="font-semibold ">Child (2-11)</p>
                <div className="flex justify-center items-center gap-5 text-center ">
                  <button className="rounded-full border-2 w-10 border-secondary">
                    -
                  </button>
                  <p className="rounded-full border-2 w-10 border-secondary">
                    0
                  </p>
                  <button className="rounded-full border-2 w-10 border-secondary">
                    +
                  </button>
                </div>
              </section>
              <section className="flex justify-between items-center px-1">
                <p className="font-semibold ">Infant (0-2)</p>
                <div className="flex justify-center items-center gap-5 text-center ">
                  <button className="rounded-full border-2 w-10 border-secondary">
                    -
                  </button>
                  <p className="rounded-full border-2 w-10 border-secondary">
                    0
                  </p>
                  <button className="rounded-full border-2 w-10 border-secondary">
                    +
                  </button>
                </div>
              </section>
              <div className="px-2 font-semibold flex justify-between">
                <p>Class</p>
                <select className="border-2 rounded-sm p-1 border-secondary">
                    <option value="All">All</option>
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                    <option value="First">First</option>
                </select>
              </div>
              <div className="text-right">
                <button className="btn btn-sm bg-primary text-white hover:bg-secondary">Done</button>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightQuery;
