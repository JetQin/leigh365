/**
 * https://github.com/facebook/react-native
 * @flow 分享弹窗
 */


import React, {Component} from 'react';
import {View, TouchableOpacity, Alert,StyleSheet, Dimensions, Modal, Text, Image} from 'react-native';

const {width, height} = Dimensions.get('window');
const dialogH = 200;

export default class ShareAlertDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.show,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isVisible: nextProps.show});
    }

    closeModal() {
        this.setState({
            isVisible: false
        });
        this.props.closeModal(false);
    }

    renderDialog() {
        return (
            <View style={styles.modalStyle}>
                <Text style={styles.text}>选择分享方式</Text>
                <View style={{width: '100%',backgroundColor: 'grey',height:1}}/>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
                    <TouchableOpacity style={styles.item} onPress={() => Alert.alert('分享到微信朋友圈')}>
                        <Image resizeMode='contain' style={styles.image}
                               source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}/>
                        <Text>微信朋友圈</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Image resizeMode='contain' style={styles.image}
                               //source={require('../images/share_ic_weixin.png')}/>
                               source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}/>
                        <Text>微信好友</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Image resizeMode='contain' style={styles.image}
                               source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}/>
                        <Text>新浪微博</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%',backgroundColor: 'grey',height:1}}/>
            </View>
        )
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <Modal
                    transparent={true}
                    visible={this.state.isVisible}
                    animationType={'fade'}
                    onRequestClose={() => this.closeModal()}>
                    <TouchableOpacity style={styles.container} activeOpacity={1}
                                      onPress={() => this.closeModal()}>
                        {this.renderDialog()}
                    </TouchableOpacity>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalStyle: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: width,
        height: dialogH,
        backgroundColor: '#ffffff'
    },
    subView: {
        width: width,
        height: dialogH,
        backgroundColor: '#ffffff'
    },
    text: {
        flex: 1,
        fontSize: 18,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    item: {
        width: width / 3,
        height: 100,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    image: {
        width: 60,
        height: 60,
        marginBottom: 8
    },
});