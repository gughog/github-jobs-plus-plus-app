import * as React from 'react';
import {HomeScreen} from '../views';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const NavigatorRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Github Jobs ++">
        <Stack.Screen name="Github Jobs ++" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorRoutes;
