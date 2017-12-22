import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles/SplashScreen';

const LoadingScreen = () => (
  <View style={styles.root}>
    <Image source={require('../../assets/imgs/homeUI.gif')} />
  </View>
);

export default LoadingScreen;
