import * as React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Job, NavigationProps} from '../../types';
import styles from './styles';
import {formatDate} from '../../helpers/formatters.helpers';
import theme from '../../themes';

const ModalScreen: React.FC<NavigationProps> = ({route, navigation}) => {
  const {
    id,
    title,
    type,
    company,
    location,
    description,
    created_at,
    company_url,
    how_to_apply,
  } = route.params as Job;

  const coloredHtml = `
    <style> * a {color: ${theme.main.secondary}} </style>
    <div style="color: ${theme.main.textMain};">
      ${description}
    </div>
  `;

  return (
    <View key={id} style={styles.container}>
      <Text style={styles.chip}>
        {type}/{location}
      </Text>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={styles.company}
        onPress={() => company_url && Linking.openURL(company_url)}>
        <Icon name="office-building" size={15} /> &nbsp; {company}
      </Text>
      <Text style={styles.company}>
        <Icon name="calendar-clock" size={15} /> &nbsp; {formatDate(created_at)}
      </Text>
      <Text style={styles.subtitle}>
        <Icon name="file-document-outline" size={20} /> &nbsp;Job Description
      </Text>
      <WebView
        scrollEnabled={false}
        style={styles.description}
        tagsStyle
        scalesPageToFit={false}
        source={{html: coloredHtml as string}}
      />
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => {
          navigation.navigate('HowToApplyJobView', how_to_apply);
        }}>
        <Text style={styles.applyButtonText}>How to apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
