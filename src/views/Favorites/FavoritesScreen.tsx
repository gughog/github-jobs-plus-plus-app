import * as React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';

const FavoritesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Favorites Page </Text>
    </View>
  );
};

export default FavoritesScreen;
