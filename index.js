function convert(unit) {
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

    const fiveKmMinutes = Math.floor(fiveKm);
    const fiveKmSeconds = Math.round((fiveKm - fiveKmMinutes) * 60);
    document.getElementById("five-km").textContent =`${fiveKmMinutes} : ${fiveKmSeconds}`;

    const tenKmMinutes = Math.floor(tenKm);
    const tenKmSeconds = Math.round((tenKm - tenKmMinutes) * 60);
    document.getElementById("ten-km").textContent = `${tenKmMinutes} : ${tenKmSeconds}`;

    const halfMinutes = Math.floor(halfMarathon);
    const halfSeconds = Math.round((halfMarathon - halfMinutes) * 60);
    document.getElementById("half-marathon").textContent = `${halfMinutes} : ${halfSeconds}`;

    const fullMinutes = Math.floor(marathon);
    const fullSeconds = Math.round((marathon - fullMinutes) * 60);
    document.getElementById("marathon").textContent = `${fullMinutes} : ${fullSeconds}`;
}