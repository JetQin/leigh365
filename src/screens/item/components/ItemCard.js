import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, AsyncStorage, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles/ItemCard';
import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';

class ItemCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items:[
            {name: '推荐'},
            {name: '科技'},
            {name: '财经'},
            {name: '国际'},
            {name: '股票'},
            {name: '深圳'},
            {name: '房产'},
        ]
    }

  }

  componentDidMount() {
  }



  render() {
    return (
      <View style={styles.container}>
        {
          this.state.items.map((item, i) => (
            <Button key={i} iconLeft small light style={styles.btnContainer}>
              <Icon type='ionicon' name='add' style={styles.icoContainer}/>
              <Text style={styles.textContainer}>{item.name}</Text>
            </Button>
          ))
        }
      </View>
    );
  }
}

export default ItemCard;
