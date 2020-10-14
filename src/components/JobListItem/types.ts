import {NavigationProp} from '@react-navigation/native';
import {Job} from '../../types';

export interface Position {
  position: Job;
  navigation: NavigationProp<any, any>;
  refreshMethod?: () => Promise<void>;
}
