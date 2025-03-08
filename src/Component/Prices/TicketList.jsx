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
import { AiFillCaretUp } from "react-icons/ai";

const TicketList = ({item, flights, air_ways_name, departureIATA, arrivalTime, arrivalIATA, timeDiff, departureTime, totalPrice, stopCount, marketingFlightNo, airline, departureDate, arrivalDate}) => {
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
                        <h3 className="text-gray-500 font-medium">{departureDate}</h3>
                    </div>

                    {/* icon face */}
                    <div>
                        <p className="text-gray-500 text-center">{(item.elapsedTime/60).toFixed(0)} h {(item.elapsedTime%60)} m</p>
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
                        <h3 className="text-gray-500 font-medium">{arrivalDate}</h3>
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
                        <div className="pointer group relative mx-auto flex w-max justify-center">
                            {/* Hover button */}
                            <button className=" text-[#0FA134] font-medium">Refundable</button>
                            {/* Hover Text */}
                            <div className="absolute -bottom-10 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-20 group-hover:opacity-100  ">
                                <p className="rounded-md bg-base-100 text-center px-3 py-3 text-black shadow-[0px_0px_10px_0px_#0EA5E9]">Plane Chage <br /> Mumbai (BOM) | 4h 10m Layover</p>
                                <span className="absolute -top-5 left-[45%] text-[#0EA5E9]"><AiFillCaretUp size={30}></AiFillCaretUp></span>
                            </div>
                        </div>
                        <div className="pointer group relative mx-auto flex w-max justify-center">
                            {/* Hover button */}
                            <button className=" text-[#0FA134] font-medium">Instant</button>
                            {/* Hover Text */}
                            <div className="absolute -bottom-10 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-20 group-hover:opacity-100  ">
                                <p className="rounded-md bg-base-100 text-center px-3 py-3 text-black shadow-[0px_0px_10px_0px_#0EA5E9]">Plane Chage <br /> Mumbai (BOM) | 4h 10m Layover</p>
                                <span className="absolute -top-5 left-[45%] text-[#0EA5E9]"><AiFillCaretUp size={30}></AiFillCaretUp></span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <button onClick={() => setPrice(!price)} className="btn btn-primary btn-sm text-white">View Prices <MdKeyboardArrowDown size={20}></MdKeyboardArrowDown></button>
                    </section>

                </div>

            </section>

            {/* details */}
            {
                details && <div className="w-full bg-base-100  p-5">
                    <FlightDetails departureDate = {departureDate} item = {item} setDetails={setDetails} flights = {flights}></FlightDetails>
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
