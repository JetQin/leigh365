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

  },
  logo:{
    left: 10,
    width: 15,
    height: 15,
  },
  tabbarIcon: {
    height:18,
    width: 18,
  },
  title: {
    color: Colors.$navigationHeaderTextColor,
    left: 15,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  }
});

export default headerstyles;
