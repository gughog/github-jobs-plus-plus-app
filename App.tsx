import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import RootStackNavigator from './src/navigator/Root';
import theme from './src/themes';

const App = () => {
  return (
    <>
      {/* <Navigator /> */}
      <StatusBar backgroundColor={theme.main.primary} />
      <RootStackNavigator />
    </>
  );
};

export default App;
