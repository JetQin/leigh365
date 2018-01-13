import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../constants/Colors';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row', 
    borderBottomColor: Colors.$navigationHeaderTextColor, 
    borderBottomWidth: 3,
    borderStyle: 'solid',
    height: 33,
    backgroundColor:Colors.$whiteColor,
    marginTop:20,
  },
  logoContainer: {
    flex: 0.1,
  },
  searchContainer: {
    flex: 0.8,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  closeContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  logo: {
    top: 3,
    left: 10,
    width: 22,
    height: 22,
  },
  searchInput: {
    borderRadius: 20, 
    margin: '2%', 
    marginLeft: '2%', 
    padding: '1%',
    paddingTop: '2%',  
    paddingLeft: '4%', 
    height: 23, 
    borderWidth: 1, 
    borderColor: Colors.$grayBackgroundColor,
    fontSize:14,
    fontFamily: 'Montserrat-Regular',
    backgroundColor:Colors.$grayBackgroundColor,
  },
  closeBtn: { 
    width: 23, 
    height: 23, 
    borderRadius: 10, 
    backgroundColor: Colors.$newsTabBgColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  stockContainer: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  }

});

export default styles;
