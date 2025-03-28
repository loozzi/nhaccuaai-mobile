import TabNavigation from '../navigation/tab';
import HomeScreen from '../screens/home';
import SignInScreen from '../screens/signin';
import SignUpScreen from '../screens/signup';
import routes from './routes';
interface NavigationConfig {
  element: any;
  name: string;
}

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
