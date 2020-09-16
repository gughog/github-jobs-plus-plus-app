export interface IconButtonProps {
  type?: 'rounded' | 'round' | 'default';
  size?: number;
  onPress: () => void;
  iconSize?: number;
  iconName?: string;
  iconColor?: string;
}
