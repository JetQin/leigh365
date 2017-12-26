import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container:{
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeft: {
    flex: 0.3, 
    fontSize: 16,
  },
  headerMid: {
    flex: 0.5, 
  },
  myInterest: {

  },
  myInterestContainer: {

  },
  editBtn: {

  },
  interestSuggest: {

  },
  interestSuggesContainer: {

  },
  cell: {
    flex: 0.3, 
    marginTop: '4%',  
  },
  smallBtn: {
    justifyContent: 'center',
  },
  buttonStyle: {   
    backgroundColor: '#6A97BE',
  },
  flexContainer: {
    flexDirection: 'row',
    marginLeft: '2%',
    justifyContent: 'space-between'
  },
});

export default styles;
