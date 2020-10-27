/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import styles from './styles';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {FAB as FloatingButton} from 'react-native-paper';
import {NavigationProps} from '../../types';
import theme from '../../themes';
import {JobListItem} from '../../components/JobListItem';
import useFavoriteJobs from '../../hooks/useFavoriteJobs';
import AsyncStorage from '@react-native-community/async-storage';

const FavoritesScreen: React.FC<NavigationProps> = ({navigation}) => {
  const isFocused = useIsFocused();
  const {favorites, loading, fetchAndSetFavorites} = useFavoriteJobs();

  React.useEffect(() => {
    fetchAndSetFavorites();
  }, [isFocused]);

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={theme.main.secondary} />
        </View>
      );
    }

    return (
      <>
        <View style={styles.list}>
          <FlatList
            data={favorites}
            ListHeaderComponent={() => (
              <Text style={styles.text}>
                {' '}
                My Favorites ({favorites ? favorites.length : 0}){' '}
              </Text>
            )}
            renderItem={({item}) => (
              <JobListItem
                navigation={navigation}
                position={item}
                refreshMethod={fetchAndSetFavorites}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* DEBUG ONLY */}
        {__DEV__ && (
          <FloatingButton
            icon="delete-sweep-outline"
            onPress={async () => {
              await AsyncStorage.clear();
            }}
            style={{
              backgroundColor: 'red',
              position: 'absolute',
              margin: 10,
              right: 0,
              bottom: 0,
            }}
          />
        )}
      </>
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default FavoritesScreen;
