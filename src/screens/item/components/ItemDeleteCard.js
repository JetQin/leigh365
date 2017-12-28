import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, AsyncStorage, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles/ItemDeleteCard';
import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';
class ItemDeleteCard extends Component {

  constructor(props) {
    super(props);
    this._doRemoveItem = this._doRemoveItem.bind(this);
    this.state = {
        items:[]
    }
  }

  _doRemoveItem(id) {
    this.props.action(id);
  }
  

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.items.map((item, i) => (
            <View key={i} style={styles.itemContainer}>
              <Button small light style={styles.btnContainer}>
                <Text>{item.name}</Text>                    
              </Button> 
              {
                this.props.delete? 
              <Button light iconLeft onPress={() => this._doRemoveItem(item.id)} style={styles.deleteBtnContainer}>
                <Icon type='font-awesome' name='close' style={styles.deleteIconContainer}/>
              </Button>
              :<View/>  
              }
            </View>
          ))
        }
      </View>
    );
  }
}

export default ItemDeleteCard;
