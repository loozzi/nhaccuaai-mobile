import HomeScreen from '../screens/home';
import SignInScreen from '../screens/signin';
import routes from './routes';
interface NavigationConfig {
  name: string;
  element: any;
  link: string;
}

const navigationConfig: NavigationConfig[] = [
  {
    name: 'Home',
    element: HomeScreen,
    link: routes.home,
  },
  {
    name: 'Sign In',
    element: SignInScreen,
    link: routes.auth.signin,
  },
];

export default navigationConfig;
