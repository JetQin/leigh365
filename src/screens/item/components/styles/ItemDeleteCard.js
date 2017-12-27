import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

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
        width: 20,
        height: 20, 
        borderRadius: 10,  
        position: 'relative',
        right: 12 ,
        bottom: 8,     
    },
    deleteIconContainer: {
        marginLeft: 0, 
        color: 'grey', 
        fontSize: 16,
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
    }
});

export default styles;
