import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Colors from '../../../../../constants/Colors'

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

const styles = EStyleSheet.create({  
    root: {
        position: 'absolute',
        right: 10,
        bottom: 70,
    },
    topBtn: {
        width: 40,
        height: 40,
        borderRadius:10, 
        backgroundColor: Colors.$blueTextColor,
        opacity:0.6, 
        justifyContent:'center', 
        alignItems:'center',
    }

});

export default styles;
