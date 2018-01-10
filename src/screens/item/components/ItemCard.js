import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, AsyncStorage, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles/ItemCard';
import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';

class ItemCard extends Component {

  constructor(props) {
    super(props);
    this._doAddItem = this._doAddItem.bind(this);
    this.state = {
        items:[]
    }
  }

  _doAddItem(id) {
    this.props.action(id);
  }
  
  render() {
    return (
      <View style={styles.container}>
        {
          this.props.items.map((item, i) => (             
            <View key={i} style={styles.itemContainer}>
              <Button small light style={styles.btnContainer} onPress={() => this._doAddItem(item.id)}>
                <Icon type='ionicon' name='add' style={styles.icoContainer}/>
                <Text style={{color:Colors.$black,fontSize:12}}>{item.name}</Text>                    
              </Button> 
            </View>
          ))
        }
      </View>
    );
  }
}

export default ItemCard;
