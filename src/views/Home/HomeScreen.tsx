/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import styles from './styles';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {NavigationProps} from '../../types';
import {JobListItem} from '../../components/JobListItem';
import theme from '../../themes';
import {useJobs} from '../../contexts/JobsContext';
import {useIsFocused} from '@react-navigation/native';

const HomeScreen: React.FC<NavigationProps> = ({navigation}) => {
  const {jobs, loading, fetchJobs} = useJobs();
  const isFocused = useIsFocused();

  React.useEffect(() => {
    fetchJobs();
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
      <View style={styles.list}>
        <FlatList
          data={jobs}
          ListHeaderComponent={() => (
            <Text style={styles.text}> Last Jobs </Text>
          )}
          renderItem={({item}) => (
            <JobListItem navigation={navigation} position={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

export default HomeScreen;
