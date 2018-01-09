import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from '../../../../../constants/Colors';

const styles = EStyleSheet.create({
  emptyView: {
    width: 0,
    height: 0,
  },

  footer: {
    flex: 0.2,
    flexDirection: 'row',
    paddingTop: 5
  },
  icon: {
    marginLeft: 8,
    marginRight: 8,
  },
  subtitlePic:{
    flex:0.2,
    marginRight:10,
  },
  subtitleContent:{
    flexDirection: 'column', 
    flex: 0.8,
  }

});

export default styles;
