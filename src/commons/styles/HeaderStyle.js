import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../constants/Colors';

const headerstyles = EStyleSheet.create({
  headerStyle: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.$navigationHeaderTextColor,
    borderStyle: 'solid',
  },
  headerLeft: {
    flex: 1, 
    flexDirection: 'row', 
    width: 120,
  },
  headerRight: {
    flex: 1, 
    flexDirection: 'row' ,
  },
  iconContainer:{
    padding: 10,
    bottom: 5,
  },
  logo:{
    padding: 10,
    left: 10,
    width: 15,
    height: 15,
    top: 3,
  },
  tabbarIcon: {
    height: 23,
    width: 23,
  },
  title: {
    color: Colors.$navigationHeaderTextColor,
    top: 2,
    left: 15,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  text: {
    bottom: 10,
    left: 15,
    color: Colors.$navigationHeaderTextColor,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  }
});

export default headerstyles;
