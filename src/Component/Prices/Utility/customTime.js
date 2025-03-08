export const formatTimeDifference = (arrivalTime, departureTime, departureDate, dateAdjustment = 0) => {
    // Extract time and offset from departure
    const depMatch = departureTime.match(/(\d{2}:\d{2}:\d{2})\+(\d{2}):(\d{2})/);
    const arrMatch = arrivalTime.match(/(\d{2}:\d{2}:\d{2})\+(\d{2}):(\d{2})/);

    if (!depMatch || !arrMatch) {
        throw new Error("Invalid time format");
    }

    // Extract values for departure
    const depTime = depMatch[1];  // "22:30:00"
    const depOffsetHours = parseInt(depMatch[2]); // 03

    // Extract values for arrival
    const arrTime = arrMatch[1];  // "02:25:00"
    const arrOffsetHours = parseInt(arrMatch[2]); // 04

    // Convert departure time to a Date object in local time
    let depDateTime = new Date(`${departureDate}T${depTime}`);
    // Adjust for the departure timezone offset (convert to UTC)
    depDateTime.setHours(depDateTime.getHours() - depOffsetHours);

    // Convert arrival time to a Date object
    let arrDateTime = new Date(`${departureDate}T${arrTime}`);
    // Adjust for the arrival timezone offset (convert to UTC)
    arrDateTime.setHours(arrDateTime.getHours() - arrOffsetHours);

    // If arrival time in UTC is before departure time, adjust to the next day
    if (arrDateTime < depDateTime) {
        arrDateTime.setDate(arrDateTime.getDate() + 1);
    }

    // Calculate the time difference
    let timeDifferenceMs = arrDateTime - depDateTime;
    let timeDifferenceMinutes = Math.floor(timeDifferenceMs / (1000 * 60));
    let hours = Math.floor(timeDifferenceMinutes / 60);
    let minutes = timeDifferenceMinutes % 60;

    // Calculate date adjustment (difference in days)
    // return { hours, minutes, dateAdjustment };
    return `${hours} h ${minutes} min`;

}

export const getNormalTime = (timeString) => {
    let [hours, minutes, seconds] = timeString.split('+')[0].split(":").map(Number);
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
}


export const datewithDayString = (dateString, dateAdjustment) => {
    console.log(dateAdjustment)
    let date = new Date(dateString);
    if (dateAdjustment > 0) {
        date.setDate(date.getDate() + dateAdjustment);
    }
    const options = { day: "2-digit", month: "short", weekday: "short" };

    let desireDateFormat = date.toLocaleDateString("en-US", options).replace(",", "");
    desireDateFormat = desireDateFormat.split(' ');
    // Wed Apr 16
    return desireDateFormat[2] + " " + desireDateFormat[1] + ", " + desireDateFormat[0]
}



export const calculateTotalTravelDuration = (flights, departureDate) => {
    if (flights.length === 0) return { duration: "0 hours 0 minutes", arrivalDate: departureDate };

    // Get first departure and last arrival
    const firstFlight = flights[0];
    const lastFlight = flights[flights.length - 1];

    // Construct the departure datetime using the given departure date
    const departureDateTime = new Date(`${departureDate}T${firstFlight.departure.time}`);

    // Construct the arrival datetime using the same departure date initially
    let arrivalDateTime = new Date(`${departureDate}T${lastFlight.arrival.time}`);

    // Apply the date adjustment if present
    if (lastFlight.arrival.dateAdjustment) {
        arrivalDateTime.setDate(arrivalDateTime.getDate() + lastFlight.arrival.dateAdjustment);
    }

    // Calculate the total duration in minutes
    const durationInMinutes = (arrivalDateTime - departureDateTime) / (1000 * 60);

    // Convert to hours and minutes
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;

    // Format final arrival date as YYYY-MM-DD
    const finalArrivalDate = arrivalDateTime.toISOString().split("T")[0];

    console.log(finalArrivalDate)
    return  `${hours<0?-hours:hours} h ${minutes<0?-minutes:minutes} m`
}

// Example usage
const flights = [
    {
        "id": 51,
        "departure": { "airport": "DAC", "time": "19:25:00+06:00" },
        "arrival": { "airport": "MCT", "time": "00:45:00+04:00", "dateAdjustment": 1 }
    },
    {
        "id": 35,
        "departure": { "airport": "MCT", "time": "01:55:00+04:00" },
        "arrival": { "airport": "DXB", "time": "03:10:00+04:00" }
    }
];

const departureDate = "2025-03-25";

console.log(calculateTotalTravelDuration(flights, departureDate));
