import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDate} from '../../helpers/formatters.helpers';
import {Position} from './types';
import {longPressHandler} from '../../helpers/modals.helpers';
import styles from './styles';

const fallbackImage = '../../assets/images/fallback.png';
const noLogo = '../../assets/images/no_logo.png';

const JobListItem: React.FC<Position> = ({position}) => {
  const {id, title, company_logo, created_at, type, company} = position;
  return (
    <TouchableOpacity
      onPress={() => {
        longPressHandler(position);
      }}
      onLongPress={() => {
        longPressHandler(position);
      }}
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
