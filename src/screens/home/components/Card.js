import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import Colors from '../../../../constants/Colors';
import styles from './styles/IndexCard';

class Card extends Component {
  render() {
    const index = this.props.index;
    const icon = index.change_value > 0 ?
              (<Icon type='font-awesome' name='sort-up' color={Colors.$redColor} containerStyle={styles.sortUp} />) 
            :  (<Icon type='font-awesome' name='sort-down' color={Colors.$greenColor} containerStyle={styles.sortDown} />);
    return (
      <View style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{index.name}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{index.value}</Text>
        </View>
        <View style={styles.footer}>
          { icon }
          <Text style={index.change_value > 0 ? styles.footerRedText : styles.footerGreenText}>{index.change_value}</Text>
          <Text style={index.change_value > 0 ? styles.footerRedText : styles.footerGreenText}>({index.change_percent}%)</Text>
        </View>
      </View>
    );
  }
}

export default Card;
