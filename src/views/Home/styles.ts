import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.main.dark,
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    color: 'cornflowerblue',
  },
  list: {
    paddingVertical: 10,
  },
});

export default styles;
