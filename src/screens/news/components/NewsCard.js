import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, AsyncStorage, Alert } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import { Button } from 'native-base';
import moment from 'moment';
import styles from './styles/NewsCard';
import { WordpressApi } from '../../../../constants/api';

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
              key={i}
              onPress={() => (this.props.navigation.navigate('ViewHtml', { uri: item.url }))}
              title={
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingLeft: 10}}>
                    <View style={{flexDirection: 'row', flex: 0.5, alignItems: 'center'}}>
                      <Avatar medium small rounded source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
                      <Text style={{paddingLeft:20}}>张三</Text>
                    </View>
                    <View  style={{flexDirection: 'row', alignItems: 'center',paddingRight: 30}}>
                      <Button bordered onPress={() => this.addInterest(item.id)} style={{ borderColor: '#EB7C23',  height: '60%'}}>
                        <Text style={{ color: '#EB7C23' }}>+ 关注</Text>
                      </Button>
                      <Button transparent onPress={() => this.deleteInterest(item.id)} style={[styles.closeBtn,{marginLeft:10}]}>
                        <Icon type='font-awesome'  name="close" size={10} color={'#BAB7B5'} />
                      </Button>
                    </View>
                  </View>
              }
              titleStyle={{ paddingLeft: 10 }}
              hideChevron
              subtitle={
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View style={{flex: 0.18}}>
                    {item.picUrl === '' ? <View style={styles.emptyView} /> : <Avatar medium source={{ uri: item.picUrl }} />}
                  </View>
                  <View style={{flexDirection: 'column', flex: 0.82}}>
                    <View>
                      <Text numberOfLines={1} style={styles.footerText}>{item.name}</Text>
                    </View>
                    <View style={[styles.footer,{ paddingTop: 5}]}>
                      <Text style={styles.footerText}>{moment(item.date, 'YYYY-MM-DD').startOf('day').fromNow()}</Text>
                      <Icon size={12} name='tags' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
                      <Text numberOfLines={1} style={styles.footerText}>{item.category}</Text>
                      <Icon size={12} name='comments' type='font-awesome' color='#384259' iconStyle={styles.icon} />
                      <Icon size={12} name='bookmark' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => this.addPostList(item.id)} />
                      <Icon size={12} name='share' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
                    </View>
                  </View>
                </View>
              }
              subtitleContainerStyle={{ paddingLeft:4, paddingTop: 0, paddingBottom: 0 }}
            />
          ))
        }
      </ScrollView>
    );
  }
}

export default NewsCard;
