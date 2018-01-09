import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, AsyncStorage, Alert,Dimensions,Image } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import { Button } from 'native-base';
import moment from 'moment';
import styles from './styles/NewsCard';
import { WordpressApi } from '../../../../constants/api';
import Colors from '../../../../constants/Colors'
const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const wordpressApi = new WordpressApi();

class NewsCard extends Component {
  static defaultProps ={
    wordpressApi,
  }
  constructor(props) {
    super(props);
    this._onRefresh = this._onRefresh.bind(this);
    this.state = {
      refreshing: false,
      news: [],
      isLiked:false,
    };
  }

  componentDidMount() {
    this.setState({ news: this.props.news });
  }

  _onRefresh() {
    console.log('refresh');
    this.setState({ refreshing: true });
    this.props.scroll().then(() => {
      this.setState({ refreshing: false, news: this.props.news });
    });
  }

  async addPostList(postId) {
    const login = await AsyncStorage.getItem('@user_id');
    console.log(login);
    if (undefined === login || login === null) {
      Alert.alert('警告', '用户未登录，请先登录',
        [
          { text: '确定' },
        ],
        { cancelable: false }
      );
    } else {
      const params = { userId: login, postId };
      this.props.wordpressApi.addPostToList(params);
      Alert.alert('提示', '收藏成功',
        [
          { text: '确定' },
        ],
        { cancelable: false }
      );
      this.setState({isLiked: !this.state.isLiked});
    }
  }

  addInterest(itemId) {
    Alert.alert('提示', '关注成功',
      [
        { text: '确定' },
      ],
      { cancelable: false }
    );
  }

  deleteInterest(itemId) {
    Alert.alert('提示', '取消关注',
      [
        { text: '确定' },
      ],
      { cancelable: false }
    );
  }

  render() {
    if (!this.props.news) {
      return (<View />);
    }
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {
          this.state.news.map((item, i) => (
            <ListItem
              key={i} //this.props.navigation.navigate('Item');
              //onPress={() => (this.props.navigation.navigate('ViewHtml', { uri: item.url }))}
              onPress={() => (this.props.navigation.navigate('Detail'))}
              wrapperStyle={{marginLeft:5}}
              containerStyle={{paddingRight:5,paddingTop:3,paddingBottom:3}}
              title={
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center',paddingLeft:10}}>
                      <Avatar medium small rounded source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                      <View style={{ flexDirection:'column',paddingLeft:10 }}>
                        <Text style={{fontSize:12,color:'#949494',fontWeight:'bold'}}>张三</Text>
                        <Text style={{fontSize:8,color:'#949494',fontWeight:'bold'}}>2017-12-30</Text>
                      </View>
                    </View>
                    <View  style={{flexDirection: 'row', alignItems: 'center',paddingRight: 30}}>
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Button bordered onPress={() => this.addInterest(item.id)} style={{justifyContent:'center',alignItems:'center', borderColor: '#2C89F6',backgroundColor:'#2C89F6',  height: 20,width:40}}>
                          <Text style={{ color: '#fff',fontSize:10}}>+ 关注</Text>
                        </Button>
                      </View>
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Button transparent onPress={() => this.deleteInterest(item.id)} style={{marginLeft:10}}>
                          <Icon type='material-community'  name="close-circle-outline" size={20} color={'#C9C9C9'} />
                        </Button>
                      </View>
                    </View>
                  </View>
              }
              titleStyle={{}}
              hideChevron
              subtitle={
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={styles.subtitlePic}>
                    {item.picUrl === '' ? <View style={styles.emptyView} /> : <Image source={{uri: item.picUrl}} style={{width:screenWidth*0.2,height:screenWidth*0.2}}></Image>}
                  </View>
                  <View style={styles.subtitleContent}>
                    <View>
                      <Text numberOfLines={2}  style={{fontWeight:'bold',textAlign:'left',fontSize: 12,fontFamily: 'Montserrat-Regular',lineHeight:24,color: '#336DA4',backgroundColor: 'transparent'}}>{item.name}</Text>
                    </View>
                    <View style={styles.footer}>
                      <Text style={{fontWeight:'bold',fontSize: 10,color: '#C9C9C9',backgroundColor: 'transparent'}}>{moment(item.date, 'YYYY-MM-DD').startOf('day').fromNow()}</Text>
                      <Icon size={12} name='tags' type='font-awesome' color='#6E99BF' iconStyle={styles.icon} onPress={() => console.log('hello')} />
                      <Text numberOfLines={1} style={{fontWeight:'bold',fontSize: 10,color: '#C9C9C9',backgroundColor: 'transparent',width:'30%'}}>{item.category}</Text>
                      <Icon size={12} name='comments' type='font-awesome' color='#6E99BF' iconStyle={styles.icon} onPress={() => console.log('hello')}/>
                      <Icon size={12}  name={this.state.isLiked?"bookmark":"bookmark-o"} type='font-awesome' color='#6E99BF' onPress={() => this.addPostList(item.id)}/>
                      <Icon size={12} name='share' type='font-awesome' color='#6E99BF' iconStyle={styles.icon} onPress={() => console.log('hello')} />
                    </View>
                  </View>
                </View>
              }
              subtitleContainerStyle={{}}
            />
          ))
        }
      </ScrollView>
    );
  }
}

export default NewsCard;
