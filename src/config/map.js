const TILES_SERVER = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png';
const ATTRIBUTION = 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>';

const MARKERS = {
  PARIS: { lat: 48.852969, lon: 2.349903 },
  BREST: { lat: 48.383, lon: -4.500 },
  QUIMPER: { lat: 48.000, lon: -4.100 },
  MARSEILLE: { lat: 43.295, lon: 5.370 },
  BAYONNE: { lat: 43.500, lon: -1.467 }
};

const DEFAULT_VIEW = {
  lat: MARKERS.MARSEILLE.lat,
  lon: MARKERS.MARSEILLE.lon,
};

export {
  TILES_SERVER,
  ATTRIBUTION,
  DEFAULT_VIEW,
};
