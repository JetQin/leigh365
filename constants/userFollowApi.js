import axios from 'axios';

const apiUrl = 'synebusiness.cn/userFollowApi.php';

class UserFollowApi {
  async followUser(request) {
    const params = new FormData();
    params.append('type', 'follow_user');
    params.append('userId', request.userId);
    params.append('follower_id', request.follower_id);
    const response = await axios.post(apiUrl, params)
    .catch(function (error) {
      console.log(error);
    });
    console.log(response);
    return response.data;
  }
  
  async unfollowUser(request) {
    const params = new FormData();
    params.append('type', 'unfollow_user');
    params.append('userId', request.userId);
    params.append('follower_id', request.follower_id);
    const response = await axios.post(apiUrl, params)
    .catch(function (error) {
      console.log(error);
    });
    console.log(response);
    return response.data;
  }

  async getFans(request) {
    const params = new FormData();
    params.append('type', 'get_user_fans');
    params.append('userId', request.userId);
    console.log(apiUrl);
    const response = await axios.post(apiUrl, params)
    .catch(function (error) {
      console.log(error);
    });
    console.log(response);
    return response.data;
  }
 
  async getFollower(request) {
    const params = new FormData();
    params.append('type', 'get_user_follower');
    params.append('userId', request.userId);
    const response = await axios.post(apiUrl, params)
    .catch(function (error) {
      console.log(error);
    });
    console.log(response);
    return response.data;
  }

  async changeAvatar(request) {
    const params = new FormData();
    params.append('type', 'change_avatar');
    params.append('userId', request.userId);
    params.append('user_avatar', request.user_avatar);
    const response = await axios.post(apiUrl, params)
    .catch(function (error) {
      console.log(error);
    });
    if(!response.data){
      return response.data;
    }
  }
}

export {
    UserFollowApi,
};
