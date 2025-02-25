import { GrLocation } from "react-icons/gr";
import { ImArrowUpRight2 } from "react-icons/im";
import { IoAirplane } from "react-icons/io5";
import { LuPlaneTakeoff } from "react-icons/lu";

export default function FlightDetails({ setDetails }) {
  return (
    <div>

      {/* tab list */}
      <div role="tablist" className="tabs tabs-bordered w-full">
        <input type="radio" name="my_tabs_1" role="tab" className="tab " aria-label="Details" defaultChecked />
        <div role="tabpanel" className="tab-content p-4">
          {/* flight details start */}
          <div className="text-sm ">
            <p className="flex items-center gap-2 p-3 font-semibold  text-gray-800 bg-slate-100">
              DAC <IoAirplane /> JED<span className="text-gray-300">|</span>
              <span className="text-gray-500">22 Mar,Sat</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-950">1 Stop</span>
            </p>

            <div>
              <p className="flex items-center gap-2 font-semibold  text-gray-800 mt-2">
                <ImArrowUpRight2 /> IndiGo<span className="text-gray-300">|</span>
                <span className="text-gray-500">6E 1104</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-950">321</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-700">
                  Economy - T<span className="text-orange-500">10 Seats Left</span>
                </span>
              </p>

              <div className="flex justify-between mt-5">
                <div>
                  <p className="text-lg font-bold">16 : 25</p>
                  <p className="text-gray-500 font-medium">Sat,22 Mar, 25</p>
                  <p className="text-gray-800 text-[13px] font-medium">
                    Hazrat Shahjalal International Airport (DAC)
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl">
                      <LuPlaneTakeoff />
                    </p>
                    <p className="flex gap-3">
                      ••• <span>•••</span> <span>•••</span>
                    </p>
                    <p className="text-2xl">
                      <GrLocation />
                    </p>
                  </div>
                  <p className="text-center mt-1">3h 5m</p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold">19 : 00</p>
                  <p className="text-gray-500 font-medium">Sat,22 Mar, 25</p>
                  <p className="text-gray-800 text-[13px] font-medium">
                    Terminal 3,Indira Gandhi Internation Airpoert (DEL)
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end my-6 w-full">
              <div className="flex items-center max-w-screen-lg w-full">
                <p className="text-orange-500 font-medium border border-gray-400 min-w-max px-1">
                  Change of planes <span className="text-black">1h 30m Layover in New Delhi</span>
                </p>
                <div className="border-t border-gray-400 w-full"></div>
              </div>
            </div>

            <div className="">
              <p className="flex items-center gap-2 font-semibold  text-gray-800 mt-2">
                <ImArrowUpRight2 /> IndiGo<span className="text-gray-300">|</span>
                <span className="text-gray-500">6E 63</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-950">321</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-700">
                  Economy - T<span className="text-orange-500">10 Seats Left</span>
                </span>
              </p>
              <div className="flex justify-between mt-6">
                <div className="space-y-1">
                  <p className="text-lg font-bold">20 : 30</p>
                  <p className="text-gray-500 font-medium">Sat,22 Mar, 25</p>
                  <p className="text-gray-800 text-[13px] font-medium">
                    Terminal 3,Indira Gandhi International Airport (DEL)
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-2xl">
                      <LuPlaneTakeoff />
                    </p>
                    <p className="flex gap-3">
                      ••• <span>•••</span> <span>•••</span>
                    </p>
                    <p className="text-2xl">
                      <GrLocation />
                    </p>
                  </div>
                  <p className="text-center mt-1">6h 25m</p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold">00 : 25</p>
                  <p className="text-gray-500 font-medium">Sun,23 Mar, 25</p>
                  <p className="text-gray-800 text-[13px] font-medium">
                    Terminal: N.King Abdulaziz International Airport (JED)
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* flight details end */}

          <div className="text-right mt-2">
            <button className="btn btn-error" onClick={() => setDetails(false)}>close</button>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Summary"
        />
        <div role="tabpanel" className="tab-content p-4">
          {/* fare summary start */}
          <div className="flex flex-col text-sm">
            <table className="border border-gray-500 rounded w-full text-center">
              <thead>
                <tr className="border border-gray-500 bg-gray-300 text-gray-600 ">
                  <th className="py-2 px-5">Pax Type</th>
                  <th className="py-2 px-5">Base Fare</th>
                  <th className="py-2 px-5">Tax</th>
                  <th className="py-2 px-5">Other</th>
                  <th className="py-2 px-5">Discount</th>
                  <th className="py-2 px-5">AIT VAT</th>
                  <th className="py-2 px-5">Pax Count</th>
                  <th className="py-2 px-5">Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="py-3 px-5 font-medium text-gray-600">Adult</td>
                  <td className="py-3 px-5 font-medium text-gray-600">42022</td>
                  <td className="py-3 px-5 font-medium text-gray-600">10345</td>
                  <td className="py-3 px-5 font-medium text-gray-600">0</td>
                  <td className="py-3 px-5 font-medium text-gray-600">0</td>
                  <td className="py-3 px-5 font-medium text-gray-600">156</td>
                  <td className="py-3 px-5 font-medium text-gray-600">1</td>
                  <td className="py-3 px-5 font-medium text-gray-600">BDT52523</td>
                </tr>
              </tbody>
            </table>

            <div className="ml-auto my-2">
              <div className="font-medium flex lg:gap-20 md:gap-10 gap-5 ">
                <p>Total Agent Payable</p>
                <p>BDT52523</p>
              </div>

              <div className="font-medium flex lg:gap-14 md:gap-10 gap-5  mt-2">
                <p>Total Customer Payable</p>
                <p>BDT52523</p>
              </div>
            </div>
          </div>
          {/* fare summary end */}

          <div className="text-right mt-2">
            <button className="btn btn-error" onClick={() => setDetails(false)}>close</button>
          </div>
        </div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Baggage" />
        <div role="tabpanel" className="tab-content p-4">


          {/* baggage start */}
          <div>
            <table className="border border-gray-500 rounded w-full text-sm text-center">
              <thead>
                <tr className="border border-gray-500 bg-gray-300 text-gray-600">
                  <th className="py-2 px-5">Sector</th>
                  <th className="py-2 px-5">CheckIn</th>
                  <th className="py-2 px-5">Cabin</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="flex items-center justify-center font-semibold gap-2 py-3 px-5  text-gray-600">
                    DAC <IoAirplane /> JED
                  </td>
                  <td className="text-gray-600 py-3 px-5 font-medium">ADT : 30kg</td>
                  <td className="text-gray-600 py-3 px-5 font-medium">ADT : 7kg</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* baggage end */}

          <div className="text-right mt-2">
            <button className="btn btn-error" onClick={() => setDetails(false)}>close</button>
          </div>
        </div>


        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="Cancellation"
        />

        <div role="tabpanel" className="tab-content p-4 my-5">
          {/* cancellation start */}
          <div>
            <table className="border border-gray-500 rounded w-full text-sm">
              <thead>
                <tr className="bg-gray-300">
                  <th className="flex items-center gap-2 p-2">
                    DAC <IoAirplane /> JED{" "}
                    <span className="text-sm font-normal text-gray-600">(via stop 1 - DEL)</span>
                  </th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-gray-500 py-3 px-5 font-semibold">
                    Timeframe{" "}
                    <span className="block text-sm text-gray-600 font-medium">
                      (From Scheduled flight departure)
                    </span>
                  </td>
                  <td className="border border-gray-500 py-3 px-5 font-semibold ">
                    Airline Fee + Bdfare Fee{" "}
                    <span className="block text-sm text-gray-600 font-medium">(per passenger)</span>
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-500 py-3 px-5 font-medium text-gray-600">
                    Before departure
                  </td>
                  <td className="border border-gray-500 font-medium py-3 px-5 text-gray-600">
                    0 hours - 48 hours Non Refundable
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-500 py-3 px-5 font-medium text-gray-600">
                    After Departure
                  </td>
                  <td className="border border-gray-500 py-3 px-5 font-medium text-gray-600">
                    Non Refundable
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4 font-medium text-sm border-2 border-red-300 bg-red-100 px-3 py-1 rounded text-black">
              *Important :{" "}
              <span className="font-medium">
                The airline fee is indicative. bdfare does not guarantee the accuracy of this
                information.All fees mentioned are per passenger.
              </span>
            </p>
          </div>
          {/* cancellation end */}

          <div className="text-right mt-2">
            <button className="btn btn-error" onClick={() => setDetails(false)}>close</button>
          </div>
        </div>
      </div>
      {/* tab end */}






    </div>
  );
}


