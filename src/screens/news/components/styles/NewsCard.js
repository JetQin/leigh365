import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';
import {Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const styles = EStyleSheet.create({
  titleContainer:{
    flexDirection: 'row', 
    flex: 1, 
    justifyContent: 'space-between',
  },
  leftTitleContainer:{
    flexDirection: 'row', 
    alignItems: 'center',
    paddingLeft:10,
  },
  loginInfo:{
    flexDirection:'column',
    paddingLeft:10 
  },
  loginText:{
    color:'#949494',
    fontWeight:'bold',
  },
  rightTitleContainer:{
    flexDirection: 'row', 
    alignItems: 'center',
    paddingRight: 30
  },
  btnContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  interestBtn:{
    justifyContent:'center',
    alignItems:'center', 
    borderColor: '#2C89F6',
    backgroundColor:'#2C89F6',  
    height: 20,
    width:40
  },
  subTitleContainer:{
    flexDirection: 'row', 
    flex: 1,
  },
  subtitlePic:{
    flex:0.2, 
    marginRight:10,  
  },
  emptyView: {
    width: 0,
    height: 0,
  },
  imgView:{
    width:screenWidth*0.2,
    height:screenWidth*0.2
  },
  subtitleContent:{
    flexDirection: 'column', 
    flex: 0.8,
  },
  content:{
    fontWeight:'bold',
    textAlign:'left',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight:24,
    color: '#336DA4',
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop: 5
  },
  footerMargin:{
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop: 5,
    marginLeft:'10%',
    marginRight:'10%',
  },
  timeContainer:{
    fontWeight:'bold',
    fontSize: 10,
    color: '#C9C9C9',
    backgroundColor: 'transparent',
  },
  icon: {
    marginRight: 5,
  },
  
  

});

export default styles;
