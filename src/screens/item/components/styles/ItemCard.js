import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const DimensionsWidth = Dimensions.get('window').width;
const DimensionsHeight = Dimensions.get('window').height * 0.5;
const width = 60;
const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    btnContainer: {
        width: width, 
        marginLeft: (DimensionsWidth/4-width)/2, 
        marginRight: (DimensionsWidth/4-width)/2, 
        marginBottom:(DimensionsWidth/4-width)/2,
        paddingRight: 8
    },
    icoContainer: {
        fontSize: 20,
        marginLeft: 5,
    },
    textContainer: {
        paddingLeft: 5,
    }
});

export default styles;
