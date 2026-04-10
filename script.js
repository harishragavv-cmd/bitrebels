// Create map (Chennai)
const map = L.map('map').setView([13.05, 80.24], 12);

// Add dark theme tiles
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Add marker on click
map.on('click', function(e) {
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("Waste reported here!")
    .openPopup();
});