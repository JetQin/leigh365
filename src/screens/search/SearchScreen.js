import React, { Component } from 'react';
import { View, Image, TextInput, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, Tabs, Tab } from 'native-base';
import Colors from '../../../constants/Colors';
import styles from './styles/SearchScreen';
import { StockCard } from '../holder/components';
import NewsCard from '../news/components/NewsCard';
import { WordpressApi } from '../../../constants/api';

const api = new WordpressApi();

class SearchScreen extends Component {
  static defaultProps = {
    api,
  }

  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.searchStock = this.searchStock.bind(this);
    this.searchNews = this.searchNews.bind(this);
    this.doSearch = this.doSearch.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.state = {
      stock: {
        data: [],
        page: 1,
      },
      news: {
        data: [],
        page: 1,
      },
      searchType: '搜行情',
      searchValue: '',
    };
  }

  componentDidMount() {

  }
  doSearch() {
    if (this.state.searchType === '搜行情') {
      // this.searchStock();
      this.state.stock.page = 1;
      this.state.stock.data = [];
      this.stockCard._onRefresh();
    }
    if (this.state.searchType === '搜新闻') {
      this.state.news.page = 1;
      this.state.news.data = [];
      this.newsCard._onRefresh();
    }
  }
  async searchStock() {
    const params = {
      type: 'searchStock',
      page: this.state.stock.page,
      searchValue: this.state.searchValue,
    };
    console.log("page:" + this.state.stock.page);
    const response = await this.props.api.searchStock(params);
    console.log(response);
    this.setState({
      stock: {
        data: response.concat(this.state.stock.data),
        page: 1 + this.state.stock.page,
      },
    });
  }

  async searchNews() {
    const params = {
      type: 'searchNews',
      page: this.state.news.page,
      searchValue: this.state.searchValue,
    };
    const posts = await this.props.api.searchNews(params);
    this.setState({
      news: {
        data: posts.concat(this.state.news.data),
        page: this.state.news.page + 1,
      },
    });
  }

  changeTab(ref) {
    this.setState({ searchType: ref.props.heading });
  }

  render() {
    let stock = (<View />);
    let news = (<View />);
    if (this.state.stock) {
      stock = (
        <StockCard
          ref={(c) => { this.stockCard = c; }}
          stocks={this.state.stock.data} scroll={this.searchStock}
          navigation={this.props.navigation}
        />
      );
    }
    if (this.state.news) {
      news = (
        <NewsCard
          ref={(c) => { this.newsCard = c; }}
          news={this.state.news.data}
          scroll={this.searchNews}
          navigation={this.props.navigation}
        />
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: '4%', flexDirection: 'row', borderBottomColor: Colors.$navigationHeaderTextColor, borderBottomWidth: 3 }}>
          <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
          <View style={styles.searchBar}>
            <TextInput
              placeholder="请输入关键词 按Enter搜索"
              underlineColorAndroid='transparent'
              value={this.state.searchValue}
              onChangeText={(searchValue) => this.setState({ searchValue })}
              style={styles.searchInput}
            />
            <Button transparent onPress={this.doSearch} style={{ position: 'absolute', right: '12%' }}>
              <Icon type='ionicon' name="ios-search" size={20} />
            </Button>
            <Button transparent onPress={() => this.props.navigation.goBack()} style={styles.closeBtn}>
              <Icon type='font-awesome' name="close" size={20} color={Colors.$navigationHeaderTextColor} />
            </Button>
          </View>
        </View>
        <Tabs initialPage={0} onChangeTab={({ ref }) => this.changeTab(ref)}>
          <Tab heading='搜行情'>
            <View style={styles.stockContainer}>
              {stock}
            </View>
          </Tab>
          <Tab heading='搜新闻'>
            <View>
              {news}
            </View>
          </Tab>
        </Tabs>
      </View>

    );
  }
}

export default SearchScreen;
