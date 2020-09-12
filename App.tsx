import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
    backgroundColor: '#ffe',
  },
  text: {
    fontSize: 30,
    color: 'cornflowerblue',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.text}>Hello GithubJobs++ !</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
