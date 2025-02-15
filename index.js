function convert(measure) {
    const conversion = 1.60934;
    const time = document.getElementById(measure + "-time").value;
    const [mins, secs] = time.split(":")

    const totalMinutes = parseInt(mins) + (parseInt(secs) / 60);
    
    const pace = measure == 'km' ? totalMinutes * conversion : totalMinutes / conversion;
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);
    const timeString = minutes < 10 ? `0${minutes}:${seconds}` : `${minutes}:${seconds}` 

    if(measure === 'km') {
        document.getElementById('mile-time').value = timeString;
    } else {
        document.getElementById('km-time').value = timeString;
    }
    calculateRaceTimes();
}

function calculateRaceTimes() {
    const time = document.getElementById("km-time").value;
    const [mins, secs] = time.split(":")
    const fiveKmMinutes = (mins + (secs / 60)) * 5;
    const tenKmMinutes = (mins + (secs / 60)) * 10;
    const halfMarathonMinutes = (mins + (secs / 60)) * 21.097494;
    const marathonMinutes = (mins + (secs / 60)) * 42.194988;

    document.getElementById("five-km").innerHTML = '<p>' + fiveKmMinutes + '</p>'
}