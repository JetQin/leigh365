import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.$blackBlueColor,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
  },
  redBorder: {
    borderLeftWidth: 5,
    borderStyle: 'solid',
    borderLeftColor: Colors.$redColor,
  },
  greenBorder: {
    borderLeftWidth: 5,
    borderStyle: 'solid',
    borderLeftColor: Colors.$redColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'blue',
  },
  headerLeft: {
    flex: 0.5,
  },
  headerCenter: {
    flex: 0.2,
  },
  headerRight: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$black,
    backgroundColor: 'transparent',
  },
  headerRedText: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$redColor,
    backgroundColor: 'transparent',
  },
  headerGreenText: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$greenColor,
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  footerLeft: {
    flex: 0.5,
  },
  footerCenter: {
    flex: 0.2,
  },
  footerRight: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'yellow',
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$black,
    backgroundColor: 'transparent',
  },
  footerRedText: {
    top: 5,
    marginLeft: 4,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$redColor,
    backgroundColor: 'transparent',
  },
  footerGreenText: {
    top: 5,
    marginLeft: 4,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$greenColor,
    backgroundColor: 'transparent',
  },
  icon: {
    marginLeft: 20,
  },
  separator: {
    flex: 1,
    height: 3,
    backgroundColor: Colors.$blackBlueColor,
  },

});

export default styles;
