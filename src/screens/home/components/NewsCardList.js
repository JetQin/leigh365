import React, { Component } from 'react';
import { View, ScrollView, Text, RefreshControl, Share, Alert, Image } from 'react-native';
import { Icon, List, ListItem, Avatar } from 'react-native-elements';
import moment from 'moment';
import Fonts from '../../../../constants/Fonts';
import styles from './styles/NewsCardList';
import Colors from '../../../../constants/Colors';

class NewsCardList extends Component {
  constructor(props) {
    super(props);
    this._onRefresh = this._onRefresh.bind(this);
    this.state = {
      refreshing: false,
      news: [],
    };
    this.shareNews = this.shareNews.bind(this);
    this.showResult = this.showResult.bind(this);
    this.goTop = this.goTop.bind(this);
  }

  async componentDidMount() {
    this.setState({ news: this.props.news });
    // await WeChat.registerApp('wx8d560da3ba038e7e');
  }

  _onRefresh() {
    console.log('refresh');
    this.setState({ refreshing: true });
    this.props.scroll().then(() => {
      this.setState({ refreshing: false, news: this.props.news });
    });
  }

  shareNews(){
    // Share.share({
    //   message: 'Share test',
    //   url: 'http:/synebussiness.cn/',
    //   title: 'React Native'
    // }, {
    //   dialogTitle: 'Share',
    //   excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
    //   tintColor: 'green',
    // }).then(this.showResult)
    //   .catch((error) => this.setState({result: 'error:'+error.message}));

    // WeChat.isWXAppInstalled()
    // .then((isInstalled) => {
    //   if (isInstalled) {
    //     WeChat.shareToSession({type: 'text', description: '测试微信好友分享文本'})
    //     .catch((error) => {
    //       Alert.alert(error.message);
    //     });
    //   } else {
    //     Alert.alert('没有安装微信软件，请您安装微信之后再试');
    //   }
    // });
  }

  showResult() {
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        this.setState({result: 'shared with an activityType: ' + result.activityType});
      } else {
        this.setState({result: 'shared'});
      }
    } else if (result.action === Share.dismissedAction) {
      this.setState({result: 'dismissed'});
    }
  }

  goTop() {
    this.toTop.scrollTo({x:0,y: 0,animated:true});
  }

  render() {
    if (!this.props.news) {
      return (<View />);
    }
    return (
      <ScrollView
        ref={(c) => { this.toTop = c; }}
        style={styles.root}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        {/* <List containerStyle={styles.listContainer}> */}
        {
          this.state.news.map((item, i) => (
            <ListItem
              key={i}
              containerStyle={styles.listContainer}
              onPress={() => (this.props.navigation.navigate('ViewHtml', { uri: item.url }))}
              leftIcon={item.picUrl === '' ? <View style={styles.emptyView} /> : <Image source={{ uri: item.picUrl }} style={styles.avatarContainer} />}
              avatarContainerStyle={{ paddingLeft: 0, left: 0 }}
              title={item.name}
              titleNumberOfLines={3}
              titleStyle={styles.titleName}
              hideChevron
              subtitle={
                <View style={styles.footer}>
                  <Text style={styles.dateText}>{ item.date }</Text>
                  <View style={item.picUrl === '' ? styles.footerIconWithNoImage : styles.footerIcon}>
                    <Icon size={16} name='tags' type='font-awesome' color={Colors.$followCircle} iconStyle={styles.icon} onPress={() => console.log('hello')} />
                    <Text style={styles.footerText}>{item.category}</Text>
                    <Icon size={18} name='comments' type='font-awesome' color={Colors.$followCircle} iconStyle={styles.icon} />
                    <Text style={styles.footerText}>{0}</Text>
                    <Icon size={18} name='bookmark' type='font-awesome' color={Colors.$followCircle} iconStyle={styles.icon} onPress={() => console.log('hello')} />
                    <Icon size={18} name='share' type='font-awesome' color={Colors.$followCircle} iconStyle={styles.icon} onPress={this.shareNews} />
                  </View>
                </View>
              }
              subtitleContainerStyle={{ paddingLeft: 20, paddingTop: 8, paddingBottom: 5 }}
            />
          ))
        }
        {/* </List> */}
      </ScrollView>
    );
  }
}

export default NewsCardList;

