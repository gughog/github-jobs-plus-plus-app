import {NavigationProp, RouteProp} from '@react-navigation/native';

export interface Job {
  id: string;
  type?: string;
  url?: string;
  created_at: string;
  company?: string;
  company_url?: string;
  location: string;
  title: string;
  description?: string;
  how_to_apply?: string;
  company_logo?: string;

  // extended
  isFavorite?: boolean;
  applied?: boolean;
}

export interface NavigationProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}
