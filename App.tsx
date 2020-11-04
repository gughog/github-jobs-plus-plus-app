// Reacttotron init
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import 'react-native-gesture-handler';
import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';
import RootStackNavigator from './src/navigator/Root';
import theme from './src/themes';
import {JobsProvider} from './src/contexts/JobsContext';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {/* <Navigator /> */}
      <StatusBar backgroundColor={theme.main.primary} />
      <JobsProvider>
        <RootStackNavigator />
      </JobsProvider>
    </>
  );
};

export default App;
