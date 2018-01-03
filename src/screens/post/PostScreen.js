import React, { Component } from 'react';
import { View, Text, Image, TextInput, Alert, AsyncStorage } from 'react-native';
import { Avatar, List, ListItem } from 'react-native-elements';
import { Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import { LocationApi, PostApi } from '../../../constants/';

import Colors from '../../../constants/Colors';
import styles from './styles/PostScreen';


const locationApi = new LocationApi();
const postApi = new PostApi();
class PostScreen extends Component {
    
    static defaultProps = {
        locationApi, postApi
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
              <Text style={styles.headerTitle}>取消</Text>
            </Button>
        );
    
        const headerRight = (
            <Button transparent onPress={() => params.savePost()}>
                <Text style={styles.headerTitle}>发布</Text>
            </Button>
        );
    
        return { headerStyle, headerLeft, headerRight };
    };

    constructor(props){
        super(props);
        this.state = {status: '', wordCount: 0, location: '', image:'', city: '北京' }
        this.updatePost = this.updatePost.bind(this);
        this.selectImage = this.selectImage.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.getCityByPosition = this.getCityByPosition.bind(this);
        this.savePost = this.savePost.bind(this);
    }

    componentDidMount() {
        this.getPosition();
        this.props.navigation.setParams({ savePost: this.savePost });
    }

    updatePost(text) {
        this.setState({ status: text, wordCount: text.length });
    }
    
    async savePost(){
        // const loginInfo = await AsyncStorage.getItem('@login');
        // if (loginInfo) {
            // const login = JSON.parse(loginInfo);
            const params = { 
                type: 'post_status', 
                userId: 1,
                content: this.state.status,
                image: this.state.imageSource.uri,
                city: this.state.city,
            };
            const response = await this.props.postApi.post(params);
            console.log(response);
            if(response.status){
                this.props.navigation.goBack()
            }
        // }
        // else{
        //     Alert.alert('提示', ' 发布成功',
        //         [
        //         { text: '确定' },
        //         ],
        //         { cancelable: false }
        //     );
        // }
    }

    getPosition(){
        navigator.geolocation.getCurrentPosition(async(position) =>{
            const positionData = position.coords;
            console.log(positionData.latitude);
            console.log(positionData.longitude);
            // this.getPosition(positionData);
            console.log('get position');
            if(positionData) {
                const response = await this.props.locationApi.getPosition(positionData);
                if(response.result) {
                    this.setState({city: response.result.addressComponent.city });
                }
            }
        }); 
    }

    async getCityByPosition(positionData){
        const response = await this.props.locationApi.getPosition(positionData);
        console.log(response);
    }

    selectImage() {
        let options = {
            title: '选择照片',
            takePhotoButtonTitle: '拍照',
            quality: 0.1,
            chooseFromLibraryButtonTitle: '相册',
            cancelButtonTitle: "取消",
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: 'data:image/jpeg;base64,' + response.data };
                // let source = { uri: response.uri };
                this.setState({ imageSource: source });
            }
        });

    }

    render() {
        return (
            <View style={styles.root}>
                <TextInput
                    style={{height: 100, borderColor: 'gray', borderWidth: 1}}
                    multiline
                    autoFocus
                    maxLength={150}
                    onChangeText={this.updatePost}
                    value={this.state.status}
                />
                <View style={styles.statics}>
                    <Text>{this.state.wordCount}/150</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={this.state.imageSource} style={styles.uploadAvatar} />
                    <Avatar
                        title='+'
                        width={100}
                        height={100}
                        containerStyle={{ width:100,height:100 }}
                        onPress={this.selectImage}
                        activeOpacity={0.7}
                        containerStyle={{ paddingLeft: 10, paddingRight: 10, paddingBottom:5 }}
                    />
                </View>
                <List>
                    <ListItem leftIcon={{ name: 'location-on', type:'materialIcons', color: '#BF6625' }} title={this.state.city} />
                </List>
            </View>
        );
    }
}

export default PostScreen;