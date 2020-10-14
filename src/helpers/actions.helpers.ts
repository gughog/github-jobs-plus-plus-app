import {Alert, Share} from 'react-native';
import {Job} from '../types';
import {setFavorites, removeFromFavorites} from '../services/Storage.service';

export const longPressHandler = (position: Job) => {
  const {isFavorite} = position;
  const title = `${isFavorite ? 'Remove from' : 'Add to'} favorites?`;
  const description = `Do you want to ${
    isFavorite ? 'remove' : 'Add'
  } this position ${isFavorite ? 'from' : 'to'} your favorite job list?`;
  const buttonText = `${isFavorite ? 'Remove from' : 'Add to'} Favorites`;

  Alert.alert(title, description, [
    {
      text: 'Cancel',
      onPress: () => '',
      style: 'cancel',
    },
    {
      text: buttonText,
      onPress: async () => {
        try {
          if (isFavorite) {
            await removeFromFavorites(position);
          } else {
            await setFavorites(position);
          }
        } catch (error) {
          AlertWrapper({
            title: 'Some error has occured!',
            description: `The following error has occured: ${error.message}`,
            okayButton: {
              text: 'Ok',
              action: () => {},
            },
          });
        }
      },
      style: 'default',
    },
  ]);
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

// Share feature
export const ShareJob = async ({url, title, company}: Job) => {
  try {
    const result = await Share.share(
      {
        title: 'hdsjhsjdfhjksdhfjdkshfhdjksh',
        message: `Hey there! \n\nI'm sharing with you this job position I found on "Github Jobs ++": \n\nTitle: "${title}"\nCompany: "${company}". \n\nLink for the Job: ${url} \n\n---\nCheck out Github Jobs++ app on this link: https://github.com/gughog`,
      },
      {
        dialogTitle: 'Share this job position',
      },
    );

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {}
};
