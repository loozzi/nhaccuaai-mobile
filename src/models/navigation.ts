import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../configs/navigation.route';
import routes from '../configs/routes';

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  typeof routes.detail
>;
