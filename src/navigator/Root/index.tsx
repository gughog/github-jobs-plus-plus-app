/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Tabs from '../Tabs';
import JobView from '../JobView';
import HowToApplyJobView from '../HowToApplyJobView';

import {IconButton} from '../../components/IconButton';

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
          options={({_route}: any) => ({
            title: 'Job Details',
            headerRight: () => (
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <IconButton size={50} iconColor="" iconName="heart" />
                <IconButton
                  size={50}
                  iconColor=""
                  iconName="checkbox-marked-circle-outline"
                />
                <IconButton
                  size={50}
                  iconColor={theme.main.secondary}
                  iconName="share-variant"
                />
              </View>
            ),
            headerRightContainerStyle: {
              paddingHorizontal: 0,
            },
          })}
          // options={{
          //   title: 'Job Details',
          // }}
        />
        <Stack.Screen
          name="HowToApplyJobView"
          component={HowToApplyJobView}
          options={{
            title: 'How to Apply',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
