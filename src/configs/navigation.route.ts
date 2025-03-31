import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import TabNavigation from '../navigation/tab';
import DetailScreen from '../screens/detail';
import HomeScreen from '../screens/home';
import SignInScreen from '../screens/signin';
import SignUpScreen from '../screens/signup';
import routes from './routes';

interface NavigationConfig {
  element: any;
  name: string;
  options?: NativeStackNavigationOptions;
}

export type RootStackParamList = {
  [key: string]: any;
  [routes.detail]: {id: number; permalink?: string; type?: string};
};

const navigationConfig: NavigationConfig[] = [
  {
    element: TabNavigation,
    name: routes.home,
  },
  {
    element: SignInScreen,
    name: routes.auth.signin,
  },
  {
    element: SignUpScreen,
    name: routes.auth.signup,
  },
];

export default navigationConfig;
