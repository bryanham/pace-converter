function convert(measure) {
    const conversion = 1.60934;
    const mins = document.getElementById(measure + "-mins").valueAsNumber;
    const secs = document.getElementById(measure + "-secs").valueAsNumber;

    const totalMinutes = mins + (secs / 60);
    
    const pace = measure == 'km' ? totalMinutes * conversion : totalMinutes / conversion;
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);

    if(measure === 'km') {
        document.getElementById('miles-mins').value = minutes;
        document.getElementById('miles-secs').value = seconds;
    } else {
        document.getElementById('km-mins').value = minutes;
        document.getElementById('km-secs').value = seconds; 
    }
    calculateRaceTimes();
}

function calculateRaceTimes() {
    const mins = document.getElementById("km-mins").valueAsNumber;
    const secs = document.getElementById("km-secs").valueAsNumber;
    const fiveKmMinutes = (mins + (secs / 60)) * 5;
    const tenKmMinutes = (mins + (secs / 60)) * 10;
    const halfMarathonMinutes = (mins + (secs / 60)) * 21.097494;
    const marathonMinutes = (mins + (secs / 60)) * 42.194988;

    document.getElementById("five-km").innerHTML = '<p>' + fiveKmMinutes + '</p>'
}