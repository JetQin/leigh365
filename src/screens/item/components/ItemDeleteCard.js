import React, { Component } from 'react';
import { View, Text, ScrollView, RefreshControl, AsyncStorage, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles/ItemDeleteCard';
import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';

class ItemDeleteCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items:[]
    }

  }

  render() {
    let deleteIco = (<View/>);
    if(this.props.delete){
      deleteIco = (
        <View style={styles.deleteContainer}>
          <Button light iconLeft onPress={this.doSearch} style={styles.deleteBtnContainer}>
              <Icon type='font-awesome' name='close' style={styles.deleteIconContainer}/>
          </Button>
        </View> 
      );
    }
    return (
      <View style={styles.container}>
        {
          this.props.items.map((item, i) => (
            <View key={i} style={styles.deleteItemContainer}>
                <View style={styles.itemContainer}>        
                    <Button small light style={styles.itemBtnContainer}>
                        <Text>{item.name}</Text>                    
                    </Button>
                </View>
                {deleteIco}
            </View>
          ))
        }
      </View>
    );
  }
}

export default ItemDeleteCard;
