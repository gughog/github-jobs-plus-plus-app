import {Alert} from 'react-native';
import {Job} from '../types';

export const longPressHandler = (position: Job) => {
  Alert.alert(
    'Add to favorites?',
    'Do you want to add this position to your favorite job list?',
    [
      {
        text: 'Cancel',
        onPress: () => '',
        style: 'cancel',
      },
      {
        text: 'Add to Favorites',
        onPress: () => {
          Alert.alert(
            'Added to favorites!',
            `The position "${position.title}" was added to your favorite list!`,
            [{text: 'Return'}],
          );
        },
        style: 'default',
      },
    ],
  );
};
