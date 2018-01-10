import React from 'react';
import axios from 'axios';
import { LoadingScreen,SplashScreen } from './src/commons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Colors from './constants/Colors';
import Root from './src/Root';
import store from './src/redux/store';

EStyleSheet.build(Colors);

class App extends React.Component {
  state = {
    fontLoaded: false,
    splashLoaded: false,
  }

  constructor(props){
    super(props);
    this.splash = this.splash.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.splash, 2000);
  }

  splash() {
    this.setState({ splashLoaded: true });
    clearInterval(this.timer);
  }


  render() {
    if (!this.state.splashLoaded) {
        return <SplashScreen />;
      }
    return (<Provider store={store}>
      <Root />
    </Provider>);
  }
}

export default App;
