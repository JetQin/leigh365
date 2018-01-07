import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';


class PriceCardCarousel extends Component {
    
    constructor(props) {
        super(props);
        this.setState({
            entries:[
              {title:'充值', name: '每日', price: '¥1500'},
              {title:'充值', name: '每日', price: '¥1500'},
              {title:'充值', name: '每日', price: '¥1500'},
              {title:'充值', name: '每日', price: '¥1500'},
            ]
        });
    }

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render() {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
            />
        );
    }
}

export default PriceCardCarousel;