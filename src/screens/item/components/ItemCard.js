import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, AsyncStorage, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles/ItemCard';
import { Dimensions } from 'react-native';

class ItemCard extends Component {

  constructor(props) {
    super(props);
    this.doAddItem = this.doAddItem.bind(this);
    this.state = {
        items:[]
    }
  }

  doAddItem() {
    Alert.alert('add');
  }
  
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.items.map((item, i) => (             
            <View key={i} style={styles.itemContainer}>
              <Button small light style={styles.btnContainer} onPress={this.doAddItem}>
                <Icon type='ionicon' name='add' style={styles.icoContainer}/>
                <Text>{item.name}</Text>                    
              </Button> 
            </View>
          ))
        }
      </View>
    );
  }
}

export default ItemCard;
