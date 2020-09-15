import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.main.dark,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  chip: {
    fontSize: 15,
    backgroundColor: theme.main.textMain,
    color: theme.main.dark,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    color: theme.main.textMain,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 15,
    color: theme.main.textMain,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    color: theme.main.secondary,
  },
  description: {
    backgroundColor: theme.main.dark,
  },
});

export default styles;
