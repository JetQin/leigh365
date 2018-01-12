import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, AsyncStorage, Alert,Image } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import { Button } from 'native-base';
import moment from 'moment';
import styles from './styles/NewsCard';
import { WordpressApi } from '../../../../constants/api';
import Colors from '../../../../constants/Colors'

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
              key={i}
              containerStyle={styles.listContainer}
              onPress={() => (this.props.navigation.navigate('Detail', { uri: item.url }))}
              leftIcon={item.picUrl === '' ? <View style={styles.emptyView} /> : <Image source={{ uri: item.picUrl }} style={styles.avatarContainer} />}
              avatarContainerStyle={{ paddingLeft: 0, left: 0 }}
              containerStyle={{paddingBottom:0}}
              title={item.name.replace(/[\r\n]/g,"").replace(/[ ]/g,"")}
              titleNumberOfLines={3}
              titleStyle={item.picUrl === '' ?styles.titleName:[{height:60},styles.titleName]}
              hideChevron
              subtitle={
                <View style={styles.footer}>
                  <Text style={styles.dateText}>{ item.date }</Text>
                  <View style={item.picUrl === '' ? styles.footerIconWithNoImage : styles.footerIcon}>
                    <Button transparent>
                      <Icon size={16} name='tags' type='font-awesome' color={Colors.$followCircle} iconStyle={styles.icon} onPress={() => console.log(item.category+'==')} />
                      <Text style={styles.footerText}>{item.category}</Text>
                    </Button>
                    <Button transparent>
                      <Icon size={18} name='comments' type='font-awesome' color={Colors.$followCircle} iconStyle={styles.icon} />
                      <Text style={styles.footerText}>{0}</Text>
                    </Button>
                    <Icon size={18} name='bookmark' type='font-awesome' color={Colors.$followCircle} iconStyle={styles.icon} onPress={() => console.log('hello')} />
                    <Icon size={18} name='share' type='font-awesome' color={Colors.$followCircle} iconStyle={styles.icon} onPress={this.shareNews} />
                  </View>
                </View>
              }
              subtitleContainerStyle={{ paddingLeft: 20, paddingTop: 5, paddingBottom: 0 }}
            />
          ))
        }
      </ScrollView>
    );
  }
}

export default NewsCard;
