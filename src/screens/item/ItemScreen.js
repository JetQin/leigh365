import React, { Component } from 'react';
import { View, Text, Alert, AsyncStorage} from 'react-native';
import { Button} from 'native-base'; 
import { Icon} from 'react-native-elements';
import styles from './styles/ItemScreen';
import { ItemCard, ItemDeleteCard } from './components/';
import Colors from '../../../constants/Colors';


class ItemScreen extends Component {
  static defaultProps = {
    // {name: '推荐',id: '001',category: 'hotnews',page: 1, data: []},
    InterestItem: [
      {name: '推荐',id: '001',category: 'hotnews',page: 1, data:[]},
      {name: '科技',id: '002',category: 'technews',page: 1, data:[]},
      {name: '金融',id: '003',category: 'financenews',page: 1, data:[]},
      {name: '地产',id: '004',category: 'housenews',page: 1, data:[]},
      {name: '发现',id: '005',category: 'findnews',page: 1, data:[]},
    ],
    totalItem:[
      {name: '推荐',id: '001',category: 'hotnews',page: 1, data:[]},
      {name: '科技',id: '002',category: 'technews',page: 1, data:[]},
      {name: '金融',id: '003',category: 'financenews',page: 1, data:[]},
      {name: '地产',id: '004',category: 'housenews',page: 1, data:[]},
      {name: '发现',id: '005',category: 'findnews',page: 1, data:[]},
      {name: '股票',id: '006',category: 'findnews', page: 1, data:[]},
      {name: '国际',id: '007',category: 'findnews', page: 1, data:[]},
      {name: '视频',id: '008',category: 'findnews', page: 1, data:[]},
      {name: '商品',id: '009',category: 'findnews', page: 1, data:[]},
      {name: '外汇',id: '010',category: 'findnews', page: 1, data:[]},
      {name: '中国',id: '011',category: 'findnews', page: 1, data:[]},
      {name: '债券',id: '012',category: 'findnews', page: 1, data:[]},
      {name: '欧洲',id: '013',category: 'findnews', page: 1, data:[]},
      {name: '日本',id: '014',category: 'findnews', page: 1, data:[]},
      {name: '美国',id: '015',category: 'findnews', page: 1, data:[]},
      {name: '期权',id: '016',category: 'findnews', page: 1, data:[]},
      {name: '新三板',id: '017',category: 'findnews', page: 1, data:[]},
      {name: '港股',id: '018', category: 'findnews',  page: 1, data:[]},
      {name: '沪深',id: '019', category: 'findnews',  page: 1, data:[]},
      {name: '美股',id: '029', category: 'findnews',  page: 1, data:[]},
      {name: '企业家',id: '021',category: 'findnews', page: 1, data:[]},
      {name: '能源',id: '022',category: 'findnews', page: 1, data:[]},
      {name: '创业',id: '023',category: 'findnews', page: 1, data:[]},
      {name: '黄金',id: '024',category: 'findnews', page: 1, data:[]},
      {name: '基金',id: '025',category: 'findnews', page: 1, data:[]},
      {name: '中小板',id: '026',category: 'findnews', page: 1, data:[]},
      {name: '硅谷',id: '027', category: 'findnews',  page: 1, data:[]}
    ]
  };
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.doEditItem = this.doEditItem.bind(this);
    this.doAddItem = this.doAddItem.bind(this);
    this.doRemoveItem = this.doRemoveItem.bind(this);
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

  async getMyInterestItem() {
    // const login = await AsyncStorage.getItem('@user_id');
    // const request = {
    //   type: 'getUserInterest',
    //   usesrId: login,
    // };
    // const myInterestItem = await this.props.wordpressApi.fetchPosts(request);
    // const myItemList = await AsyncStorage.getItem('@item_list');
    // if(!myItemList){
    //   myItemList = this.props.InterestItem;
    // }
    const myItemList = this.props.InterestItem;
    const suggestItem = this.getDiffItem(myItemList,this.props.totalItem);
    this.setState({ myInterestItem: myItemList});
    this.setState({ suggestInterestItem: suggestItem});
  }

  doAddItem(id) {
    console.log('add............'+ id);
    // const login = await AsyncStorage.getItem('@user_id');
    // const request = {
    //   type: 'getUserInterest',
    //   usesrId: login,
    // };
    // const myItem = await this.props.wordpressApi.fetchPosts(request);
    const userAddItem = this.getUserAddItem(id);
    const userItems =  this.state.myInterestItem.concat(userAddItem);
    const suggestItem =  this.getDiffItem(userItems,this.state.suggestInterestItem);
    AsyncStorage.setItem('@item_list', JSON.stringify(userItems));
    this.setState({ myInterestItem: userItems});
    this.setState({ suggestInterestItem: suggestItem});
  }

  doRemoveItem(id) {
    console.log('remove...............'+id);
    const userRemoveItem = this.getUserAddItem(id);
    const userItems =  this.getDiffItem(userRemoveItem,this.state.myInterestItem);
    const suggestItem =  userRemoveItem.concat(this.state.suggestInterestItem);
    AsyncStorage.setItem('@item_list', JSON.stringify(userItems));
    this.setState({ myInterestItem: userItems});
    this.setState({ suggestInterestItem: suggestItem});
    // const login = await AsyncStorage.getItem('@user_id');
    // const request = {
    //   type: 'getUserInterest',
    //   usesrId: login,
    // };
    // const myItem = await this.props.wordpressApi.fetchPosts(request);
    // this.setState({ myInterestItem: myItem});
  }

  getUserAddItem(id) {
    const addItem = [];
    for (var i = 0, len = this.props.totalItem.length; i < len; i ++) {
      if(this.props.totalItem[i].id == id) {
        addItem.push(this.props.totalItem[i]);
      } 
    }
    return addItem;
  }
  getDiffItem(myItem,totalItem) {
    let arry = [];
    let tmp = myItem.concat(totalItem);
    let o = {};
    for (let i = 0; i < tmp.length; i ++) {
      if(tmp[i].id in o) {
        o[tmp[i].id] ++;
      }else {
        o[tmp[i].id] = 1;
      } 
    } 
    for (x in o) {
      for (let i = 0; i < totalItem.length; i ++){
        if (o[x] == 1 && x == totalItem[i].id) {
          arry.push({name: totalItem[i].name,id: x});
        }
      }
      
    }
    return arry;
  }


  render() {
    return (
    <View style={styles.container}>
      <View style={{height:45}}>
        <Button transparent onPress={() => this.props.navigation.goBack()} style={{marginLeft:10,marginTop:20,height:25}}>
          <Icon type='ionicon'  name="md-close" size={20} color={Colors.$black} />
        </Button>
      </View>
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
            action={this.doRemoveItem}
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
            action={this.doAddItem}
          />
        </View>
      </View>
    </View>
    );
  }
}

export default ItemScreen;
