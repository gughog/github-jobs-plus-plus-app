export interface IconButtonProps {
  type?: 'rounded' | 'round' | 'default';
  size?: number;
  onPress: (() => Promise<void>) | (() => void);
  iconSize?: number;
  iconName?: string;
  activeColor?: string;
  isActive?: boolean;
}
