import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Card from './Card';
import styles from './styles/IndexCard';

class IndexCard extends Component {

  _rendPageCard(){
    const length = this.props.indexs.length;
    let cardList = [];

    for(let cardIndex = 0; cardIndex < length; cardIndex=cardIndex+3){
      cardList.push(
        <View key={cardIndex} style={styles.cardContainer}>
          <Card index={this.props.indexs[cardIndex]} />
          { cardIndex+1 < length ? <Card index={this.props.indexs[cardIndex + 1]} /> : <View/>}
          { cardIndex+2 < length ? <Card index={this.props.indexs[cardIndex + 2]} /> : <View/>}
        </View>
      );
    }
    return cardList;
  }

  render() {
    return (
      <Swiper>
        {this._rendPageCard()}
      </Swiper>
    );
  }
}

export default IndexCard;
