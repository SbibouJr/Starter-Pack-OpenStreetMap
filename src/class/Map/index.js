import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {
  TILES_SERVER,
  ATTRIBUTION,
  DEFAULT_VIEW,
} from '../../config/map';

class Map {
  constructor() {
    this._lat = DEFAULT_VIEW.lat;
    this._lon = DEFAULT_VIEW.lon;
    this._map = null
  }

  initMap() {
    const villes = {
      Paris: { lat: 48.852969, lon: 2.349903 },
      Brest: { lat: 48.383, lon: -4.500 },
      Quimper: { lat: 48.000, lon: -4.100 },
      Marseille: { lat: 43.295, lon: 5.370 },
      Bayonne: { lat: 43.500, lon: -1.467 }
    };
    this._map = leaflet.map('map').setView([this._lat, this._lon], 16);
    leaflet.tileLayer(TILES_SERVER, {
        attribution: ATTRIBUTION,
        minZoom: 1,
        maxZoom: 20
    }).addTo(this._map);
    let marker = null;
    for (const key in villes) {
      marker = L.marker([villes[key].lat, villes[key].lon]).addTo(this._map);
      marker.bindPopup(key);
    };
    marker.remove();
  }

}

export default Map;
