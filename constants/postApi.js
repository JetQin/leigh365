import axios from 'axios';

const apiUrl = 'http://api.map.baidu.com/geocoder/v2/?ak=7hOstgqRCXdyrwwSKQiKsKUGa4GBF3Br&location=';

class PostApi {
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
  PostApi,
};
