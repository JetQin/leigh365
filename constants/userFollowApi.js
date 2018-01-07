import axios from 'axios';

const apiUrl = 'synebusiness.cn/userFollowApi.php';

class UserFollowApi {
  async followUser(params) {
    const params = new FormData();
    params.append('type', 'follow_user');
    params.append('userId', params.userId);
    params.append('follower_id', params.follower_id);
    const response = await axios.post(apiUrl, params);
    console.log(response);
    return response.data;
  }
  
  async unfollowUser(params) {
    const params = new FormData();
    params.append('type', 'unfollow_user');
    params.append('userId', params.userId);
    params.append('follower_id', params.follower_id);
    const response = await axios.post(apiUrl, params);
    console.log(response);
    return response.data;
  }

  async getFans(params) {
    const params = new FormData();
    params.append('type', 'get_user_fans');
    params.append('userId', params.userId);
    const response = await axios.post(apiUrl, params);
    console.log(response);
    return response.data;
  }
 
  async getFollower(params) {
    const params = new FormData();
    params.append('type', 'get_user_follower');
    params.append('userId', params.userId);
    const response = await axios.post(apiUrl, params);
    console.log(response);
    return response.data;
  }

  async changeAvatar(params) {
    const params = new FormData();
    params.append('type', 'change_avatar');
    params.append('userId', params.userId);
    params.append('user_avatar', params.user_avatar);
    const response = await axios.post(apiUrl, params);
    console.log(response);
    return response.data;
  }
}

export {
    UserFollowApi,
};
