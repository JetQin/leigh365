import axios from 'axios';

const apiUrl = 'http://synebusiness.cn/postApi.php';

class PostApi {
  
  async post(post) {

    let postApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', post.type);
    params.append('userId', post.userId);
    params.append('content', post.content);
    params.append('image', post.image);
    params.append('city', post.city);
    const response = await axios.post(postApiUrl,params);
    return response.data;
  }

  async getPost(post) {

    let postApiUrl = apiUrl;
    const params = new FormData();
    params.append('type', post.type);
    params.append('userId', post.userId);
    const response = await axios.post(postApiUrl,params);
    return response.data;
  }
}

export {
  PostApi,
};
