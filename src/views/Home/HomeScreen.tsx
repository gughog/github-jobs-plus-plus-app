import * as React from 'react';
import styles from './styles';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {NavigationProps} from '../../types';
import {JobListItem} from '../../components/JobListItem';
import theme from '../../themes';
import {useJobs} from '../../contexts/JobsContext';

const HomeScreen: React.FC<NavigationProps> = ({navigation}) => {
  const {jobs, loading} = useJobs();

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
