import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon, List, ListItem, ListView, Avatar } from 'react-native-elements';

import styles from './styles/BlogList';

export default class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            blogs: [
                {
                    date: '2017/12/18',
                    name: 'Pony',
                    title: 'Appointments',
                    image1: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    image2: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    image3: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    icon: 'bandcamp',
                  },
                  {
                    date: '2017/12/18',
                    name: 'Pony',
                    title: 'Trips',
                    image1: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    image2: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    image3: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    icon: 'user-circle-o',
                  },
              ],
        }
    }


    render() {
        return (
            <List>
                {
                    this.state.blogs.map((item, i) => (
                        <ListItem
                            key={i}
                            hideChevron
                            avatar={
                                <Avatar
                                rounded
                                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                                title={item.title}
                            />}
                            title={item.title}
                            containerStyle={{ paddingTop: 10, paddingBottom: 100}}
                            subtitle={
                                <View style={styles.subtitle}>
                                    {/* <View style={styles.contentContainer}> */}
                                        <Text style={styles.content}> You miss fdddddd dddddddd You miss fdddddd dddddddd</Text>
                                    {/* </View> */}
                                    <View style={styles.imageContainer}>
                                        <Image
                                            style={styles.image}
                                            source={{uri: item.image1}}
                                        />
                                        <Image
                                            style={styles.image}
                                            source={{uri: item.image2}}
                                        />
                                        <Image
                                            style={styles.image}
                                            source={{uri: item.image3}}
                                        />
                                    </View>
                                    <View style={styles.footer}>
                                        <Icon type='font-awesome' size={16} name='bookmark' />
                                        <Icon type='font-awesome' size={16} name='heartbeat' />
                                    </View>
                                </View>
                            }
                        />
                    ))
                }
            </List>
        );
    }
}
