import React, { Component } from 'react';
import { View, Text, Image, Alert, AsyncStorage } from 'react-native';
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
    console.log('********* component constructor ***********');
    this.state = {
      type: 'fetchPosts',
      newsCategory: [
        {name: '推荐',id: '001',category: 'hotnews',page: 1, data: []},
        {name: '科技',id: '002',category: 'technews',page: 1, data: []},
        {name: '金融',id: '003',category: 'financenews',page: 1, data: []},
        {name: '地产',id: '004',category: 'housenews',page: 1, data: []},
        {name: '发现',id: '005',category: 'findnews',page: 1, data: []},
      ],
    };
    this.cards = new Array();
    this.updateNews = this.updateNews.bind(this);
  }

  
  async componentWillMount() {
    console.log('********* component will mount ***********');
    let items = await AsyncStorage.getItem('@item_list');
    console.log(items);
    if(items){
      // this.setState({newsCategory: items});
    }
  }
  
  async componentDidMount() {
    console.log('********* component did mount ***********');
    let items = await AsyncStorage.getItem('@item_list');
    if(this.refs[0]){
      this.refs[0]._onRefresh();
    }
  }

  async updateNews(index){
    const request = {
      type: this.state.type,
      page: this.state.newsCategory[index].page + 1,
      category: this.state.newsCategory[index].category,
    };
    const posts = await this.props.wordpressApi.fetchPosts(request);
    const newsCategory = this.state.newsCategory;
    const news = newsCategory[index];
    news.page = news.page + 1;
    news.data = posts.concat(news.data);
    newsCategory[index] = news;
    this.setState({newsCategory: newsCategory});
  }

  changeTab(ref) {
    const index = ref.props.children.props.index;
    const heading = this.state.newsCategory[index].category;
    this.refs[heading]._onRefresh();
  }

  render() {
    console.log('********* component render ***********');
    return (
      <View style={styles.root}>
        <View style={styles.bottomContainer}>
          <Tabs 
            tabBarUnderlineStyle={{ backgroundColor: Colors.$tabbarTextColor,borderBottomWidth:3,borderBottomColor:Colors.$tabbarTextColor}}
            onChangeTab={({ ref }) => this.changeTab(ref)} 
            renderTabBar={()=> <ScrollableTab/>}
          >
            {
              this.state.newsCategory.map((item,index)=>(
                <Tab
                  key={index}
                  heading={item.name} 
                  tabStyle={{backgroundColor:Colors.$newsTabBgColor}}
                  activeTabStyle={{backgroundColor:Colors.$newsTabBgColor}}
                  textStyle={{color:Colors.$tabText}}
                  activeTextStyle={{color:Colors.$activeTabText}}
                >
                  <NewsCard 
                    news={item.data} 
                    index={index} 
                    ref={item.category}
                    scroll={(index) => this.updateNews(index)} 
                    navigation={this.props.navigation} />
                </Tab>
              ))
            }
          </Tabs>
        </View>
        <View style={{position: 'absolute',right: 0,top:0}}>
          <Button transparent onPress={() => (this.props.navigation.navigate('Item'))} style={{width: 20,height: 48, backgroundColor: Colors.$newsTabBgColor, justifyContent:'center', alignItems:'center'}}>
            <Icon name="md-add" type='ionicon' color={Colors.$tabText} size={16}/>
          </Button>
        </View>
      </View>
    );
  }
}

export default NewsScreen;
