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

export interface AlertWrapperProps {
  title: string;
  description: string;
  cancelButton?: {
    text: string;
    action: () => void;
  };
  okayButton: {
    text: string;
    action: () => void;
  };
}

export const AlertWrapper = (props: AlertWrapperProps) => {
  const {title, description, okayButton, cancelButton} = props;

  if (!cancelButton) {
    Alert.alert(title, description, [
      {
        text: okayButton.text || 'Ok',
        onPress: okayButton.action,
        style: 'default',
      },
    ]);

    return true;
  }
  Alert.alert(title, description, [
    cancelButton && {
      text: cancelButton.text,
      onPress: cancelButton.action,
      style: 'cancel',
    },
    {
      text: okayButton.text || 'Ok',
      onPress: okayButton.action,
      style: 'default',
    },
  ]);
  return true;
};
