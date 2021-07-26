// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

//We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


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

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
