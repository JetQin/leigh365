import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors'

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const styles = EStyleSheet.create({  
      footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: screenWidth,
        height: 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        paddingLeft: 10,
        paddingRight: 10,
      },
      footBtn: {
        flexDirection: 'column',
        height: 50,
      },
      footerItemIconText: {
        color: Colors.$navigationHeaderTextColor,
      },
      userTitle: {
        fontSize: 13,
        fontFamily: 'Montserrat-Regular',
        color: Colors.$grayTextColor,
        paddingLeft: 3,
        backgroundColor: 'transparent',
      },
      timeTitle: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: Colors.$blueTextColor,
        paddingLeft: 3,
        backgroundColor: 'transparent',
      },
      readBtn: {
        height: 20,
        width: 40,
        borderRadius: 6,
        borderColor: Colors.$whiteColor,
        backgroundColor: Colors.$navigationHeaderTextColor,
      },
      readTitle: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        color: Colors.$whiteColor,
        backgroundColor: 'transparent',
      },
      image: {
        flex: 1,
        paddingBottom: 10,
        height:screenWidth/2,
        width:screenWidth,
        paddingTop: 10,
      },

      

});

export default styles;
