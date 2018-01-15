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
      <Swiper
         dot={
          <View style={{backgroundColor:'rgba(0,0,0,.2)', width: 12, height: 4, borderRadius: 2, margin:3, top: 20 }} />
         }
         activeDot={
          <View style={{backgroundColor: '#007aff', width: 12, height: 4, borderRadius: 2, margin: 3, top: 20 }} />
         }
        >
        {this._rendPageCard()}
      </Swiper>
    );
  }
}

export default IndexCard;
