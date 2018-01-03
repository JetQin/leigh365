import React, { Component } from 'react';
import { View, Text, Alert, AsyncStorage, ScrollView, Dimensions, Image} from 'react-native';
import { Icon } from 'react-native-elements'; 
import { List, ListItem, Card, H3, CardItem, Thumbnail, Button, Left, Body, Right} from 'native-base';

import Colors from '../../../../constants/Colors'
import styles from './styles/GoTopButton';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

class GoTopButton extends Component {
  static defaultProps = {

  };

  static navigationOptions = ({ navigation }) => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this._goTop = this._goTop.bind(this);
    this.state = {

    }
  }

  componentDidMount() {
  }

  _goTop() {
    this.props.goTop();
  }
  render() {
    return (
      <View style={styles.root}>
        <Button transparent onPress={this._goTop} style={styles.topBtn}>
          <Icon name="angle-up" type='font-awesome' color={Colors.$whiteColor} size={16}/>
        </Button>
      </View>
    )
  }
}

export default GoTopButton;
