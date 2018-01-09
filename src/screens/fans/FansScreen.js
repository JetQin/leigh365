import React, { Component } from 'react';
import { View, ScrollView, Text, AsyncStorage } from 'react-native';
import { Button } from 'native-base';
import { List, ListItem } from 'react-native-elements'

import styles from './styles/FansScreen';
import Colors from '../../../constants/Colors';
import { UserFollowApi } from '../../../constants/';

const userFollowApi = new UserFollowApi();

class FansScreen extends Component {

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
        fans:[],
    };

    async componentDidMount(){
        // const loginInfo = await AsyncStorage.getItem('@login');
        // if (loginInfo) {
        //    const params = JSON.parse(loginInfo);
        //    const request = { userId: params.data.user_id }
           const request = { userId: 1 }
           const response = await this.props.userFollowApi.getFans(request);
           this.setState({fans: response });
        // }
    }


    render() {
        if(!this.state.fans){
            <View style={styles.title}>
                <Text>全部粉丝</Text>
            </View>
        }
        return (
            <ScrollView>
                <View style={styles.title}>
                    <Text>全部粉丝</Text>
                </View>
                <List containerStyle={{marginBottom: 20}}>
                {
                    this.state.fans.map((l, i) => (
                    <ListItem
                        roundAvatar
                        hideChevron
                        avatar={{uri:l.userAvatar}}
                        key={i}
                        title={l.username}
                        rightTitle={'+关注'}
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

export default FansScreen;