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
  buttonContainer: {
    margin: '4%',
  },
  buttonStyle: {   
    backgroundColor: '#6A97BE',
    borderRadius: 6,
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
    marginTop: '2%',
    marginBottom: '1%',
    marginLeft: '4%',
  },
  labelCheck: {
    fontWeight: 'bold',
  },
  verifyCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyLeft:{
    flex: 0.6,
    marginLeft: '4%',
    marginTop: '1%',
    marginBottom: '1%',
  },
  verifyRight: {
    flex: 0.4,
    borderLeftWidth: 0,
    marginRight: '4%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1%',
    marginBottom: '1%',
  },
  borderStyle: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textStyle: {
    fontSize: 16,
  },
  inputStyle: {
    marginTop: '1%',
    marginBottom: '1%',
    marginLeft: '4%',
    marginRight: '4%',
    padding: '1%',
  },
  // buttonStyle: {
  //   backgroundColor: '#6495ED',
  //   borderRadius: 3,
  //   paddingTop: 6,
  //   paddingBottom: 6,
  // },
  otherSiginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginTop: '4%',
    marginBottom: '1%',
    marginLeft: '12%',
    marginRight: '12%',
  },
  iconContainer: {
    width:40,
    height: 40,
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

export default styles;
