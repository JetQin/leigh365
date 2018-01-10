import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  headerTitle: {
    color: Colors.$navigationHeaderTextColor,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Montserrat-Bold',
  },

  title: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  rightTitle: {
    color: Colors.$followBackgroundColor,
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
  },
  rightTitleContainer: {
    flex: 0.25,
    height: 20,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.$followBackgroundColor,
  },
  
});

export default styles;
