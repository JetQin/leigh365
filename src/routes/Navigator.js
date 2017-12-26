import { StackNavigator } from 'react-navigation';
import { HomeNavigator } from './HomeNavigator';
import { LoginScreen, SigninScreen, SignupScreen, SearchScreen, ViewHtml, ReportScreen, ItemScreen } from '../screens';

export default StackNavigator({
  Home: { screen: HomeNavigator },
  Login: { screen: LoginScreen },
  Signin: { screen: SigninScreen },
  Signup: { screen: SignupScreen },
  Search: { screen: SearchScreen },
  ViewHtml: { screen: ViewHtml },
  Report: { screen: ReportScreen },
  Item: { screen: ItemScreen },
},
{
  mode: 'modal',
});
