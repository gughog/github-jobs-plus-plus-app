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
import {AlertWrapper} from '../../helpers/modals.helpers';
import {useJobs} from '../../contexts/JobsContext';

const Stack = createStackNavigator();

const IconStyle = {
  paddingLeft: 15,
};

type ModifierType = 'favorites' | 'applied';

const RootStackNavigator: React.FC = () => {
  const {fetchJobs} = useJobs();

  // adds to favorites, and re-run fetchJobs to reconcile and rerender view.
  const handlePress = async (params: Job, modifier: ModifierType) => {
    try {
      if (modifier === 'favorites') {
        await setFavorites(params);
      } else {
        await setApplied(params);
      }
      await fetchJobs();
    } catch (error) {
      AlertWrapper({
        title: 'Some error has occured!',
        description: `The following error has occured: ${error.message}`,
        okayButton: {
          text: 'Ok',
          action: () => fetchJobs(),
        },
      });
    }
  };

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
                  isActive={route.params.isFavorite}
                  activeColor={theme.main.actions.danger}
                  iconName={route.params.isFavorite ? 'heart' : 'heart-outline'}
                  onPress={() => {
                    route.params.isFavorite = !route.params.isFavorite;
                    return handlePress(route.params, 'favorites');
                  }}
                />
                <IconButton
                  size={50}
                  isActive={route.params.applied}
                  activeColor={theme.main.actions.success}
                  iconName={'checkbox-marked-circle-outline'}
                  onPress={() => {
                    route.params.applied = !route.params.applied;
                    return handlePress(route.params, 'applied');
                  }}
                />
                <IconButton
                  size={50}
                  isActive={true}
                  activeColor={theme.main.secondary}
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
