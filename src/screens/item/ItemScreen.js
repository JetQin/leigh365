import React, { Component } from 'react';
import { View, Text, Alert} from 'react-native';
import { Button, Icon } from 'native-base'; 
import styles from './styles/ItemScreen';
import { ItemCard, ItemDeleteCard } from './components/';


class ItemScreen extends Component {
  static defaultProps = {
    password: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      deleteIco: false,
      myInterestText: '编辑sss',
    }
  }

  doEditItem() {
    Alert.alert('aaaaaaaaaaaa');
    if(this.state.deleteIco) { //完成
      this.setState({myInterestText: '编辑'});
    } else { //编辑
      this.setState({myInterestText: '完成'});
    }
    this.setState({deleteIco: !this.state.deleteIco});
  }


  render() {
    return (
    <View style={styles.container}>
      <View style={styles.myInterest}>
        
        <View style={styles.header}>
          <Text style={styles.headerLeft}>我的频道</Text>
          <Button transparent dark style={styles.headerMid}>
            <Text style={{fontSize: 12}}>点击进入频道</Text>
          </Button>
          <Button rounded bordered danger small style={{ backgroundColor: 'green'}} onPress={() => this.doEditItem}>
              
          </Button>
        </View>
        <View style={styles.myInterestContainer}>
          <ItemDeleteCard
            delete={this.state.deleteIco}
          />
        </View>
      </View>
      <View style={styles.interestSuggest}>
        <View style={styles.header}>
          <Text style={styles.headerLeft}>频道推荐</Text>
          <Button transparent dark style={styles.headerMid}>
            <Text style={{fontSize: 12}}>点击添加频道</Text>
          </Button>
        </View>
        <View style={styles.interestSuggesContainer}>
          <ItemCard/>
        </View>
      </View>
    </View>
    );
  }
}

export default ItemScreen;
