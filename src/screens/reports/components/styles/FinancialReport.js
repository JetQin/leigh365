import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  lineContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    flexDirection: 'row',
  },
  columnContainer: {
    flex: 0.5,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightColumn: {
    flex: 0.5,
    alignItems:'flex-end',
    justifyContent: 'center',
  },
  tabHeading:{
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$grayBackgroundColor,
    backgroundColor: 'transparent',
  },
  activeTabHeading:{
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$grayColor,
    backgroundColor: 'transparent',
  },
  labelTitle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$grayColor,
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$grayColor,
    textAlign: 'left',
  },
  labelText: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$black,
    textAlign: 'right',
  },
});

export default styles;
