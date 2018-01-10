import React, { Component } from 'react';
import { View, ScrollView, Text, AsyncStorage } from 'react-native';
import { Button } from 'native-base';
import { List, ListItem } from 'react-native-elements'

import { UserFollowApi } from '../../../constants/';
import styles from './styles/FollowerScreen';
import Colors from '../../../constants/Colors';


const userFollowApi = new UserFollowApi();

class FollowerScreen extends Component {

    static defaultProps = {
        userFollowApi,
    }

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
        // const loginInfo = await AsyncStorage.getItem('@login');
        // if (loginInfo) {
        //    const params = JSON.parse(loginInfo);
           const request = { userId: 1}
           const response = await this.props.userFollowApi.getFollower(request);
           this.setState({follower: response });
        // }
    }


    render() {
        if(!this.state.follower){
            <View style={styles.title}>
                <Text>全部关注</Text>
            </View>
        }
        return (
            <ScrollView>
                <View style={styles.title}>
                    <Text>全部关注</Text>
                </View>
                <List containerStyle={{marginBottom: 20}}>
                {
                    this.state.follower.map((l, i) => (
                    <ListItem
                        roundAvatar
                        hideChevron
                        avatar={{uri:l.userAvatar}}
                        key={i}
                        title={l.username}
                        rightTitle={'√已关注'}
                        rightTitleStyle={styles.rightTitle}
                        rightTitleContainerStyle={styles.rightTitleContainer}

                    />
                    ))
                }
                </List>
            </ScrollView>
        );
    }
}

export default FollowerScreen;