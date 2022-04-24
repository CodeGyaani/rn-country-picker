import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
} from 'react-native';

interface CloseButtonProps {
  onPress(): void;
  style?: StyleProp<ViewStyle>;
}

export const CloseButton = (props: CloseButtonProps) => {
  const {onPress} = props;
  return (
    <View>
      <TouchableOpacity {...{onPress}}>
        <Text>click me</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({});
