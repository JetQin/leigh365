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
        height: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Colors.$whiteColor,
        paddingLeft: 10,
        paddingRight: 10,
      },
      footBtn: {
        flexDirection: 'column',
        height: 50,
      },
      footerItemIconText: {
        color: Colors.$tabText,
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
        height: 30,
        width: 50,
        borderRadius: 6,
        borderColor: Colors.$whiteColor,
        backgroundColor: Colors.$navigationHeaderTextColor,
        justifyContent: 'center',
        alignItems: 'center',
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
      closeBtnContainer: {
        position: 'absolute',
        right: 10,
        bottom: 100,
      },
      closeBtn: {
        width: 40,
        height: 40,
        borderRadius:20, 
        backgroundColor: Colors.$tabText,
        opacity:0.6, 
        justifyContent:'center', 
        alignItems:'center',
      },
      rewardBtn: {
        width: 40,
        height: 40,
        borderRadius:20, 
        backgroundColor: 'transparent',
        justifyContent:'center', 
        alignItems:'center',
        borderColor: Colors.$CommentBgColor,
        borderWidth:1,
      },
      rewardText: {
        color: Colors.$orangeTextColor,
        fontSize:14
      },
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      commentModal: {
        //justifyContent: 'center',
        position: 'absolute',
        margin: 0,
        bottom:40,
        width:'100%',
      },

      

});

export default styles;
