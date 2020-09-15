import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Tabs from '../Tabs';
import JobView from '../JobView';
import styles from './styles';
import theme from '../../themes';

const Stack = createStackNavigator();

const IconStyle = {
  paddingLeft: 15,
};

const RootStackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={styles}
        initialRouteName="MainTab">
        <Stack.Screen
          name="MainTab"
          component={Tabs}
          options={{
            title: 'Github Jobs ++',
            headerLeft: () => (
              <Icon
                color={theme.main.secondary}
                name="social-github"
                size={35}
                style={IconStyle}
              />
            ),
          }}
        />
        <Stack.Screen
          name="JobView"
          component={JobView}
          options={{
            title: 'Job Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
