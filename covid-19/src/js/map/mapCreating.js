/* eslint-disable */
const mapCreating = () => {
  var mapOptions = {
    center: [17.385044, 78.486671],
    zoom: 2
 }
 // Creating a map object
 const map = new L.map('map', mapOptions);
 // Creating a Layer object
 const layer = new L.TileLayer('https://api.mapbox.com/styles/v1/koknup/ckiqg55qe1bdq17qdah1loudb/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29rbnVwIiwiYSI6ImNraXFmbWdiYTAxZncyeW40dmJ3bDkyMGYifQ.ZciWqPb2MMz8RjwacQTZHA');
 map.addLayer(layer);

 document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';
 return map;
}

export default mapCreating;
