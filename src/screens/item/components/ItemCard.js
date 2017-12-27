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
        items:[]
    }

  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.items.map((item, i) => (
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
