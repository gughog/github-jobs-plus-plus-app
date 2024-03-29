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
  activeColor = theme.main.darkLighter,
  onPress,
  isActive,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      delayPressIn={0}
      style={{
        ...styles.button,
        width: size,
        height: size,
      }}>
      <Icon
        name={iconName}
        size={iconSize}
        color={isActive ? activeColor : theme.main.darkLighter}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
