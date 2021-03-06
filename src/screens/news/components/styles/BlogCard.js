import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 3,
  },
  ListItemContainer:{
    width: '100%',
    marginLeft: 0, 
    paddingRight: 0,
    paddingTop:0,
    paddingBottom:0,
  },
  cardItemContainer:{
    borderLeftWidth:0,
    borderRightWidth:0,
    borderTopWidth:0,
    borderRadius:0,
    marginLeft:0,
    marginRight:0,
    marginTop:0,
  },
  userTitle: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayTextColor,
    paddingLeft: 3,
    backgroundColor: 'transparent',
  },
  timeTitle: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$blueTextColor,
    paddingLeft: 3,
    backgroundColor: 'transparent',
  },
  readBtn: {
    height: 20,
    width: 50,
    borderColor: Colors.$navigationHeaderTextColor,
  },
  readTitle: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$navigationHeaderTextColor,
    backgroundColor: 'transparent',
  },
  cardItem: {
    paddingTop: 5, 
    paddingBottom: 5
  },
  body: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
  },
  status: {
    flex: 1,
  },
  content: {
    fontSize: 13,
    fontFamily: 'Montserrat-Bold',
    color: Colors.$grayTextColor,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:70,
  },

  image: {
    flex: 0.3,
    paddingTop: 5,
    paddingBottom: 5,
    height:'100%',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:10,
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$grayTextColor,
    paddingLeft: 10,
    backgroundColor: 'transparent',
  },
  btn: {
    height: 25,
  }

});

export default styles;
