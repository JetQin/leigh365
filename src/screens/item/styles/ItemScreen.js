import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../constants/Colors';

const styles = EStyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '2%',
  },
  headerLeft: {
    flex: 0.3, 
    fontSize: 16,
  },
  headerMid: {
    flex: 0.65, 
  },
  myInterest: {

  },
  myInterestContainer: {

  },
  editBtn: {
    height: '40%',
    width: 40,
    marginTop: '4%'
  },
  editText: {
    color: Colors.$redColor, 
    fontSize: 12, 
    paddingLeft: '18%'
  },
  interestSuggest: {

  },
  interestSuggesContainer: {

  },
});

export default styles;
