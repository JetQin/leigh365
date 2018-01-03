import React, { Component } from 'react';
import { View, ScrollView, Text, Image, RefreshControl } from 'react-native';
import { Icon } from 'react-native-elements';
import { List, ListItem, Card, CardItem, Thumbnail, Button, Left, Body, Right} from 'native-base';

import Colors from '../../../../constants/Colors';
import styles from './styles/BlogList';

export default class BlogList extends Component {

    constructor(props) {
        super(props);
        this._onRefresh = this._onRefresh.bind(this);
        this.state = { refreshing: false,blogs: [] };
    }

    componentDidMount(){
        this.setState({blogs: this.props.blogs})
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        this.props.scroll().then(() => {
            this.setState({ refreshing: false, blogs: this.props.blogs });
        });
    }

    render() {
        if (!this.props.blogs) {
            return (<View />);
        }
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
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
                                                <Text style={styles.timeTitle} note>{item.timestamp}</Text>
                                            </Body>
                                        </Left>
                                        <Right>
                                            <Button bordered small><Text style={styles.readTitle}> {item.reading} 阅读 </Text></Button>
                                        </Right>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <View style={styles.body}>
                                            <View>
                                                <Text style={styles.content}>{item.content}</Text>
                                            </View>
                                            <View style={styles.imageContainer}>
                                                <Image source={{uri: item.image}} style={{height: 100, flex: 1}}/>
                                            </View>
                                        </View>
                                    </CardItem>
                                    <CardItem>
                                        <View style={styles.footer}>
                                            <Button transparent>
                                                <Icon name="share" type='font-awesome' color={Colors.$navigationHeaderTextColor} size={16}/>
                                                <Text style={styles.footerText}>{item.shares}</Text>
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
