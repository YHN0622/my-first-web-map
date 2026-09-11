const USC = [34.0224, -118.2853];
const HOME = [32.2656, 111.6474];
const map = L.map('map').setView(USC, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map); 

L.marker(USC).addTo(map).bindPopup('University of Southern California').openPopup();
L.marker(HOME).addTo(map).bindPopup('My Hometown').openPopup();

const homeButton = document.getElementById('home-town');
const uscButton = document.getElementById('usc');
const status     = document.getElementById("status");

homeButton.addEventListener('click', function() {
    map.flyTo(HOME, 11);
    status.textContent = "Flying home";
});

uscButton.addEventListener('click', function() {
    map.flyTo(USC, 11);
    status.textContent = "Back on campus";
});
