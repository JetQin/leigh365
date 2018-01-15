import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  chart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    flex: 1,
    left: 0,
    top: 0,
    paddingLeft: 0,
    paddingTop: 0,
    width: 270,
    height: 300,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineContainer: {
    flex: 1,
    flexDirection: 'row',
    top: 0,
    left: 0,
  },
  redDot: {
    height: 20,
    width: 20,
    paddingRight: 10,
    borderRadius:10, 
    backgroundColor: Colors.$redColor,
  },
  grayDot: {
    height: 20,
    width: 20,
    paddingRight: 10,
    borderRadius:10, 
    backgroundColor: Colors.$grayColor,
  },
  greenDot: {
    height: 20,
    width: 20,
    paddingRight: 10,
    borderRadius:10, 
    backgroundColor: Colors.$greenColor,
  },
  columnContainer: {
    flex: 0.33,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnValueContainer: {
    flex: 0.33,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerText: {
    paddingTop: 2,
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$grayColor,
  },
  label: {
    left: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayColor,
    textAlign: 'center',
  },
  labelValue: {
    paddingRight: 10,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$black,
    textAlign: 'center',
  },
  labelRedText: {
    paddingTop: 2,
    paddingLeft: 0,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$redColor,
    textAlign: 'right',
  },
  labelGreenText: {
    paddingTop: 2,
    paddingLeft: 0,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$greenColor,
    textAlign: 'right',
  },
  labelGrayText: {
    paddingTop: 2,
    paddingLeft: 0,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayColor,
    textAlign: 'right',
  },

});

export default styles;
