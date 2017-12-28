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

  statics: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  uploadAvatar: {
    width: 100,
    height: 100,
  },

  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
  }

});

export default styles;
