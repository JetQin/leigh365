import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const DimensionsWidth = Dimensions.get('window').width;
const DimensionsHeight = Dimensions.get('window').height * 0.5;
const width = 60;
const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    deleteItemContainer: {
        flexDirection : 'row', 
        justifyContent: 'flex-end',
    },
    itemContainer: {
        flexDirection: 'row',
        margin: (DimensionsWidth/4-width)/2,
    },
    itemBtnContainer: {
        width: width, 
        justifyContent: 'center',
    },
    deleteContainer: {
        position: 'relative',
        right: 25 ,
        top: 10,
    },
    deleteBtnContainer: {
        justifyContent: 'center',
        width: 20,
        height: 20, 
        borderRadius: 10,
    },
    deleteIconContainer: {
        marginLeft: 0, 
        color: 'white', 
        fontSize: 20,
    }
});

export default styles;
