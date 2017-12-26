import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '$blackBlueColor',
  },
  avatar: {
    flex: 4,
    marginTop: 75,
  },
  titleContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    top: '2%',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
  },
  signinBtn: {
    top: '1%',
    paddingTop: 10,
  },
  bottom: {
    top: 20,
  },
  formTitle: {
    flexDirection: 'row',
    marginTop: '4%',
    marginLeft: '2%',
  },
  buttonStyle: {   
    backgroundColor: '#6A97BE',
  },
  flexContainer: {
    flexDirection: 'row',
    marginLeft: '2%',
    justifyContent: 'space-between'
  },
  cell: {
    flex: 0.3, 
    marginTop: '4%',  
  },
  smallBtn: {
    justifyContent: 'center',
  },
  logo: {
    top: 15,
    left: 10,
    width: 20,
    height: 20,
  },
  titleText: {
    // color: '$navigationHeaderTextColor',
    left: 15,
    fontSize: 18,
    paddingTop: 12,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
  },
  check: {
    marginLeft: 10,
    marginTop: 10,
  },
  labelCheck: {
    fontWeight: 'bold',
  },
  textInputView:{
    borderWidth: 1,
    borderColor: 'green',
    padding: 2,
    marginBottom: 20
  },
  textInput:{
    width: 200,
    height: 44
  },
  stateText: {
    paddingTop: 50,
    color: 'gray'
  }
});

export default styles;
