// http://api.map.baidu.com/geocoder/v2/?ak=7hOstgqRCXdyrwwSKQiKsKUGa4GBF3Br&location=51.50998,-0.1337&output=json&pois=1

import axios from 'axios';

const apiUrl = 'http://api.map.baidu.com/geocoder/v2/?ak=7hOstgqRCXdyrwwSKQiKsKUGa4GBF3Br&location=';
// let locationApiUrl = 'http://api.map.baidu.com/geocoder/v2/?ak=7hOstgqRCXdyrwwSKQiKsKUGa4GBF3Br&location=51.50998,-0.1337&output=json&pois=1';

class LocationApi {
  async getPosition(position) {
    let locationApiUrl = apiUrl;
    locationApiUrl.append(position.latitude);
    locationApiUrl.append(",");
    locationApiUrl.append(position.longitude);
    locationApiUrl.append("&output=json&pois=1");
    const response = await axios.get(wordpressApiUrl);
    console.log(response);
    return response.data;
  }
}

export {
  LocationApi,
};
