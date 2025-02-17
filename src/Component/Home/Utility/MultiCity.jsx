import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";


const MultiCity = ({ visible, setVisiable }) => {

    const [departure_1, setDeparture_1] = useState(new Date())
    const [journeyFrom, setJourneyFrom] = useState();
    const [journeyTo, setJourneyTo] = useState();


    return (
        <section className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-72   text-secondary -mt-10 ">
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    {/* <label htmlFor="" className="">
                    From
                </label>{" "} */}
                    <br />
                    <div className="flex items-center mt-2  border rounded-lg h-16 lg:w-[345px]">
                        <span className="text-sm font-bold p-2 border-r-2 ml-1">JED</span>
                        <div className="flex flex-col items-start gap-1 p-2">
                            <span className="text-sm font-medium">Jeddah</span>
                            <span className="text-xs text-gray-500 truncate">King Abdulaziz Int Airport</span>
                        </div>
                    </div>
                    <div
                        className={`text-black ${journeyFrom ? "absolute" : "hidden"
                            } h-36 overflow-y-auto bg-base-100 shadow-xl w-60 z-20 p-3 rounded-md`}
                    >

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
                </label>{" "} */}
                    <br />
                    <div className="flex items-center mt-2  border rounded-lg h-16 lg:w-[345px]">
                        <span className="text-sm font-bold p-2 border-r-2 ml-1">BKK</span>
                        <div className="flex flex-col items-start gap-1 p-2">
                            <span className="text-sm font-medium">Thailand</span>
                            <span className="text-xs text-gray-500 truncate">Suvarnabhumi Airport </span>
                        </div>
                    </div>
                    <div
                        className={`text-black ${journeyTo ? "absolute" : "hidden"
                            }  h-36 overflow-y-auto bg-base-100 shadow-xl w-60 z-20  p-3 rounded-md`}
                    >

                    </div>

                    <div className="absolute top-11 -left-6">
                        <GoArrowSwitch size={32} className="bg-base-100 shadow-md text-primary rounded-full p-1"></GoArrowSwitch>
                    </div>
                </motion.div>


                <div>
                    {/* <label htmlFor="" className="">
                    Journey Date
                </label> */}
                    <motion.div className="input input-bordered h-16 mt-8 flex items-center focus:outline-none lg:w-[345px]">


                        <DatePicker

                            className="focus:outline-none "
                            selected={departure_1}
                            onChange={(date) => setDeparture_1(date)}
                            showDisabledMonthNavigation
                            monthsShown={1}
                            dateFormat={"dd MMMM, yyyy"}
                        />
                    </motion.div>

                </div>
                <div className="mt-11 space-x-3">


                    <button
                        onClick={() => setVisiable(false)}
                        className={`btn text-primary btn-sm btn-outline hover:bg-red-600 transform transition-all duration-500 ease-in-out
                        ${!visible ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}`}
                    >
                        <IoIosClose size={22} />
                    </button>

                </div>


            </div>

            <div className="mt-5">
                <button
                    type="button"
                    onClick={() => setVisiable(true)}
                    className={` btn-primary text-secondary flex items-center gap-1 hover:border-primary font-medium hover:border-2 hover:rounded-lg hover:p-2  transition-all duration-200 ease-in-out 
                    ${visible ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}`}
                >
                    <FaPlus /> Add More Flight
                </button>
            </div>
        </section>
    );
};

export default MultiCity;




