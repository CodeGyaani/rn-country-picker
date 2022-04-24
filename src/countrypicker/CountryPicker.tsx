import React, {useEffect, useState} from 'react';
import {
  ModalProps,
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {CountryModal} from './CountryModal';
import {Header} from './Header';

interface CountryPickerProps {
  modalProps?: ModalProps;
  closeButtonStyle?: StyleProp<ViewStyle>;
  onClose?(): void;
  onOpen?(): void;
  visible?: boolean;
}
interface State {
  visible: boolean;
}

export const CountryPicker = (props: CountryPickerProps) => {
  const {
    modalProps,
    onClose: handleOnClose,
    onOpen: handleOnOpen,
    closeButtonStyle,
  } = props;
  const [state, setState] = useState<State>({
    visible: props.visible || false,
  });
  const {visible} = state;

  useEffect(() => {
    if (state.visible !== props.visible) {
      setState({...state, visible: props.visible || false});
    }
  }, [props.visible]);

  const onClose = () => {
    setState({visible: false});
    if (handleOnClose) handleOnClose();
  };

  const onOpen = () => {
    setState({visible: true});
    if (handleOnOpen) handleOnOpen();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <CountryModal
        {...{modalProps, visible}}
        onRequestClose={onClose}
        onDismiss={onClose}
        onShow={onOpen}>
        <Header {...{onClose, closeButtonStyle}} />
      </CountryModal>
    </>
  );
};
