function convertPace(unit) {
    const conversion = 1.60934;
    const time = document.getElementById(unit + "-time").value;
    const [mins, secs] = time.split(":")

    const totalMinutes = parseInt(mins) + (parseInt(secs) / 60);
    
    const pace = unit == 'km' ? totalMinutes * conversion : totalMinutes / conversion;
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);
    const timeString = minutes < 10 ? `0${minutes}:${seconds}` : `${minutes}:${seconds}` 

    if(unit === 'km') {
        document.getElementById('mile-time').value = timeString;
    } else {
        document.getElementById('km-time').value = timeString;
    }
    
    calculateRaceTimes();
}

function calculateRaceTimes() {
    const time = document.getElementById("km-time").value;
    let [mins, secs] = time.split(":"); 
    const totalMinutes = parseInt(mins) + (parseInt(secs) / 60);
    const fiveKm = totalMinutes * 5;
    const tenKm = totalMinutes * 10;
    const halfMarathon = totalMinutes * 21.097494;
    const marathon = totalMinutes * 42.194988;

    const fiveKmHours = Math.floor(fiveKm / 60)
    const fiveKmMinutes = Math.round(fiveKm % 60);
    const fiveKmSeconds = Math.floor(fiveKmMinutes * 60);
    document.getElementById("five-km").textContent =`${fiveKmHours}h ${fiveKmMinutes}m ${fiveKmSeconds}s`;

    const tenKmHours = Math.floor(tenKm / 60);
    const tenKmMinutes = Math.round(tenKm % 60);
    const tenKmSeconds = Math.round(tenKmMinutes * 60);
    document.getElementById("ten-km").textContent = `${tenKmHours}h ${tenKmMinutes}m ${tenKmSeconds}s`;

    const halfMarathonHours = Math.floor(halfMarathon / 60);
    const halfMinutes = Math.round(halfMarathon % 60);
    const halfSeconds = Math.round(halfMinutes * 60);
    document.getElementById("half-marathon").textContent = `${halfMarathonHours}h ${halfMinutes}m ${halfSeconds}s`;

    const marathonHours = Math.floor(marathon / 60);
    const fullMinutes = Math.round(marathon % 60);
    const fullSeconds = Math.round(fullMinutes * 60);
    document.getElementById("marathon").textContent = `${marathonHours}h ${fullMinutes}m ${fullSeconds}s`;
}