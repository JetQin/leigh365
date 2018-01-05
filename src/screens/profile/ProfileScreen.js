import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image, Alert, Picker, Dimensions, TouchableHighlight } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import { Button, Tabs, Tab, ScrollableTab } from 'native-base';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import Colors from '../../../constants/Colors';
import styles from './styles/ProfileScreen';
import { NewsInfo, StockInfo, PricingCard, BlogList } from './components/';
import { WordpressApi } from '../../../constants/api';
import { PostApi } from '../../../constants/index';

const wordpressApi = new WordpressApi();
const postApi = new PostApi();

class ProfileScreen extends Component {
  static defaultProps = {
    wordpressApi, postApi,
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const tabBarLabel = '个人信息';
    const headerStyle = {
      backgroundColor: Colors.$whiteColor,
      borderBottomWidth: 3,
      borderBottomColor: Colors.$navigationHeaderTextColor,
      borderStyle: 'solid',
    };
    const headerLeft = (
        <Button transparent onPress={() => navigation.navigate('Setting')}>
          <Text style={styles.headerTitle}>设置</Text>
        </Button>
    );

    const headerRight = (
        <Button transparent onPress={() => navigation.navigate('Post')}>
          <Icon type='ionicon' name='md-add' size={30} color={Colors.$navigationHeaderTextColor} iconStyle={{ paddingRight: 10}}/>
        </Button>
    );

    const tabBarIcon = ({ tintColor }) => (
      <Icon type='material-community' name="account-circle" size={25} color={tintColor} />
    );
    return { tabBarLabel, headerStyle, headerLeft, headerRight, tabBarIcon };
  };

  constructor(props) {
    super(props);
    this.state = {
      myArticle: {
        page: 1,
        data: [],
      },
      myStock: {
        page: 1,
        data: [],
      },
      blogs:{
        page: 1,
        data: [],
      },
      isLogin: false,
      showAvatarPane: false,
      user: {
        name: '',
        avatar: 'http://synebusiness.cn/avatar/001.jpeg',
        user_id: '',
        myArticleNum: 0,
        myStockNum: 0,
      },
      avatars:[
        'http://synebusiness.cn/avatar/001.jpeg',
        'http://synebusiness.cn/avatar/002.jpeg',
        'http://synebusiness.cn/avatar/003.jpeg',
        'http://synebusiness.cn/avatar/004.jpeg',
        'http://synebusiness.cn/avatar/005.jpeg',
        'http://synebusiness.cn/avatar/006.jpeg',
        'http://synebusiness.cn/avatar/007.jpeg',
        'http://synebusiness.cn/avatar/008.jpeg',
        'http://synebusiness.cn/avatar/009.jpeg',
        'http://synebusiness.cn/avatar/0010.jpeg',
        'http://synebusiness.cn/avatar/0011.jpeg',
        'http://synebusiness.cn/avatar/0012.jpeg',
        'http://synebusiness.cn/avatar/0013.jpeg',
      ]
    };
    this.login = this.login.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
    this.logout = this.logout.bind(this);
    this.charge = this.charge.bind(this);
    this.fetchUserArticle = this.fetchUserArticle.bind(this);
    this.fetchUserStock = this.fetchUserStock.bind(this);
    this.fetchUserBlogs = this.fetchUserBlogs.bind(this);
    this.changeTab = this.changeTab.bind(this);
    // this.selectAvatar = this.selectAvatar.bind(this);
    this.deleteStockRecord = this.deleteStockRecord.bind(this);
    this.deleteArticleRecord = this.deleteArticleRecord.bind(this);
  }

  componentDidMount() {
    this.loginSuccesful();
    this.fetchUserCollectNum();
  }

  login() {
    // if (!this.state.isLogin) {
      this.props.navigation.navigate('Signin');
    // }
  }

  async loginSuccesful() {
    try {
      const loginInfo = await AsyncStorage.getItem('@login');
      if (loginInfo) {
        const params = JSON.parse(loginInfo);
        this.setState({
          isLogin: params.status,
          user: {
            name: params.data.user_login,
            user_id: params.data.user_id,
            myArticleNum: params.data.post_count,
            myStockNum: params.data.stock_count,
          },
        });
        this.props.navigation.setParams({ isLogin: true });
        this.props.navigation.setParams({ logout: this.logout });
      } else {
        this.props.navigation.setParams({ isLogin: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  logout() {
    try {
      AsyncStorage.removeItem('@login');
      AsyncStorage.removeItem('@user_id');
    } catch (error) {
      console.log(error);
    }
    this.setState({
      isLogin: false,
      user: {
        name: '',
        user_id: '',
        myArticleNum: 0,
        myStockNum: 0,
      },
    });
    this.props.navigation.setParams({ isLogin: false });
  }

  async fetchUserStock() {
    if (undefined !== this.state.user.user_id) {
      const params = { type: 'getUserStock', userId: this.state.user.user_id };
      const stockdata = await this.props.wordpressApi.getUserStockList(params);
      this.setState({ myStock: { page: this.state.myStock.page + 1, data: stockdata } });
    }
  }

  async fetchUserArticle() {
    if (undefined !== this.state.user.user_id) {
      const request = {
        type: 'getUserPost',
        userId: this.state.user.user_id,
      };
      const posts = await this.props.wordpressApi.getUserPostList(request);
      this.setState({ myArticle: { page: this.state.myArticle.page + 1, data: posts } });
    }
  }

  async fetchUserBlogs(){
    // if (undefined !== this.state.user.user_id) {
      const request = {
        type: 'get_post_status',
        userId: 1,
      };
      const blogs = await this.props.postApi.getPost(request);
      this.setState({ blogs: { page: this.state.blogs.page + 1, data: blogs } });
    // }
  }

  async deleteArticleRecord(id) {
    if (id) {
      const request = {
        code: id,
        userId: this.state.user.user_id,
      };
      const posts = await this.props.wordpressApi.removePostToList(request);
      console.log(posts);
      Alert.alert('提示', '删除成功',
        [
          { text: '确定' },
        ],
        { cancelable: false }
      );
      this.setState({ myArticle: { page: this.state.myArticle.page, data: this.state.myArticle.data.filter((item) => item.id !== id) } });
    }
  }

  async deleteStockRecord(id) {
    if (id) {
      const request = {
        code: id,
        userId: this.state.user.user_id,
      };
      const posts = await this.props.wordpressApi.removeStockToList(request);
      console.log(posts);
      Alert.alert('提示', '删除成功',
        [
          { text: '确定' },
        ],
        { cancelable: false }
      );
      this.setState({ myStock: { page: this.state.myStock.page, data: this.state.myStock.data.filter((item) => item.code !== id) } });
    }
  }

  changeAvatar() {
    console.log('change avatar');
    this.setState({showAvatarPane: !this.state.showAvatarPane });
  }

  charge(type) {
    console.log(type);
    console.log('charge');
  }

  changeTab(ref) {
    if (ref.props.heading === '文章收藏夹') {
      this.fetchUserArticle();
    }
    if (ref.props.heading === '自选行情') {
      this.fetchUserStock();
    }
    if (ref.props.heading === '我的新历') {
      this.fetchUserCollectNum();
    }
  }

  async fetchUserCollectNum() {
    if (this.state.user.user_id) {
      const formData = {
        type: 'selectCount',
        userId: this.state.user.user_id,
      };
      const posts = await this.props.wordpressApi.getUserCollectNum(formData);
      console.log(posts);
      console.log(posts.data.post_count);
      this.setState({
        user: {
          name: posts.data.user_login,
          user_id: posts.data.user_id,
          myArticleNum: posts.data.post_count,
          myStockNum: posts.data.stock_count,
        },
      });
    }
  }


  selectAvatar(index){
    let avatarIndex = parseInt(index);
   
    let uri = '';
    if(avatarIndex < this.state.avatars.length)
    {
      uri = this.state.avatars[avatarIndex];
    }
    console.log(uri);
    this.setState({ showAvatarPane: false });
    this.setState({ user: {avatar: uri }});
  }

  _renderAvatarContent(){
    let avatars = [];
    const length = this.state.avatars.length;
    for (let index= 0; index < length; index=index+4)
    {
       if( index % 4 == 0){
         avatars.push(
            <View style={styles.avatarViewRow} key={'v'.concat(index)}> 
              <TouchableHighlight onPress={()=> this.selectAvatar(index)}>
                <Image key={index} source={{ uri: this.state.avatars[index] }} style={{width: 80, height: 80}}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={()=> this.selectAvatar(index+1)}>
                { index+1 < length ? <Image key={index+1} source={{ uri: this.state.avatars[index+1] }} style={{width: 80, height: 80}} /> : <View/>}
              </TouchableHighlight>
              <TouchableHighlight onPress={()=> this.selectAvatar(index+2)}>
                { index+2 < length ? <Image key={index+2} source={{ uri: this.state.avatars[index+2] }} style={{width: 80, height: 80}} /> : <View/>}
              </TouchableHighlight>
              <TouchableHighlight onPress={()=> this.selectAvatar(index+3)}>
                { index+3 < length ? <Image key={index+3} source={{ uri: this.state.avatars[index+3] }} style={{width: 80, height: 80}} /> : <View/>}
              </TouchableHighlight>
            </View>
          )
        }
    }
    console.log(avatars);
    return (<View style={{ height: 400, backgroundColor: Colors.$whiteColor }}>{avatars}</View>);
  }
  render() {
    const {height, width} = Dimensions.get('window');
    return (
      <View style={styles.root}>
        <Tabs initialPage={0} locked onChangeTab={({ ref }) => this.changeTab(ref)} >
          <Tab heading='我的新历'>
            <View style={styles.layout}>
              <View style={styles.top}>
                <View style={styles.avatarContainer}>
                  <Avatar
                    rounded
                    height={80}
                    width={80}
                    containerStyle={{ borderStyle:'solid', borderWidth: 5, borderColor: Colors.$black }}
                    source={{ uri: this.state.user.avatar }}
                    onPress={this.login}
                  />
                </View>
                <View style={styles.settingContainer}>
                  <View style={styles.headerTitleContainer}>
                    <Text style={styles.title}>{this.state.user.name}</Text>
                  </View>
                  <View style={styles.settingBtn}>
                    <Button transparent info onPress={this.changeAvatar} >
                      <Icon type='font-awesome' name="gear" size={18} color={'#6A97BE'} />
                    </Button>
                  </View>
                </View>
                <View style={styles.myCollectContainer}>
                  <Badge style={styles.collectContainer}>
                    <View style={styles.collectText}>
                      <Text style={styles.labelText}>{this.state.user.myArticleNum}</Text>
                      <Text style={styles.label}>已收藏文章</Text>
                    </View>
                  </Badge>
                  <Badge style={styles.collectContainer}>
                    <View style={styles.collectText}>
                      <Text style={styles.labelText} >{this.state.user.myStockNum}</Text>
                      <Text style={styles.label}>已自选行情</Text>
                    </View>
                  </Badge>
                </View>
              </View>
              <View style={styles.bottom}>
                <PricingCard
                  color='#4f9deb'
                  title='每天'
                  price='¥10'
                  info={[]}
                  titleFont='Montserrat-Bold'
                  button={{ title: '充值' }}
                  onButtonPress={() => this.charge('day')}
                />
                <PricingCard
                  color='#4f9deb'
                  title='包月'
                  price='¥150'
                  info={[]}
                  titleFont='Montserrat-Bold'
                  button={{ title: '充值' }}
                  onButtonPress={() => this.charge('1month')}
                />
                <PricingCard
                  color='#4f9deb'
                  title='包年'
                  price='¥1500'
                  info={[]}
                  titleFont='Montserrat-Bold'
                  button={{ title: '充值' }}
                  onButtonPress={() => this.charge('6month')}
                />
              </View>
              <Modal isVisible={this.state.showAvatarPane} style={styles.avatarPane}>
                      {this._renderAvatarContent()}
              </Modal>
            </View>
          </Tab>
          <Tab heading='博客' >
            <BlogList 
               blogs={this.state.blogs.data}
               username={this.state.user.name}
               avatar={this.state.user.avatar}
               scroll={this.fetchUserBlogs}
            />
          </Tab>
          <Tab heading='收藏夹' >
            <NewsInfo
              ref={(c) => { this.articleCard = c; }}
              news={this.state.myArticle.data}
              scroll={this.fetchUserArticle}
              delete={this.deleteArticleRecord}
              navigation={this.props.navigation}
            />
          </Tab>
          <Tab heading='自选行情' >
            <StockInfo
              ref={(c) => { this.stockCard = c; }}
              stocks={this.state.myStock.data}
              scroll={this.fetchUserStock}
              delete={this.deleteStockRecord}
              navigation={this.props.navigation}
            />
          </Tab>
        </Tabs>

      </View>
    );
  }
}

export default ProfileScreen;
