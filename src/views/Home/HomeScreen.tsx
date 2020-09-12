import * as React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Home Page </Text>
    </View>
  );
};

export default HomeScreen;
