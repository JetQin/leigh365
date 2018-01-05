import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'native-base';
import { List, ListItem, Divider } from 'react-native-elements'; 
import Colors from '../../../constants/Colors';
import styles from './style/SettingScreen';

class SettingScreen extends Component {

    // static defaultProps = {
    //     locationApi, postApi
    // }

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

    constructor(props){
        super(props);
        this.state = {
            name: 'wordpress',
            sex: '男',
            city: '北京',
        }
        this.logout = this.logout.bind(this);
    }

    logout() {
        Alert.alert('提示', '退出',[ { text: '确定' }],
                { cancelable: false }
        );
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View>
                <List>
                    <ListItem title='名字'  rightTitle={this.state.name} />
                    <ListItem title='性别'  rightTitle={this.state.sex} />
                    <ListItem title='地区'  rightTitle={this.state.city} />
                    <Divider style={{ height: 20 }} />
                    <ListItem title='帮助与反馈' hideChevron/>
                    <ListItem title='关于新历财经' hideChevron/>
                    <Divider style={{ height: 20 }} />
                    <ListItem title='退出登录' titleContainerStyle={{ alignItems:'center' }} onPress={this.logout} hideChevron />
                </List>
            </View>
        );
    }
}

export default SettingScreen;