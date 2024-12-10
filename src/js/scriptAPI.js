const getLocationBtn = document.querySelector('#get-location');
const saveLocationBtn = document.querySelector('#save-location');
const loadLocationBtn = document.querySelector('#load-location');
const latitudeDisplay = document.querySelector('#latitude');
const longitudeDisplay = document.querySelector('#longitude');
const savedLatitudeDisplay = document.querySelector('#saved-latitude');
const savedLongitudeDisplay = document.querySelector('#saved-longitude');

var currentLatitude, currentLongitude;

getLocationBtn.addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            currentLatitude = position.coords.latitude;
            currentLongitude = position.coords.longitude;
            latitudeDisplay.textContent = currentLatitude;
            longitudeDisplay.textContent = currentLongitude;
        }, error => {
            alert('Unable to fetch location.');
        })
    } else {
        alert('Geolocation is not supported by your browser.');
    }
})

saveLocationBtn.addEventListener('click', () => {
    if (currentLatitude !== null && currentLongitude !== null) {
        /*
        The localStorage.setItem() method is part of the Web 
        Storage API provided by modern web browsers. It allows 
        you to store data in the browser's local storage
        */

        localStorage.setItem('savedLatitude', currentLatitude);
        localStorage.setItem('savedLongitude', currentLongitude);
        alert('Location has been saved successfully.');
    } else {
        alert('Please get current location first!');
    }
})

loadLocationBtn.addEventListener('click', () => {
    const savedLatitude = localStorage.getItem('savedLatitude');
    const savedLongitude = localStorage.getItem('savedLongitude');

    if (savedLatitude && savedLongitude) {
        savedLatitudeDisplay.textContent = savedLatitude;
        savedLongitudeDisplay.textContent = savedLongitude;
    } else {
        alert('Saved location not found!');
    }
})