import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Colors from '../../../../../constants/Colors';

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 3,
  },
  slide: {
    flex: 1,
    backgroundColor: 'black',
  },
  thumbnail: {
    flex: 1
  },
  imageContainer: {
   
  },
  slide: {
    width: 120,
    height: 180,
  },
  slideInnerContainer: {
      width: 150,
      flex: 1,
      // backgroundColor: 'blue',
  },
  image: {
    height: 180,
    width: 120,
  },
});

export default styles;
