import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const HotelQuery = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      {/* Inputs */}
      <section className="grid grid-cols-1 lg:grid-cols-6 gap-5 border-2 p-5 rounded-md text-left uppercase text-black">
        <div className="border-r-2 ">
          <label htmlFor="" className="font-semibold text-primary">
            Region, City, Area
          </label>
          <input
            type="text"
            placeholder="Region, City, Area"
            className=" focus:outline-none h-12 text-gray-800"
          />
        </div>

        <div className="border-r-2">
          <label htmlFor="" className="font-semibold text-primary">
            Check-in
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
            Check-out
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
            Nights
          </label>
          <p className="mt-2">nights</p>
        </div>

        <div className="border-r-2">
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
        </div>

        <div className="">
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
        </div>
      </section>
    </div>
  );
};

export default HotelQuery;
