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
import {Job} from '../../types';

import {setApplied, setFavorites} from '../../services/Storage.service';

const Stack = createStackNavigator();

const IconStyle = {
  paddingLeft: 15,
};

const iconStyleHandler = ({applied, isFavorite}: Job) => {
  return {
    favorite: {
      icon: isFavorite ? 'heart' : 'heart-outline',
      color: isFavorite ? theme.main.actions.danger : '',
    },
    applied: {
      icon: 'checkbox-marked-circle-outline',
      color: applied ? theme.main.actions.success : '',
    },
  };
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
          options={({route}: any) => ({
            title: 'Job Details',
            headerRight: () => (
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <IconButton
                  size={50}
                  iconColor={iconStyleHandler(route.params).favorite.color}
                  iconName={iconStyleHandler(route.params).favorite.icon}
                  onPress={() => setFavorites(route.params)}
                />
                <IconButton
                  size={50}
                  iconColor={iconStyleHandler(route.params).applied.color}
                  iconName={iconStyleHandler(route.params).applied.icon}
                  onPress={() => setApplied(route.params)}
                />
                <IconButton
                  size={50}
                  iconColor={theme.main.secondary}
                  iconName="share-variant"
                  onPress={() => ''}
                />
              </View>
            ),
            headerRightContainerStyle: {
              paddingHorizontal: 0,
            },
          })}
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
