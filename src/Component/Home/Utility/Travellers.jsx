import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";


const Travellers = ({height}) => {

    //STATE
    const [isTravellers, setIsTravellers] = useState(false);

    const [adult, setAdult] = useState(0)
    const [child, setChild] = useState(0)
    const [infant, setInfant] = useState(0)

    // increment function
    const handleIncrement = (passenger, setPassenger) => {

        setPassenger(passenger + 1)

    }

    const handleDecrement = (passenger, setPassenger) => {
        if (passenger >= 1) {
            setPassenger(passenger - 1)
        }
        if (passenger < 1) {
            setPassenger(passenger)
        }
    }


    return (
        <div>
            {/* <label htmlFor="" className="">
                How many are Travelling
            </label> */}

            {/* economy */}
            <div className="relative ">
                {/* dropdown - btn */}
                <div
                    onClick={() => setIsTravellers(!isTravellers)}
                    className={`flex justify-between items-center border-2 w-full focus:outline-none ${height ? 'h-16' :'h-11'} p-3  rounded-lg`}
                >
                    <h1 className=" text-gray-600 capitalize" role="button">
                        {(adult || child || infant) ? `${adult} adult ${child} child ${infant} infant` : "Travellers"}
                    </h1>
                    <svg
                        className={`${isTravellers ? "-rotate-180" : "rotate-0"
                            } duration-300`}
                        width={25}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M7 10L12 15L17 10"
                                stroke="#4B5563"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{" "}
                        </g>
                    </svg>
                </div>
                {/* dropdown - options  */}
                <div
                    className={` ${isTravellers
                        ? "visible  top-4 opacity-100"
                        : "invisible -top-4 opacity-0"
                        } absolute  z-20 mx-auto my-12 w-[260px] -left-10  rounded-xl py-4 border bg-base-100 duration-300`}
                >

                    <div className="capitalize px-3 space-y-2">

                        {/* adult */}
                        <section className="flex justify-between items-center border-b-2 ">
                            <div>
                                <h2>Adult</h2>
                                <p className="text-gray-600 text-sm">12-30 Years Old</p>
                            </div>

                            <div className="flex justify-center items-center gap-5 ">
                                <CiCircleMinus onClick={() => handleDecrement(adult, setAdult)} size={24} className={`${adult < 1 && 'text-gray-200'}`}></CiCircleMinus>
                                <p className="text-base">{adult}</p>
                                <CiCirclePlus onClick={() => handleIncrement(adult, setAdult)} size={24} className="cursor-pointer"></CiCirclePlus>
                            </div>
                        </section>

                        {/* child */}
                        <section className="flex justify-between items-center border-b-2 ">
                            <div>
                                <h2>Child</h2>
                                <p className="text-gray-600 text-sm">02-11 Years Old</p>
                            </div>

                            <div className="flex justify-center items-center gap-5 ">
                                <CiCircleMinus onClick={() => handleDecrement(child, setChild)} size={24} className={`${child < 1 && 'text-gray-200'}`}></CiCircleMinus>
                                <p className="text-base">{child}</p>
                                <CiCirclePlus onClick={() => handleIncrement(child, setChild)} size={24} className="cursor-pointer"></CiCirclePlus>
                            </div>
                        </section>

                        {/* infant */}
                        <section className="flex justify-between items-center  ">
                            <div>
                                <h2>Infant</h2>
                                <p className="text-gray-600 text-sm">Below 2 years</p>
                            </div>

                            <div className="flex justify-center items-center gap-5 ">
                                <CiCircleMinus onClick={() => handleDecrement(infant, setInfant)} size={24} className={`${infant < 1 && 'text-gray-200'}`}></CiCircleMinus>
                                <p className="text-base">{infant}</p>
                                <CiCirclePlus onClick={() => handleIncrement(infant, setInfant)} size={24} className="cursor-pointer"></CiCirclePlus>
                            </div>
                        </section>

                       <button className="btn btn-outline btn-primary w-full btn-sm" onClick={()=>setIsTravellers(false)}>Done</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Travellers;