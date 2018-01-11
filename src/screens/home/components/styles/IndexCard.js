import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1,
    width: 105,
  },
  titleContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$blueThemeColor,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  valueContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  value: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$black,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  footer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  footerRedIcon: {
    color: Colors.$redColor,
  },
  footerRedText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$redColor,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  footerGreenText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$greenColor,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  sortUp: {
    top: 10,
  },
  sortDown: {
    bottom: 10,
  },
});

export default styles;
