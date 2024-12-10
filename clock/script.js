function updateClock() {
    // Get the current date and time
    const now = new Date();
    
    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Extract the day, month, year, and day of the week
    const dayOfWeek = now.toLocaleString('default', { weekday: 'long' });
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    
    // Add leading zeros to minutes and seconds if less than 10
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    // Combine the time into a string
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Combine the date into a string
    const dateString = `${dayOfWeek}, ${month} ${day}, ${year}`;
    
    // Display the time and date in their respective elements
    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the time and date immediately
updateClock();