import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.main.dark,
  },
  text: {
    fontSize: 30,
    color: 'cornflowerblue',
  },
});

export default styles;
