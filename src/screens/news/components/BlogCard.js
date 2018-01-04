import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { List, ListItem, Card, CardItem, Thumbnail, Button, Left, Body, Right} from 'native-base';

import Colors from '../../../../constants/Colors';
import styles from './styles/BlogCard';

export default class BlogCard extends Component {

    constructor(props) {
        super(props);
        this.state= {
            blogs: [
                {
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    name: 'Pony',
                    date: '1小时前',
                    reading: '10',
                    status: '联想为ThinkPad设定了新目标：更轻薄更智能更安全，开创智能商务计算新纪元！',
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
                    status: '联想为ThinkPad设定了新目标：更轻薄更智能更安全，开创智能商务计算新纪元！',
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
                <List style={{ marginTop: 0 }}>
                   {
                    this.state.blogs.map((item, i) => {
                    return (
                        <ListItem key={i} itemDivider={false}>
                            <Card>
                                <CardItem style={styles.cardItem}>
                                    <Left>
                                        <Thumbnail small source={{uri: item.avatar }} />
                                        <Body>
                                            <Text style={styles.userTitle}>{item.name}</Text>
                                            <Text style={styles.timeTitle} note>{item.date}</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <Button bordered small style={styles.readBtn }>
                                            <Icon name="check" type='font-awesome' color={Colors.$navigationHeaderTextColor} size={12}/>
                                            <Text style={styles.readTitle}> 已关注 </Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                                <CardItem style={styles.cardItem}>
                                    <View style={styles.body}>
                                        <View>
                                            <Text style={styles.content}>{item.status}</Text>
                                        </View>
                                        <View style={styles.imageContainer}>
                                            <Image source={{uri: item.image1}} style={styles.image}/>
                                            <Image source={{uri: item.image2}} style={styles.image}/>
                                            <Image source={{uri: item.image3}} style={styles.image}/>
                                        </View>
                                    </View>
                                </CardItem>
                                <CardItem footer style={{paddingTop: 0, paddingBottom: 2}}>
                                    <View style={styles.footer}>
                                        <Button transparent style={styles.btn}>
                                            <Icon name="share" type='font-awesome' color={Colors.$navigationHeaderTextColor} size={16}/>
                                            <Text style={styles.footerText}>{item.share}</Text>
                                        </Button>
                                        <Button transparent style={styles.btn}>
                                            <Icon name="ios-chatbubbles" type='ionicon' color={Colors.$navigationHeaderTextColor} size={16} />
                                            <Text style={styles.footerText}>{item.comments}</Text>
                                        </Button>
                                        <Button transparent style={styles.btn}>
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
