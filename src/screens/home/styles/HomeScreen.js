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
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indexContainer: {
    flex: 0.2,
    backgroundColor: Colors.$whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.5,
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
  text: {
    color: '$whiteColor',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    paddingTop: 80,
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
    resizeMode: 'cover',
  },

});

export default styles;
