import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { List, ListItem, Card, CardItem, Thumbnail, Button, Left, Body, Right} from 'native-base';

import Colors from '../../../../constants/Colors';
import styles from './styles/BlogList';

export default class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            blogs: [
                {
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    name: 'Pony',
                    date: '1小时前',
                    reading: '10',
                    status: 'Hsldfksldfksldf asdfjakfjkajdfla kasjdfkjaslfjasljf',
                    image1: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    image2: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    image3: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    share: '4',
                    comments: '5',
                    likes: '20',
                  },
                  {
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    name: 'Pony',
                    date: '1小时前',
                    reading: '10',
                    status: 'Hsldfksldfksldf asdfjakfjkajdfla kasjdfkjaslfjasljf',
                    image1: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    image2: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    image3: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    share: '4',
                    comments: '5',
                    likes: '20',
                  },
              ],
        }
    }

    render() {
        return (
            <ScrollView>
                <List>
                   {
                    this.state.blogs.map((item, i) => {
                    return (
                        <ListItem key={i} itemDivider={false}>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{uri: item.avatar }} />
                                        <Body>
                                            <Text style={styles.userTitle}>{item.name}</Text>
                                            <Text style={styles.timeTitle} note>{item.date}</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <Button bordered small><Text style={styles.readTitle}> {item.reading} 阅读 </Text></Button>
                                    </Right>
                                </CardItem>
                                <CardItem cardBody>
                                    <View style={styles.body}>
                                        <View>
                                            <Text style={styles.content}>{item.status}</Text>
                                        </View>
                                        <View style={styles.imageContainer}>
                                            <Image source={{uri: item.image1}} style={{height: 50, width: 50, flex: 1}}/>
                                            <Image source={{uri: item.image2}} style={{height: 50, width: 50, flex: 1}}/>
                                            <Image source={{uri: item.image3}} style={{height: 50, width: 50, flex: 1}}/>
                                        </View>
                                    </View>
                                </CardItem>
                                <CardItem>
                                    <View style={styles.footer}>
                                        <Button transparent>
                                            <Icon name="share" type='font-awesome' color={Colors.$navigationHeaderTextColor} size={16}/>
                                            <Text style={styles.footerText}>{item.share}</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="ios-chatbubbles" type='ionicon' color={Colors.$navigationHeaderTextColor} size={16} />
                                            <Text style={styles.footerText}>{item.comments}</Text>
                                        </Button>
                                        <Button transparent>
                                            <Icon name="thumbs-up"  type='font-awesome' color={Colors.$navigationHeaderTextColor} size={16} />
                                            <Text style={styles.footerText}>{item.likes}</Text>
                                        </Button>
                                    </View>
                                </CardItem>
                            </Card>
                        </ListItem>
                      );
                    })
                  }
                </List>
            </ScrollView>
        );
    }

}
