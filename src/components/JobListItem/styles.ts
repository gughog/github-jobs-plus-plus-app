import {StyleSheet} from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.main.darker,
    margin: 7.5,
    borderRadius: 5,
    padding: 7.5,
  },
  logoContainer: {
    padding: 0,
    margin: 7.5,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.main.dark,
    backgroundColor: theme.main.textMain,
  },
  contentBody: {
    flex: 4,
    marginLeft: 7.5,
  },
  contentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.main.textMain,
    paddingBottom: 2.5,
  },
  contentCompany: {
    fontSize: 12,
    color: theme.main.textMain,
    fontWeight: 'bold',
    paddingBottom: 1.25,
  },
  contentCreatedAt: {
    fontSize: 12,
    color: theme.main.textMain,
    fontStyle: 'italic',
  },
  contentTypeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  contentType: {
    fontSize: 10,
    backgroundColor: theme.main.dark,
    color: theme.main.textMain,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginLeft: 5,
    borderRadius: 5,
  },
  actionContainer: {
    padding: 7.5,
  },
  action: {
    fontSize: 35,
  },
});

export default styles;
