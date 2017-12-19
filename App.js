import React from 'react';
import axios from 'axios';
import { LoadingScreen } from './src/commons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Colors from './constants/Colors';
// import { cachedFonts } from './helpers';
import Root from './src/Root';
import store from './src/redux/store';

EStyleSheet.build(Colors);

class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    // this._loadAssetsAsync();
  }

  // async _loadAssetsAsync() {
  //   const fontAssets = cachedFonts([
  //     {
  //       Montserrat-Regular: require('./assets/fonts/Montserrat-Regular-Regular.ttf'),
  //     },
  //     {
  //       Montserrat-Bold: require('./assets/fonts/Montserrat-Regular-Bold.ttf'),
  //     },
  //     {
  //       montserratLight: require('./assets/fonts/Montserrat-Regular-Light.ttf'),
  //     },
  //     {
  //       montserratMed: require('./assets/fonts/Montserrat-Regular-Medium.ttf'),
  //     },
  //   ]);

  //   await Promise.all(fontAssets);
  //   this.setState({ fontLoaded: true });
  // }

  render() {
    // if (!this.state.fontLoaded) {
    //   return <LoadingScreen />;
    // }
    return (<Provider store={store}>
      <Root />
    </Provider>);
  }
}

export default App;
