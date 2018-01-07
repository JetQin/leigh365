import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  layout: {
    flex: 1,
  },
  top: {
    flex: 0.6,
    backgroundColor: '#F1F8FF',
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
  },
  bottom: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    left: 0,
  },
  // 头像
  avatarContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    // height: 100,
    // width: 100,
    // borderRadius: 50,
    // backgroundColor: Colors.$blueTextColor,
    // paddingLeft: (Dimensions.get('window').width / 2) - 100,
  },
  avatarBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    left: 5,
    height:84,
    width:84,
    borderRadius: 42,
    backgroundColor: Colors.$avatarBackground,
  },
  avatar:{
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.$whiteColor,
  },
  // 设置
  settingContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingBtn: {
    position: 'relative',
    left: -5,
    top: 30,
    alignItems: 'flex-end',
  },
  registerBtn: {
    height:30,
    width: 85,
  },
  // 我的收藏
  myCollectContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  collectContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.$whiteColor,
    borderWidth: 2,
    borderColor: Colors.$followCircle,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  headerTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.$navigationHeaderTextColor,
    // left: 15,
    fontSize: 18,
    paddingLeft: 10,
    fontFamily: 'Montserrat-Bold',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  labelText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  label: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  collectText: {
    alignItems: 'center',
  },
  // 充值
  payContainer: {
    // height: '37%',
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  paneContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '10%',
  },

  paneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#58A6F1',
  },

  moneyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '10%',
  },
  moneyText: {
    width: '20%',
    justifyContent: 'center',
    backgroundColor: '#EEF2E4',
    alignItems: 'center',
  },
  buttonStyle: {
    width: '20%',
    justifyContent: 'center',
    backgroundColor: '#6A97BE',
    alignItems: 'center',
    marginLeft: '40%',
  },
  logo: {
    top: 15,
    left: 10,
    width: 20,
    height: 20,
  },
  avatarPane: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  avatarImage: {
    width: 80, 
    height: 80,
  },
  avatarViewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

});

export default styles;
