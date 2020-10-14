import * as React from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDate} from '../../helpers/formatters.helpers';
import {Position} from './types';
import {AlertWrapper} from '../../helpers/modals.helpers';
import styles from './styles';
import {
  removeFromFavorites,
  setFavorites,
} from '../../services/Storage.service';
import {Job} from '../../types';
import {useJobs} from '../../contexts/JobsContext';

const fallbackImage = '../../assets/images/fallback.png';
const noLogo = '../../assets/images/no_logo.png';

const JobListItem: React.FC<Position> = ({
  position,
  navigation,
  refreshMethod,
}) => {
  const {id, title, company_logo, created_at, type, company} = position;

  const {fetchJobs} = useJobs();

  // for long press event
  const onLongPressHandler = (jobPosition: Job) => {
    console.log(jobPosition.title, ': ', jobPosition.isFavorite);
    const {isFavorite} = jobPosition;

    const alertTitle = `${isFavorite ? 'Remove from' : 'Add to'} favorites?`;
    const description = `Do you want to ${
      isFavorite ? 'remove' : 'Add'
    } this position ${isFavorite ? 'from' : 'to'} your favorite job list?`;
    const buttonText = `${isFavorite ? 'Remove from' : 'Add to'} Favorites`;

    Alert.alert(alertTitle, description, [
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
              await removeFromFavorites(jobPosition);
              await fetchJobs();
              refreshMethod && (await refreshMethod());
            } else {
              await setFavorites(jobPosition);
              await fetchJobs();
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

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('JobView', position);
      }}
      onLongPress={() => onLongPressHandler(position)}
      delayLongPress={500}>
      <View style={styles.container} key={id}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            defaultSource={require(fallbackImage)}
            source={{uri: company_logo || noLogo}}
            style={styles.logo}
          />
        </View>

        {/* Content */}
        <View style={styles.contentBody}>
          <Text numberOfLines={1} style={styles.contentTitle}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.contentCompany}>
            {company}
          </Text>
          <View style={styles.contentTypeContainer}>
            <Text style={styles.contentCreatedAt}>
              {formatDate(created_at)}
            </Text>
            <Text style={styles.contentType}>{type}</Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionContainer}>
          <Icon name="menu-right" style={styles.action} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobListItem;
