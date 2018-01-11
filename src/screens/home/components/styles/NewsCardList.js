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
    marginBottom: 10,
    marginBottom: 10,
    backgroundColor: Colors.$whiteColor,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderBottomColor: Colors.$newsCardBackgroundColor,
    borderTopColor: Colors.$newsCardBackgroundColor,
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
    top: 12,
    paddingLeft: 5,
    left: -30,
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
    width: width,
    left: -150,
    top: 15,
    bottom: 20,
  },
  footerIconWithNoImage:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    height: 40,
    width: width,
    left: -30,
    top: 15,
    bottom: 20,
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
