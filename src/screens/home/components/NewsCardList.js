import React, { Component } from 'react';
import { View, ScrollView, Text, RefreshControl, Share } from 'react-native';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import moment from 'moment';
import Fonts from '../../../../constants/Fonts';
import styles from './styles/NewsCardList';
import * as wechat from 'react-native-wechat';

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
  }

  componentDidMount() {
    this.setState({ news: this.props.news });
    wechat.registerApp('wx8d560da3ba038e7e');
  }

  _onRefresh() {
    console.log('refresh');
    this.setState({ refreshing: true });
    this.props.scroll().then(() => {
      this.setState({ refreshing: false, news: this.props.news });
    });
  }

  shareNews(){
    Share.share({
      message: 'Share test',
      url: 'http:/synebussiness.cn/',
      title: 'React Native'
    }, {
      dialogTitle: 'Share',
      excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
      tintColor: 'green',
    }).then(this.showResult)
      .catch((error) => this.setState({result: 'error:'+error.message}));
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
              leftIcon={item.picUrl === '' ? <View style={styles.emptyView} /> : <Avatar medium source={{ uri: item.picUrl }} />}
              avatarContainerStyle={{ paddingLeft: 0, left: 0 }}
              title={item.name}
              titleStyle={{ paddingLeft: 10 }}
              hideChevron
              subtitle={
                <View style={styles.footer}>
                  <Text style={styles.footerText}>{ item.date }</Text>
                  <Icon size={12} name='tags' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
                  <Text style={styles.footerText}>{item.category}</Text>
                  <Icon size={12} name='comments' type='font-awesome' color='#384259' iconStyle={styles.icon} />
                  <Icon size={12} name='bookmark' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={() => console.log('hello')} />
                  <Icon size={12} name='share' type='font-awesome' color='#384259' iconStyle={styles.icon} onPress={this.shareNews} />
                </View>
              }
              subtitleContainerStyle={{ paddingLeft: 10, paddingTop: 8, paddingBottom: 5 }}
            />
          ))
        }
      </ScrollView>
    );
  }
}

export default NewsCardList;

