import React, { Component } from 'react';
import { View, Text, Alert, AsyncStorage, ScrollView, Dimensions, Image} from 'react-native';
import { Icon } from 'react-native-elements'; 
import { List, ListItem, Card, H3, CardItem, Thumbnail, Button, Left, Body, Right} from 'native-base';

import Colors from '../../../../constants/Colors'
import styles from './styles/GoTopButton';

class GoTopButton extends Component {
  static defaultProps = {
    bottomValue: 0,
  };

  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this._goTop = this._goTop.bind(this);
    this.state = {
      bottomValue: props.bottomValue,
    }
  }

  componentDidMount() {
    this.setState({bottomValue: this.props.bottomValue});
  }

  _goTop() {
    this.props.goTop();
  }
  render() {
    return (
      <View style={[styles.root,{ bottom: this.state.bottomValue}]}>
        <Button transparent onPress={this._goTop} style={styles.topBtn}>
          <Icon name="angle-up" type='font-awesome' color={Colors.$whiteColor} size={16}/>
        </Button>
      </View>
    )
  }
}

export default GoTopButton;
