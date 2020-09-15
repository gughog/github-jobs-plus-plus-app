import * as React from 'react';
import styles from './styles';
import {View, Text, Alert, FlatList} from 'react-native';
import {Job, NavigationProps} from '../../types';
import {JobListItem} from '../../components/JobListItem';
import Api from '../../services/Api.service';

const HomeScreen: React.FC<NavigationProps> = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [jobs, setJobs] = React.useState<Job[]>([]);

  React.useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const {data} = await Api.get('/positions.json');
        data && setJobs(data);
      } catch (error) {
        Alert.alert('Some error has happen!', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Text style={styles.text}> Loading...</Text>;
    }

    return (
      <View style={styles.list}>
        <Text style={styles.text}>Last Jobs Added</Text>
        <FlatList
          data={jobs}
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
