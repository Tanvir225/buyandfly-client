import { Check, ChevronDown, ChevronUp, X } from "lucide-react";
import { useState } from "react";
import { AiFillTag } from "react-icons/ai";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaAngleRight, FaPlaneDeparture } from "react-icons/fa";
import { FaArrowLeftLong, FaFileShield } from "react-icons/fa6";
import { GoArrowSwitch, GoShieldX } from "react-icons/go";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoTerminalSharp } from "react-icons/io5";
import { LiaDollarSignSolid } from "react-icons/lia";
import { MdError } from "react-icons/md";
import { PiTagSimpleFill } from "react-icons/pi";
import { RiDiscountPercentFill } from "react-icons/ri";


const AddonService = () => {


    // add-on service baggage protection
    const [isOpenAddDrop, setIsOpenAddDrop] = useState(false);
    const [selectedButton, setSelectedButton] = useState("protect");
    const [isOpenAddDrop2, setIsOpenAddDrop2] = useState(false);
    const [selectedButton2, setSelectedButton2] = useState("bimafy");
    // add-on service baggage protection

    // add-on services sidebar
    const [selectedAddOnServicesSide, setSelectedAddOnServicesSide] = useState("baggageProtection");
    // airFare
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const toggleFilterAdd = () => {
        setIsOpenAdd(!isOpenAdd);
    };
    // airFare
    // add-on services sidebar

    return (
        <div className="flex gap-5 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            <div className="flex gap-5">
                {/* sidebar start */}
                <div>
                    <div className="flex items-center gap-5 text-sm">
                        <p className="text-gray-400">
                            <FaArrowLeftLong />
                        </p>
                        <p className="text-black font-semibold   p-3">Add-On Services</p>
                        <p className="font-medium text-gray-400">SKIP</p>
                    </div>

                    <div className="">
                        <button
                            className={`text-black font-medium px-3 py-2 ${selectedAddOnServicesSide === "baggageProtection"
                                ? "text-black border-l-4 border-blue-600 px-3 py-2 w-full bg-gray-300 flex items-center gap-2"
                                : "flex items-center gap-2 text-gray-800"
                                }`}
                            onClick={() => setSelectedAddOnServicesSide("baggageProtection")}
                        >
                            <span className="px-[5px] py-[1px] rounded-full bg-blue-600 text-white text-xs font-normal">
                                1
                            </span>
                            Baggage Protection
                        </button>

                        <button
                            className={`font-medium px-3 py-2 ${selectedAddOnServicesSide === "travelShield"
                                ? "text-black border-l-4 border-blue-600 px-3 py-2 w-full bg-gray-300 flex items-center gap-2"
                                : "bg-white flex items-center gap-2 text-gray-800"
                                }`}
                            onClick={() => setSelectedAddOnServicesSide("travelShield")}
                        >
                            <span className="px-[5px] py-[1px] rounded-full bg-blue-600 text-white text-xs font-normal">
                                2
                            </span>
                            Travel Shield
                        </button>
                    </div>
                </div>
                {/* sidebar end */}

                {/* data show start */}
                <div>
                    {selectedAddOnServicesSide === "baggageProtection" && (
                        <div className="w-full lg:w-[600px]">
                            <div className="flex items-center justify-between p-3 border-b border-gray-300">
                                <div className="flex items-center gap-3">
                                    <p className="text-gray-800 font-bold ">Baggage Protection</p>
                                    <p className="font-medium text-white bg-blue-600 px-2 py-1 rounded-lg text-sm">
                                        Reset
                                    </p>
                                </div>
                                <p className="text-sm text-gray-500 font-medium">Total : 95</p>
                            </div>
                            <div className="rounded-md border border-gray-300 mt-3">
                                <div
                                    onClick={() => setIsOpenAddDrop(!isOpenAddDrop)}
                                    className="flex items-center justify-between bg-gray-200"
                                >
                                    <div className="p-2 text-sm">
                                        <p className="text-black font-medium">Select for primary traveler</p>
                                        <p className="text-gray-500">abcd</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <p className="font-medium text-blue-600 flex items-center justify-end">
                                                <LiaDollarSignSolid /> <span>95</span>
                                            </p>
                                            <p className="text-gray-500">Blue Ribbon Bags</p>
                                        </div>
                                        <p className="text-xl pr-3">
                                            {isOpenAddDrop ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    {isOpenAddDrop && (
                                        <div className="space-y-4 px-4">
                                            {/* button start */}
                                            <div className="flex items-center gap-5">
                                                <div
                                                    onClick={() => setSelectedButton("protect")}
                                                    className={`px-4 py-2 rounded-lg text-white transition flex justify-between w-full ${selectedButton === "protect"
                                                        ? "border border-blue-500 bg-blue-100"
                                                        : "bg-gray-100"
                                                        }`}
                                                >
                                                    <div>
                                                        <p className="text-xl text-black">
                                                            <PiTagSimpleFill />
                                                        </p>
                                                        <p className="text-sm text-gray-600 mt-2">Protect with</p>
                                                        <p className="font-medium text-black">Blue Ribbons Bag</p>
                                                    </div>
                                                    <Check
                                                        size={20}
                                                        className={
                                                            selectedButton === "protect"
                                                                ? "text-white rounded-full bg-blue-500 p-1"
                                                                : "text-gray-300 bg-gray-500 rounded-full p-1"
                                                        }
                                                    />
                                                </div>

                                                <div
                                                    onClick={() => setSelectedButton("withoutProtect")}
                                                    className={`px-4 py-2 rounded-lg text-white transition flex justify-between w-full ${selectedButton === "withoutProtect"
                                                        ? "border border-red-500 bg-red-100"
                                                        : "bg-gray-100"
                                                        }`}
                                                >
                                                    <div>
                                                        <p className="text-xl text-red-500">
                                                            <GoShieldX />
                                                        </p>
                                                        <p className="text-sm text-gray-600 mt-2">I Will Take</p>
                                                        <p className="font-medium text-black">No Baggage Protection</p>
                                                    </div>
                                                    <Check
                                                        size={20}
                                                        className={
                                                            selectedButton === "withoutProtect"
                                                                ? "text-white rounded-full bg-red-500 p-1"
                                                                : "text-gray-300 bg-gray-500 rounded-full p-1"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            {/* button start */}

                                            <div className="mt-3 flex items-center justify-between">
                                                <p className="font-medium text-gray-600">What you will get?</p>
                                                <button className="flex items-center gap-1 text-blue-500 font-medium">
                                                    Learn More
                                                    <span>
                                                        <FaAngleRight />
                                                    </span>
                                                </button>
                                            </div>

                                            <div>
                                                {selectedButton === "protect" && (
                                                    <div className="border border-gray-300 rounded-lg w-fit">
                                                        <table className="bg-gray-100 rounded-lg w-full table-fixed text-sm">
                                                            <thead>
                                                                <tr className="text-left border-b border-gray-300">
                                                                    <th className="p-2">Covered Event</th>
                                                                    <th className="px-3 py-2 bg-blue-100 border-t-4 border-l-4 border-r-4 border-blue-500">
                                                                        I Want To Protect My Baggage
                                                                    </th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td className="px-3 py-2 break-words border-b border-gray-300">
                                                                        Guaranteed Payment (Service Satisfaction Guarantee Limit
                                                                        Of Liability (BDT 19,000))
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 border-l-4 border-r-4  border-l-blue-500 border-r-blue-500 bg-blue-100">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        Email Tracking
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 bg-blue-100 border-l-4 border-r-4  border-l-blue-500 border-r-blue-500">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        SMS Tracking
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 bg-blue-100 border-l-4 border-r-4  border-l-blue-500 border-r-blue-500">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        Need Proof Of Content In Bag?
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 text-red-400 bg-blue-100 border-l-4 border-r-4  border-l-blue-500 border-r-blue-500">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td className="text-center px-3 py-2 bg-blue-100 border-l-4 border-r-4  border-l-blue-500 border-r-blue-500">
                                                                        <span className="font-semibold text-white bg-blue-500 px-3 py-2 text-center w-fit rounded-md ">
                                                                            Selected
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td className="px-3 py-2 text-center text-blue-500 font-bold bg-blue-100 border-l-4 border-r-4  border-b-4 border-l-blue-500 border-r-blue-500 border-b-blue-500">
                                                                        95 Only
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="mt-1 flex gap-4 items-center justify-between p-3 text-sm">
                                                            <button className="text-center text-gray-600 bg-gray-200  py-2 rounded-lg font-medium w-full">
                                                                Back to Primary Traveler
                                                            </button>
                                                            <button className="text-center text-white bg-blue-500 py-2 rounded-lg font-medium w-full">
                                                                Back to Primary Traveler
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                {selectedButton === "withoutProtect" && (
                                                    <div className="border border-gray-300 rounded-lg w-fit">
                                                        <table className="bg-gray-100 rounded-lg w-full table-fixed text-sm">
                                                            <thead>
                                                                <tr className="text-left border-b border-gray-300">
                                                                    <th className="p-3">Covered Event</th>
                                                                    <th className="px-3 py-2 bg-blue-100 border-t-4 border-l-4 border-r-4 border-red-500">
                                                                        I Want To Protect My Baggage
                                                                    </th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td className="px-3 py-2 break-words border-b border-gray-300">
                                                                        Guaranteed Payment (Service Satisfaction Guarantee Limit
                                                                        Of Liability (BDT 19,000))
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 border-l-4 border-r-4  border-l-red-500 border-r-red-500 bg-blue-100">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        Email Tracking
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 bg-blue-100 border-l-4 border-r-4  border-l-red-500 border-r-red-500">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        SMS Tracking
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 bg-blue-100 border-l-4 border-r-4  border-l-red-500 border-r-red-500">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        Need Proof Of Content In Bag?
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 text-green-400 bg-blue-100 border-l-4 border-r-4  border-l-red-500 border-r-red-500">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td></td>
                                                                    <td className="px-3 py-2 text-center text-blue-500 font-bold bg-blue-100 border-l-4 border-r-4  border-b-4 border-l-red-500 border-r-red-500 border-b-red-500">
                                                                        <span className="font-semibold text-white bg-red-500 px-3 py-2 text-center w-fit rounded-md ">
                                                                            Selected
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="mt-1 flex gap-4 items-center justify-between p-3 text-sm">
                                                            <button className="text-center text-gray-600 bg-gray-200  py-2 rounded-lg font-medium w-full">
                                                                Back to Primary Traveler
                                                            </button>
                                                            <button className="text-center text-white bg-blue-500 py-2 rounded-lg font-medium w-full">
                                                                Back to Primary Traveler
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {selectedAddOnServicesSide === "travelShield" && (
                        <div className="w-full lg:w-[600px]">
                            <div className="flex items-center justify-between p-3 border-b border-gray-300">
                                <div className="flex items-center gap-3">
                                    <p className="text-gray-800 font-bold ">Travel Shield</p>
                                    <p className="font-medium text-white bg-blue-600 px-2 py-1 rounded-lg text-sm">
                                        Reset
                                    </p>
                                </div>
                                <p className="text-sm text-gray-500 font-medium">Total : 98</p>
                            </div>
                            <div className="rounded-md border border-gray-300 mt-3">
                                <div
                                    onClick={() => setIsOpenAddDrop2(!isOpenAddDrop2)}
                                    className="flex items-center justify-between bg-gray-200"
                                >
                                    <div className="p-3">
                                        <p className="text-black font-medium">Select for primary traveler</p>
                                        <p className="text-gray-500">abcd</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <p className="font-medium text-blue-600 flex items-center justify-end">
                                                <LiaDollarSignSolid /> <span>98</span>
                                            </p>
                                            <p className="text-gray-500">Bimafy</p>
                                        </div>
                                        <p className="text-2xl pr-3">
                                            {isOpenAddDrop2 ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    {isOpenAddDrop2 && (
                                        <div className="space-y-4 px-4">
                                            {/* button start */}
                                            <div className="flex items-center gap-5 ">
                                                <div
                                                    onClick={() => setSelectedButton2("bimafy")}
                                                    className={`px-4 py-2 rounded-lg text-white transition flex justify-between w-full ${selectedButton2 === "bimafy"
                                                        ? "border border-blue-500 bg-blue-100"
                                                        : "bg-gray-100"
                                                        }`}
                                                >
                                                    <div>
                                                        <p className="text-xl text-black">
                                                            <HiMiniSquaresPlus />
                                                        </p>
                                                        <p className="text-sm text-gray-600 mt-2">Travel with</p>
                                                        <p className="font-medium text-black">Bimafy</p>
                                                    </div>
                                                    <Check
                                                        size={20}
                                                        className={
                                                            selectedButton2 === "bimafy"
                                                                ? "text-white rounded-full bg-blue-500 p-1"
                                                                : "text-gray-300 bg-gray-500 rounded-full p-1"
                                                        }
                                                    />
                                                </div>

                                                <div
                                                    onClick={() => setSelectedButton2("milvik")}
                                                    className={`px-4 py-2 rounded-lg text-white transition flex justify-between w-full ${selectedButton2 === "milvik"
                                                        ? "border border-blue-500 bg-blue-100"
                                                        : "bg-gray-100"
                                                        }`}
                                                >
                                                    <div>
                                                        <p className="text-xl text-black">
                                                            <IoTerminalSharp />
                                                        </p>
                                                        <p className="text-sm text-gray-600 mt-2">Travel with</p>
                                                        <p className="font-medium text-black">Milvik</p>
                                                    </div>
                                                    <Check
                                                        size={20}
                                                        className={
                                                            selectedButton2 === "milvik"
                                                                ? "text-white rounded-full bg-blue-500 p-1"
                                                                : "text-gray-300 bg-gray-500 rounded-full p-1"
                                                        }
                                                    />
                                                </div>

                                                <div
                                                    onClick={() => setSelectedButton2("noInsurance")}
                                                    className={`px-4 py-2 rounded-lg w-full text-white transition flex justify-between ${selectedButton2 === "noInsurance"
                                                        ? "border border-red-500 bg-red-100"
                                                        : "bg-gray-100"
                                                        }`}
                                                >
                                                    <div>
                                                        <p className="text-xl text-red-500">
                                                            <GoShieldX />
                                                        </p>
                                                        <p className="text-sm text-gray-600 mt-2">I Will Take</p>
                                                        <p className="font-medium text-black">No Insurance</p>
                                                    </div>
                                                    <Check
                                                        size={20}
                                                        className={
                                                            selectedButton2 === "noInsurance"
                                                                ? "text-white rounded-full bg-red-500 p-1"
                                                                : "text-gray-300 bg-gray-500 rounded-full p-1"
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            {/* button end */}

                                            <div className="mt-3 flex items-center justify-between">
                                                <p className="font-medium text-gray-600">What you will get?</p>
                                                <button className="flex items-center gap-1 text-blue-500 font-medium">
                                                    Learn More
                                                    <span>
                                                        <FaAngleRight />
                                                    </span>
                                                </button>
                                            </div>

                                            <div>
                                                {/* bimafy start */}
                                                {selectedButton2 === "bimafy" && (
                                                    <div className="border border-gray-300 rounded-lg w-fit text-sm">
                                                        <table className="bg-gray-100 rounded-lg w-full table-fixed">
                                                            <thead>
                                                                <tr className="text-left border-b border-gray-300">
                                                                    <th className="px-3 py-2">Covered Event</th>
                                                                    <th className="px-3 py-2 border-t-4 border-l-4 border-r-4 border-blue-500">
                                                                        Refund Guard (Up To BDT 2500 Refund Coverage)
                                                                    </th>
                                                                    <th className="px-3 py-2">
                                                                        Insurance My Journey With Bimafy
                                                                    </th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td className="px-3 py-2 break-words border-b border-gray-300">
                                                                        Hospitalization & Accident (Self)
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 border-l-4 border-r-4  border-l-blue-500 border-r-blue-500">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        Emergency Transportation & Outdoor Visit (Self)
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300  border-l-4 border-r-4  border-l-blue-500 border-r-blue-500">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        Death & Funeral Coverage (Self)
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b-4 border-b-blue-500 border-l-4 border-r-4  border-l-blue-500 border-r-blue-500">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>

                                                                    <td className="px-3 py-3 border-b border-gray-300">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="mt-1 flex gap-4 items-center justify-between p-3">
                                                            <button className="text-center text-gray-600 bg-gray-200  py-2 rounded-lg font-semibold w-full">
                                                                Back to Baggage Protection
                                                            </button>
                                                            <button className="text-center text-white bg-blue-500 py-2 rounded-lg font-semibold w-full">
                                                                Save and Continue
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                {/* bimafy end */}

                                                {/* milvik start */}
                                                {selectedButton2 === "milvik" && (
                                                    <div className="border border-gray-300 rounded-lg w-fit">
                                                        <table className="bg-gray-100 rounded-lg w-full table-fixed text-sm">
                                                            <thead>
                                                                <tr className="text-left border-b border-gray-300">
                                                                    <th className="px-3 py-2">Covered Event</th>
                                                                    <th className="px-3 py-2 border-t-4 border-l-4 border-r-4 border-blue-500">
                                                                        Refund Guard (Up To BDT 2500 Refund Coverage)
                                                                    </th>
                                                                    <th className="px-3 py-2">
                                                                        Insurance My Journey With Bimafy
                                                                    </th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td className="px-3 py-2 break-words border-b border-gray-300">
                                                                        Hospitalization & Accident (Self)
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 border-l-4 border-r-4  border-l-blue-500 border-r-blue-500">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        Emergency Transportation & Outdoor Visit (Self)
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300  border-l-4 border-r-4  border-l-blue-500 border-r-blue-500">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        Death & Funeral Coverage (Self)
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b-4 border-b-blue-500 border-l-4 border-r-4  border-l-blue-500 border-r-blue-500">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>

                                                                    <td className="px-3 py-3 border-b border-gray-300">
                                                                        <Check className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="mt-1 flex gap-4 items-center justify-between p-3 text-sm">
                                                            <button className="text-center text-gray-600 bg-gray-200  py-2 rounded-lg font-medium w-full">
                                                                Back to Baggage Protection
                                                            </button>
                                                            <button className="text-center text-white bg-blue-500 py-2 rounded-lg font-medium w-full">
                                                                Save and Continue
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                {/* milvik end */}

                                                {/* no insurance start */}
                                                {selectedButton2 === "noInsurance" && (
                                                    <div className="border border-gray-300 rounded-lg w-fit">
                                                        <table className="bg-gray-100 rounded-lg w-full table-fixed text-sm">
                                                            <thead>
                                                                <tr className="text-left border-b border-gray-300">
                                                                    <th className="px-3 py-2">Covered Event</th>
                                                                    <th className="px-3 py-2 border-t-4 border-l-4 border-r-4 border-red-500">
                                                                        Refund Guard (Up To BDT 2500 Refund Coverage)
                                                                    </th>
                                                                    <th className="px-3 py-2">
                                                                        Insurance My Journey With Bimafy
                                                                    </th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td className="px-3 py-2 break-words border-b border-gray-300">
                                                                        Hospitalization & Accident (Self)
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300 border-l-4 border-r-4  border-l-red-500 border-r-red-500">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        Emergency Transportation & Outdoor Visit (Self)
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300  border-l-4 border-r-4  border-l-red-500 border-r-red-500">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b border-gray-300">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="px-3 py-2 border-b border-gray-300">
                                                                        Death & Funeral Coverage (Self)
                                                                    </td>
                                                                    <td className="px-3 py-3 border-b-4 border-b-red-500 border-l-4 border-r-4  border-l-red-500 border-r-red-500">
                                                                        <X className="w-full" size={20} />
                                                                    </td>

                                                                    <td className="px-3 py-3 border-b border-gray-300">
                                                                        <X className="w-full" size={20} />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="mt-1 flex gap-4 items-center justify-between p-3 text-sm">
                                                            <button className="text-center text-gray-600 bg-gray-200  py-2 rounded-lg font-medium w-full">
                                                                Back to Baggage Protection
                                                            </button>
                                                            <button className="text-center text-white bg-blue-500 py-2 rounded-lg font-medium w-full">
                                                                Save and Continue
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                                {/* no insurance end */}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* data show end */}
            </div>

            {/* price details start */}
            <div className="min-w-96 max-h-fit shadow-md rounded-md">
                <div className="flex items-center justify-between bg-gray-200 px-3 py-2">
                    <div className="flex gap-3 items-center">
                        <p className="text-xl text-blue-800">
                            <FaPlaneDeparture />
                        </p>
                        <div>
                            <p className="flex gap-3 items-center font-bold ">
                                DAC{" "}
                                <span>
                                    <GoArrowSwitch />
                                </span>{" "}
                                CXB
                            </p>
                            <p className="text-gray-600">One-Way • 02 Mar - 02 Mar</p>
                        </div>
                    </div>
                    <p className="text-blue-800 bg-blue-100 font-medium py-2 px-3 w-fit rounded-md">
                        Details
                    </p>
                </div>

                {/* airFare Start */}
                <div
                    className={`px-3 py-2 rounded-md transition-colors mt-2
                  ${isOpenAdd ? "bg-gray-200" : "bg-white hover:bg-gray-200"}`}
                    onClick={toggleFilterAdd}
                >
                    <div className="flex items-center justify-between">
                        <p className="flex gap-2 items-center text-gray-600">
                            <span className="text-2xl">
                                <BiSolidPlaneAlt />
                            </span>{" "}
                            <span className="font-medium">Air Fare</span>
                            <span>
                                <IoMdArrowDropdown />
                            </span>
                        </p>
                        <p className="font-medium">5692S BDT</p>
                    </div>

                    {isOpenAdd && (
                        <div>
                            <div className="mt-2 border-b border-gray-400 -px-3"></div>
                            <div className="flex items-center justify-between mt-1 text-sm text-gray-600">
                                <p>1 x BaseFare (Adult)</p>
                                <p>4,524 BDT</p>
                            </div>
                            <div className="flex items-center justify-between mt-1 text-sm text-gray-600">
                                <p>1 x Tax (Adult)</p>
                                <p>1,175 BDT</p>
                            </div>
                        </div>
                    )}
                </div>
                {/* airFare end */}

                <div className="px-3 mt-1 flex items-center justify-between font-medium">
                    <p className="text-gray-600 flex items-center gap-2">
                        <span>
                            <FaFileShield />
                        </span>
                        Baggage Protection
                    </p>
                    <p className="text-black">96 BDT</p>
                </div>

                <div className="px-3 mt-2 flex items-center justify-between font-medium">
                    <p className="text-gray-600 flex items-center gap-2">
                        <span>
                            <BiSolidPlaneAlt />
                        </span>
                        Travel Shield
                    </p>
                    <p className="text-black">98 BDT</p>
                </div>

                <div className="text-orange-500 flex items-center justify-between px-3 mt-2">
                    <p className="flex items-center gap-2 font-medium">
                        <span className="text-xl">
                            <AiFillTag />
                        </span>
                        Discount Availed
                    </p>
                    <p className="font-medium">- 907 BDT</p>
                </div>

                <div className="px-3 mt-2 flex items-center justify-between">
                    <p className="text-gray-600 flex items-center gap-2">
                        <span>
                            <RiDiscountPercentFill />
                        </span>
                        Convenience Fee
                        <span>
                            <MdError />
                        </span>
                    </p>
                    <p className="text-black font-medium">+ 96 BDT</p>
                </div>

                <div className="flex items-center justify-between bg-gray-200 px-3 py-2 mt-2">
                    <p className="text-gray-600">Total Price</p>

                    <p className="font-semibold ">4,888 BDT</p>
                </div>

                <div className="px-4 py-3 text-sm">
                    <button className="bg-orange-200 text-orange-600 w-full px-3 py-2 font-medium rounded-lg">
                        Go to Review & Payment
                    </button>
                </div>
            </div>
            {/* price details end */}
        </div>
    );
};

export default AddonService;