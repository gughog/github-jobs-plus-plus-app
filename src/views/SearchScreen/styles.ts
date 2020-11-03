import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.main.dark,
    paddingHorizontal: 10,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    color: theme.main.textMain,
    paddingVertical: 10,
  },
  fields: {
    paddingHorizontal: 10,
  },
  searchInput: {
    height: 40,
    borderColor: theme.main.textMain,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: theme.main.textMain,
  },
  pickerInput: {
    height: 40,
    color: theme.main.dark,
    backgroundColor: theme.main.textMain,
    borderRadius: 5,
  },
  switchContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingVertical: 10,
  },
  switch: {
    color: theme.main.primary,
  },
  switchLabel: {
    color: theme.main.textMain,
    paddingBottom: 5,
  },
  applyButton: {
    justifyContent: 'center',
    backgroundColor: theme.main.actions.info,
    height: 40,
    borderRadius: 7.5,
  },
  applyButtonDisabled: {
    backgroundColor: theme.main.textMain,
  },
  applyButtonText: {
    color: theme.main.textMain,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  applyButtonTextDisabled: {
    color: theme.main.secondary,
  },
  list: {
    paddingVertical: 10,
  },
});

export default styles;
