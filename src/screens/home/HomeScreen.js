import React from 'react';
import { View, Text, Image } from 'react-native';
import { LoadingScreen } from '../../commons/';
import { NewsCardList, IndexCard } from './components/';
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'
import Swiper from 'react-native-swiper';
import Colors from '../../../constants/Colors';
import { connect } from 'react-redux';
import styles from './styles/HomeScreen';
import headerstyles from '../../commons/styles/HeaderStyle';
import GoTopButton from '../detail/components/GoTopButton'

import { fetchData } from './actions';

@connect(
  state => ({
    data: state.home.data,
  }),
  { fetchData }
)
class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const tabBarLabel ='主页';
    const headerStyle = headerstyles.headerStyle;
    const headerLeft= (
      <View style={headerstyles.headerLeft}>
        <Image source={require('../../../assets/imgs/logo.png')} style={headerstyles.logo} />
        <Text style={headerstyles.title}>新历财经</Text>
      </View>
    );
    const headerRight = (
      <View style={headerstyles.headerRight}>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon type='ionicon' name='md-search' size={26} color={Colors.$navigationHeaderTextColor} containerStyle={headerstyles.iconContainer} />
        </Button>
      </View>
    );
    const tabBarIcon = ({ focused }) => (
      focused ? <Image source={require('../../../assets/imgs/home.jpeg')} style={headerstyles.tabbarIcon} /> 
              : <Image source={require('../../../assets/imgs/inactive_home.jpeg')} style={headerstyles.tabbarIcon} /> 
    );
    return { tabBarLabel,headerStyle, headerLeft,headerRight, tabBarIcon}
  };

  constructor(props) {
    super(props);
    this.reloadData = this.reloadData.bind(this);
    this.goTop = this.goTop.bind(this);
  }
  state = {
    page: 1,
    isFetched: false,
    slides: [],
    indexs: [],
    news: [],
  }

  async componentDidMount() {
    const cardList = this.cardList;
    this.reloadData();
  }

  async reloadData() {
    console.log('reload data');
    const response = await this.props.fetchData(this.state.page);
    this.setState({
      isFetched: true,
      slides: response.action.payload.slides,
      indexs: response.action.payload.indexs,
      news: response.action.payload.news,
      page: 1 + this.state.page,
    });
  }

  goTop() {
    this.cardList.goTop();
  }

  render() {
    if (!this.state.isFetched) {
      return <LoadingScreen />;
    }
    const swiperItems = this.state.slides.map((item, i) => {
      return (
        <View key={i} style={styles.slide}>
          {
            item.picUrl === '' ?
              (<View style={styles.backdrop}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              ) :
              (
                <View style={styles.backdrop}>
                  <Image source={{ uri: item.picUrl }} style={styles.image} />
                </View>

              )
          }
        </View>);
    });

    return (

      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Swiper style={styles.wrapper} 
            dot={
              <View style={{backgroundColor:'rgba(0,0,0,.2)', width: 10, height: 10, borderRadius: 5, borderWidth:2, borderColor: '#FFFFFF', margin: 3 }} />
            }
            activeDot={
              <View style={{backgroundColor: '#FFFFFF', width: 10, height: 10, borderRadius: 5, margin: 3 }} />
            }
            showsButtons 
            autoplay>
            {swiperItems}
          </Swiper>
        </View>
        <View style={styles.indexContainer}>
          <Swiper style={styles.wrapper} autoplay>
            <IndexCard indexs={this.state.indexs} />
          </Swiper>
        </View>
        <View style={styles.bottomContainer}>
          <NewsCardList ref={(c) => { this.cardList = c; }} news={this.state.news} scroll={this.reloadData} navigation={this.props.navigation} />
        </View>
        {/* <GoTopButton goTop={this.goTop}/> */}
      </View>
    );
  }
}

export default HomeScreen;
