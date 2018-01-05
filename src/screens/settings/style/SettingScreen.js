import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
  },
  headerTitle: {
    color: Colors.$navigationHeaderTextColor,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Montserrat-Bold',
  },
  layout: {
    flex: 1,
  },
});


export default styles;