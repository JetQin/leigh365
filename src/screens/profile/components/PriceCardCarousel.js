import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import styles from './styles/PriceCardCarousel';

class PriceCardCarousel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            entries:[
              {title:'充值', url: 'http://synebusiness.cn/price/1small.png'},
              {title:'充值', url: 'http://synebusiness.cn/price/3small.png'},
              {title:'充值', url: 'http://synebusiness.cn/price/12small.png'},
              {title:'充值', url: 'http://synebusiness.cn/price/diamond-small.png'},
            ]
        };
        this.gotoPay = this.gotoPay.bind(this);
    }

    componentDidMount() {
      this.carousel.snapToNext();
    }

    gotoPay(){
        console.log('goto pay');
    }

    
    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <TouchableOpacity style={styles.slideInnerContainer} onPress={this.gotoPay} >
                    <Image
                        source={{ uri: item.url }}
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    render() {

        const sliderWidth = 200;
        const itemWidth = 120;
        const itemHeight = 300;

        return (
            <Carousel
              ref={c => { this.carousel = c; } }
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              itemHeight={itemHeight}
              removeClippedSubviews={false}
              currentIndex={0}
            />
        );
    }
}

export default PriceCardCarousel;