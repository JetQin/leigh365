import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Avatar, List, ListItem } from 'react-native-elements';
import { Button } from 'native-base';
import Colors from '../../../constants/Colors';
import styles from './styles/PostScreen';

class PostScreen extends Component {
    
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        const headerStyle = {
          backgroundColor: Colors.$whiteColor,
          borderBottomWidth: 3,
          borderBottomColor: Colors.$navigationHeaderTextColor,
          borderStyle: 'solid',
        };
        const headerLeft = (
            <Button transparent onPress={() => navigation.goBack()}>
              <Text style={styles.headerTitle}>取消</Text>
            </Button>
        );
    
        const headerRight = (
            <Button transparent onPress={() => console.log('test')}>
                <Text style={styles.headerTitle}>发布</Text>
            </Button>
        );
    
        return { headerStyle, headerLeft, headerRight };
    };

    constructor(props){
        super(props);
        this.state = {status: '', wordCount: 0, location: ''}
        this.updatePost = this.updatePost.bind(this);
    }

    updatePost(text) {
        this.setState({ status: text, wordCount: text.length });
    }
    
    render() {
        return (
            <View style={styles.root}>
                <TextInput
                    style={{height: 100, borderColor: 'gray', borderWidth: 1}}
                    multiline
                    maxLength={150}
                    onChangeText={this.updatePost}
                    value={this.state.status}
                />
                <View style={styles.statics}>
                    <Text>{this.state.wordCount}/150</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Avatar
                        large
                        title='+'
                        onPress={() => console.log('Works!')}
                        activeOpacity={0.7}
                        containerStyle={{ paddingLeft: 10, paddingRight: 10, paddingBottom:5 }}
                    />
                </View>
                <List>
                    <ListItem 
                        leftIcon={{ name: 'location-on', type:'materialIcons', color: '#BF6625' }}
                        title='南山区'
                    />
                </List>
            </View>
        );
    }
}

export default PostScreen;