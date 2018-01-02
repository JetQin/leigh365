import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 3,
  },
  userTitle: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayTextColor,
    paddingLeft: 3,
    backgroundColor: 'transparent',
  },
  timeTitle: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$blueTextColor,
    paddingLeft: 3,
    backgroundColor: 'transparent',
  },
  readTitle: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$blueTextColor,
    backgroundColor: 'transparent',
  },
  body: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  status: {
    flex: 1,
  },
  content: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayTextColor,
    paddingLeft: 10,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayTextColor,
    paddingLeft: 10,
    backgroundColor: 'transparent',
  },
  image: {
    flex: 0.3,
    width: 50, 
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingRight: 0,
  }

});

export default styles;
