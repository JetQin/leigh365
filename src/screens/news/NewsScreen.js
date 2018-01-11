import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { Tabs, ScrollableTab, Tab, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import { NewsCard, BlogCard} from './components'
import styles from './styles/NewsScreen';
import headerstyles from '../../commons/styles/HeaderStyle';
import { WordpressApi } from '../../../constants/api';

const wordpressApi = new WordpressApi();
const newCardList = [];

class NewsScreen extends Component {
  static defaultProps = {
    wordpressApi,
  }

  static navigationOptions = ({ navigation }) => {
    const tabBarLabel = '新闻';
    const headerStyle = headerstyles.headerStyle;
    const headerLeft = (
      <View style={headerstyles.headerLeft}>
        <Image source={require('../../../assets/imgs/logo.png')} style={headerstyles.logo} />
        <Text style={headerstyles.title}>新历财经</Text>
      </View>
    );
    const headerRight =(
      <View style={headerstyles.headerRight}>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon type='ionicon' name='md-search' size={26} color={Colors.$navigationHeaderTextColor} containerStyle={headerstyles.iconContainer} />
        </Button>
      </View>
    );
    const tabBarIcon= ({ focused }) => (
      focused ? <Image source={require('../../../assets/imgs/news.jpeg')} style={headerstyles.tabbarIcon} /> 
              : <Image source={require('../../../assets/imgs/inactive_news.jpeg')} style={headerstyles.tabbarIcon} /> 
    )
    return { tabBarLabel,headerStyle, headerLeft,headerRight, tabBarIcon}
  };

  constructor(props) {
    super(props);
    this.state = {
      type: 'fetchPosts',
      hotNews: { page: 1, data: [] },
      techNews: { page: 1, data: [] },
      financeNews: { page: 1, data: [] },
      houseNews: { page: 1, data: [] },
      findNews: { page: 1, data: [] },
      InterestItem: [ ],
    };
    this.updateFinanceNews = this.updateFinanceNews.bind(this);
    this.updateHotNews = this.updateHotNews.bind(this);
    this.updateFindNews = this.updateFindNews.bind(this);
    this.updateHouseNews = this.updateHouseNews.bind(this);
    this.updateTechNews = this.updateTechNews.bind(this);
    this.getUserInterestItem = this.getUserInterestItem.bind(this);
  }

  async componentDidMount() {
    this.myCard = [];
    const hot = this.hot;
    const tech = this.tech;this.myCard
    const finance = this.finance;
    const house = this.house;
    const find = this.find;
    this.getUserInterestItem();
    this.myCard[0]._onRefresh();
  }

  async updateHotNews() {
    const request = {
      type: this.state.type,
      page: this.state.hotNews.page + 1,
      category: 'hotnews',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    console.log(posts);
    this.setState({ hotNews: { page: this.state.hotNews.page + 1, data: posts.concat(this.state.hotNews.data) } });
  }

  async updateFinanceNews() {
    const request = {
      type: this.state.type,
      page: this.state.financeNews.page + 1,
      category: 'financenews',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ financeNews: { page: this.state.financeNews.page + 1, data: posts.concat(this.state.financeNews.data) } });
  }

  async updateFindNews() {
    const request = {
      type: this.state.type,
      page: this.state.findNews.page + 1,
      category: 'findnews',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ findNews: { page: this.state.findNews.page + 1, data: posts.concat(this.state.findNews.data) } });
  }

  async updateHouseNews() {
    const request = {
      type: this.state.type,
      page: this.state.houseNews.page + 1,
      category: 'housenews',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ houseNews: { page: this.state.houseNews.page + 1, data: posts.concat(this.state.houseNews.data) } });
  }

  async updateTechNews() {
    const request = {
      type: this.state.type,
      page: this.state.techNews.page + 1,
      category: 'technews',
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    this.setState({ techNews: { page: this.state.techNews.page + 1, data: posts.concat(this.state.techNews.data) } });
  }

  async updateNewsData(index,pageInfo,categoryInfo) {
    const request = {
      type: this.state.type,
      page: pageInfo + 1,
      category: categoryInfo,
    };
    //const posts = await this.props.wordpressApi.fetchPosts(request);
    // var items = this.state.items;  
    // items[i].status = 'doing';  
    // this.setState({  
    //       items: items  
    // });
    const posts = await this.props.wordpressApi.fetchPosts(request);
    let itemList = this.state.InterestItem;
    itemList[index].page = itemList[index].page + 1;
    itemList[index].data = posts.concat(itemList[index].data );
    this.setState({InterestItem: itemList});
  }

  getUserInterestItem() {
    let interestItem = [
      {name: '推荐',id: '001',category: 'hotnews',page: 1, data: []},
      {name: '科技',id: '002',category: 'technews',page: 1, data: []},
      {name: '金融',id: '003',category: 'financenews',page: 1, data: []},
      {name: '地产',id: '004',category: 'housenews',page: 1, data: []},
      {name: '发现',id: '005',category: 'findnews',page: 1, data: []},
    ];
    this.setState({InterestItem: interestItem});
    //newCardList[0]._onRefresh();
  }

  initNewsCardData(newsCard) {
    if(newsCard!=null){
      newCardList.push(newsCard);  
    }
  }

  changeTab(ref) {
    let interestItem = this.state.InterestItem;
    for (let index = 0; index < interestItem.length; index++) {
      const element = interestItem[index];
      if( ref.props.heading === element.name){
        this.myCard[0]._onRefresh();
      }
    }
    // if (ref.props.heading === '推荐') {
    //   this.hot._onRefresh();
    // }
    // if (ref.props.heading === '科技') {
    //   this.tech._onRefresh();
    // }
    // if (ref.props.heading === '金融') {
    //   this.finance._onRefresh();
    // }
    // if (ref.props.heading === '地产') {
    //   this.house._onRefresh();
    // }
    // if (ref.props.heading === '发现') {
    //   this.find._onRefresh();
    // }
    // if (ref.props.heading === '关注') {
    //   //this.props.navigation.navigate('Detail');
    // }
    
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.bottomContainer}>
          <Tabs 
            tabBarUnderlineStyle={{ backgroundColor: '#049CDB'}}
            onChangeTab={({ ref }) => this.changeTab(ref)} 
            renderTabBar={()=> <ScrollableTab/>}
          >
          {
            this.state.InterestItem.map((item,i) => (
              <Tab
                key={i}
                heading={item.name} 
                tabStyle={{backgroundColor:'#F3FAFF'}}
                activeTabStyle={{backgroundColor:'#F3FAFF'}}
                textStyle={{color:'#6B97BF'}}
                activeTextStyle={{color:'#6B97BF'}}
              >
                <NewsCard 
                  ref={(c) => { this.myCard[i] = c; }} 
                  news={item.data} 
                  scroll={() => {this.updateNewsData(i,item.page,item.category)} }
                  navigation={this.props.navigation} 
                />
              </Tab>
            ))
          }
          </Tabs>
          {/* <Tabs 
            tabBarUnderlineStyle={{ backgroundColor: '#049CDB'}}
            onChangeTab={({ ref }) => this.changeTab(ref)} 
            renderTabBar={()=> <ScrollableTab/>}
          >
            
            <Tab 
              heading='推荐' 
              tabStyle={{backgroundColor:'#F3FAFF'}}
              activeTabStyle={{backgroundColor:'#F3FAFF'}}
              textStyle={{color:'#6B97BF'}}
              activeTextStyle={{color:'#6B97BF'}}
            >
              <NewsCard ref={(c) => { this.hot = c; }} news={this.state.hotNews.data} scroll={this.updateHotNews} navigation={this.props.navigation} />
            </Tab>
            <Tab 
              heading='关注'
              tabStyle={{backgroundColor:'#F3FAFF'}}
              activeTabStyle={{backgroundColor:'#F3FAFF'}}
              textStyle={{color:'#6B97BF'}}
              activeTextStyle={{color:'#6B97BF'}}
            >
              <BlogCard/>
            </Tab>
            <Tab 
              heading='科技'
              tabStyle={{backgroundColor:'#F3FAFF'}}
              activeTabStyle={{backgroundColor:'#F3FAFF'}}
              textStyle={{color:'#6B97BF'}}
              activeTextStyle={{color:'#6B97BF'}}
            >
              <NewsCard ref={(c) => { this.tech = c; }} news={this.state.techNews.data} scroll={this.updateTechNews} navigation={this.props.navigation} />
            </Tab>
            <Tab 
              heading='金融'
              tabStyle={{backgroundColor:'#F3FAFF'}}
              activeTabStyle={{backgroundColor:'#F3FAFF'}}
              textStyle={{color:'#6B97BF'}}
              activeTextStyle={{color:'#6B97BF'}}
            >
              <NewsCard ref={(c) => { this.finance = c; }} news={this.state.financeNews.data} scroll={this.updateFinanceNews} navigation={this.props.navigation} />
            </Tab>
            <Tab 
              heading='地产'
              tabStyle={{backgroundColor:'#F3FAFF'}}
              activeTabStyle={{backgroundColor:'#F3FAFF'}}
              textStyle={{color:'#6B97BF'}}
              activeTextStyle={{color:'#6B97BF'}}
            >
              <NewsCard ref={(c) => { this.house = c; }} news={this.state.houseNews.data} scroll={this.updateHouseNews} navigation={this.props.navigation} />
            </Tab>
            <Tab 
              heading='发现'
              tabStyle={{backgroundColor:'#F3FAFF'}}
              activeTabStyle={{backgroundColor:'#F3FAFF'}}
              textStyle={{color:'#6B97BF'}}
              activeTextStyle={{color:'#6B97BF'}}
            >
              <NewsCard ref={(c) => { this.find = c; }} news={this.state.findNews.data} scroll={this.updateFindNews} navigation={this.props.navigation} />
            </Tab>
          </Tabs> */}
        </View>
        <View style={{position: 'absolute',right: 0,top:0}}>
          <Button transparent onPress={() => (this.props.navigation.navigate('Item'))} style={{width: 30,height: 48, backgroundColor: '#F3FAFF', justifyContent:'center', alignItems:'center'}}>
            <Icon name="md-add" type='ionicon' color='#6B97BF' size={16}/>
          </Button>
        </View>
      </View>
    );
  }
}

export default NewsScreen;
