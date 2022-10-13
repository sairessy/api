class Position {
  constructor(lat, lon, ip) {
    this.lat = lat;
    this.lon = lon;
    this.ip = ip;
    this.time = Date.now();
  }
}

export default Position;
