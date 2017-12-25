import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Button } from 'native-base'; 
import styles from './styles/ItemScreen';


class ItemScreen extends Component {
  static defaultProps = {
    password: true,
  };

  constructor(props) {
    super(props);

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
          <View style={{flex: 0.2}}>
            <Button bordered small >
              <Text style={{fontSize: 12}}>编辑</Text>
            </Button>
          </View>
        </View>
        <View style={styles.myInterestHeaderContainer}>

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
        
        </View>
      </View>
    </View>
    );
  }
}

export default ItemScreen;
