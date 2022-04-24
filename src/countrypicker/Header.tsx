import React from 'react';
import {View, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import {CloseButton} from './CloseButton';

interface HeaderProps {
  withCloseButton?: boolean;
  closeButtonStyle: StyleProp<ViewStyle>;
  onClose(): void;
}

export const Header = (props: HeaderProps) => {
  const {onClose, withCloseButton, closeButtonStyle} = props;
  return (
    <View style={style.container}>
      {withCloseButton && (
        <CloseButton onPress={onClose} style={closeButtonStyle} />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

Header.defaultProps = {
  withCloseButton: true,
};
