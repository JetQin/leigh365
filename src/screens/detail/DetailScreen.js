import React, { Component } from 'react';
import { View, Text, Alert, AsyncStorage, ScrollView, Dimensions, Image, Platform, WebView} from 'react-native';
import { Icon } from 'react-native-elements'; 
import { List, ListItem, Card, H3, CardItem, Thumbnail, Button, Left, Body, Right} from 'native-base';
import GoTopButton from './components/GoTopButton'
import ShareAlertDialog from './components/ShareAlertDialog'
import Modal from 'react-native-modal';

import Colors from '../../../constants/Colors'
import styles from './styles/DetailScreen';
import colors from 'react-native-elements/src/config/colors';

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
      isThumbs:false,
      isLiked:false,
      isComment:false,
      isShare:false,
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
      commentList:[ 
        {
          userName:'任性偶偶',
          userAvatar:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          userComment:'请问文章章的作者是谁请问文章的作者是谁章的作者是谁请问文章的作者是谁章的作者是谁请问文章的作者是谁章的作者是谁请问文章的作者是谁章的作者是谁请问文章的作者是谁的作者是谁请问文章的作者是谁请问文章的作者是谁请问文章的作者是谁请问文章的作者是谁请问文章的作者是谁请问文章的作者是谁请问文章的作者是谁',
          time:'2017-12-25 12:30',
          reply:[
            {
              hostName:'莫斯科没有眼泪11',
              guestsName:'会游泳的鱼11',
              replyContent:'这篇文章写得不错11',
            },
            {
              hostName:'莫斯科没有眼泪22',
              guestsName:'会游泳的鱼22',
              replyContent:'这篇文章写得不错22',
            },
            {
              hostName:'莫斯科没有眼泪33',
              guestsName:'会游泳的鱼33',
              replyContent:'这篇文章写得不错33',
            }
          ]
        },
        {
          userName:'随遇而安',
          userAvatar:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          userComment:'这篇文章写得不错',
          time:'2017-10-20 10:30',
          reply:[
            {
              hostName:'莫斯科没有眼泪11',
              guestsName:'会游泳的鱼11',
              replyContent:'这篇文章写得不错11',
            },
            {
              hostName:'莫斯科没有眼泪22',
              guestsName:'会游泳的鱼22',
              replyContent:'这篇文章写得不错22',
            },
            {
              hostName:'莫斯科没有眼泪33',
              guestsName:'会游泳的鱼33',
              replyContent:'这篇文章写得不错33',
            }
          ]
        }
      ],
    }
  }

  componentDidMount() {
  }

  doShare() {
    this.setState({isShare: !this.state.isShare});
  }

  doComment() {
    this.setState({isComment: !this.state.isComment});
  }

  doThumbs() {
    // const login = await AsyncStorage.getItem('@user_id');
    // console.log(login);
    // if (undefined === login || login === null) {
    //   Alert.alert('警告', '用户未登录，请先登录',
    //     [
    //       { text: '确定' },
    //     ],
    //     { cancelable: false }
    //   );
    // } else {
    //   const params = { userId: login, postId };
    //   this.props.wordpressApi.addPostToList(params);
    //   Alert.alert('提示', '收藏成功',
    //     [
    //       { text: '确定' },
    //     ],
    //     { cancelable: false }
    //   );
    // }
    this.setState({isThumbs: !this.state.isThumbs});
  }

  doLiked() {
    // const login = await AsyncStorage.getItem('@user_id');
    // console.log(login);
    // if (undefined === login || login === null) {
    //   Alert.alert('警告', '用户未登录，请先登录',
    //     [
    //       { text: '确定' },
    //     ],
    //     { cancelable: false }
    //   );
    // } else {
    //   const params = { userId: login, postId };
    //   this.props.wordpressApi.addPostToList(params);
    //   Alert.alert('提示', '收藏成功',
    //     [
    //       { text: '确定' },
    //     ],
    //     { cancelable: false }
    //   );
    // }
    this.setState({isLiked: !this.state.isLiked});
  }
  goTop() {
    this.toTop.scrollTo({x:0,y: 0,animated:true});
  }
  render() {
    const url = this.props.navigation.state.params.uri;
    return (
      <View style={{flex: 1, backgroundColor: Colors.$whiteColor,paddingTop:10}}>
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
                    {/* <Icon name="add" type='Ionicons' color={Colors.$whiteColor} size={12} style={{paddingLeft: 2}}/> */}
                    <Text style={styles.readTitle}>+ 关注 </Text>
                  </Button>
                </View>
                : null
            }
            <Image source={{uri: this.state.news.image}} style={styles.image}></Image>
            <View>
              {/* <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 12}}>{this.state.news.content}</Text> */}
              {
                Platform.OS === 'ios' ? <WebView source={{ uri: url }} javaScriptEnabled={true} userAgent='ios' style={{width:'100%',height:'50%'}}/> 
                : <WebView source={{ uri: url }} javaScriptEnabled={true} userAgent='android' style={{width:'100%',height:'50%'}}/>
              }
            </View>
          </View>

          <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center',marginTop:10}}>
            <Button transparent onPress={() => console.log('打赏')} style={styles.rewardBtn}>
              <Text style={styles.rewardText}>赏</Text>
            </Button>
          </View>
          <View style={{flexDirection: 'row',justifyContent:'space-between', paddingLeft: 10, paddingRight: 20}}>
            <Button transparent style={{height:25}} onPress={() => console.log('打赏')}>
              <Text style={{color:Colors.$grayColor,fontSize: 10}}>转发</Text>
              <Text style={{color:Colors.$grayColor,fontSize: 10}}>4</Text>
            </Button>
            <Button transparent style={{height:25}} onPress={() => console.log('打赏')}>
              <Text style={{color:Colors.$black,fontSize: 10,borderBottomWidth:2,borderBottomColor:Colors.$orangeTextColor}}>评论</Text>
              <Text style={{color:Colors.$black,fontSize: 10,borderBottomWidth:2,borderBottomColor:Colors.$orangeTextColor}}>276</Text>
            </Button>
            <Button transparent style={{height:25}} onPress={() => console.log('打赏')}>
              <Text style={{color:Colors.$grayColor,fontSize: 10}}>赞</Text>
              <Text style={{color:Colors.$grayColor,fontSize: 10}}>76</Text>
            </Button>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'flex-end',paddingRight: 20,backgroundColor:Colors.$CommentBgColor,paddingTop:5}}>
            <Button transparent onPress={() => console.log('打赏')} style={{height:25}}>
              <Icon name="sort-ascending" type='material-community' color={Colors.$chartColor} size={16}/>
              <Text style={{fontSize: 10,color:Colors.$tabText}}>按热度</Text>
            </Button>
          </View>

          {
            this.state.commentList.map((item, i) => (
              <View key={i}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: '15%',justifyContent: 'center',flexDirection:'row',marginTop:10}}>
                    <Thumbnail small source={{uri: item.userAvatar}} />
                  </View>
                  <View style={{width: '85%',flexDirection: 'column'}}>
                    <Button transparent onPress={() => console.log('打赏')} style={{ height: 20,marginTop: 5}}>
                      <Text style={{fontSize: 10,color: Colors.$orangeTextColor,}}>{item.userName}</Text>
                    </Button>
                    <View>
                      <Text style={{ fontSize: 12,lineHeight:20}}>{item.userComment}</Text>
                    </View>
                  </View>
                </View>
                {
                  item.reply.map((key, j) => (
                    <View key={j} style={{flexDirection: 'row'}}>
                      <View style={{width: '15%'}}></View>
                      <View style={{width: '85%',flexDirection: 'row', alignItems:'center',backgroundColor:Colors.$CommentBgColor}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                          <Button transparent onPress={() => console.log('打赏')} style={{height: 20}}>
                            <Text style={{fontSize: 10,color: Colors.$chartColor}}>{key.hostName}</Text>
                          </Button>
                        </View>
                        <Text style={{fontSize: 10}}>回复</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                          <Button transparent onPress={() => console.log('打赏')} style={{height: 20}}>
                            <Text style={{fontSize: 10,color: Colors.$chartColor}}>{key.guestsName}</Text>
                          </Button>
                        </View>
                        <Text style={{fontSize: 10}}>:</Text>
                        <View>
                          <Text style={{fontSize: 10}}>{key.replyContent}</Text>
                        </View>
                      </View>
                    </View>
                  ))
                }
                <View style={{flexDirection: 'row',marginRight:20}}>
                  <View style={{width: '15%'}}></View>
                  <View  style={{width: '85%',flexDirection: 'row',justifyContent: 'space-between',alignItems:'center'}}>
                    <View style={{}}>
                      <Text style={{fontSize: 10}}>{item.time}</Text>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                      <Button transparent style={{marginLeft:10,marginRight:10,height:25}} onPress={() => console.log('打赏')}>
                        <Icon name="share-square-o" type='font-awesome' color={Colors.$grayColor} size={12}/>
                      </Button>
                      <Button transparent style={{marginLeft:10,marginRight:10,height:25}} onPress={() => console.log('打赏')}>
                        <Icon name="comment-processing-outline" type='material-community' color={Colors.$grayColor} size={12}/>
                      </Button>
                      <Button transparent style={{marginLeft:10,marginRight:10,height:25}} onPress={() => console.log('打赏')}>
                        <Icon name="thumbs-o-up" type='font-awesome' color={Colors.$grayColor} size={12}/>
                      </Button>
                    </View>
                  </View>
                </View>

              </View>
            ))
          }         
        </ScrollView>
        <View style={styles.footer}>
          <Button transparent style={styles.footBtn} onPress={this.doShare}>
            <Icon name="share-square-o" type='font-awesome' color={Colors.$tabText} size={16}/>
            <Text style={styles.footerItemIconText}>分享</Text>
          </Button>
          <Button transparent style={styles.footBtn} onPress={this.doComment}>
            <Icon name="commenting-o" type='font-awesome' color={Colors.$tabText} size={16}/>
            <Text style={styles.footerItemIconText}>评论</Text>
          </Button>
          <Button transparent style={styles.footBtn} onPress={this.doThumbs}>
            <Icon name={this.state.isThumbs?"thumbs-up":"thumbs-o-up"} type='font-awesome' color={Colors.$tabText} size={16}/>
            <Text style={styles.footerItemIconText}>点赞</Text>
          </Button>
          <Button transparent style={styles.footBtn} onPress={this.doLiked}>
            <Icon name={this.state.isLiked?"bookmark":"bookmark-o"} type='font-awesome' color={Colors.$tabText} size={16}/>
            <Text style={styles.footerItemIconText}>收藏</Text>
          </Button>
        </View>
        <GoTopButton bottomValue = {50} goTop={this.goTop}/>
        <View style={styles.closeBtnContainer}>
          <Button transparent onPress={() => this.props.navigation.goBack()} style={styles.closeBtn}>
            <Icon name="close" type='Ionicons' color={Colors.$whiteColor} size={16}/>
          </Button>
        </View>
        <Modal
          isVisible={this.state.isShare}
          style={styles.bottomModal}
          onBackdropPress={() => this.setState({ isShare: false })}
        >
          <View style={styles.modalContent}>
            <Text>Hello!</Text>
          </View>
        </Modal>

        <Modal
          isVisible={this.state.isComment}
          style={styles.commentModal}
          onBackdropPress={() => this.setState({ isComment: false })}
        >
          <View style={styles.modalContent}>
            <Text>Hello!</Text>
          </View>
        </Modal>

      </View>
    )
  }
}

export default DetailScreen;
