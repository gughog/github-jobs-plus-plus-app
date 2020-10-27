import * as React from 'react';
import {Text, View} from 'react-native';
import {InputLabelProps} from './types';
import styles from './styles';

const InputLabel: React.FC<InputLabelProps> = ({children, label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      {children}
    </View>
  );
};

export default InputLabel;
