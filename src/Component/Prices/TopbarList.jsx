import { useState } from "react";
import DatePicker from "react-datepicker";
import { GoArrowSwitch } from "react-icons/go";
import Travellers from "../Home/Utility/Travellers";
import Button from "../Shared/Button";



const TopbarList = () => {

    const [allCountries, setAllCountries] = useState(flights);
    const [country, setCountry] = useState(flights);
    const [journeyFrom, setJourneyFrom] = useState([]);
    const [journeyTo, setJourneyTo] = useState([]);
    const [searchToggleFrom, setSearchToggleFrom] = useState(false)
    const [searchToggleTo, setSearchToggleTo] = useState(false)
    const [departure, setDepartureDate] = useState(new Date());

    

    const [isFareClass, setIsFareClass] = useState(false);
    const [fareClass, setFareClass] = useState("Fare Class");
    // array of options
    const fareClassoptions = ['regular fare', "student fare"];

    const [isTripType, setIsTripType] = useState(false);
    const [tripType, setTripType] = useState("one way");
    // array of options
    const tripTypeOptions = ['one way', "round way"];





    // Handle search input change
    const handleCountryChangeFrom = (e) => {
        const value = e.target.value.toLowerCase();
        if (value === "") {
            setCountry(allCountries);  // Reset to full list if input is empty
        } else {
            const filteredCountries = allCountries.filter((c) =>
                c?.city.toLowerCase().includes(value)
            );
            setCountry(filteredCountries);
        }
    };

    // Handle search input change
    const handleCountryChangeTo = (e) => {
        const value = e.target.value.toLowerCase();
        if (value === "") {
            setCountry(allCountries);  // Reset to full list if input is empty
        } else {
            const filteredCountries = allCountries.filter((c) =>
                c?.city.toLowerCase().includes(value)
            );
            setCountry(filteredCountries);
        }
    };






    // Handle country selection from
    const handleCountrySelect = (city, code, airport) => {
        setJourneyFrom([
            {
                city: city,
                code: code,
                airport: airport

            }
        ]);  // Set selected country
        setSearchToggleFrom(false);           // Close the dropdown
    };

    // Handle country selection To
    const handleCountrySelectTo = (city, code, airport) => {
        setJourneyTo([
            {
                city: city,
                code: code,
                airport: airport

            }
        ]
        );  // Set selected country
        setSearchToggleTo(false);           // Close the dropdown
    };

    // handle searchClick FROM
    const handleSearchClick = () => {
        setSearchToggleFrom(true)
    }

    // handle searchClick TO
    const handleSearchClickTo = () => {
        setSearchToggleTo(true)
    }





    return (
        <section className="mt-5">
            {/* input field */}
            <div className="grid grid-cols-12 gap-5 ">

                {/*trip type */}
                <div className={`relative col-span-1 border rounded-lg h-10 mt-2   flex items-center w-[95px] `}>
                    {/* dropdown - btn */}
                    <div
                        onClick={() => setIsTripType(!isTripType)}
                        className="mx-auto flex items-center  rounded-lg"
                    >
                        <h1 className=" text-gray-600 font-medium" role="button">
                            {tripType}
                        </h1>
                        <svg
                            className={`${isTripType ? "-rotate-180" : "rotate-0"
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
                        className={`${isTripType
                            ? "visible top-2 left-1 opacity-100"
                            : "invisible -top-4 opacity-0"
                            } absolute z-20 mx-auto my-16 w-36  rounded-xl py-4 border bg-base-100 duration-300`}
                    >
                        {tripTypeOptions?.map((option, idx) => (
                            <div
                                key={idx}
                                onClick={(e) => {
                                    setTripType(e.target.textContent);
                                    setIsTripType(false);
                                }}
                                className="px-6 py-2 text-gray-500 hover:bg-sky-100"
                                role="button"
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>


                <section className="col-span-2">
                    <div onClick={handleSearchClick} className={`flex items-center mt-2  border rounded-lg h-10 `}>
                        <span className="text-sm font-bold p-2 border-r-2">{journeyFrom[0]?.code || 'DAC'}</span>
                        <div className="flex flex-col items-start gap-1 p-2">
                            <span className="text-sm font-medium">{journeyFrom[0]?.city || "Dhaka"}</span>
                            {/* <span className="text-xs text-gray-500  w-full">{journeyFrom[0]?.airport || "Bangladesh, Hazrat Shahjalal"}</span> */}
                        </div>
                    </div>

                    <div
                        className={`text-black space-y-3 ${searchToggleFrom ? "absolute" : "hidden"
                            } h-52 overflow-y-auto bg-base-100 shadow-xl w-full lg:w-60  z-20 p-3 px-2 rounded-md`}
                    >
                        <input
                            onChange={handleCountryChangeFrom}
                            name="search"
                            type="text"
                            className="input-sm w-full focus:outline-none border-b-2 h-14 rounded-md"
                            placeholder="🛪 Type for airport name or code"
                        />
                        {country?.map((c, index) => (
                            <div onClick={() => handleCountrySelect(c?.city, c?.code, c?.airport)} key={index} className="flex items-center gap-5 cursor-pointer p-2">
                                <h2 className="border-r-2 border-b-2 p-2 ">{c?.code}</h2>
                                <div>
                                    <p>{c?.city}</p>
                                    <p className="text-[12px]">{c?.airport}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="col-span-2">
                    <div onClick={handleSearchClickTo} className={`flex items-center mt-2  border rounded-lg h-10 text-wrap truncate `}>
                        <span className="text-sm font-bold p-2 border-r-2 ml-1">{journeyTo[0]?.code || "JED"}</span>
                        <div className="flex flex-col items-start gap-1 p-2">
                            <span className="text-sm font-medium">{journeyTo[0]?.city || "Saudi Arabia"}</span>
                            {/* <span className="text-xs text-gray-500 truncate w-full">{journeyTo[0]?.airport || "King Abdulaziz Int Airport"}</span> */}
                        </div>
                    </div>
                    <div
                        className={` text-black ${searchToggleTo ? "absolute" : "hidden"
                            }  h-52 space-y-3 overflow-y-auto bg-base-100 shadow-xl  z-20  p-3 px-2 w-full lg:w-60 rounded-md`}
                    >

                        <input
                            onChange={handleCountryChangeTo}
                            name="search"
                            type="text"
                            className="input-sm w-full focus:outline-none border-b-2 h-12 rounded-md"
                            placeholder="🛪 Type for airport name or code"
                        />
                        {country?.map((c, index) => (
                            <div onClick={() => handleCountrySelectTo(c?.city, c?.code, c?.airport)} key={index} className="flex items-center gap-5 cursor-pointer p-2">
                                <h2 className="border-r-2 border-b-2 p-2 ">{c?.code}</h2>
                                <div>
                                    <p>{c?.city}</p>
                                    <p className="text-[12px]">{c?.airport}</p>
                                </div>
                            </div>
                        ))}
                    </div>


                </section>

                <section className="input input-bordered h-10 flex items-center col-span-2 mt-2">
                    <DatePicker

                        className="focus:outline-none "
                        selected={departure}
                        onChange={(date) => setDepartureDate(date)}
                        showDisabledMonthNavigation
                        monthsShown={1}
                        dateFormat={"dd MMMM, yyyy "}
                    />

                </section>

                <section className="w-full my-2 col-span-2">
                    <Travellers height={true} toggle={true}></Travellers>
                </section>

                <section className="col-span-2">
                    <input type="text" placeholder="airlines" className="input input-bordered h-10 mt-2 lg:w-40 focus:outline-none" />
                </section>

                <section className="-ml-5 mt-1 col-span-1">
                    <Button text=""></Button>
                </section>
            </div>

        </section>
    );
};

export default TopbarList;


// fake data
const flights = [
    {
        code: "DAC",
        city: "Dhaka",
        country: "Bangladesh",
        airport: "Hazrat Shahjalal International Airport",
    },
    {
        code: "CXB",
        city: "Cox's Bazar",
        country: "Bangladesh",
        airport: "Cox's Bazar Airport",
    },
    {
        code: "JFK",
        city: "New York",
        country: "United States",
        airport: "John F Kennedy International Airport",
    },
    {
        code: "LHR",
        city: "London",
        country: "United Kingdom",
        airport: "Heathrow Airport",
    },
    {
        code: "DXB",
        city: "Dubai",
        country: "United Arab Emirates",
        airport: "Dubai International Airport",
    },
    {
        code: "SIN",
        city: "Singapore",
        country: "Singapore",
        airport: "Changi Airport",
    },
    {
        code: "HND",
        city: "Tokyo",
        country: "Japan",
        airport: "Haneda Airport",
    },
    {
        code: "SYD",
        city: "Sydney",
        country: "Australia",
        airport: "Sydney Kingsford Smith Airport",
    },
    {
        code: "CDG",
        city: "Paris",
        country: "France",
        airport: "Charles de Gaulle Airport",
    },
    {
        code: "IST",
        city: "Istanbul",
        country: "Turkey",
        airport: "Istanbul Airport",
    },
];
