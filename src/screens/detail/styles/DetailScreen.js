import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const styles = EStyleSheet.create({  
      footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: screenWidth,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE'
      },
      footerItem: {
        width: screenWidth / 2,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      footerItemIcon: {
        marginRight: 10,
        color: '#555',
      },
      footerItemIconText: {
        color: '#555',
      }

});

export default styles;
