import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  row:{
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: Colors.$tableHeaderColor,
    height: 30,
    // backgroundColor:'blue',
  },
  headerRowText:{
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$whiteColor,
    textAlign: 'center',
  },
  columnText:{
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayTextColor,
    textAlign: 'center',
  },
  tabHeading:{
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$grayBackgroundColor,
    backgroundColor: 'transparent',
  },
  activeTabHeading:{
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$grayColor,
    backgroundColor: 'transparent',
  },
  column: {
    flex: 0.25,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: Colors.$tableHeaderColor,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftColor: Colors.$tableHeaderColor,
    borderRightColor: Colors.$tableHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnValue: {
    flex: 0.25,
    backgroundColor: Colors.$whiteColor,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftColor: Colors.$tableHeaderColor,
    borderRightColor: Colors.$tableHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
  }
});

export default styles;
