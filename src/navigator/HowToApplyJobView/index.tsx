import * as React from 'react';
import {WebView} from 'react-native-webview';
import theme from '../../themes';
import {NavigationProps} from '../../types';
import styles from './styles';

const HowToApplyJobView: React.FC<NavigationProps> = ({route}) => {
  const how_to_apply = route.params;

  // changing html color and fixing hyperlinks colors
  const coloredHtml = `
    <style>
      * a { color: ${theme.main.secondary} }
    </style>
    <div style="color: ${theme.main.textMain};">
      ${how_to_apply}
    </div>
  `;

  return (
    <WebView
      scrollEnabled={false}
      style={styles.description}
      tagsStyle
      scalesPageToFit={false}
      source={{html: coloredHtml as string}}
    />
  );
};

export default HowToApplyJobView;
