import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height * 0.5;

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '$blackBlueColor',
  },
  topContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexContainer: {
    flex: 0.16,
    backgroundColor: Colors.$whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.44,
    backgroundColor:Colors.$newsCardBackgroundColor,
  },
  title: {
    color: Colors.$navigationHeaderTextColor,
    left: 15,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  logo: {
    left: 10,
    width: 15,
    height: 15,
  },
  slide: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
  },
  textContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  text: {
    color: '$whiteColor',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    paddingLeft: 10, 
    paddingRight: 10,
    position:'absolute',
    bottom: 50,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor: 'transparent',
  },
  image: {
    width: width,
    height: height,
    zIndex: -1,
    position:'absolute',
    top: 0,
    left: 0,
    resizeMode: 'stretch',
  },

});

export default styles;
