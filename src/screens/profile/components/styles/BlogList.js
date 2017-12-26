import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 3,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
  },
  subtitle: {
    flex: 1,
  },
  contentContainer: {
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  content: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: Colors.$black,
    paddingLeft: 10,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 0.3,
    width: 50, 
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'space-b',
    justifyContent: 'flex-end',
    paddingTop: 86,
    paddingLeft: 10,
    paddingRight: 10,
  }

});

export default styles;
