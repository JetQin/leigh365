import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
  },
  headerLeftContainer: {
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayTextColor,
    backgroundColor: 'transparent',
 
  },
  tabHeading:{
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$navigationHeaderTextColor,
    backgroundColor: 'transparent',
  },
  closeBtnContainer: {
    position: 'absolute',
    right: 10,
    bottom: 100,
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius:20, 
    backgroundColor: Colors.$blueTextColor,
    opacity:0.6, 
    justifyContent:'center', 
    alignItems:'center',
  },
});

export default styles;
