import * as React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Job, NavigationProps} from '../../types';
import styles from './styles';
import {formatDate} from '../../helpers/formatters.helpers';
import theme from '../../themes';

const ModalScreen: React.FC<NavigationProps> = ({route}) => {
  const {
    id,
    title,
    type,
    company,
    location,
    description,
    company_logo,
    created_at,
    company_url,
    how_to_apply,
    url,
  } = route.params as Job;

  const coloredHtml = `<div style="color: ${theme.main.textMain}">${description}</div>`;

  return (
    <View style={styles.container}>
      <Text style={styles.chip}>
        {type}/{location}
      </Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>
        <Icon name="office-building" size={15} /> &nbsp; {company}
      </Text>
      <Text style={styles.company}>
        <Icon name="calendar-clock" size={15} /> &nbsp; {formatDate(created_at)}
      </Text>
      <Text style={styles.subtitle}>
        <Icon name="file-document-outline" size={20} /> &nbsp;Job Description
      </Text>
      <WebView
        style={styles.description}
        tagsStyle
        scalesPageToFit={false}
        source={{html: coloredHtml as string}}
      />
    </View>
  );
};

export default ModalScreen;
