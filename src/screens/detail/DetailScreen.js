import React, { Component } from 'react';
import { View, Text, Alert, AsyncStorage, ScrollView, TouchableOpacity} from 'react-native';
import { Button } from 'native-base';
import { Icon } from 'react-native-elements'; 
import styles from './styles/DetailScreen';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

class DetailScreen extends Component {
  static defaultProps = {

  };

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      editText: '编辑',
      myInterestItem: [],
      suggestInterestItem:[]
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{height: screenHeight - 200}}>
          <Text>联想为ThinkPad设定了新目标：更轻薄更智能更安全，开创智能商务计算新纪元</Text>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerItem} >
            {/* <Icon name="comment" size={17} style={styles.footerItemIcon}/> */}
            <Icon name="comment" type='font-awesome' color='#0090D7' size={16}/>
            <Text style={styles.footerItemIconText}>评论</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem} >
            {/* <Icon name={this.state.liked ? 'favorite' : 'favorite-border'} 
                  size={17} 
                  style={[styles.footerItemIcon, {
                    color: this.state.liked ? 'red' : '#555'
                  }]}/> */}
                <Icon name="heart" type='font-awesome' color='#0090D7' size={16}/>
            <Text style={[styles.footerItemIconText, {
                    color: this.state.liked ? 'red' : '#555'
                  }]}>已喜欢</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default DetailScreen;
