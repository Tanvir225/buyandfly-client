import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "motion/react";
import { GoArrowSwitch } from "react-icons/go";
import HButton from "../../Shared/HButton";
import { IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";


const MultiCity = ({ visible, setVisiable }) => {

    const [departure_1, setDeparture_1] = useState(new Date())
    const [journeyFrom, setJourneyFrom] = useState();
    const [journeyTo, setJourneyTo] = useState();


    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 my-5 text-secondary">
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                <label htmlFor="" className="text-black">
                    From
                </label>{" "}
                <br />
                <input
                    type="text"
                    className="border-2 w-full focus:outline-none h-10 p-3 mt-2 rounded-lg"
                    value={journeyFrom}
                    placeholder="Bangaldesh"
                    onChange={(e) => handleCountryChangeFrom(e.target.value)}
                />
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
                <label htmlFor="" className="text-black">
                    To
                </label>{" "}
                <br />
                <input
                    type="text"
                    className={`w-full focus:outline-none border-2 mt-2 h-10 p-3 rounded-lg`}
                    value={journeyTo}
                    placeholder="Nepal"
                    onChange={(e) => handleCountryChangeTo(e.target.value)}
                />
                <div
                    className={`text-black ${journeyTo ? "absolute" : "hidden"
                        }  h-36 overflow-y-auto bg-base-100 shadow-xl w-60 z-20  p-3 rounded-md`}
                >

                </div>

                <div className="absolute top-9 -left-6">
                    <GoArrowSwitch size={32} className="bg-base-100 shadow-md text-primary rounded-full p-1"></GoArrowSwitch>
                </div>
            </motion.div>


            <motion.div className="input input-bordered h-10 mt-8 flex items-center focus:outline-none">
                <DatePicker

                    className="focus:outline-none "
                    selected={departure_1}
                    onChange={(date) => setDeparture_1(date)}
                    showDisabledMonthNavigation
                    monthsShown={1}
                    dateFormat={"dd/MM/yyyy"}
                />
            </motion.div>

            <div className="mt-9 space-x-3">
                <button
                    onClick={() => setVisiable(true)}
                    className={`btn btn-sm btn-primary text-white transform transition-all duration-500 ease-in-out 
    ${visible ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}`}
                >
                    <FaPlus /> Add Another
                </button>

                <button
                    onClick={() => setVisiable(false)}
                    className={`btn text-primary btn-sm btn-outline hover:bg-red-600 transform transition-all duration-500 ease-in-out
    ${!visible ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}`}
                >
                    <IoIosClose size={20} />
                </button>

            </div>
        </div>
    );
};

export default MultiCity;