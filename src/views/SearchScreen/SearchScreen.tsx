import * as React from 'react';
import styles from './styles';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {Switch} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
// import {JobListItem} from '../../components/JobListItem';
import {InputLabel} from '../../components/InputLabel';
// import theme from '../../themes';
import {Job, NavigationProps} from '../../types';
import {countries as COUNTRIES} from '../../constants/countries';
import theme from '../../themes';
import {JobListItem} from '../../components/JobListItem';
import {AlertWrapper} from '../../helpers/actions.helpers';
import {reconcileArraysAndReturnWithFlags} from '../../helpers/formatters.helpers';
import Api from '../../services/Api.service';
// By Description(TExtInput), Location(Dropdown) and "Full Time"(Checkbox)

export interface FetchJobsParams {
  page?: number;
  search?: string;
  description?: string;
  location?: string;
  lat?: string;
  long?: string;
  full_time?: boolean;
}

const SearchScreen: React.FC<NavigationProps> = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [filteredJobs, setFilteredJobs] = React.useState<Job[]>();

  const [search, setSearch] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [isFullTime, setIsFullTime] = React.useState(true);

  const fetchFilteredJobs = async () => {
    try {
      setLoading(true);
      const {data} = await Api.get(
        `/positions.json?description=${search}&location=${location}&full_time=${isFullTime}`,
      );
      const reconciliatedData = await reconcileArraysAndReturnWithFlags(data);
      data && setFilteredJobs(reconciliatedData);
    } catch (error) {
      AlertWrapper({
        title: 'Some error has occured!',
        description: `The following error has occured: ${error.message}`,
        okayButton: {
          text: 'Ok',
          action: () => {},
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const renderListItems = () => {
    if (filteredJobs && filteredJobs.length) {
      return (
        <View style={styles.list}>
          <FlatList
            data={filteredJobs}
            renderItem={({item}) => (
              <JobListItem navigation={navigation} position={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Searching Jobs </Text>
      <View style={styles.fields}>
        <InputLabel label="Search by term">
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => setSearch(text)}
            value={search}
          />
        </InputLabel>

        <InputLabel label="Country">
          <View style={styles.pickerInput}>
            <Picker
              selectedValue={location}
              onValueChange={(itemValue) => setLocation(itemValue as string)}>
              {COUNTRIES.map((country, index) => (
                <Picker.Item key={index} label={country} value={country} />
              ))}
            </Picker>
          </View>
        </InputLabel>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}> Only Full-Time Jobs </Text>
          <Switch
            color={theme.main.secondary}
            value={isFullTime}
            onValueChange={() => setIsFullTime(!isFullTime)}
          />
        </View>

        <TouchableOpacity
          disabled={loading}
          style={[styles.applyButton, loading && styles.applyButtonDisabled]}
          onPress={() => fetchFilteredJobs()}>
          <Text
            style={[
              styles.applyButtonText,
              loading && styles.applyButtonTextDisabled,
            ]}>
            {loading ? 'Searching...' : 'Search for Jobs'}
          </Text>
        </TouchableOpacity>
      </View>

      {renderListItems()}
    </View>
  );
};

export default SearchScreen;
