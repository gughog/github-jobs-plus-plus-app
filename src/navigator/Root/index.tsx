import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Tabs from '../Tabs';
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
        initialRouteName="maintab">
        <Stack.Screen
          name="maintab"
          component={Tabs}
          options={{
            title: 'Github Jobs ++',
            headerLeft: () => (
              <Icon
                color={theme.main.textMain}
                name="social-github"
                size={35}
                style={IconStyle}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
