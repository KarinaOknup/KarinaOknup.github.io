/* eslint-disable */
import getMapDate from './getMapDate'
import mapCreating from './mapCreating'
import countryDataBorder from './countriesGeo'
const map = mapCreating();
async function geoJson() {
const data = await getMapDate();
const geoJson = {
   type: 'FeatureCollection',
   features: data.map((country = {}) => {
     const { countryInfo = {} } = country;
     const { lat, long: lng, flag} = countryInfo;
     return {
       type: 'Feature',
       properties: {
         ...country,
         flag
       },
       geometry: {
         type: 'Point',
         coordinates: [ lng, lat ]
       }
     }
   })
 };
  const geoJsonLayers = new L.GeoJSON(geoJson, {
  pointToLayer: (feature = {}, latlng) => {
    const { properties = {} } = feature;
    let updatedFormatted;
    const {
      flag,
      country,
      updated,
      cases,
      deaths,
      recovered
    } = properties


    if ( updated ) {
      updatedFormatted = new Date(updated).toLocaleString();
    }
    let sizeOfCircle=cases*0.0000005;
    if(cases>500000) sizeOfCircle=cases*0.0000005;
    if(cases>1900000) sizeOfCircle=cases*0.0000001;
    if(cases<10000) sizeOfCircle=cases*0.00001;
    const html = `
      <span class="icon-marker" style ='width:${sizeOfCircle}rem; height:${sizeOfCircle}rem'>
        <span class="icon-marker-tooltip">
          <img style='width:3rem' src=${flag} alt=${country}>
          <h2>${country}</h2>
          <ul>
            <li><strong>Confirmed:</strong> ${cases}</li>
            <li><strong>Deaths:</strong> ${deaths}</li>
            <li><strong>Recovered:</strong> ${recovered}</li>
            <li><strong>Last Update:</strong> ${updatedFormatted}</li>
          </ul>
        </span>
      </span>
    `;
    return L.marker( latlng, {
      icon: L.divIcon({
        className: 'icon',
        html
      }),
      riseOnHover: true
    });
  }
});
geoJsonLayers.addTo(map);
}

export default geoJson;