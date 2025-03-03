export const formatTimeDifference = (arrival, departure) => {

    let arrivalTime = new Date(`2000-01-01T${arrival}`);
    let departureTime = new Date(`2000-01-01T${departure}`);

    if (departureTime > arrivalTime) {
        departureTime.setDate(departureTime.getDate() - 1);
    }

    let diffMs = arrivalTime - departureTime;

    let diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    let diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    if (diffHours < 0 || diffMinutes < 0) {
        diffHours = 24 + diffHours;
    }

    return `${diffHours} h ${diffMinutes} min`;
}

export const getNormalTime = (timeString) => {
        // Extract time and timezone offset
        let match = timeString.match(/^(\d{2}):(\d{2}):(\d{2})\+(\d{2}):?(\d{2})?$/);
    
        if (!match) {
            return "Invalid Time Format"; // Handle invalid input
        }
    
        let [, hours, minutes, seconds, offsetHours] = match.map(Number);
    
        // Create a UTC Date with the given time and adjust for timezone
        let date = new Date();
        date.setUTCHours(hours - offsetHours, minutes, seconds, 0);
    
        // Format time in 12-hour format (AM/PM)
        let formattedTime = date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    
        return formattedTime;
    }
    
