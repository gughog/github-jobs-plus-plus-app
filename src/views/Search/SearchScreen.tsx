import * as React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';

const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Search Page </Text>
    </View>
  );
};

export default SearchScreen;
