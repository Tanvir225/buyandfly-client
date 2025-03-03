import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CustomaizeFilter from "../../Component/Prices/CustomaizeFilter";
import DateOverview from "../../Component/Prices/DateOverview";
import TicketList from "../../Component/Prices/TicketList";
import TopbarList from "../../Component/Prices/TopbarList";
import { useGet_airsMutation } from "../../features/air/airApi";
import { Loader } from "lucide-react";
import { formatTimeDifference, getNormalTime } from "../../Component/Prices/Utility/customTime";


const Prices = () => {

    const [get_airs, { data, isLoading }] = useGet_airsMutation()
    const [airlines, set_airlines] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    const journey_from = searchParams.get('journeyFrom')
    const journey_to = searchParams.get('journeyTo')
    const trip_type = searchParams.get('tripType')
    const departure_date = searchParams.get('departureDate')
    const return_date = searchParams.get('returnDate')
    const fare_type = searchParams.get('fareType')
    const flight_class = searchParams.get('airClass')
    const adult = searchParams.get('adult')
    const child = searchParams.get('child')
    const infant = searchParams.get('infant')


    const custom_date_format = (date_time) => {
        let date_str = date_time;
        date_str = date_str.replace(' (Bangladesh Standard Time)', '')
        const date = new Date(date_str);
        const formatter = new Intl.DateTimeFormat("sv-SE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });

        const formattedDate = formatter.format(date).replace(" ", "T");

        return formattedDate;
    }
    useEffect(() => {
        let departure_date_temp = ''
        if (departure_date) {
            departure_date_temp = custom_date_format(departure_date)
        }
        get_airs({
            journey_from,
            journey_to,
            trip_type,
            departure_date_temp,
            fare_type,
            flight_class,
            adult,
            child,
            infant
        })
    }, [journey_from,
        journey_to,
        trip_type,
        departure_date,
        fare_type,
        flight_class,
        adult,
        child,
        infant
    ])


    useEffect(() => {
        if (data?.data?.groupedItineraryResponse?.scheduleDescs && data?.data?.groupedItineraryResponse?.legDescs && data?.data?.groupedItineraryResponse?.itineraryGroups) {
            const sabreResponse = {
                "scheduleDescs": data?.data?.groupedItineraryResponse?.scheduleDescs,
                "legDescs": data?.data?.groupedItineraryResponse?.legDescs,
                "itineraries": data?.data?.groupedItineraryResponse?.itineraryGroups[0]?.itineraries
            };
            console.log(sabreResponse.itineraries)
            // Convert schedule references to full flight details
            const getFlightDetails = (ref) => {
                return sabreResponse.scheduleDescs.find(schedule => schedule.id === ref);
            };

            // Process leg descriptions to extract full itineraries
            const itineraries = sabreResponse.legDescs.map(leg => {
                const itinerarie = data?.data?.groupedItineraryResponse?.itineraryGroups[0]?.itineraries?.find((item) => {
                    if(item?.legs[0].ref === leg.id){
                        return true
                    }
                })
                const flights = leg.schedules.map(schedule => getFlightDetails(schedule.ref));
                return {
                    elapsedTime: leg.elapsedTime,
                    flights,
                    itinerarie
                };
            });

            // Sort by shortest total travel time (optional)
            itineraries.sort((a, b) => a.elapsedTime - b.elapsedTime);

            console.log(itineraries);
            set_airlines([...itineraries])
        }
    }, [data?.data?.groupedItineraryResponse?.scheduleDescs, data?.data?.groupedItineraryResponse?.legDescs, data?.data?.groupedItineraryResponse?.itineraryGroups])


    // useEffect(() => {
    //     if (data?.data?.groupedItineraryResponse?.validatingCarrierDescs) {
    //         const validCarriers = data.data.groupedItineraryResponse.validatingCarrierDescs.map(item => item.default.code);
    //         const filteredSchedules = data?.data?.groupedItineraryResponse?.scheduleDescs?.filter(
    //             item => validCarriers.includes(item?.carrier?.marketing) // Ensure correct property access
    //         ).map(item => {
    //             const timeDiff = formatTimeDifference(item?.arrival?.time, item?.departure?.time)
    //             return {
    //                 id: item.id,
    //                 stopCount: item.stopCount,
    //                 marketingFlightNo: item?.carrier?.marketing + " - " + item?.carrier?.marketingFlightNumber,
    //                 airline: item?.carrier?.marketing,
    //                 air_ways_name: airlineMap[item?.carrier?.marketing],
    //                 departureIATA: item?.departure?.airport,
    //                 departureTime: getNormalTime(item?.departure?.time),
    //                 arrivalTime: getNormalTime(item?.arrival?.time),
    //                 timeDiff,
    //                 arrivalIATA: item?.arrival?.airport,
    //             }
    //         }).filter(item => item.departureIATA === journey_from).filter((item => item.arrivalIATA === journey_to))
    //         const shceduleIds = filteredSchedules.map(item => item.id)
    //         let leg_ids = ""
    //         data?.data?.groupedItineraryResponse.legDescs.forEach((item, i) => {
    //             const scheduleArr = item.schedules;
    //             scheduleArr.forEach((itm) => {
    //                 if (shceduleIds.includes(itm.ref)) {
    //                     leg_ids = leg_ids + " " + item.id
    //                 }
    //             })
    //         })
    //         let desireItems = []
    //         data?.data?.groupedItineraryResponse?.itineraryGroups[0]?.itineraries?.forEach((item, i) => {
    //             const legs = item.legs.map(ele => ele.ref)
    //             legs.forEach((itm => {
    //                 if (leg_ids.includes(itm)) {
    //                     desireItems.push(item)
    //                 }
    //             }))
    //         })
    //         desireItems = desireItems.map(item => {
    //             return item.pricingInformation[0].fare.totalFare.totalPrice
    //         })
    //         set_airlines(filteredSchedules.map((item, i) => {
    //             return {
    //                 ...item,
    //                 totalPrice: parseFloat(desireItems[i]).toFixed(0)
    //             }
    //         }))
    //     }
    // }, [data?.data?.groupedItineraryResponse?.validatingCarrierDescs, data?.data?.groupedItineraryResponse?.fareComponentDescs])


    console.log(airlines)

    return (
        <div className="mt-24 bg-[#f5f5f5] ">


            {/* top div */}
            <div className="h-18 bg-base-100 w-full shadow-md flex  items-center">
                <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
                    <TopbarList></TopbarList>
                </div>
            </div>


            {/* container */}
            <section className="max-w-7xl mx-auto py-7 grid grid-cols-12 gap-5   w-full">
                {/* filter */}
                <div className="w-full col-span-3 space-y-5">
                    <CustomaizeFilter></CustomaizeFilter>

                </div>

                {/* price list */}
                <div className=" w-full col-span-9 space-y-4">
                    <DateOverview></DateOverview>
                    {isLoading ? (<>
                        <Loader />
                    </>) : (
                        airlines?.length > 0 && airlines.map((item, i) => {
                            console.log(item)
                            return (
                                <>
                                    <TicketList
                                        key={item.id}
                                        airline={item?.flights[0]?.carrier?.marketing}
                                        air_ways_name={airlineMap[item?.flights[0]?.carrier?.marketing]}
                                        departureIATA={item.flights[0].departure.airport}
                                        arrivalTime={item.arrivalTime}
                                        departureTime={item.departureTime}
                                        arrivalIATA={item.flights[0].arrival.airport}
                                        timeDiff={item.timeDiff}
                                        totalPrice={item.itinerarie.pricingInformation[0].fare.totalFare.totalPrice}
                                        stopCount={item?.flights?.length-1}
                                        marketingFlightNo={item.marketingFlightNo}
                                    >
                                    </TicketList>
                                </>
                            )
                        })
                    )}
                </div>
            </section>
        </div>
    );
};

export default Prices;



// dummy data

const airlineMap = {
    "AA": "American Airlines",
    "AC": "Air Canada",
    "AF": "Air France",
    "AI": "Air India",
    "AM": "Aeromexico",
    "AR": "Aerolineas Argentinas",
    "AS": "Alaska Airlines",
    "AY": "Finnair",
    "AZ": "ITA Airways (formerly Alitalia)",
    "BA": "British Airways",
    "BI": "Royal Brunei Airlines",
    "BR": "EVA Air",
    "CA": "Air China",
    "CI": "China Airlines",
    "CX": "Cathay Pacific",
    "CZ": "China Southern Airlines",
    "DL": "Delta Air Lines",
    "EK": "Emirates",
    "ET": "Ethiopian Airlines",
    "EY": "Etihad Airways",
    "FJ": "Fiji Airways",
    "GA": "Garuda Indonesia",
    "GF": "Gulf Air",
    "HU": "Hainan Airlines",
    "IB": "Iberia",
    "JL": "Japan Airlines",
    "KA": "Cathay Dragon (formerly Dragonair)",
    "KE": "Korean Air",
    "KL": "KLM Royal Dutch Airlines",
    "LH": "Lufthansa",
    "LO": "LOT Polish Airlines",
    "LX": "SWISS International Air Lines",
    "MH": "Malaysia Airlines",
    "MS": "EgyptAir",
    "MU": "China Eastern Airlines",
    "NH": "All Nippon Airways (ANA)",
    "NZ": "Air New Zealand",
    "OS": "Austrian Airlines",
    "OZ": "Asiana Airlines",
    "PG": "Bangkok Airways",
    "PR": "Philippine Airlines",
    "QR": "Qatar Airways",
    "QF": "Qantas Airways",
    "RJ": "Royal Jordanian",
    "RO": "TAROM Romanian Air Transport",
    "SA": "South African Airways",
    "SB": "Aircalin",
    "SK": "Scandinavian Airlines (SAS)",
    "SQ": "Singapore Airlines",
    "SU": "Aeroflot",
    "SV": "Saudia",
    "TG": "Thai Airways International",
    "TK": "Turkish Airlines",
    "TP": "TAP Air Portugal",
    "UL": "SriLankan Airlines",
    "UA": "United Airlines",
    "VN": "Vietnam Airlines",
    "VS": "Virgin Atlantic",
    "WY": "Oman Air",
    "ZH": "Shenzhen Airlines",
    "FZ": "FlyDubai",
    "BG": "Biman Bangladesh Airlines"
};