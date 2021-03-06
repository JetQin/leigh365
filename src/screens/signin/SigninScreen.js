import React, { Component } from 'react';
import { View, AsyncStorage, Image, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Tabs, Tab, Title, Text, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import Colors from '../../../constants/Colors';
import styles from './styles/SigninScreen';
import { authenticate, register } from './actions';
import CheckBox from './components/CheckBox';
import Input from './components/Input';
import CountDownButton from './components/CountDownButton';
import { WordpressApi } from '../../../constants/api';
import UShare from './share/share'
import SharePlatform from './share/SharePlatform'

const api = new WordpressApi();

@connect(
  state => ({
    data: state.login,

  }),
  { authenticate, register }
)

class SigninScreen extends Component {
  static defaultProps = {
    password: true,
    api,
  };
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: '个人信息',
    titleStyle: { color: Colors.$redColor },
    headerStyle: {
      backgroundColor: Colors.$whiteColor,
      borderBottomWidth: 3,
      borderBottomColor: Colors.$navigationHeaderTextColor,
      borderStyle: 'solid',
    },
    headerLeft: (
      <View style={{ flex: 1, flexDirection: 'row',width: 150 }}>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon type='font-awesome' name='close' size={20}/>
        </Button>
        <Image source={require('../../../assets/imgs/logo.png')} style={styles.logo} />
        <Text style={styles.titleText}>新历财经</Text>
      </View>
    ),
    headerRight: (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button transparent onPress={() => navigation.navigate('Search')}>
          <Icon type='ionicon' name='md-search' size={30} color={Colors.$navigationHeaderTextColor} />
        </Button>
      </View>
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon type='font-awesome' name="home" size={25} color={tintColor} />
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      usernameHelp: '',
      password: '',
      passwordHelp: '',
      aotoLogin: false,
      email: '',
      emailHelp: '',
      rUsername: '',
      rUsernameHelp: '',
      password: '',
      rPasswordHelp: '',
      rPasswordRe: '',
      rPasswordReHelp: '',
      validateFlag: true,
      phoneNum: '',
      state: '这里显示状态',
      signup: 'cellphone',
      verifyImg: 'http://synebusiness.cn/verify.php?' + Math.random(),
      verifyCode: '',
      confirmVerifyCode: '',
    };
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeRegisterusername = this.changeRegisterusername.bind(this);
    this.changeRegisterPassword = this.changeRegisterPassword.bind(this);
    this.changeRegisterPasswordRe = this.changeRegisterPasswordRe.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this._requestAPI = this._requestAPI.bind(this);
    this.changeVerifyCode = this.changeVerifyCode.bind(this);
  }
  

  changeUsername(title) {
    this.setState({ username: title });
  }

  changePassword(passw) {
    this.setState({ password: passw });
  }

  changeVerifyCode(code) {
    this.setState({ confirmVerifyCode: code});
  }

  changeEmail(mail) {
    this.setState({ email: mail });
  }

  changeRegisterusername(rusername) {
    this.setState({ rUsername: rusername });
  }

  changeRegisterPassword(rpassword) {
    this.setState({ rPassword: rpassword });
  }

  changeRegisterPasswordRe(rpasswordRe) {
    this.setState({ rPasswordRe: rpasswordRe });
  }

  validatedEmail() {
    this.state.validateFlag = true;
    if (this.state.email === '' || this.state.email === null) {
      this.emailInput.setState({ helpInfo: '* 邮箱不能为空' });
      this.state.validateFlag = false;
    } else if (this.state.email) {
      const emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const reg = new RegExp(emailReg);
      if (!reg.test(this.state.email)) {
        this.emailInput.setState({ helpInfo: '* 请输入正确的邮箱格式' });
        this.state.validateFlag = false;
      } else {
        this.state.validateFlag = true;
      }
    }
  }
  validateRUsername() {
    this.state.validateFlag = true;
    if (this.state.rUsername === '' || this.state.rUsername === null) {
      this.rusernameInput.setState({ helpInfo: '* 用户名不能为空' });
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  validatePassword() {
    this.state.validateFlag = true;
    if (this.state.rPassword === '' || this.state.rPassword === null) {
      this.passwordInput.setState({ helpInfo: '* 密码不能为空' });
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  validateVerifyCode() {
    this.state.validateFlag = true;
    if(this.state.confirmVerifyCode === '' || this.state.confirmVerifyCode === null
       || this.state.confirmVerifyCode != this.state.verifyCode) {
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  validateRPasswordRe() {
    if (this.state.rPasswordRe === '' || this.state.rPasswordRe === null) {
      this.rPasswordReInput.setState({ helpInfo: '* 重复密码不能为空' });
      this.state.validateFlag = false;
    } else if (this.state.rPassword !== this.state.rPasswordRe) {
      this.rPasswordReInput.setState({ helpInfo: '* 请输入相同的密码' });
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  validatePassword() {
    if (this.state.password === '' || this.state.password === null) {
      // this.passwordInput.setState({ helpInfo: '* 密码不能为空' });
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  validateUsername() {
    if (this.state.username === '' || this.state.username === null) {
      // this.usernameInput.setState({ helpInfo: '* 用户名不能为空' });
      this.state.validateFlag = false;
    } else {
      this.state.validateFlag = true;
    }
  }
  /**
   * 注册
   * @returns
   * @memberof SigninScreen
   */
  signup() {
    if(this.state.signup === 'mailbox' ){
      this.validatedEmail();
      if (!this.state.validateFlag) {
        this.emailInput.setNativeProps({
          style: { borderColor: 'red' },
        });
        return;
      }
      this.validatePassword();
      if (!this.state.validateFlag) {
        this.passwordInput.setNativeProps({
          style: { borderColor: 'red' },
        });
        return;
      }
      const formData = {
        type: 'register',
        password: this.state.rPassword,
        email: this.state.email,
      };
  
      this.props.register(formData)
        .then((response) => {
          try {
            if (JSON.stringify(response.value.status)) {
              this.props.navigation.navigate('Signin');
            }
          } catch (error) {
            console.log(error);
          }
        })
        .catch(errors => console.log(errors));
    }
    else if(this.state.signup === 'cellphone') {
      this.validatePassword();
      if (!this.state.validateFlag) {
        this.passwordInput.setNativeProps({
          style: { borderColor: 'red' },
        });
        return;
      }
      this.validateVerifyCode();
      if (!this.state.validateFlag) {
        this.verifyCodeInput.setNativeProps({
          style: { borderColor: 'red' },
        });
        return;
      }
      const formData = {
        type: 'register',
        password: this.state.password,
        email: this.state.phoneNum,
      };
  
      this.props.register(formData)
        .then((response) => {
          try {
            if (JSON.stringify(response.value.status)) {
              this.props.navigation.navigate('Signin');
            }
          } catch (error) {
            console.log(error);
          }
        })
        .catch(errors => console.log(errors));
    }
  }

  /**
   * 登录
   * @memberof SigninScreen
   */
  login() {
    this.validateUsername();
    if (!this.state.validateFlag) {
      this.usernameInput._myInput.setNativeProps({
        style: { borderColor: 'red' },
      });
      return;
    }
    this.validatePassword();
    if (!this.state.validateFlag) {
      this.passwordInput._myInput.setNativeProps({
        style: { borderColor: 'red' },
      });
      return;
    }
    const formData = {
      type: 'login',
      login: this.state.username,
      password: this.state.password,
    };
    this.props.authenticate(formData)
      .then((response) => {
        try {
          AsyncStorage.setItem('@login', JSON.stringify(response.action.payload));
          AsyncStorage.setItem('@user_id', JSON.stringify(response.action.payload.data.user_id));
        } catch (error) {
          console.log(error);
        }
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }).catch(errors => console.log(errors));
  }

  changeStyle(obj) {
    obj.inputRef.setNativeProps({
      style: { borderColor: '#ccc' },
    });
    obj.setState({ helpInfo: '' });
  }

  changePhoneNum(obj) {
    this.setState({
      phoneNum: obj
    });
  }

  changeSignup(name) {
    this.setState({
      signup: name
    })
    if(name === 'weixin') {
      UShare.authLogin(SharePlatform.WECHAT, (result) => {
        // code: 0成功、1失败、2取消
        if(result.code === 0) {
            console.log('授权登录成功:' + 
                'userId: ' + result.uid + 
                'accessToken: ' + result.accessToken +
                'userName: ' + result.userName + 
                'userGender: ' + result.userGender + 
                'userAvatar: ' + result.userAvatar
            );
        } else {
            Alert.alert('登录失败');
        }
      }); 
    }
  }

  changeVerifyImg() {
    this.setState({
      verifyImg: 'http://synebusiness.cn/verify.php?rand=' + Math.random(),
    });
  }

  async  _requestAPI(shouldStartCounting){
    this.setState({
      state: '正在请求验证码'
    })
    this.state.verifyCode = '';
    let verifyCode = '';
    for(let i=0; i<6; i++) { 
      verifyCode += Math.floor(Math.random()*10); 
    } 
    this.state.verifyCode = verifyCode;
    const formData = {
      phoneNum: this.state.phoneNum,
      verifyCode: this.state.verifyCode,
    };
    const response = await this.props.api.sendVerifyCode(formData);
    const requestSucc = response.status;
    if(!requestSucc){
      Alert.alert("短信发送失败");
    }
    setTimeout(()=>{
      this.setState({
        state: `验证码获取${requestSucc ? '成功' : '失败'}`
      })
      shouldStartCounting && shouldStartCounting(requestSucc)
    }, 2000);
  }

  render() {
    const {phoneNum} = this.state;
    let signup = <View />;
    if(this.state.signup === 'cellphone'){
      signup= (
        <View>
          <View>
            <TextInput style={[styles.borderStyle, styles.inputStyle, styles.textStyle]} underlineColorAndroid='transparent'
              placeholder={'手机号' }
              value={phoneNum} 
              onChangeText={(value) => this.changePhoneNum(value)}
            />
          </View>
          <View>
            <TextInput style={[styles.borderStyle, styles.inputStyle, styles.textStyle]} underlineColorAndroid='transparent'
              placeholder={'密码'}
              secureTextEntry= {true}
              ref={(c) => { this.passwordInput = c; }}
            />
          </View>
          <View style={styles.verifyCodeContainer}>
            <View style={styles.verifyLeft}>
              <TextInput style={[styles.borderStyle, styles.textStyle]} underlineColorAndroid='transparent'
                placeholder={'验证码'}
                ref={(c) => { this.verifyCodeInput = c; }}
              />
            </View>
            <View style={[styles.borderStyle, styles.verifyRight]}>
              <CountDownButton
                timerTitle={'获取验证码'}
                enable={phoneNum.length > 10}
                onClick={(shouldStartCounting)=>{
                  this._requestAPI(shouldStartCounting)
                }}
                timerEnd={()=>{
                  this.setState({
                  state: '倒计时结束'
                  })
              }}/>
            </View>
          </View>
        </View>
      ); 
    }
    else if(this.state.signup === 'mailbox'){
      signup= (
        <View>
          <View>
            <TextInput style={[styles.borderStyle, styles.inputStyle, styles.textStyle]} underlineColorAndroid='transparent'
              placeholder={'邮箱' }
              onChangeText={this.changeEmail}
              ref={(c) => { this.emailInput = c; }}
            />
          </View>
          <View>
            <TextInput style={[styles.borderStyle, styles.inputStyle, styles.textStyle]} underlineColorAndroid='transparent'
              placeholder={'密码'}
              secureTextEntry= {true}
              onChangeText={this.changePassword}
              ref={(c) => { this.passwordInput = c; }}
            />
          </View>
          <View style={styles.verifyCodeContainer}>
            <View style={styles.verifyLeft}>
              <TextInput style={[styles.borderStyle, styles.textStyle]} underlineColorAndroid='transparent'
                  onChangeText={this.changeVerifyCode}
                  placeholder={'验证码'}
              />
            </View>
            <View style={[styles.borderStyle, styles.verifyRight]} >
              <Button transparent onPress={this.changeVerifyImg.bind(this)} >
                <Image source={{
                  uri: this.state.verifyImg,}}
                  style={{width: 100, height: 38}}
                />
              </Button>
            </View>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.root}>
        <Tabs initialPage={0}>
          <Tab heading='登录'>
            <View>
              <TextInput style={[styles.borderStyle, styles.inputStyle, styles.textStyle]} underlineColorAndroid='transparent'
                placeholder={'邮箱/手机号' }
                onChangeText={this.changeUsername}
                />
            </View>
            <View>
              <TextInput style={[styles.borderStyle, styles.inputStyle, styles.textStyle]} underlineColorAndroid='transparent'
                placeholder={'密码'}
                onChangeText={this.changePassword}
                secureTextEntry= {true}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button block style={styles.buttonStyle} onPress={this.login}>
                <Text style={{ fontSize: 17 }}>登录</Text>
              </Button>
            </View>
            <View style={styles.otherSiginContainer}>
              <Icon
                name='mailbox'
                type='material-community'
                color='#EEC900'
                size={20}
                containerStyle={[styles.iconContainer, {borderColor: '#EEC900'}]}
                onPress= {() => this.changeSignup('mailbox')}
              />
              <Icon
                name='weibo'
                type='zocial'
                color='#EE0000'
                size={20}
                containerStyle={[styles.iconContainer, {borderColor: '#EE0000'}]}
                onPress= {() => this.changeSignup('weibo')}
              />
              <Icon
                name='cellphone-iphone'
                type='material-community'
                color='#EE3B3B'
                size={20}
                containerStyle={[styles.iconContainer, {borderColor: '#EE3B3B'}]}
                onPress= {() => this.changeSignup('cellphone')}
              />
              <Icon
                name='weixin'
                type='font-awesome'
                color='#32CD32'
                size={20}
                containerStyle={[styles.iconContainer, {borderColor: '#32CD32'}]}
                onPress= {() => this.changeSignup('weixin')}
              />
            </View>
            <View style={styles.otherSiginContainer}>
              <Text style={ {fontSize: 12} }>账号</Text>
              <Text style={ {fontSize: 12} }>微博</Text>
              <Text style={ {fontSize: 12} }>手机</Text>
              <Text style={ {fontSize: 12} }>微信</Text>
            </View> 
          </Tab>
          <Tab heading='注册'>
            {signup}
            <View style={styles.buttonContainer}>
              <Button block style={styles.buttonStyle} onPress={this.signup}>
                <Text style={{ fontSize: 17 }}>注册</Text>
              </Button>
            </View>
            <View style={styles.otherSiginContainer}>
              <Icon
                name='mailbox'
                type='material-community'
                color='#EEC900'
                size={20}
                containerStyle={[styles.iconContainer, {borderColor: '#EEC900'}]}
                onPress= {() => this.changeSignup('mailbox')}
              />
              <Icon
                name='weibo'
                type='zocial'
                color='#EE0000'
                size={20}
                containerStyle={[styles.iconContainer, {borderColor: '#EE0000'}]}
                onPress= {() => this.changeSignup('weibo')}
              />
              <Icon
                name='cellphone-iphone'
                type='material-community'
                color='#EE3B3B'
                size={20}
                containerStyle={[styles.iconContainer, {borderColor: '#EE3B3B'}]}
                onPress= {() => this.changeSignup('cellphone')}
              />
              <Icon
                name='weixin'
                type='font-awesome'
                color='#32CD32'
                size={20}
                containerStyle={[styles.iconContainer, {borderColor: '#32CD32'}]}
                onPress= {() => this.changeSignup('weixin')}
              />
            </View>
            <View style={styles.otherSiginContainer}>
              <Text style={ {fontSize: 12} }>账号</Text>
              <Text style={ {fontSize: 12} }>微博</Text>
              <Text style={ {fontSize: 12} }>手机</Text>
              <Text style={ {fontSize: 12} }>微信</Text>
            </View>           
          </Tab>
        </Tabs>

      </View>
    );
  }
}

export default SigninScreen;
