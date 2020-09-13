import 'react-native-gesture-handler';
import * as React from 'react';
// import Navigator from './src/navigator/Navigator';
import RootStackNavigator from './src/navigator/Root';

const App = () => {
  return (
    <>
      {/* <Navigator /> */}
      <RootStackNavigator />
    </>
  );
};

export default App;
