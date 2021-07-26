//We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    "Street": streets,
    "Dark": dark,
  };

// Create the map object with center, zoom level and default layer
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/yessiez/Mapping_Earthquakes/master/majorAirports.json";



// SKILL DRILL: add a popup marker that displays all airports' codes and names
// Grabbing our GeoJSON data
d3.json(airportData).then(function(data) {
    // console.log(data);
    createFeatures(data.features);
});

function createFeatures(airportData){

    function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>" + "Airport code: " + feature.properties.faa + "</h3><hr><p> Airport name: " + feature.properties.name + "</p>");
    }

    var airports = L.geoJson(airportData, {
        onEachFeature: onEachFeature
}).addTo(map);
}