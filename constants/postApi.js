import axios from 'axios';

const postApi = 'http://synebusiness.cn/postApi.php';

class PostApi {
  
  async post(post) {

    // type:post_status
    // userId:1
    // timestamp:2018-01-01
    // content:Happy new year
    // image:'',
    // city:'',
    let postApi = postApi;
    const params = new FormData();
    params.append('type', post.type);
    params.append('userId', post.userId);
    params.append('content', post.content);
    // params.append('image', post.image);
    params.append('city', post.city);
    const response = await axios.post(postApi,params);
    return response.data;
  }

  async getPost(post) {

    let postApi = postApi;
    const params = new FormData();
    params.append('type', post.type);
    params.append('userId', post.userId);
    const response = await axios.post(postApi,params);
    return response.data;
  }
}

export {
  PostApi,
};
