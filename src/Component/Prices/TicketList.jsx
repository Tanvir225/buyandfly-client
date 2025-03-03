import ticketImage from "../../assets/ticketList.png"
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { PiPlugCharging } from "react-icons/pi";
import { IoManOutline } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import ViewPrices from "./ViewPrices";
import FlightDetails from "./FlightDetails";

const TicketList = ({air_ways_name, departureIATA, arrivalTime, arrivalIATA, timeDiff, departureTime, totalPrice, stopCount, marketingFlightNo, airline}) => {
    const [details, setDetails] = useState(false);
    const [price, setPrice] = useState(false);

    return (
        <section>
            <section className="bg-base-100 shadow-md rounded-md p-3 flex flex-col  items-center text-sm">

                {/* first layer */}
                <section className="flex flex-col lg:flex-row items-center justify-between gap-7 border-b-2 pb-3 w-full">

                    {/* airlines */}

                    <div className="flex items-center gap-3">
                        <div className="w-12">
                            <img src={`https://www.gstatic.com/flights/airline_logos/70px/${airline}.png`} alt="logo" />
                            {/* <img src={`https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/airlines-logo/${airline}.png`} alt="logo" /> */}
                        </div>
                        <div className="space-y-2">
                            <h2 className="font-medium">{air_ways_name}</h2>
                            <section className="flex items-center gap-2">
                                <p className="font-medium">{marketingFlightNo}</p>
                                {/* <PiPlugCharging size={30} className="p-1 rounded-lg border-2"></PiPlugCharging>
                                <IoManOutline size={30} className="p-1 rounded-lg border-2"></IoManOutline>
                                <LuBaggageClaim size={30} className="p-1 rounded-lg border-2"></LuBaggageClaim> */}
                            </section>
                        </div>
                    </div>

                    {/* From  */}
                    <div>
                        <h2 className="text-gray-500 font-medium">{departureIATA}</h2>
                        <h3 className="font-semibold">{departureTime}</h3>
                        <h3 className="text-gray-500 font-medium">07 Feb, Fri</h3>
                    </div>

                    {/* icon face */}
                    <div>
                        <p className="text-gray-500 text-center">{timeDiff}</p>
                        <section className="flex items-center gap-2 text-gray-600">
                            <PiAirplaneTakeoffLight size={28}></PiAirplaneTakeoffLight>
                            <HiOutlineDotsHorizontal size={26}></HiOutlineDotsHorizontal>
                            <HiOutlineDotsHorizontal size={26}></HiOutlineDotsHorizontal>
                            <HiOutlineDotsHorizontal size={26}></HiOutlineDotsHorizontal>
                            <HiOutlineLocationMarker size={28}></HiOutlineLocationMarker>
                        </section>
                        <p className="text-gray-500 text-center">{stopCount} Stops</p>
                    </div>

                    {/* to  */}
                    <div>
                        <h2 className="text-gray-500 font-medium">{arrivalIATA}</h2>
                        <h3 className="font-semibold">{arrivalTime}</h3>
                        <h3 className="text-gray-500 font-medium">07 Feb, Fri</h3>
                    </div>

                    {/* fare */}
                    <div>
                        <h2 className="font-semibold">BDT {totalPrice}</h2>
                        <p className="text-[12px] font-medium line-through">BDT 123,463</p>
                        <p className="text-gray-500">Economy</p>
                    </div>

                </section>

                {/* second layer */}
                <div className="my-2 flex flex-col lg:flex-row justify-between w-full gap-5 items-center px-3" >


                    <button onClick={() => setDetails(!details)} className="text-primary font-semibold flex items-center gap-1">Flight Details <MdKeyboardArrowDown size={20}></MdKeyboardArrowDown></button>

                    <section className="flex items-center gap-5">
                        <Link className="font-medium text-[#0FA134]">Refundable</Link>
                        <Link className="font-medium text-[#0FA134]">Instant</Link>
                    </section>

                    <section>
                        <button onClick={() => setPrice(!price)} className="btn btn-primary btn-sm text-white">View Prices <MdKeyboardArrowDown size={20}></MdKeyboardArrowDown></button>
                    </section>

                </div>

            </section>

            {/* details */}
            {
                details && <div className="w-full bg-base-100  p-5">
                    <FlightDetails setDetails={setDetails}></FlightDetails>
                </div>
            }
            {/* prices */}
            {
                price && <div className="w-full bg-base-100  p-5">
                    <ViewPrices setPrice={setPrice}></ViewPrices>
                </div>
            }
        </section>
    );
};

export default TicketList;