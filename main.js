const listOfCities = [
  { city: "Nashville, TN", latitude: 36.17, longitude: -86.78 },
  { city: "New York, NY", latitude: 40.71, longitude: -74.0 },
  { city: "Atlanta, GA", latitude: 33.75, longitude: -84.39 },
  { city: "Denver, CO", latitude: 39.74, longitude: -104.98 },
  { city: "Seattle, WA", latitude: 47.61, longitude: -122.33 },
  { city: "Los Angeles, CA", latitude: 34.05, longitude: -118.24 },
  { city: "Memphis, TN", latitude: 35.15, longitude: -90.05 }
];

class Map {
  constructor(list) {
    this.list = list;
  }

  nothermost() {
    let nothermost = null;
    for (let i = 0, len = this.list.length; i < len; i++) {
      if (this.list[i].latitude >= nothermost || nothermost === null) {
        nothermost = this.list[i].latitude;
      }
    }
    return nothermost;
  }

  easternmost() {
    let easternmost = null;
    for (let i = 0, len = this.list.length; i < len; i++) {
      if (this.list[i].longitude >= easternmost || easternmost === null) {
        easternmost = this.list[i].longitude;
      }
    }
    return easternmost;
  }

  southermost() {
    let southermost = null;
    for (let i = 0, len = this.list.length; i < len; i++) {
      if (this.list[i].latitude <= southermost || southermost === null) {
        southermost = this.list[i].latitude;
      }
    }
    return southermost;
  }

  westernmost() {
    let westernmost = null;
    for (let i = 0, len = this.list.length; i < len; i++) {
      if (this.list[i].longitude <= westernmost || westernmost === null) {
        westernmost = this.list[i].longitude;
      }
    }
    return westernmost;
  }

  closestCity(latitude, longitude) {
    let minimalDistance = null;
    let currentDistance = null;
    let closestCity = null;

    for (let i = 0, len = this.list.length; i < len; i++) {
      currentDistance = Math.hypot(
        latitude - this.list[i].latitude,
        longitude - this.list[i].longitude
      );
      if (currentDistance < minimalDistance || minimalDistance === null) {
        minimalDistance = currentDistance;
        closestCity = this.list[i].city;
      }
    }
    return closestCity;
  }

  statesList() {
    let abbreviations = "";

    for (let i = 0, len = this.list.length; i < len; i++) {
      if (!abbreviations.includes(this.list[i].city.split(",")[1])) {
        abbreviations += this.list[i].city.split(",")[1];
      }
    }
    return abbreviations.trim();
  }
}
