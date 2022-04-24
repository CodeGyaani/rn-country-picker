import * as React from 'react';
import {Modal, ModalProps, SafeAreaView, StyleSheet} from 'react-native';

interface CountryModalProps {
  children: React.ReactNode;
}

export const CountryModal = ({
  children,
  ...props
}: ModalProps & CountryModalProps) => {
  return (
    <Modal {...props}>
      {/* TODO:Add backgroundStyle based on theme */}
      <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

CountryModal.defaultProps = {
  animationType: 'slide',
};
