import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconButtonProps} from './types';
import styles from './styles';
import theme from '../../themes';

const IconButton: React.FC<IconButtonProps> = ({
  size = 50,
  iconName = 'heart',
  iconSize = 25,
  iconColor = theme.main.darkLighter,
}) => {
  return (
    <TouchableOpacity
      delayPressIn={0}
      style={{
        ...styles.button,
        width: size,
        height: size,
      }}>
      <Icon
        name={iconName}
        size={iconSize}
        color={iconColor || theme.main.darkLighter}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
