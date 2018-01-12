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
    top: 5,
    left: 10,
    width: 20,
    height: 20,
  },
  searchInput: {
    borderRadius: 20, 
    margin: '2%', 
    marginLeft: '2%', 
    padding: '1%', 
    height: 20, 
    borderWidth: 1, 
    borderColor: Colors.$grayBackgroundColor,
    fontSize:10,
    fontFamily: 'Montserrat-Regular',
  },
  closeBtn: { 
    width: 20, 
    height: 20, 
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
