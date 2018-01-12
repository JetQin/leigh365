import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  chartContainer: {
    flex: 1,
    left: 0,
    top: 0,
    paddingLeft: 0,
    paddingTop: 0,
    width: 270,
    height: 300,
    backgroundColor: 'red',
  },
  lineContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  lineLeftContainer:{
    flex: 0.2,
    justifyContent:'center',
    alignItems:'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
  },
  lineRightContainer:{
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  narrowColumnContainer: {
    flex: 0.3,
    flexDirection: 'row',
  },
  wideColumnContainer: {
    flex: 0.35,
    flexDirection: 'row',
  },
  normalColumnContainer: {
    flex: 0.5,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  rightColumn: {
    flex: 0.5,
    alignItems:'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  headerText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$black,
    textAlign: 'right',
  },
  headerSubText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayTextColor,
    textAlign: 'right',
  },
  headerRedText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$redColor,
    textAlign: 'right',
  },
  headerGreenText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$greenColor,
    textAlign: 'right',
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
    textAlign: 'center',
  },
  labelRedText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$redColor,
    textAlign: 'right',
  },
  labelGreenText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$greenColor,
    textAlign: 'right',
  },
  labelText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$black,
    textAlign: 'center',
  },
  labelSimpleText: {
    paddingTop: 2,
    paddingLeft: 3,
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$black,
    textAlign: 'left',
  },
  chart: {
    flex: 1,
  },
});

export default styles;
