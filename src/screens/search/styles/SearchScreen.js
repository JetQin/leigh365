import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row', 
    borderBottomColor: '$navigationHeaderTextColor', 
    borderBottomWidth: 3,
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
    top: 15,
    left: 10,
    width: 20,
    height: 20,
  },
  searchInput: {
    borderRadius: 20, 
    margin: '2%', 
    marginLeft: '2%', 
    padding: '1%', 
    height: 30, 
    borderWidth: 1, 
    borderColor: '#ccc',
  },
  closeBtn: { 
    width: 30, 
    height: 30, 
    borderRadius: 15, 
    backgroundColor: '#EFF8FF',
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
