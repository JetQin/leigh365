import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, AsyncStorage, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles/ItemDeleteCard';
import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';
const DimensionsWidth = Dimensions.get('window').width;
const DimensionsHeight = Dimensions.get('window').height * 0.5;
const width = 60;
class ItemDeleteCard extends Component {

  constructor(props) {
    super(props);
    this.doRemoveItem = this.doRemoveItem.bind(this);
    this.state = {
        items:[]
    }
  }

  doRemoveItem() {
    Alert.alert('remove');
  }
  

  render() {
    let deleteIco = (<View/>);
    if(this.props.delete){
      deleteIco = (
        <Button light iconLeft onPress={this.doRemoveItem} style={styles.deleteBtnContainer}>
          <Icon type='font-awesome' name='close' style={styles.deleteIconContainer}/>
        </Button> 
      );
    }
    return (
      <View style={styles.container}>
        {
          this.props.items.map((item, i) => (
            <View key={i} style={styles.itemContainer}>
              <Button small light style={styles.btnContainer}>
                <Text>{item.name}</Text>                    
              </Button> 
              {deleteIco}
            </View>
          ))
        }
      </View>
    );
  }
}

export default ItemDeleteCard;
