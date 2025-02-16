function convertPace(unit) {
    const conversion = 1.60934;
    let mins = document.getElementById(unit + "-mins").valueAsNumber;
    let secs = document.getElementById(unit + "-secs").valueAsNumber;
    mins = isNaN(mins) ? 0 : mins;
    secs = isNaN(secs) ? 0 : secs;
    const totalMinutes = mins + secs / 60;
    const pace = unit == 'km' ? totalMinutes * conversion : totalMinutes / conversion;
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60); 

    if(unit === 'km') {
        document.getElementById('mile-mins').value = minutes;
        document.getElementById('mile-secs').value = seconds < 10 ? "0" + seconds : seconds;
    } else {
        document.getElementById('km-mins').value = minutes;
        document.getElementById('km-secs').value = seconds < 10 ? "0" + seconds : seconds;
    }
    calculateRaceTimes();
}

function calculateRaceTimes() {
    let mins = document.getElementById("km-mins").valueAsNumber;
    let secs = document.getElementById("km-secs").valueAsNumber;
    mins = isNaN(mins) ? 0 : mins
    secs = isNaN(secs) ? 0 : secs
    const totalMinutes = parseInt(mins) + (parseInt(secs) / 60);
    const fiveKm = totalMinutes * 5;
    const tenKm = totalMinutes * 10;
    const halfMarathon = totalMinutes * 21.097494;
    const marathon = totalMinutes * 42.194988;

    const fiveKmHours = Math.floor(fiveKm / 60)
    const fiveKmMinutes = Math.round(fiveKm % 60);
    const fiveKmSeconds = Math.round(fiveKmMinutes * 60);
    document.getElementById("five-km").textContent = `${fiveKmHours}h ${fiveKmMinutes}m ${fiveKmSeconds}s`;

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

function convertDistance(unit) {
    const conversion = 1.60934;
    const distance = document.getElementById(unit + "-distance").valueAsNumber;
    const convertedDistance = unit == 'km' ? distance / conversion : distance * conversion

    if (unit == 'km') {
        document.getElementById('mile-distance').value = convertedDistance.toFixed(2);
    } else {
        document.getElementById('km-distance').value = convertedDistance.toFixed(2);
    }
}