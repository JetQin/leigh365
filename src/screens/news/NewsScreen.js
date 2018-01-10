import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { Tabs, ScrollableTab, Tab, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Colors from '../../../constants/Colors';
// import NewsCard  from './components/NewsCard';
// import {BlogCard}  from './components/BlogCard';
import { NewsCard, BlogCard} from './components'
import styles from './styles/NewsScreen';
import { WordpressApi } from '../../../constants/api';

const wordpressApi = new WordpressApi();

class NewsScreen extends Component {
  static defaultProps = {
    wordpressApi,
  }

  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '商业新闻',
    headerStyle: {
      borderBottomWidth: 3,
      borderBottomColor: Colors.$navigationHeaderTextColor,
      borderStyle: 'solid',
    },
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row',width: 120}}>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>新历财经</Text>
      </View>
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon type='ionicon' name='md-search' size={30} color={Colors.$navigationHeaderTextColor} />
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon type='material-community' name="newspaper" size={25} color={tintColor} />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      type: 'fetchPosts',
      hotNews: { page: 1, data: [] },
      techNews: { page: 1, data: [] },
      financeNews: { page: 1, data: [] },
      houseNews: { page: 1, data: [] },
      findNews: { page: 1, data: [] },
    };
    this.updateFinanceNews = this.updateFinanceNews.bind(this);
    this.updateHotNews = this.updateHotNews.bind(this);
    this.updateFindNews = this.updateFindNews.bind(this);
    this.updateHouseNews = this.updateHouseNews.bind(this);
    this.updateTechNews = this.updateTechNews.bind(this);
  }

  async componentDidMount() {
    const hot = this.hot;
    const tech = this.tech;
    const finance = this.finance;
    const house = this.house;
    const find = this.find;
    this.hot._onRefresh();
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

  changeTab(ref) {
    if (ref.props.heading === '推荐') {
      this.hot._onRefresh();
    }
    if (ref.props.heading === '科技') {
      this.tech._onRefresh();
    }
    if (ref.props.heading === '金融') {
      this.finance._onRefresh();
    }
    if (ref.props.heading === '地产') {
      this.house._onRefresh();
    }
    if (ref.props.heading === '发现') {
      this.find._onRefresh();
    }
    if (ref.props.heading === '+') {
      this.props.navigation.navigate('Item');
    }
    if (ref.props.heading === '关注') {
      //this.props.navigation.navigate('Detail');
    }
    
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.bottomContainer}>
          <Tabs 
            tabBarUnderlineStyle={{ backgroundColor: '#049CDB'}}
            onChangeTab={({ ref }) => this.changeTab(ref)} 
            renderTabBar={()=> <ScrollableTab/>}>
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
            <Tab 
              heading='+'
              tabStyle={{backgroundColor:'#F3FAFF'}}
              activeTabStyle={{backgroundColor:'#F3FAFF'}}
              textStyle={{color:'#6B97BF'}}
              activeTextStyle={{color:'#6B97BF'}}
            >
              <NewsCard ref={(c) => { this.find = c; }} news={this.state.findNews.data} scroll={this.updateFindNews} navigation={this.props.navigation} />
            </Tab>
          </Tabs>
        </View>
      </View>
    );
  }
}

export default NewsScreen;
