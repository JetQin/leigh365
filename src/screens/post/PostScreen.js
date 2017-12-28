import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Avatar, List, ListItem } from 'react-native-elements';
import { Button } from 'native-base';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

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
        this.state = {status: '', wordCount: 0, location: '', image1:'', image2: '', image3: '' }
        this.updatePost = this.updatePost.bind(this);
        this.selectImage = this.selectImage.bind(this);
    }

    updatePost(text) {
        this.setState({ status: text, wordCount: text.length });
    }
    
    selectImage() {
        // let options = {
        //     title: '选择照片',
        //     takePhotoButtonTitle: '拍照',
        //     chooseFromLibraryButtonTitle: '相册',
        //     cancelButtonTitle: "取消",
        // };

        // ImagePicker.showImagePicker(options, (response) => {
        //     console.log('Response = ', response);
          
        //     if (response.didCancel) {
        //       console.log('User cancelled image picker');
        //     }
        //     else if (response.error) {
        //       console.log('ImagePicker Error: ', response.error);
        //     }
        //     else if (response.customButton) {
        //       console.log('User tapped custom button: ', response.customButton);
        //     }
        //     else {
        //         // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        //       let source = { uri: response.uri };
        //     //   this.setState({ image1: response.uri });
        //     //   console.log(this.state);
        //          this.setState({ avatarSource: source });
        //     }
        // });

        ImagePicker.openPicker({
            width: 100,
            height: 100,
            // multiple: true,
            // minFiles: 1,
            // maxFiles: 3,
            cropping: true
          }).then(image => {
            console.log(image);
          });

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
                    <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
                    <Avatar xlarge
                        title='+'
                        onPress={this.selectImage}
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