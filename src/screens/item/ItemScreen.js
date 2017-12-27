import React, { Component } from 'react';
import { View, Text, Alert} from 'react-native';
import { Button, Icon } from 'native-base'; 
import styles from './styles/ItemScreen';
import { ItemCard, ItemDeleteCard } from './components/';
import Colors from '../../../constants/Colors';


class ItemScreen extends Component {
  static defaultProps = {
    InterestItem: [
      {name: '推荐'},
      {name: '科技'},
      {name: '财经'},
      {name: '国际'},
      {name: '股票'},
      {name: '深圳'},
      {name: '房产'}
    ],
    items:[
      {name: '推荐'},
      {name: '科技'},
      {name: '财经'},
      {name: '国际'},
      {name: '股票'},
      {name: '深圳'},
      {name: '视频'},
      {name: '商品'},
      {name: '外汇'},
      {name: '中国'},
      {name: '债券'},
      {name: '欧洲'},
      {name: '日本'},
      {name: '美国'},
      {name: '期权'},
      {name: '新三板'},
      {name: '港股'},
      {name: '沪深'},
      {name: '美股'},
      {name: '企业家'},
      {name: '能源'},
      {name: '创业'},
      {name: '黄金'},
      {name: '基金'},
      {name: '中小板'},
      {name: '硅谷'},
      {name: '华尔街'}
    ]
  };

  constructor(props) {
    super(props);
    this.doEditItem = this.doEditItem.bind(this);
    this.state = {
      deleteIco: false,
      editText: '编辑',
      myInterestItem: [],
      suggestInterestItem:[]
    }
  }

  componentDidMount() {
    this.getMyInterestItem();
  }

  doEditItem() {
    if(this.state.deleteIco) { //完成
      this.setState({editText: '编辑'});
    } else { //编辑
      this.setState({editText: '完成'});
    }
    this.setState({deleteIco: !this.state.deleteIco});
  }

  getMyInterestItem() {
    // const login = await AsyncStorage.getItem('@user_id');
    // const request = {
    //   type: 'getUserInterest',
    //   usesrId: login,
    // };
    // const myInterestItem = await this.props.wordpressApi.fetchPosts(request);
    const myItem = this.props.InterestItem;
    const suggestItem = this.getSuggestInterest(myItem,this.props.items);
    this.setState({ myInterestItem: myItem});
    this.setState({ suggestInterestItem: suggestItem});
  }

  getSuggestInterest(arry1,arry2) {
    let arry = [];
    let tmp = arry1.concat(arry2);
    let o = {};
    for (var i = 0; i < tmp.length; i ++) {
      if(tmp[i].name in o) {
        o[tmp[i].name] ++
      }else {
        o[tmp[i].name] = 1;
      } 
    } 
    for (x in o) {
      if (o[x] == 1) {
        arry.push({name: x});
      }
    }
    return arry;
  }


  render() {
    return (
    <View style={styles.container}>
      <View style={styles.myInterest}>
        <View style={styles.header}>
          <Text style={styles.headerLeft}>我的频道</Text>
          <Button transparent dark style={styles.headerMid}>
            <Text style={{fontSize: 10}}>点击进入频道</Text>
          </Button>
          <Button bordered danger rounded onPress={this.doEditItem} style={styles.editBtn}>
            <Text style={styles.editText}>{this.state.editText}</Text>
          </Button>
        </View>
        <View style={styles.myInterestContainer}>
          <ItemDeleteCard
            delete={this.state.deleteIco}
            items={this.state.myInterestItem}
            ref={(c) => { this.myInterest = c; }}
          />
        </View>
      </View>
      <View style={styles.interestSuggest}>
        <View style={styles.header}>
          <Text style={styles.headerLeft}>频道推荐</Text>
          <Button transparent dark style={styles.headerMid}>
            <Text style={{fontSize: 10}}>点击添加频道</Text>
          </Button>
        </View>
        <View style={styles.interestSuggesContainer}>
          <ItemCard
            items={this.state.suggestInterestItem}
            ref={(c) => { this.suggestInterest = c; }}
          />
        </View>
      </View>
    </View>
    );
  }
}

export default ItemScreen;
