import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Colors from '../../../../../constants/Colors';

const {height, width} = Dimensions.get('window');

const styles = EStyleSheet.create({
  root: {
    backgroundColor: Colors.$newsCardBackgroundColor,
    paddingTop: 5,
  },
  header: {
    backgroundColor: '$whiteColor',
  },
  footer: {
    flex: 1,
  },
  titleName:{
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$navigationHeaderTextColor,
    backgroundColor: 'transparent',
  },
  listContainer:{
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: Colors.$whiteColor,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  emptyView: {
    width: 0,
    height: 0,
  },
  avatarContainer: {
    width: 120,
    height: 100,
  },
  dateText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayTextColor,
    backgroundColor: 'transparent',
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$navigationHeaderTextColor,
    backgroundColor: 'transparent',
  },
  footerIcon:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    height: 40,
    width: width - 30,
    left: -140,
    marginTop:20,
  },
  footerIconWithNoImage:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    height: 40,
    width: width - 30-20,
  },
  separator: {
    flex: 1,
    height: 3,
    backgroundColor: Colors.$blackBlueColor,
  },

  icon: {
    marginLeft: 8,
    marginRight: 8,
  },
});

export default styles;
