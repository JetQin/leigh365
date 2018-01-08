import React, { Component } from 'react';
import { View, ScrollView, Text, AsyncStorage } from 'react-native';
import { Button } from 'native-base';
import { List, ListItem } from 'react-native-elements'

import styles from './styles/FollowerScreen';
import Colors from '../../../constants/Colors';


class FollowerScreen extends Component {

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
              <Text style={styles.headerTitle}>返回</Text>
            </Button>
        );
 
        return { headerStyle, headerLeft };
    };
    state={
     follower:[],
    }

    async componentDidMount(){
        const loginInfo = await AsyncStorage.getItem('@login');
        if (loginInfo) {
           const params = JSON.parse(loginInfo);
           const request = { userId: params.data.user_id }
           const response = await this.props.userFollowApi.getFollower(request);
           this.setState({follower: response.data.follower });
        }
    }


    render() {
        if(!this.state.follower){
            <View>
                <Text>全部关注</Text>
            </View>
        }
        return (
            <ScrollView>
                <Text>全部关注</Text>
                <List containerStyle={{marginBottom: 20}}>
                {
                    this.state.follower.map((l, i) => (
                    <ListItem
                        roundAvatar
                        avatar={{uri:l.user_avatar}}
                        key={i}
                        title={l.name}
                        rightTitle={
                            <Button bordered>
                                <Text>已关注</Text>
                            </Button>
                        }
                    />
                    ))
                }
                </List>
            </ScrollView>
        );
    }
}

export default FollowerScreen;