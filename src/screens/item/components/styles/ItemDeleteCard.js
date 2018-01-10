import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Colors from '../../../../../constants/Colors';

const DimensionsWidth = Dimensions.get('window').width;
const DimensionsHeight = Dimensions.get('window').height * 0.5;
const btnWidth = 60;
const btnContainerWidth = btnWidth+20;
const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    deleteBtnContainer: {
        justifyContent: 'center',
        width: 16,
        height: 16, 
        borderRadius: 8,  
        position: 'relative',
        right: 10 ,
        bottom: 8, 
        backgroundColor:'#C9C9C9', 
    },
    deleteIconContainer: {
        marginLeft: 0, 
        marginRight: 0,
        color: Colors.$whiteColor, 
        fontSize: 12,
    },
    itemContainer: {
        marginLeft: (DimensionsWidth/4-btnContainerWidth)/2, 
        marginRight: (DimensionsWidth/4-btnContainerWidth)/2, 
        width:btnContainerWidth,
        padding:10, 
        flexDirection: 'row',
        
    },
    btnContainer: {
        width: btnWidth, 
        justifyContent: 'center',
        backgroundColor:'#F4F5F7',
    }
});

export default styles;
