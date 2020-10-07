import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    host: '192.168.0.116',
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!
  .onCustomCommand({
    title: 'Clear Async Storage',
    description: 'Wipes out everything from Async Store.',
    command: 'clearAsyncStorage',
    handler: async () =>
      await AsyncStorage.removeItem('@GITHUB_PLUS_PLUS_STORE'),
  });
// .onCustomCommand({
//   title: 'Log Async Storage',
//   description: 'Logs out everything from Async Store.',
//   command: 'logAsyncStorage',
//   handler: async () => {
//     const result = await AsyncStorage.getItem('@GITHUB_PLUS_PLUS_STORE');
//     Reactotron.log(result);
//   },
// });
