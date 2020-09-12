import React from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
  // StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cornflowerblue',
  },
  text: {
    fontSize: 30,
    color: 'darkblue',
  },
});

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Hello GithubJobs++ !</Text>
      </View>
    </>
  );
};

export default App;
