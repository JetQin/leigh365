import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainerStyle: {
    flex: 0.75,
    marginRight: 25,
  },
  buttonRight: {
    flex: 0.25,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
  },
  headerLeft: {
    flex: 0.4,
  },
  headerCenter: {
    flex: 0.3,
  },
  headerRight: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$black,
    backgroundColor: 'transparent',
  },
  headerRedText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$redColor,
    backgroundColor: 'transparent',
  },
  headerGreenText: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$greenColor,
    backgroundColor: 'transparent',
  },
  buttonItem: {
    height: 20,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: Colors.$whiteColor,
    borderColor: '#A4D3EE',
    borderWidth: 1.2,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#A4D3EE',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
  },
  footerLeft: {
    flex: 0.4,
  },
  footerCenter: {
    flex: 0.3,
  },
  footerRight: {
    flex: 0.3,
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$black,
    backgroundColor: 'transparent',
  },
  footerRedText: {
    marginLeft: 2,
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$redColor,
    backgroundColor: 'transparent',
  },
  footerGreenText: {
    marginLeft: 2,
    fontSize: 18,
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
