import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.main.dark,
    paddingHorizontal: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    color: theme.main.textMain,
    paddingVertical: 10,
  },
  list: {
    paddingVertical: 10,
  },
});

export default styles;
