import React, { Component } from 'react';
import { View, Text, Alert, AsyncStorage, ScrollView, Dimensions, Image} from 'react-native';
import { Icon } from 'react-native-elements'; 
import { List, ListItem, Card, H3, CardItem, Thumbnail, Button, Left, Body, Right} from 'native-base';
import GoTopButton from './components/GoTopButton'

import Colors from '../../../constants/Colors'
import styles from './styles/DetailScreen';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

class DetailScreen extends Component {
  static defaultProps = {

  };

  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.doShare = this.doShare.bind(this);
    this.doComment = this.doComment.bind(this);
    this.doThumbs = this.doThumbs.bind(this);
    this.doLiked = this.doLiked.bind(this);
    this.goTop = this.goTop.bind(this);
    this.state = {
      newsUser:true,
      thumbs:false,
      liked:false,
      news: {
        title: '苹果将帮助印度政府打造一款防骚扰应用',
        author: 'Pony',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        time: '1小时前',
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        content:'一段时间以来，苹果一直在和 印度 政府抗衡有关批准一款屏蔽骚扰电话和垃圾短信的 iOS 应用事宜，一份来自' 
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
                +'路透社的报道 指出，苹果现在稍微转变了观点，同意帮助印度政府打造一款这样的应用，但“功能有限”。'
      },
    }
  }

  componentDidMount() {
  }

  doShare() {
    Alert.alert('doShare');
  }

  doComment() {
    Alert.alert('doComment');
  }

  doThumbs() {
    this.setState({thumbs: !this.state.thumbs});
  }

  doLiked() {
    this.setState({liked: !this.state.liked});
  }
  goTop() {
    this.toTop.scrollTo({x:0,y: 0,animated:true});
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{height: screenHeight - 200}} ref={(c) => { this.toTop = c; }}>
          <View style={{padding:15}}>
            <H3>{this.state.news.title}</H3>
            {
              this.state.newsUser?
                <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingTop:10}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Thumbnail small source={{uri: this.state.news.avatar }} />
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.userTitle}>{this.state.news.author}</Text>
                        <Text style={styles.timeTitle} note>{this.state.news.time}</Text>
                    </View>
                  </View>
                  <Button bordered small style={styles.readBtn }>
                    <Icon name="add" type='Ionicons' color={Colors.$whiteColor} size={12} style={{paddingLeft: 2}}/>
                    <Text style={styles.readTitle}> 关注 </Text>
                  </Button>
                </View>
                : null
            }
            <Image source={{uri: this.state.news.image}} style={styles.image}></Image>
            <View>
              <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}>{this.state.news.content}</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button transparent style={styles.footBtn} onPress={this.doShare}>
            <Icon name="share-square-o" type='font-awesome' color={Colors.$navigationHeaderTextColor} size={16}/>
            <Text style={styles.footerItemIconText}>分享</Text>
          </Button>
          <Button transparent style={styles.footBtn} onPress={this.doComment}>
            <Icon name="commenting-o" type='font-awesome' color={Colors.$navigationHeaderTextColor} size={16}/>
            <Text style={styles.footerItemIconText}>评论</Text>
          </Button>
          <Button transparent style={styles.footBtn} onPress={this.doThumbs}>
            <Icon name={this.state.thumbs?"thumbs-up":"thumbs-o-up"} type='font-awesome' color={Colors.$navigationHeaderTextColor} size={16}/>
            <Text style={styles.footerItemIconText}>点赞</Text>
          </Button>
          <Button transparent style={styles.footBtn} onPress={this.doLiked}>
            <Icon name={this.state.liked?"bookmark":"bookmark-o"} type='font-awesome' color={Colors.$navigationHeaderTextColor} size={16}/>
            <Text style={styles.footerItemIconText}>收藏</Text>
          </Button>
        </View>
        <GoTopButton bottomValue = {50} goTop={this.goTop}/>
        <View style={styles.closeBtnContainer}>
          <Button transparent onPress={() => this.props.navigation.goBack()} style={styles.closeBtn}>
            <Icon name="close" type='Ionicons' color={Colors.$whiteColor} size={16}/>
          </Button>
        </View>
      </View>
    )
  }
}

export default DetailScreen;
