import axios from 'axios';

const apiUrl = 'http://api.map.baidu.com/geocoder/v2/?ak=7hOstgqRCXdyrwwSKQiKsKUGa4GBF3Br&location=';
// let locationApiUrl = 'http://api.map.baidu.com/geocoder/v2/?ak=7hOstgqRCXdyrwwSKQiKsKUGa4GBF3Br&location=51.50998,-0.1337&output=json&pois=1';

class LocationApi {
  async getPosition(position) {
    let locationApiUrl = apiUrl;
    locationApiUrl = locationApiUrl.concat(position.latitude);
    locationApiUrl = locationApiUrl.concat(",");
    locationApiUrl = locationApiUrl.concat(position.longitude);
    locationApiUrl = locationApiUrl.concat("&output=json&pois=1");
    const response = await axios.get(locationApiUrl);
    return response.data;
  }
}

export {
  LocationApi,
};
