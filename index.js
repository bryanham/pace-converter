function convert(measure) {
    if (measure === 'km'){
        const kmToMiles = 1.60934;
        const mins = parseInt(document.getElementById("km-mins").value);
        const secs = parseInt(document.getElementById("km-secs").value);

        const totalMinutesPerKm = mins + (secs / 60);
        
        const pacePerMile = totalMinutesPerKm * kmToMiles;
        const minutes = Math.floor(pacePerMile);
        const seconds = Math.round((pacePerMile - minutes) * 60)

        document.getElementById('miles-mins').value = minutes;
        document.getElementById('miles-secs').value = seconds;
    } else {
        const milesToKm = 1.60934;
        const mins = parseInt(document.getElementById("miles-mins").value);
        const secs = parseInt(document.getElementById("miles-secs").value);

        const totalMinutesPerMile = mins + (secs / 60);
        
        const pacePerKm = totalMinutesPerMile / milesToKm;

        const minutes = Math.floor(pacePerKm);
        const seconds = Math.round((pacePerKm - minutes) * 60)

        document.getElementById('km-mins').value = minutes;
        document.getElementById('km-secs').value = seconds;
    }
}